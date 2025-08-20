import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CharacterCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<Character, Integer> charCount = new HashMap<>();
        System.out.print("Enter a String to get count of each letter: ");
        String inputStr = sc.next();
        for (int i = 0; i < inputStr.length(); i++) {
            charCount.put(inputStr.charAt(i), charCount.getOrDefault(inputStr.charAt(i), 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            System.out.println("Key: " + entry.getKey() + " Value: " + entry.getValue());
        }
        sc.close();

    }
}
