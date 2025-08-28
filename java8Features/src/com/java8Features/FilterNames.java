package com.java8Features;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class FilterNames {

	public static void main(String[] args) {
		List<String> arr=new ArrayList<String>(Arrays.asList("Alice", "Bob", "Andrew", "Tom", "Angela", "Steve"));
		List<String> result=new ArrayList<>();
		IsStartingwithA obj=(a,str)->{
		return	str.startsWith(a);	
		};
		arr.forEach((num)->{
			if(obj.isStartingWithLetter("A",num))
			{
				result.add(num);
			}
			
		});
		
		for(int i=0;i<result.size();i++) {
			System.out.println(result.get(i));
		}

	}

}
