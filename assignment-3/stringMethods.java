import java.util.Scanner;

public class stringMethods {
    public static void main(String[] args) {
        
   
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter a string : ");
      String str=sc.nextLine();
      System.out.println(str.trim());
      System.out.println(str.toUpperCase());
      System.out.println(str.toLowerCase());
      System.out.println(str.replace(" ", "-"));
      System.out.println(str.substring(2,6));
      System.out.println(str.indexOf('a'));
    

     }
    
}
