package com.java8Features;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class EvenNumbers {

	public static void main(String[] args) {
		List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
		nums.forEach((num) -> {
			if (num % 2 == 0) {
				System.out.println(num);
			}
		});
	}

}
