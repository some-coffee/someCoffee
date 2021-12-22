package com.example.some_coffee.Reservation;

import com.example.some_coffee.CoffeeTable.CoffeeTable;
import com.example.some_coffee.User.User;

import javax.persistence.*;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;
    private String reservationDate;
    private String reservationTime;


    @ManyToOne(fetch = FetchType.EAGER)
    CoffeeTable coffeeTable;
    @ManyToOne(fetch = FetchType.EAGER)
    User user;


    public Reservation(Long reservationId, String reservationDate, String reservationTime) {
        this.reservationId = reservationId;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;

    }

    public Reservation() {

    }

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    public String getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(String reservationDate) {

        this.reservationDate = reservationDate;
    }

    public String getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(String reservationTime) {
        this.reservationTime = reservationTime;
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
