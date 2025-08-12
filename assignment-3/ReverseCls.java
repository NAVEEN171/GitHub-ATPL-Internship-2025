import java.util.Scanner;
import java.io.*;

public class ReverseCls {
       public static void main(String[] args) {
                String originalString;
                Scanner sc=new Scanner(System.in);
                System.out.println("Enter a string to reverse : ");
                originalString=sc.next();
                String revString="";
                for(int i=originalString.length()-1;i>-1;i--){
                      revString=revString+originalString.charAt(i);
                }
                StringBuffer str1=new StringBuffer(originalString);
                StringBuilder str2=new StringBuilder(originalString);
             
                System.out.println("Manual reverse:");
                System.out.println(revString);
                System.out.println("using string buffer: ");
                System.out.println(str1.reverse());
                System.out.println("using string Builder: ");
                System.out.println(str2.reverse());

       }
}
