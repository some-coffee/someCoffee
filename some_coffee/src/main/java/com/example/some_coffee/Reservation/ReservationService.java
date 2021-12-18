package com.example.some_coffee.Reservation;

import com.example.some_coffee.CoffeeTable.TableRepository;
import com.example.some_coffee.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.some_coffee.CoffeeTable.CoffeeTable;
import com.example.some_coffee.User.User;

import java.util.List;

@Service
public class ReservationService {

    private ReservationRepository reservationRepository;
    private UserRepository userRepository;
    private TableRepository tableRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository, UserRepository userRepository, TableRepository tableRepository) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.tableRepository = tableRepository;

    }

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }

    public Reservation getReservation(String id) {
        Long reservation_id = Long.parseLong(id);
        return reservationRepository.findById(reservation_id).orElse(null);
    }

    public Reservation addReservation(Reservation reservation, Long user_id, Long table_id) {
        User user = (User) userRepository.findById(user_id).orElse(null);
        reservation.setUser(user);
        CoffeeTable coffeeTable = (CoffeeTable) tableRepository.findById(table_id).orElse(null);
        reservation.setCoffeeTable(coffeeTable);
        return reservationRepository.save(reservation);
    }


}
