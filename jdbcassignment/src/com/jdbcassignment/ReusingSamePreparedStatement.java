package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ReusingSamePreparedStatement {
 public static void main(String args[]) {
	 final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		String query="insert into products_Naveen(product_name,price) values (?,?)";
     List<String>  productNames=new ArrayList(Arrays.asList("iqooz7s phone","samsung s8 pro phone","nothing s23 phone","Iphone 15","Iphone 14"));
     List<Integer> productPrices=new ArrayList(Arrays.asList(25000,30000,80000,70000,50000));
     
     try {
         Class.forName("com.mysql.cj.jdbc.Driver");
         Connection conn=DriverManager.getConnection(url,username,password);
         PreparedStatement psmtp=conn.prepareStatement(query);
    		 
         for(int i=0;i<productNames.size();i++) {
           psmtp.setString(1, productNames.get(i));
           psmtp.setInt(2,productPrices.get(i));
           psmtp.addBatch();
         }
         
         int[] res=psmtp.executeBatch();
         System.out.println(res.length+" rows added");
         conn.close();
         psmtp.close();
         

     }
     catch(Exception e)
     {
       e.printStackTrace();
     }
 }
} 
