package com.example.some_coffee.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "role")
@CrossOrigin("*")
public class RoleController {

    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @PostMapping
    public Role saveRole(@RequestBody Role role){
        return roleService.saveRole(role);
    }
}

