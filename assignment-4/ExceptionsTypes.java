import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;

public class ExceptionsTypes {
    // checked expection
    public void readFile(String filePath) throws IOException, FileNotFoundException {
        FileInputStream f1 = new FileInputStream(filePath);
    }

    public void simulateSQLException() throws SQLException {
        throw new SQLException();

    }

    // unchecked expection
    public static void main(String[] args) {
        try {
            System.out.println(5 / 0);
        } catch (ArithmeticException e) {
            System.out.println("Unchecked Arthimetic Exception occured");
            System.out.println(e);
        }

        try {
            String str = "Hello";
            str = null;

            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("NullPointer Exception occured");
            System.out.println(e);
        }

        final String filePath = "./assignment-4/sample.txt";
        ExceptionsTypes exeTypes = new ExceptionsTypes();
        try {
            exeTypes.readFile(filePath);
        } catch (Exception e) {
            System.out.println(e);
        }

        try {
            exeTypes.simulateSQLException();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
