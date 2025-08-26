package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class InsertWithNullHandling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		String query="insert into users_Naveen(userId,userName,email,account_start_date,phone_no) values(?,?,?,?,?)";
		   try {
	        	 Class.forName("com.mysql.cj.jdbc.Driver");
	 	         Connection conn=DriverManager.getConnection(url,username,password);
	 	        PreparedStatement ppst=conn.prepareStatement(query);
	 	        ppst.setInt(1, 6);

	 	        ppst.setString(2, "Virat");
	 	        ppst.setNull(3, java.sql.Types.VARCHAR);
	 	        ppst.setNull(4, java.sql.Types.DATE);
	 	        ppst.setNull(5,java.sql.Types.BIGINT);
	 	         ppst.executeUpdate();
	 	         
	 	         conn.close();
	 	         ppst.close();
	         }
	         catch(Exception e) {
	        	 e.printStackTrace();
	         }
	}

}
