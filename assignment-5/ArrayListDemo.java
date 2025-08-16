
import java.util.ArrayList;

public class ArrayListDemo {
      public static void main(String[] args) {
        ArrayList<String> strArr=new ArrayList<>();
        strArr.add("Naveen");
        strArr.add("Hello");
        strArr.add("Hi");
        strArr.add("Mahesh");
        strArr.add("dileep");
        System.out.println("Before Removing element 3 ...");
        for(int i=0;i<strArr.size();i++){
          System.out.println(i+" "+strArr.get(i));
        }
        strArr.remove(2); 
        System.out.println("After Removing element 3...");
        for(String s:strArr){
            System.out.println(s);
        }
      }
}
