import axios from "axios";


const PaymentPage = ({amount}) =>{
   const handlePayment = async () => {
  try {
    const { data: order } = await axios.post(
      "http://localhost:8080/api/payment/create-order",
      { amount }
    );

    // Check if Razorpay is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_RkMWXrUIAeyxm0",
      amount: order.amount,
      currency: "INR",
      name: "Event Booking",
      description: "Ticket Payment",
      order_id: order.id,
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
      },
      theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment Error:", err);
  }
};
    return(
        //  <button onClick={handlePayment}>Pay ₹{amount}</button>
        <button
  onClick={handlePayment}
  className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500
             text-white py-2 px-4 rounded-xl font-semibold
             hover:from-orange-600 hover:to-red-600
             active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
>
  {/* Pay ₹{amount} */}
  Pay 
</button>



    )
}

export default PaymentPage;