import java.util.HashMap;
import java.util.Map;

public class StudentMarksRecord {
    public static void main(String[] args) {
      Map<String,Integer> studentMarks=new HashMap<>();
      studentMarks.put("Dileep",500);
      studentMarks.put("Naveen",400);
      studentMarks.put("Mahesh",200);
      studentMarks.put("Harry",300);
      studentMarks.put("John",100);
      int max=Integer.MIN_VALUE;
      int min=Integer.MAX_VALUE;

      for(Map.Entry<String,Integer> entry:studentMarks.entrySet()){
            if(entry.getValue()>max){
                max=entry.getValue();
            }
            if(entry.getValue()<min){
                min=entry.getValue();
            }
      }
      System.out.println("min value "+min);
      System.out.println("max value"+max);
      
    }
}
