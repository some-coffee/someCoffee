package com.example.some_coffee.CoffeeTable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TableService {
    private TableRepository tableRepository;

    @Autowired
    public TableService(TableRepository tableRepository) {

        this.tableRepository = tableRepository;
    }

    public List<CoffeeTable>getTables(){

        return tableRepository.findAll();
    }

    public CoffeeTable getTable(String id){
        Long table_id=Long.parseLong(id);
        return tableRepository.findById(table_id).orElse(null);
    }

    public CoffeeTable addTable(CoffeeTable coffeeTable){

        return tableRepository.save(coffeeTable);
    }
}
