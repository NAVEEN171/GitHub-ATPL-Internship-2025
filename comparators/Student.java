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

    public static void main(String[] args) {
        List<Student> studentsList = new ArrayList<>();
        studentsList.add(new Student("Naveen", 150, 21));
        studentsList.add(new Student("Jadeja", 190, 45));
        studentsList.add(new Student("Mahesh", 100, 21));
        Collections.sort(studentsList, new NameSorter());
        System.out.println("Sorting by name in ascending order");
        for (int idx = 0; idx < studentsList.size(); idx++) {
            System.out.println(" " + " " + "name: " + studentsList.get(idx).name + " marks: "
                    + studentsList.get(idx).marks + " age :" + studentsList.get(idx).age);

        }
        Collections.sort(studentsList, new MarksSorter());
        System.out.println("Sorting by marks in descending order");
        for (int idx = 0; idx < studentsList.size(); idx++) {
            System.out.println(" " + " " + "name: " + studentsList.get(idx).name + " marks: "
                    + studentsList.get(idx).marks + " age :" + studentsList.get(idx).age);

        }
        Collections.sort(studentsList, new AgeSorter());
        System.out.println("Sorting by age in ascending order");
        for (int idx = 0; idx < studentsList.size(); idx++) {
            System.out.println(" " + " " + "name: " + studentsList.get(idx).name + " marks: "
                    + studentsList.get(idx).marks + " age :" + studentsList.get(idx).age);

        }

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
