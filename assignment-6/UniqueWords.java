import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;

public class UniqueWords {
    public static void main(String[] args) {
        HashSet<String> words = new HashSet<>();
        Scanner sc = new Scanner(System.in);
        String[] inputWords = sc.nextLine().split(" ");
        for (String word : inputWords) {
            words.add(word);
        }
        Iterator<String> strIterator = words.iterator();
        while (strIterator.hasNext()) {
            System.out.println(strIterator.next());
        }
        sc.close();
    }
}
