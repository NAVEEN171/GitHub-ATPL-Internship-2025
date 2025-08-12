import java.util.Scanner;

public class StringMethods {
    public static void main(String[] args) {
        
   
      Scanner sc=new Scanner(System.in);
      System.out.print("Enter a string : ");
      String str=sc.nextLine();
      System.out.println("trimmed value : "+str.trim());
      System.out.println("converted to uppercase : "+str.toUpperCase());
      System.out.println("converted to lowercase : "+str.toLowerCase());
      System.out.println("replaced all the occurances of target value ' ' with replacement value of - : "+str.replace(" ", "-"));
      System.out.println("generated a substring from 2 to 6 index : "+str.substring(2,6));
      System.out.println("searching for first occurance of a  : "+str.indexOf('a'));
    

     }
    
}
