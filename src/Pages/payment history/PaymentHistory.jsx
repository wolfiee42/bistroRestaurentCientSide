import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: payments } = useQuery({
        queryKey: ["payments", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            total payments = {payments.length}
        </div>
    );
};

export default PaymentHistory;