import java.util.Scanner;

public class IllegalArgumentExpectionDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            int val = sc.nextInt();
            if (val < 0) {
                throw new IllegalArgumentException("Number Cannot be negative");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Some thing went worng");
            System.out.println(e);
        }
        sc.close();
    }
}
