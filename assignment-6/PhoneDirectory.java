import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class PhoneDirectory {

    public static void searchByNumber(String number, HashMap<String,String> contactDetails){
        String phoneNo;
        List<String> matchedRecords=new ArrayList<>();
        for(String name:contactDetails.keySet()){
            phoneNo=contactDetails.get(name);
            if(phoneNo.contains(number)){
                matchedRecords.add(name+"-"+phoneNo);
            }
        }
        if(matchedRecords.size()>0){
          System.out.println("---Matched Records---");
        }
        else{
            System.out.println("No matched Records found");
        }
        for(String record:matchedRecords){
            System.out.println(record);
        }
          if(matchedRecords.size()>0){
          System.out.println("------End---------");
        }

    }
    public static void searchByName(String userName, HashMap<String,String> contactDetails){
        String phoneNo;
        List<String> matchedRecords=new ArrayList<>();
        for(String name:contactDetails.keySet()){
            phoneNo=contactDetails.get(name);
            if(name.toLowerCase().contains(userName.toLowerCase())){
                matchedRecords.add(name+"-"+phoneNo);
            }
        }
        if(matchedRecords.size()>0){
          System.out.println("---Matched Records---");
        }
        else{
            System.out.println("No matched Records found");
        }
        for(String record:matchedRecords){
            System.out.println(record);
        }
         if(matchedRecords.size()>0){
          System.out.println("------End---------");
        }

    }

    public static void removeContact(HashMap<String,String> contactDetails,String name){
        if(contactDetails.containsKey(name)){
            contactDetails.remove(name);
            System.out.println(name+"record is Removed");
        }
        else{
            System.out.println("Name Record Not Found!");
        }

    }
    public static void addContact(HashMap<String,String> contactDetails,String name,String phoneNo){
             if(contactDetails.containsKey(name)){
                System.out.println("user already exists ! Duplicate Not Allowed");
             }
             else{
                 contactDetails.put(name,phoneNo);
             }
    }
    public static void logContactDetails(HashMap<String,String> contactDetails){
        System.out.println("------------------------");
        for(Map.Entry<String,String> contact:contactDetails.entrySet()){
            System.out.println(contact.getKey()+"-"+contact.getValue());
        }
        System.out.println("------------------------");
    }
    public static void main(String[] args) {
        HashMap<String,String> contactDetails=new HashMap<>();
        boolean loop=true;
        int option;
        String userName;
        String phoneNo;

        Scanner sc=new Scanner(System.in);

        while(loop){
            System.out.println("Select an Option \n 1:AddContact \n 2:RemoveContact \n 3:SearchByNumber \n 4:SearchByName \n 5:PrintContacts");
            System.out.println("\n **Note:- Please add contacts first** \n");
            option=sc.nextInt();
            switch(option){
               case 1:
                 System.out.print("Enter username: ");
                 userName=sc.next();
                 System.out.print("Enter phone Number: ");
                 phoneNo=sc.next();
                 addContact(contactDetails, userName, phoneNo);
                 break;
               case 2:
                System.out.print("Enter Contact to be removed: ");
                userName=sc.next();
                removeContact(contactDetails, userName);
                break;
               case 3:
                 System.out.println("Enter the Number to Search : ");
                 phoneNo=sc.next();
                 searchByNumber(phoneNo,contactDetails);
                 break;
                case 4:
                  System.out.println("Enter the Name to Search : ");
                  userName=sc.next();
                  searchByName(userName, contactDetails);
                  break;
                case 5:
                  logContactDetails(contactDetails);
                  break;
                default:
                  System.out.println("Enter a valid Number betwen 1-5 !");

                  
            }


        }

    }
}
