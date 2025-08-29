package com.FunctionalInterfaces;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.BiPredicate;
import java.util.stream.Collectors;

class Employee{
	String name;
	String dept;
	long salary;
	String email;
	Employee(String name,String dept,long salary,String email){
	       this.name=name;
	       this.dept=dept;
	       this.salary=salary;
	       this.email=email;
	}
	Employee(String name,String dept,long salary){
	       this.name=name;
	       this.dept=dept;
	       this.salary=salary;
	   
	}
}

public class FilterEmployee {

	public static void main(String[] args) {
		 List<Employee> employees=new ArrayList<>();
		 employees.add(new Employee("Naveen","Tester",35000,"naveen@gmail.com"));
		 employees.add(new Employee("Dileep","Backend Developer",40000));
		 employees.add(new Employee("Mahesh","weekend Developer",50000,"mahesh@gmail.com"));
	     BiPredicate<Employee,Integer> checkMeetsCondWithSalary=(emp,minsalary)->emp.salary>minsalary;
	     
	    List<Employee> result= employees.stream().filter(Emp->checkMeetsCondWithSalary.test(Emp,36000)).collect(Collectors.toList());
	     
	    
	    result.forEach((res)->{
	    	Optional<String> email=Optional.ofNullable(res.email);
	    	
	    	System.out.println(res.name+" "+email.orElse("Email not available")+" "+res.salary+" "+res.dept);
	    });


	}

}
