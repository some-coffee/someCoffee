package com.example.some_coffee.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    public List<Product> getProducts(){

        return productRepository.findAll();
    }

    public Product getProduct(String id){
        Long product_id=Long.parseLong(id);
        return productRepository.findById(product_id).orElse(null);
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

}
