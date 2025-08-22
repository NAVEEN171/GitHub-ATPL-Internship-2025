import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Student implements Serializable {
    public static final long serialVersionUID = 1L;
    String userName;
    String email;
    int rollNo;

    Student(String userName, String email, int rollNo) {
        this.userName = userName;
        this.email = email;
        this.rollNo = rollNo;
    }

    public static void main(String[] args) {
        try {
            Student s1 = new Student("Naveen", "naveenkumar171837@gmail.com", 34);
            FileOutputStream fs = new FileOutputStream("./assignment-8/students.ser");
            ObjectOutputStream writer = new ObjectOutputStream(fs);
            writer.writeObject(s1);
            fs.close();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();

        }
    }
}
