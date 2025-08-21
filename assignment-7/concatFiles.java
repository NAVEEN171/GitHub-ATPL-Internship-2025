import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class concatFiles {
    public static void main(String[] args) {
        try {
            FileReader source1 = new FileReader("./assignment-7/input.txt");
            FileReader source2 = new FileReader("./assignment-7/word_frequencies.txt");
            BufferedReader source1Reader = new BufferedReader(source1);
            BufferedReader source2Reader = new BufferedReader(source2);
            FileWriter dest = new FileWriter("./assignment-7/concat.txt", true);
            BufferedWriter destWriter = new BufferedWriter(dest);
            String Line;

            while ((Line = source1Reader.readLine()) != null) {
                destWriter.write(Line + "\n");
            }
            while ((Line = source2Reader.readLine()) != null) {
                destWriter.write(Line + "\n");
            }
            source1.close();
            source2.close();
            source1Reader.close();
            source2Reader.close();
            destWriter.close();
            dest.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
