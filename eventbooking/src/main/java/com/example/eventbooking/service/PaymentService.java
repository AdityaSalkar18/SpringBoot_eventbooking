//package com.example.eventbooking.service;
//
//import com.razorpay.Order;
//import com.razorpay.RazorpayClient;
//import org.json.JSONObject;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//@Service
//public class PaymentService {
//
//    @Value("${razorpay.key}")
//    private String razorKey;
//
//    @Value("${razorpay.secret}")
//    private String razorSecret;
//
//    public Order createOrder(int amount) throws Exception {
//
//        RazorpayClient client = new RazorpayClient(razorKey, razorSecret);
//
//        JSONObject orderRequest = new JSONObject();
//
//        orderRequest.put("amount", amount * 100);
//        orderRequest.put("currency", "INR");
//
//
//        orderRequest.put("receipt", "txn_" + System.currentTimeMillis());
//
//        return client.orders.create(orderRequest);
//    }
//
//
//    public String getSecret() {
//        return razorSecret;
//    }
//}
//



package com.example.eventbooking.service;

import com.example.eventbooking.entity.Booking;
import com.example.eventbooking.repository.BookingRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

@Service
public class PaymentService {

    @Value("${razorpay.key}")
    private String razorKey;

    @Value("${razorpay.secret}")
    private String razorSecret;

    @Autowired
    private BookingRepository bookingRepository;


    public Order createOrder(int amount) throws Exception {
        RazorpayClient client = new RazorpayClient(razorKey, razorSecret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "txn_" + System.currentTimeMillis());

        return client.orders.create(orderRequest);
    }


    public boolean verifyPayment(
            String orderId,
            String paymentId,
            String razorpaySignature,
            Long bookingId
    ) {
        try {
            String payload = orderId + "|" + paymentId;

            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");

            SecretKeySpec secret_key = new SecretKeySpec(
                    razorSecret.getBytes(),
                    "HmacSHA256"
            );

            sha256_HMAC.init(secret_key);

            byte[] hash = sha256_HMAC.doFinal(payload.getBytes());


            StringBuilder generatedSignature = new StringBuilder();

            for (byte b : hash) {
                generatedSignature.append(String.format("%02x", b));
            }


            if (!generatedSignature.toString().equals(razorpaySignature)) {
                return false;
            }


            Booking booking = bookingRepository.findById(bookingId)
                    .orElseThrow(() -> new RuntimeException("Booking not found"));

            booking.setPaymentStatus("CONFIRMED");

            bookingRepository.save(booking);

            return true;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Payment verification failed");
        }
    }
}