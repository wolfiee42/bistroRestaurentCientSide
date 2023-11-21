import SectionTitle from "../../Components/Section Title/SectionTitle"
import { loadStripe } from "@stripe/stripe-js"
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckOut from "../CheckOut";



const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway)
const Payment = () => {
    return (
        <div>
            <SectionTitle title="Payment" subTitle="Please pay before eat" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;