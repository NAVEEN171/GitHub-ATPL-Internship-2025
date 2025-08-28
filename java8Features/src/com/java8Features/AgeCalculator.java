package com.java8Features;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Scanner;

public class AgeCalculator {

	public static void main(String[] args) {
             Scanner sc=new Scanner(System.in);
             
             int day;
             int month;
             int year;
             System.out.print("Enter the day : ");
             day=sc.nextInt();
             System.out.print("Enter the month : ");
             month=sc.nextInt();
             System.out.print("Enter the year : ");
             year=sc.nextInt();
//             ZoneId kolkataZone = ZoneId.of("Asia/Kolkata");
//             ZoneId americaZone=ZoneId.of("America/Sao_Paulo");
//             ZonedDateTime kolkataDateTime = ZonedDateTime.now(kolkataZone);
//             System.out.println(kolkataDateTime);
//             ZonedDateTime americaDateTime=kolkataDateTime.withZoneSameInstant(americaZone);
//             System.out.println(americaDateTime);
             LocalDate dob=LocalDate.of(year, month, day);
             LocalDate currentDate=LocalDate.now();
             Period gap=Period.between(dob, currentDate);
             System.out.println(gap.getYears()+" years "+gap.getMonths()+" months "+gap.getDays()+" Days ");
              

             
	}

}
