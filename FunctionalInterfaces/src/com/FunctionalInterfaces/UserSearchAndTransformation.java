package com.FunctionalInterfaces;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.function.Function;

public class UserSearchAndTransformation {
                String username;
                String email;
                UserSearchAndTransformation(String username,String email){
                	 this.username=username;
                	 this.email=email;
                }
	public static void main(String[] args) {
                List<UserSearchAndTransformation> users=new ArrayList<>();
                
                Function<String,String> convertToUppercase=String::toUpperCase; 
                
                users.add(new UserSearchAndTransformation("Naveen","naveenkumar12@gmail.com"));
                users.add(new UserSearchAndTransformation("Dileep","dileep@gmail.com"));
                users.add(new UserSearchAndTransformation("Mahesh","mahesh@gmail.com"));
                System.out.print("Enter name to be searched : ");
                 Scanner sc=new Scanner(System.in);
                 String searchName;
                searchName=sc.nextLine();
                 
                Optional<UserSearchAndTransformation> foundUser= users.stream().filter((user)->user.username.equalsIgnoreCase(searchName.trim())).findFirst();
                if(foundUser.isPresent()) {
                	Optional<String> email=Optional.ofNullable(foundUser.get().email);
                    if(email.isPresent()) {
                    	System.out.println("user is present :"+convertToUppercase.apply(email.get()));
                    }
                    else {
                    	System.out.println("email is not registered for the specified user");
                    }
                }
                else {
                	System.out.println("user is not registered");
                }
                sc.close();
	}

}
