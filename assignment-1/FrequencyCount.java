import java.util.HashMap;
import java.util.Scanner;
class FrequencyCount{
    public static void main(String args[]){
        System.out.print("Enter inputArray size: ");
        Scanner sc=new Scanner(System.in);

        int len=sc.nextInt();
        
        int[] inputArr=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            inputArr[i]=sc.nextInt();
        }
        HashMap<Integer,Integer> numsCount=new HashMap<>();
        for(int i=0;i<inputArr.length;i++){
          if(numsCount.containsKey(inputArr[i])){
            numsCount.put(inputArr[i],numsCount.get(inputArr[i])+1);
          }
          else{
            numsCount.put(inputArr[i],1);
          }
        }
        for(int i:numsCount.keySet()){
            System.out.println("key: "+i+" "+"Value "+numsCount.get(i));
        }  
         sc.close(); 
    }
}