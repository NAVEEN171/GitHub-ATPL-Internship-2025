package com.java8Features;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SquareNumbers {

	public static void main(String[] args) {
		List<Integer> nums=new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7,8));
		
		nums.forEach((num)->{
			System.out.print(num*num+" ");
		});

	}

}
