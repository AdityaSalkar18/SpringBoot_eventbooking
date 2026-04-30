//package com.example.eventbooking.controller;
//
//import com.example.eventbooking.entity.Booking;
//import com.example.eventbooking.service.BookingService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/bookings")
//@CrossOrigin(origins = "http://localhost:5173")
//public class BookingController {
//
//   @Autowired
//    private BookingService bookingService;
//
//   @PostMapping
//    public ResponseEntity<Booking> bookEvent(@RequestBody Booking booking){
//
//       Booking savedBooking = bookingService.bookEvent(booking);
//
//       return ResponseEntity.ok(savedBooking);
//
//   }
//
//
//}
//
//


package com.example.eventbooking.controller;

import com.example.eventbooking.entity.Booking;
import com.example.eventbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<Booking> bookEvent(@RequestBody Booking booking){

        Booking savedBooking = bookingService.bookEvent(booking);

        return ResponseEntity.ok(savedBooking);
    }
}
