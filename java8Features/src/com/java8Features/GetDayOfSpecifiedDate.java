package com.java8Features;

import java.time.LocalDate;
import java.util.Scanner;

public class GetDayOfSpecifiedDate {

    public static void main(String[] args) {
        int year;
        int month;
        int day;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter day : ");
        day = sc.nextInt();
        System.out.print("Enter month : ");

        month = sc.nextInt();
        System.out.print("Enter year : ");

        year = sc.nextInt();

        LocalDate currentDate = LocalDate.of(year, month, day);
        System.out.println(currentDate.getDayOfWeek());

    }

}
