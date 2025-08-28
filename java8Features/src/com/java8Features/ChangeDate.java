package com.java8Features;

import java.time.LocalDate;

public class ChangeDate {
 public static void main(String args[]) {
	 LocalDate currentDate=LocalDate.now();
     LocalDate addDays=currentDate.plusDays(10);
     LocalDate subMonths=currentDate.minusMonths(2);
     System.out.println(currentDate);
     System.out.println(addDays);
     System.out.println(subMonths);

 }
}
