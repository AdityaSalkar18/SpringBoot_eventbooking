package com.example.eventbooking.dto;

public class UserResponse {
    private String name;
    private String email;
    private String mobile;

    public UserResponse(String name, String email, String mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMobile() {
        return mobile;
    }
}
