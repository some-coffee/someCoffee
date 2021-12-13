package com.example.some_coffee.Reservation;

public class Form {
    private Reservation reservation;
    private Long user_id;
    private Long table_id;

    public Form() {
    }

    public Form(Reservation reservation, Long user_id, Long table_id) {
        this.reservation = reservation;
        this.user_id = user_id;
        this.table_id = table_id;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public Long getUser_id() {
        return user_id;
    }

    public Long getTable_id() {
        return table_id;
    }

}




