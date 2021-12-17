package com.example.some_coffee.Reservation;
import com.example.some_coffee.CoffeeTable.CoffeeTable;
import com.example.some_coffee.User.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservation_id;
    private String reservation_date;
    private String reservation_time;


    @ManyToOne(fetch = FetchType.EAGER)
    CoffeeTable coffeeTable;
    @ManyToOne(fetch = FetchType.EAGER)
    User user;


    public Reservation(Long reservation_id, String reservation_date, String reservation_time) {
        this.reservation_id = reservation_id;
        this.reservation_date = reservation_date;
        this.reservation_time = reservation_time;

    }

    public Reservation(){

    }

    public Long getReservation_id() {
        return reservation_id;
    }

    public void setReservation_id(Long reservation_id) {
        this.reservation_id = reservation_id;
    }

    public String getReservation_date() {
        return reservation_date;
    }

    public void setReservation_date(String reservation_date) {

        this.reservation_date = reservation_date;
    }

    public String getReservation_time() {
        return reservation_time;
    }

    public void setReservation_time(String reservation_time) {
        this.reservation_time = reservation_time;
    }

    public void setCoffeeTable(CoffeeTable coffeeTable) {
        this.coffeeTable = coffeeTable;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public CoffeeTable getCoffeeTable() {
        return coffeeTable;
    }

    public User getUser() {
        return user;
    }
}
