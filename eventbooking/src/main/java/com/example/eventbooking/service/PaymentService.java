package com.example.eventbooking.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.key}")
    private String razorKey;

    @Value("${razorpay.secret}")
    private String razorSecret;

    public Order createOrder(int amount) throws Exception{
        RazorpayClient client = new RazorpayClient(razorKey, razorSecret);
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100);
        orderRequest.put("currency" , "INR");
        orderRequest.put("receipt", "txn_12345");

        return client.orders.create(orderRequest);



    }


}
