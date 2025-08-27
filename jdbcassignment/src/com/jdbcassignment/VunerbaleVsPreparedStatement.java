package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class VunerbaleVsPreparedStatement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		 String user="naveen";
		 int userId=1;
         final String query1="select * from users_Naveen where userName='"+ user + "' and userId='"+ userId + "'";
         final String query2="select * from users_Naveen where userId=? and userName=? ";
         try {
	           Class.forName("com.mysql.cj.jdbc.Driver");
	           Connection conn=DriverManager.getConnection(url,username,password);

	           Statement st=conn.createStatement();
	           ResultSet rs=st.executeQuery(query1);
	          
	           while(rs.next()) {
	        	   System.out.println(rs.getInt("userId"));
	        	   System.out.println(rs.getString("userName"));
	        	   System.out.println(rs.getString("email"));
 
	           }
	           
	           PreparedStatement ps=conn.prepareStatement(query2);
	           ps.setInt(1,userId);
	           ps.setString(2, user);
	           ResultSet rsps=ps.executeQuery();
	           while(rsps.next()) {
	        	   System.out.println(rsps.getInt("userId"));
	        	   System.out.println(rsps.getString("userName"));
	        	   System.out.println(rsps.getString("email"));
	        	   
	           }
	           conn.close();
	           ps.close();
	           rsps.close();
	           
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
