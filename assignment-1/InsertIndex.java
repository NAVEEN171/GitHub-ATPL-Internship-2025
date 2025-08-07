import java.util.Scanner;
class InsertIndex{
    public static void main(String args[]){
        System.out.print("Enter array size: ");
        Scanner sc=new Scanner(System.in);

        int len=sc.nextInt();
        
        int[] arr=new int[len];
        for(int i=0;i<len;i++){
            System.out.print("Enter number at "+i+": ");
            arr[i]=sc.nextInt();
        }
        int arr2[]=new int[arr.length+1];
        System.out.println("Enter number to Insert: ");
        int element=sc.nextInt();
       
        System.out.println("position: ");
        int position=sc.nextInt();
        if(position>arr.length-1){
            System.out.println("Position is out of bounds");
            System.exit(0);
        }
        int idx=0;
        for(int i=idx;i<position;i++){
            arr2[i]=arr[i];
        }
        System.out.println(idx);
        arr2[position]=element;

        for(int i=position;i<arr.length;i++){
            arr2[i+1]=arr[i];
        }
        for(int i=0;i<arr2.length;i++){
            System.out.print(arr2[i]+" ");
        }

    }
}