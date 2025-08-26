package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class FetchProducts {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		String query="select * from products_Naveen where price>? and price<?";
		 try {
        	 Class.forName("com.mysql.cj.jdbc.Driver");
 	         Connection conn=DriverManager.getConnection(url,username,password);
 	         PreparedStatement psst=conn.prepareStatement(query);
 	         psst.setInt(1,50000 );
 	         psst.setInt(2, 70000);
 	         ResultSet rs=psst.executeQuery();
 	         while(rs.next()) {
 	        	 System.out.println(rs.getInt("productId"));
 	        	 System.out.println(rs.getString("product_name"));
 	        	 System.out.println(rs.getInt("price"));
 	         }
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
