import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudentWriter {
    int age;
    String name;
    String department;
    float cgpa;

    StudentWriter(int age, String name, String department, float cgpa) {
        this.age = age;
        this.name = name;
        this.department = department;
        this.cgpa = cgpa;

    }

    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            int count = 5;
            final String filePath = "./assignment-8/students.txt";
            int age;
            String name;
            String department;
            float cgpa;
            List<StudentWriter> students = new ArrayList<>();
            PrintWriter pw = new PrintWriter(filePath);
            while (count-- > 0) {
                System.out.print("Enter student name: ");
                name = sc.next();
                System.out.print("Enter age : ");
                age = sc.nextInt();
                System.out.print("enter department name : ");
                department = sc.next();
                System.out.print("Enter cgpa: ");
                cgpa = sc.nextFloat();
                students.add(new StudentWriter(age, name, department, cgpa));

            }
            for (StudentWriter s : students) {
                pw.printf("Student[name=%S , age=%d ,cgpa %.2f , department=%S]", s.name, s.age, s.cgpa, s.department);
                pw.println();
            }
            pw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
