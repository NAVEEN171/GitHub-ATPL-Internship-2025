package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class InsertRecordIntoUser {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		String query="insert into users_Naveen values(3,'mahesh','mahesh@gmail.com')";
        try {
           Class.forName("com.mysql.cj.jdbc.Driver");
           Connection conn=DriverManager.getConnection(url,username,password);
           PreparedStatement pst=conn.prepareStatement(query);
           int rowsAffected=pst.executeUpdate();
           System.out.println("added "+rowsAffected+" row" );
           conn.close();
           pst.close();
           
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
