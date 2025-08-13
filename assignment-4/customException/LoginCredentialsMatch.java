package customException;

import java.util.Scanner;

class LoginExceptionFailed extends RuntimeException {
    LoginExceptionFailed(String message) {
        super(message);
    }
}

public class LoginCredentialsMatch {

    public static void login(String userName, String password) throws LoginExceptionFailed {
        String validUserName = "Naveen";
        String validPassword = "123456";
        if (userName.equals(validUserName) && password.equals(validPassword)) {
            System.out.println("logged in successfully!");
        } else {
            throw new LoginExceptionFailed("Invalid credentials or user doesn't Exist");
        }

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter userName : ");
        String userName = sc.next();
        System.out.print("Enter Password : ");
        String password = sc.next();
        try {
            login(userName, password);
        } catch (LoginExceptionFailed e) {
            e.printStackTrace();
        }

    }
}
