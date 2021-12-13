package com.example.some_coffee.CoffeeTable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CoffeeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long table_id;
    private int table_size;

    public CoffeeTable() {

    }

    public CoffeeTable(Long table_id, int table_size) {
        this.table_id = table_id;
        this.table_size = table_size;
    }

    public Long getTable_id() {
        return table_id;
    }

    public void setTable_id(Long table_id) {
        this.table_id = table_id;
    }

    public int getTable_size() {
        return table_size;
    }

    public void setTable_size(int table_size) {
        this.table_size = table_size;
    }
}
