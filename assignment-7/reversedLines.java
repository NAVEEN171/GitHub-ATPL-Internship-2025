import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class reversedLines {
    public static String reverseString(String originalStr) {
        String temp = "";
        for (int i = originalStr.length() - 1; i >= 0; i--) {
            temp = temp + originalStr.charAt(i);
        }
        return temp;
    }

    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("./assignment-7/input.txt");
            FileWriter fw = new FileWriter("./assignment-7/reversed.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            BufferedReader br = new BufferedReader(fr);
            String Line;
            while ((Line = br.readLine()) != null) {
                Line = reverseString(Line);
                bw.write(Line + "\n");
            }
            bw.close();
            br.close();
            fr.close();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
