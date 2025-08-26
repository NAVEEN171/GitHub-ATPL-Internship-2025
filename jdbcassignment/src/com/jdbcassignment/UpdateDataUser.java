package com.jdbcassignment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UpdateDataUser {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		final String url="jdbc:mysql://192.168.71.15:3306/intern?useSSL=false&serverTimezone=Asia/Kuala_Lumpur";
		final String username="intern2025";
		final String password="intern2025";
		String query="update users_Naveen set email='nav@google.com' where userId=? ";
        try {
           Class.forName("com.mysql.cj.jdbc.Driver");
           Connection conn=DriverManager.getConnection(url,username,password);
           PreparedStatement pst=conn.prepareStatement(query);
           pst.setInt(1, 1);
           System.out.println(pst);
           int rowsAffected=pst.executeUpdate();
           System.out.println("updated "+rowsAffected+ " row");
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
