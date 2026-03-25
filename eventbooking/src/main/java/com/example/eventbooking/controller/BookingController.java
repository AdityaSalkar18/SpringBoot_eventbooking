package com.example.eventbooking.controller;

import com.example.eventbooking.entity.Booking;
import com.example.eventbooking.service.BookingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {
    private final BookingService service;

    public BookingController(BookingService service){
        this.service = service;
    }
//
//    @PostMapping
//    public Booking createBooking(@RequestBody Booking booking){
//        booking.setPaymentStatus("PENDING");
//        return service.saveBooking(booking);
//    }

}
