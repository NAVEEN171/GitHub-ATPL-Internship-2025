import java.util.Scanner;
public class CountEvenOdd{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter array size: ");
        int len=sc.nextInt();
        
        int[] arr1=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            arr1[i]=sc.nextInt();
        }
        int evenNums=0;
        boolean zeroValue=false;
        for(int i=0;i<arr1.length;i++){
            if(arr1[i]%2==0){
                if(arr1[i]==0){
                    zeroValue=true;
                }
                else{
                   evenNums++;
                }
            }
        }
        System.out.println("evenNums "+evenNums+" oddNums "+(arr1.length-evenNums-(zeroValue?1:0)));
    }
}