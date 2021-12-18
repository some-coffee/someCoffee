package com.example.some_coffee.Reservation;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "reservation")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<Reservation> getReservations() {
        return reservationService.getReservations();
    }

    @GetMapping("/{id}")
    public Reservation getReservation(@PathVariable String id) {

        return reservationService.getReservation(id);
    }

    @PostMapping
    public Reservation addReservation(@RequestBody Form form) {
        System.out.println(form.getUser_id());
        return reservationService.addReservation(form.getReservation(), form.getUser_id(), form.getTable_id());
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable String id) {
        reservationService.deleteReservation(id);
    }

    @PutMapping("/{id}")
    public void updateReservation(@PathVariable String id, @RequestBody Reservation data) {
        reservationService.updateReservation(id, data);
    }


}
