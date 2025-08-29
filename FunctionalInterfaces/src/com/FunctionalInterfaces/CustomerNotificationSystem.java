package com.FunctionalInterfaces;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class CustomerNotificationSystem {
	String userName;
	boolean isSubscribed;
	CustomerNotificationSystem(String userName,boolean isSubscribed){
	      this.userName=userName;
	      this.isSubscribed=isSubscribed;
	}
	public static void main(String[] args) {
		
	    List<CustomerNotificationSystem> users=new ArrayList<>();
	    users.add(new CustomerNotificationSystem("Naveen",true));
	    users.add(new CustomerNotificationSystem("Dileep",true));
	    users.add(new CustomerNotificationSystem("Mahesh",false));
	    users.add(new CustomerNotificationSystem("Sandeep",true));
	    users.add(new CustomerNotificationSystem("Dhanush",false));
	    Consumer<String > notify=(s)->{System.out.println(s);};
	    users.stream().filter((user)->user.isSubscribed).forEach((user)->{
	    	notify.accept(user.userName+"  "+"you are subscribed ! ");
	    	
	    });



	}

}
