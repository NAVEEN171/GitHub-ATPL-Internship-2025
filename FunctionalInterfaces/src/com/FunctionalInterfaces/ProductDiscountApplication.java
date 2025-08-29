package com.FunctionalInterfaces;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class ProductDiscountApplication {
                String productName;
                int price;
                
                ProductDiscountApplication(String productName,int price){
                	this.productName=productName;
                	this.price=price;  	
                }
                ProductDiscountApplication(String productName){
                	this.productName=productName;
                		
                }
               
	public static void main(String[] args) {
                Function<ProductDiscountApplication,Double> applyDiscount=(product)->{
                	Optional<Integer> productPrice=Optional.ofNullable(product.price); 
                	if(productPrice.isPresent() && productPrice.get()>0 ) {
                		return Double.valueOf(productPrice.get()-0.1 * productPrice.get());
                	}
                	return 0.0;
                };
                
                List<ProductDiscountApplication> products=new ArrayList<>();
                products.add(new ProductDiscountApplication("Adidas",5000));
                products.add(new ProductDiscountApplication("Iphone 12",50000));
                products.add(new ProductDiscountApplication("Lenovo Laptop "));
                products.add(new ProductDiscountApplication("Card Holder ",0));
                products.forEach((product)->{
                	System.out.println(product.productName+" Discount: "+applyDiscount.apply(product));
                });

                

	}

}
