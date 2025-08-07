import java.util.HashMap;
import java.util.Scanner;
class FrequencyCount{
    public static void main(String args[]){
        System.out.print("Enter array size: ");
        Scanner sc=new Scanner(System.in);

        int len=sc.nextInt();
        
        int[] arr=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            arr[i]=sc.nextInt();
        }
        HashMap<Integer,Integer> numCount=new HashMap<>();
        for(int i=0;i<arr.length;i++){
          if(numCount.containsKey(arr[i])){
            numCount.put(arr[i],numCount.get(arr[i])+1);
          }
          else{
            numCount.put(arr[i],1);
          }
        }
        for(int i:numCount.keySet()){
            System.out.println("key: "+i+" "+"Value "+numCount.get(i));
        }   
    }
}