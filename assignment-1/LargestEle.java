import java.util.Scanner;
class LargestEle{
    public static void main(String args[]){
        int largest=Integer.MIN_VALUE;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter an array seperated by commas : ");
        String[] inputArr=sc.next().split(",");
        if(inputArr.length==0){
            System.out.println("default value: "+largest);
        }
      
        int[] arr=new int[inputArr.length];
        for(int i=0;i<inputArr.length;i++){
                arr[i]=Integer.parseInt(inputArr[i]);
        }


        for(int i=0;i<arr.length;i++){
               if(arr[i]>largest){
                largest=arr[i];
               }
        }
        System.out.println(largest);

        
    }
}