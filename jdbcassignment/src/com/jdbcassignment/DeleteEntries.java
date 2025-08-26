package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DeleteEntries {
	public static void main(String args[]) {
		 final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
	 		final String username="intern2025";
	 		final String password="intern2025";
	 		String query="select * from users_Naveen where account_start_date  <'2025-01-20'";
	 		String query2="delete from users_Naveen where account_start_date<'2025-01-20'";
	 		try {
	 			 Class.forName("com.mysql.cj.jdbc.Driver");
	 	         Connection conn=DriverManager.getConnection(url,username,password);
	 	         Statement st=conn.createStatement();
	 	         
	 	         ResultSet rs= st.executeQuery(query);
	 	         while(rs.next()) {
	 	        	 System.out.println(rs.getInt("userId"));
	 	        	System.out.println(rs.getString("userName"));
	 	        	System.out.println(rs.getString("email"));
	 	        	System.out.println(rs.getString("account_start_date"));
	 	         }
	 	         
	 	         int st2=st.executeUpdate(query2);
	 	         System.out.println("deleted "+st2+" rows");
	 	         conn.close();
	 	         st.close();
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
