package com.example.some_coffee.CoffeeTable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="table")
public class TableController {

    private final  TableService tableService;

    @Autowired
    public TableController(TableService tableService) {

        this.tableService = tableService;
    }

    @GetMapping
    public List<CoffeeTable>getTables(){

        return tableService.getTables();
    }

    @GetMapping("/{id}")
    public CoffeeTable getTable(@PathVariable String id){

        return tableService.getTable(id);
    }

    @PostMapping
    public CoffeeTable addTable(@RequestBody CoffeeTable coffeeTable){

        return tableService.addTable(coffeeTable);
    }
}
