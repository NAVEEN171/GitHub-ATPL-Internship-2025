package staticMembers;

public class Student {
    static String name="unknown";

    public static void main(String[] args) {
        Student s1=new Student();
        Student s2=new Student();
        
        s1.name="Naveen";
        System.out.println(s1.name);
        System.out.println(s2.name);
    }
    
}
