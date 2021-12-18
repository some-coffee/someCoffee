package com.example.some_coffee.CoffeeTable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<CoffeeTable, Long> {
}
