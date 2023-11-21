import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure"
import useCart from "../hooks/useCart"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = () => {

    const elements = useElements();
    const stripe = useStripe();
    const [err, setErr] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const [clientSecret, setClientSecret] = useState('')
    const Price = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = Price.toFixed(2);
    const { user } = useAuth();
    const [transactionId, setTransactionId] = useState('')


    const handleForm = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("error message", error);
            setErr(error.message)
        } else {
            console.log("payment method", paymentMethod);
            setErr('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "annonymous",
                    email: user?.email || "annonymous"
                }
            }
        })
        if (confirmError) {
            console.log("cofirm error", confirmError);
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("transaction id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    id: paymentIntent.id,
                    date: new Date(), //use moment js
                    cartId: cart.map(item => item._id),
                    menucCartId: cart.map(item => item.menuID),
                    status: 'pending'
                }
                axiosSecure.post('/payment', payment)
                    .then(res => {
                        console.log(res.data);

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Thank you for the payment",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    })
            }
        }

    }

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])




    return (
        <div>
            <form onSubmit={handleForm}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-neutral mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{err}</p>
                {transactionId && <p className="text-green-500 mt-5">transaction completed, and your transaction ID id ' {transactionId} '</p>}
            </form>
        </div>
    );
};

export default CheckOut;