import java.util.Scanner;
import java.io.*;

public class StringImmutability {

    public static String encryptPassword(String password) {
        return new StringBuilder(password).append("Hashed").toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String password = sc.next();
        String hashedPassword = encryptPassword(password);
        System.out.println("password: " + password);
        System.out.println("hashedPassword: " + hashedPassword);

    }
}
