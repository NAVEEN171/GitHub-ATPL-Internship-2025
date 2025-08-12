import java.io.*;
public class ConcatCls {

    static double convertToSeconds(long startTime,long endTime){
        return  (endTime-startTime)/(Math.pow(10,-9));
    }
    public static void main(String[] args) {
        long initialStartime=System.nanoTime();
        String str1="Hello";
    
       
        str1=str1+" harry";
        System.out.println("Normal string appending...");
        System.out.println(convertToSeconds(initialStartime,System.nanoTime())+"seconds");
        initialStartime=System.nanoTime();
        System.out.println("String Buffer...");
        StringBuffer str2=new StringBuffer("hello");
        str2.append("harry");
        System.out.println(convertToSeconds(initialStartime,System.nanoTime())+"seconds");
        initialStartime=System.nanoTime();
         System.out.println("String Builder...");
        StringBuilder str3=new StringBuilder("hello");
        str3.append("harry");
        System.out.println(convertToSeconds(initialStartime,System.nanoTime())+"seconds");
        
    }
}
