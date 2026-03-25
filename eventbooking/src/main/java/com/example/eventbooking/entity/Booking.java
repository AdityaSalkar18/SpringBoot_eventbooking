package com.example.eventbooking.entity;

import jakarta.persistence.*;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //user details
    private String userName;
    private String usermobile;
    private String useremail;


    //event details
    private String  eventName;
    private String   eventDesc;
    private String   eventDate;


    private int numTickets;
    private double amount;


    private String paymentStatus;

}
