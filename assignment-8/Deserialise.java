import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.text.MessageFormat;

public class Deserialise {
    public static void main(String[] args) {
        try {
            FileInputStream fi = new FileInputStream("./assignment-8/students.ser");
            ObjectInputStream obj = new ObjectInputStream(fi);

            Student s = (Student) obj.readObject();
            String message = MessageFormat.format("Name: {0} , email: {1} , rollNo:  {2}", s.userName, s.email,
                    s.rollNo);
            System.out.println(message);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
