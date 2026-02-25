package com.example.eventbooking.controller;

import com.example.eventbooking.service.PaymentService;
import com.razorpay.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create-order")
    public ResponseEntity<String> createOrder(@RequestBody Map<String, Object> data) throws Exception {

        int amount = Integer.parseInt(data.get("amount").toString());

        Order order = paymentService.createOrder(amount);

        return ResponseEntity.ok(order.toString());
    }

}
