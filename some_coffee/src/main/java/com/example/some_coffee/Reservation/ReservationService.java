package com.example.some_coffee.Reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    private ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<Reservation>getReservations(){
        return reservationRepository.findAll();
    }

    public Reservation getReservation(String id){
        Long reservation_id=Long.parseLong(id);
        return reservationRepository.findById(reservation_id).orElse(null);
    }

    public Reservation addReservation(Reservation reservation){

        return reservationRepository.save(reservation);
    }
}
