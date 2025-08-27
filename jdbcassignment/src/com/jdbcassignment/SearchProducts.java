package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SearchProducts {
     public static void main(String args[])  {
    	 final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
 		final String username="intern2025";
 		final String password="intern2025";
 		String query="select * from products_Naveen where product_name like ?";
 		try {
 		 Class.forName("com.mysql.cj.jdbc.Driver");
         Connection conn=DriverManager.getConnection(url,username,password);
         PreparedStatement ptmp=conn.prepareStatement(query);
         ptmp.setString(1,"%phone%");
         
         ResultSet rs=ptmp.executeQuery();
         
         while(rs.next()) {
        	 System.out.println(rs.getString("product_name"));
        	 System.out.println(rs.getInt("price"));
         }
         conn.close();
         ptmp.close();
         rs.close();
 		}
 		catch(ClassNotFoundException e) {
 			e.printStackTrace();
 		}
 	     catch(SQLException e) {
 			e.printStackTrace();
 		}
 		catch(Exception e) {
 			e.printStackTrace();
 		}
         
     }
}
