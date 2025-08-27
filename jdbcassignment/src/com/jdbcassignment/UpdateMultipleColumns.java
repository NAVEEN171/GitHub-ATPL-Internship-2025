package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class UpdateMultipleColumns {

	public static void main(String[] args) {
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
	    String query="update users_Naveen set email='hello@gmail.com',phone_no=1234567890 where userId=1";
		// TODO Auto-generated method stub
         try {
        	 Class.forName("com.mysql.cj.jdbc.Driver");
 	         Connection conn=DriverManager.getConnection(url,username,password);
 	         Statement st=conn.createStatement();
 	         st.executeUpdate(query);
 	         conn.close();
 	         st.close();
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
