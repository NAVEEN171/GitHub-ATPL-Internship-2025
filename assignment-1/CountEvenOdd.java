import java.util.Scanner;
public class CountEvenOdd{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter array size: ");
        int len=sc.nextInt();
        
        int[] numsArr=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            numsArr[i]=sc.nextInt();
        }
        int evenNums=0;
        boolean zeroValue=false;
        for(int i=0;i<numsArr.length;i++){
            if(numsArr[i]%2==0){
                if(numsArr[i]==0){
                    zeroValue=true;
                }
                else{
                   evenNums++;
                }
            }
        }
        System.out.println("evenNums "+evenNums+" oddNums "+(numsArr.length-evenNums-(zeroValue?1:0)));
    }
}