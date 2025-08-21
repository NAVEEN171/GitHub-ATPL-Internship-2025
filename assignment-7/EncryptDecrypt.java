import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class EncryptDecrypt {
    public static String convertToEncrypt(String original) {
        String temp = "";
        for (int i = 0; i < original.length(); i++) {
            int num = original.charAt(i);

            num = (num + 5);

            temp += String.valueOf(num) + "\n";
        }
        return temp;

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Message to be Encrypted: ");
        String str = sc.next();
        try {
            FileWriter fw = new FileWriter("./assignment-7/decrypt.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            String encryptedCode = convertToEncrypt(str);
            System.out.println("Encrypted code is : ");
            System.out.println(encryptedCode);
            bw.write(encryptedCode);
            bw.close();
            fw.close();

            FileReader fr = new FileReader("./assignment-7/decrypt.txt");
            BufferedReader br = new BufferedReader(fr);
            String Line;
            String decrytedMessage = "";
            while ((Line = br.readLine()) != null) {
                int st = Integer.valueOf(Line);
                char s = (char) (st - 5);
                decrytedMessage += s;

            }
            System.out.println("Decrypted message is " + decrytedMessage);

        } catch (IOException e) {
            e.printStackTrace();

        }
    }
}
