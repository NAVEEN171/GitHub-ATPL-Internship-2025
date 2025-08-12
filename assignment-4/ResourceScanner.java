import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ResourceScanner {
    public static void scanFile(String filePath) {
        File sampleTextFile = new File(filePath);
        try (
                Scanner sc = new Scanner(sampleTextFile);) {
            while (sc.hasNextLine()) {
                System.out.println(sc.nextLine());
            }

        } catch (FileNotFoundException e) {
            System.out.println(e);
        }

    }

    public static void main(String[] args) {
        final String filePath = "./assignment-4/sample.txt";
        scanFile(filePath);
    }
}
