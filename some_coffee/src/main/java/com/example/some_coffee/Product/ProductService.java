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

    public List<Product> getProducts() {

        return productRepository.findAll();
    }

    public Product getProduct(String id) {
        Long product_id = Long.parseLong(id);
        return productRepository.findById(product_id).orElse(null);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(String id) {
        Long product_id = Long.parseLong(id);
        productRepository.deleteById(product_id);
    }

    public void updateProduct(String id, Product data) {
        Long product_id = Long.parseLong(id);
        Product product = productRepository.findById(product_id).orElse(null);


        if (product != null) {
            product.setName(data.getName());
            product.setPrice(data.getPrice());
            product.setCategory(data.getCategory());
            productRepository.save(product);
        }
    }

}
