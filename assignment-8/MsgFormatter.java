import java.text.MessageFormat;

public class MsgFormatter {
    public static void main(String[] args) {
        String message = MessageFormat.format("Student {0} from {1} department secured gpa of {2}", "Naveen", "ECE",
                3.54);
        System.out.println(message);
    }
}
