import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;

public class SortingCls {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter len of array: ");
        int len = sc.nextInt();
        String[] inputArr = new String[len];
        for (int i = 0; i < len; i++) {
            inputArr[i] = sc.next();
        }

        Arrays.sort(inputArr);
        System.out.println("sorted array in ascending order : " + Arrays.toString(inputArr));
        Arrays.sort(inputArr, Collections.reverseOrder());
        System.out.println("sorted array in descending order : " + Arrays.toString(inputArr));
        sc.close();
    }

}
