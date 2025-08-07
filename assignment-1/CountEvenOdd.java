public class CountEvenOdd{
    public static void main(String args[]){
        int[] arr1={1,2,3,4,5,6,0};
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