package com.example.eventbooking.service;


import com.example.eventbooking.entity.Booking;
import com.example.eventbooking.repository.BookingRepository;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    private final BookingRepository repo;

    public BookingService(BookingRepository repo){
        this.repo = repo;
    }

    public Booking saveBooking(Booking booking){
        return repo.save(booking);
    }
}
