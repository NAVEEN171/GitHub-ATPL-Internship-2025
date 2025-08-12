import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class HandleCheckedException {

    public static void main(String[] args) {
        final String filePath = "./assignment-4/sample.txt";
        try {
            FileInputStream f1 = new FileInputStream(filePath);
            int ch;
            while ((ch = f1.read()) != -1) {
                System.out.println(" " + (char) ch);
            }
        } catch (FileNotFoundException e) {
            System.out.println(e);
        } catch (IOException e) {
            System.out.println(e);
        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
