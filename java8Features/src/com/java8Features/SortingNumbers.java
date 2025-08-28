package com.java8Features;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class SortingNumbers {
	public static void main(String args[]) {
		List<Integer> nums = new ArrayList<>(Arrays.asList(8, 8, 6, 4, 1, 9, 34, 56, 12, 5));

		Collections.sort(nums, (a, b) -> b - a);
		for (int i = 0; i < nums.size(); i++) {
			System.out.print(nums.get(i) + " ");
		}

	}
}
