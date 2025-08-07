import java.util.Scanner;

class SecondMax{
    public static void main(String args[]){
       System.out.print("Enter array size: ");
        Scanner sc=new Scanner(System.in);

        int len=sc.nextInt();
        
        int[] arr1=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            arr1[i]=sc.nextInt();
        }
       int  maxEle=arr1[0];
      int secondMax=Integer.MIN_VALUE;
        if(arr1.length<2){
           System.out.println("Second max not possible!");
           System.exit(0);

        }
        for(int i=0;i<arr1.length;i++){
            if(arr1[i]>maxEle){
                secondMax=maxEle;
                maxEle=arr1[i];
            }
            else if(arr1[i]>secondMax && arr1[i]!=maxEle){
                secondMax=arr1[i];

            }
        }
        System.out.println("Second max is "+secondMax);

    }
}