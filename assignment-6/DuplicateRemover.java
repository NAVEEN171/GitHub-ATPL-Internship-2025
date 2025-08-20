import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Scanner;

public class DuplicateRemover {
    public static void main(String[] args) {
        Set<Integer> uniqueNums = new HashSet<>();
        List<Integer> numsList = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        int tempVar;
        System.out.print("Enter length of an Array : ");
        int len = sc.nextInt();
        for (int i = 0; i < len; i++) {
            System.out.println("Enter " + i + " indexed element");
            tempVar = sc.nextInt();
            numsList.add(tempVar);
            uniqueNums.add(tempVar);
        }

        Iterator<Integer> numsIterator = uniqueNums.iterator();
        System.out.println("---Set elements---");
        while (numsIterator.hasNext()) {
            System.out.println(numsIterator.next());
        }
        sc.close();

    }
}
