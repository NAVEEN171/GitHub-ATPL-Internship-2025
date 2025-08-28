package com.java8Features;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReverseStrings {
   public static void main(String args[]) {
	   List<String> strList=new ArrayList<>(Arrays.asList("Banana", "Apple", "Mango", "Cherry"));
	   
	   Collections.sort(strList,(s1,s2)->s2.compareTo(s1));
	  strList.forEach((num)->System.out.println(num));
   }
}
