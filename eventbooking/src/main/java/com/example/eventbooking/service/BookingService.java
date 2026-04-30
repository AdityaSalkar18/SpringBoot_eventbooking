//package com.example.eventbooking.service;
//
//
//import com.example.eventbooking.entity.Booking;
//import com.example.eventbooking.entity.Event;
//import com.example.eventbooking.repository.BookingRepository;
//import com.example.eventbooking.repository.EventRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class BookingService {
//
//    @Autowired
//    private BookingRepository  bookingRepository;
//
//    @Autowired
//    private EventRepository eventRepo;
//
//    public Booking bookEvent(Booking booking){
//        Event event = eventRepo.findById(booking.getId())
//                .orElseThrow(() -> new RuntimeException("Event not found"));
//
//        if(event.getAvailableTickets() < booking.getNumTickets()){
//            throw new RuntimeException("Not enough tickets");
//        }
//
//        event.setAvailableTickets(
//                event.getAvailableTickets() - booking.getNumTickets()
//        );
//        eventRepo.save(event);
//
//        booking.setPaymentStatus("PENDING");
//
//        return bookingRepository.save(booking);
//    }
//}
//
//



package com.example.eventbooking.service;

import com.example.eventbooking.entity.Booking;
import com.example.eventbooking.entity.Event;
import com.example.eventbooking.repository.BookingRepository;
import com.example.eventbooking.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EventRepository eventRepo;

    public Booking bookEvent(Booking booking){


        Event event = eventRepo.findById(booking.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if(event.getAvailableTickets() < booking.getNumTickets()){
            throw new RuntimeException("Not enough tickets");
        }

        event.setAvailableTickets(
                event.getAvailableTickets() - booking.getNumTickets()
        );

        eventRepo.save(event);

        // optional improvement (important for flow)
        booking.setPaymentStatus("PENDING");

        return bookingRepository.save(booking);
    }
}