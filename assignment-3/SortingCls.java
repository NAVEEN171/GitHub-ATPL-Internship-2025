import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;

public class SortingCls {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter len of array: ");
        int len=sc.nextInt();
        String[] arr=new String[len];
        for(int i=0;i<len;i++){
            arr[i]=sc.next();
        }

        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr,Collections.reverseOrder());
         System.out.println(Arrays.toString(arr));
         sc.close();
    }
    
}
