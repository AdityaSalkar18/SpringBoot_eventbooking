package com.example.eventbooking.service;



import com.example.eventbooking.entity.Event;
import com.example.eventbooking.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo){
        this.repo = repo;
    }

    //post

    public Event addEvent(Event event){
        return repo.save(event);
    }

    //get

    public List<Event> getAllEvents(){
        return repo.findAll();
    }

    //get by id

    public Event getEventById(Long id){
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));

    }

    //update

    public Event updateEvent(Long id, Event updatedEvent){
        Event existingEvent = getEventById(id);

        existingEvent.setName(updatedEvent.getName());
        existingEvent.setDescription(updatedEvent.getDescription());
        existingEvent.setDate(updatedEvent.getDate());
        existingEvent.setAvailableTickets(updatedEvent.getAvailableTickets());
        existingEvent.setPrice(updatedEvent.getPrice());

        return repo.save(existingEvent);
    }

    //delete

    public void deleteEvent(Long id){
        repo.deleteById(id);
    }



}
