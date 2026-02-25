package com.example.eventbooking.controller;

import com.example.eventbooking.entity.Event;
import com.example.eventbooking.service.EventService;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173")
public class EventController {

    private final EventService service;

    public EventController(EventService service){
        this.service = service;
    }

    //add event
    @PostMapping
    public Event addEvent(@RequestBody Event event){
        return service.addEvent(event);
    }

    // get all event
    @GetMapping
    public List<Event> getAllEvents() {
        return service.getAllEvents();
    }

    //get event by id
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id){
        return service.getEventById(id);
    }

    //update event
    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @ RequestBody Event event){
        return service.updateEvent(id, event);
    }

    //delete event
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id){
        service.deleteEvent(id);
        return "Event deleted successfully";
    }

}
