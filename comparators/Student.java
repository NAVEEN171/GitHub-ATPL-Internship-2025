import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Student {
    String name;
    int marks;
    int age;
    public Object rollNo;
    public Object userName;
    public Object email;

    Student(String name, int marks, int age) {
        this.name = name;
        this.marks = marks;
        this.age = age;
    }
    public static void printList(List<Student> arr){
      for (int idx = 0; idx < arr.size(); idx++) {
            System.out.println(" " + " " + "name: " + arr.get(idx).name + " marks: "
                    + arr.get(idx).marks + " age :" + arr.get(idx).age);

        }
    }

    public static void main(String[] args) {
        List<Student> studentsList = new ArrayList<>();
        studentsList.add(new Student("Naveen", 150, 21));
        studentsList.add(new Student("Jadeja", 100, 45));
        studentsList.add(new Student("Mahesh", 100, 21));
        studentsList.add(new Student("Virat", 100, 25));
        Collections.sort(studentsList, new NameSorter());
        System.out.println("Sorting by name in ascending order");
        printList(studentsList);
        Collections.sort(studentsList, new MarksSorter());
        System.out.println("Sorting by marks in descending order");
        printList(studentsList);

        Collections.sort(studentsList, new AgeSorter());
        System.out.println("Sorting by age in ascending order");
        printList(studentsList);

        Collections.sort(studentsList,new ConditionSorter());
        System.out.println("Sorting with two conditions");
        printList(studentsList);


    }
}

class ConditionSorter implements Comparator<Student>{
    public static int manualcomparison(String a,String b){
        int len=Math.min(a.length(),b.length());
        char chTypeA;
        char chTypeB;
       
        for(int i=0;i<len;i++){
            chTypeA=a.charAt(i);
            chTypeB=b.charAt(i);
            if(chTypeA>chTypeB){
                return 1;
            }
            else if(chTypeA<chTypeB){
                return -1;
            }
        
            
        }
        if(a.length()>b.length()){
            return 1;
        }
        else if(a.length()<b.length()){
             return -1;
        }
        else{
            return 0;
        }

    }
    public int compare(Student a,Student b){
      if(a.marks!=b.marks){  
       if(a.marks>b.marks){
         return -1;
       }
       else if(a.marks<b.marks){
        return 1;
       }
    }

    

    
       
        return manualcomparison(a.name.toString(), b.name.toString());
    }
}

class NameSorter implements Comparator<Student> {
    public int compare(Student a, Student b) {
        return a.name.compareTo(b.name);
    }
}

class MarksSorter implements Comparator<Student> {
    public int compare(Student a, Student b) {
        return b.marks - a.marks;
    }
}

class AgeSorter implements Comparator<Student> {
    public int compare(Student a, Student b) {
        return a.age - b.age;
    }
}
