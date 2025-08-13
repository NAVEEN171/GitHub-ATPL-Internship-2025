package customException;

import java.util.Scanner;

class LoginExceptionFailed extends RuntimeException {
    LoginExceptionFailed(String message) {
        super(message);
    }
}

public class LoginException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter userName : ");
        String userName = sc.next();
        System.out.print("Enter Password : ");
        String password = sc.next();
        try {
            throw new LoginExceptionFailed("Invalid credentials or user doesn't Exist");
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();

        }
    }
}
