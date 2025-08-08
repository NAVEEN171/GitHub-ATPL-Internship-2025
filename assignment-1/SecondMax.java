import java.util.Scanner;

class secondMaxNum{
    public static void main(String args[]){
       System.out.print("Enter array size: ");
        Scanner sc=new Scanner(System.in);

        int len=sc.nextInt();
        
        int[] numsArr=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            numsArr[i]=sc.nextInt();
        }
       int  maxNum=numsArr[0];
      int secondMaxNum=Integer.MIN_VALUE;
        if(numsArr.length<2){
           System.out.println("Second max not possible!");
           System.exit(0);

        }
        for(int i=0;i<numsArr.length;i++){
            if(numsArr[i]>maxNum){
                secondMaxNum=maxNum;
                maxNum=numsArr[i];
            }
            else if(numsArr[i]>secondMaxNum && numsArr[i]!=maxNum){
                secondMaxNum=numsArr[i];

            }
        }
        System.out.println("Second max is "+secondMaxNum);

    }
}