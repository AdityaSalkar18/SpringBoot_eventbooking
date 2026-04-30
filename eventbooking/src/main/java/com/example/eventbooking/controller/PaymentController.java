//package com.example.eventbooking.controller;
//
//import com.example.eventbooking.service.PaymentService;
//import com.razorpay.Order;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/payment")
//@CrossOrigin(origins = "http://localhost:5173")
//public class PaymentController {
//    @Autowired
//    private PaymentService paymentService;
//
//    @PostMapping("/create-order")
//    public ResponseEntity<String> createOrder(@RequestBody Map<String, Object> data) throws Exception {
//
//        int amount = Integer.parseInt(data.get("amount").toString());
//
//        Order order = paymentService.createOrder(amount);
//
//        return ResponseEntity.ok(order.toString());
//    }
//
//}
//
//
//
//
//


package com.example.eventbooking.controller;

import com.example.eventbooking.service.PaymentService;
import com.razorpay.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/createorder")
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Map<String, Object> data) throws Exception {

        int amount = Integer.parseInt(data.get("amount").toString());

        Order order = paymentService.createOrder(amount);


        Map<String, Object> response = new HashMap<>();
        response.put("id", order.get("id"));
        response.put("amount", order.get("amount"));
        response.put("currency", order.get("currency"));

        System.out.println("Sending response: " + response);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyPayment(@RequestBody Map<String, Object> data) {

        boolean result = paymentService.verifyPayment(
                data.get("razorpayOrderId").toString(),
                data.get("razorpayPaymentId").toString(),
                data.get("razorpaySignature").toString(),
                Long.parseLong(data.get("bookingId").toString())
        );

        if (result) {
            return ResponseEntity.ok("Payment Verified & Booking Confirmed");
        } else {
            return ResponseEntity.status(400).body("Payment Verification Failed");
        }
    }
}