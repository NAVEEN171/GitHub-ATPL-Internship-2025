import java.util.Scanner;

class InsertIndex{
    public static void main(String args[]){
        int arr[]={12,13,14,11,16};
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number to Insert: ");
        int element=sc.nextInt();
       
        System.out.println("position: ");
        int position=sc.nextInt();
        if(position>arr.length-1){
            System.out.println("Position is out of bounds");
            System.exit(0);
        }
        arr[position]=element;
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }

    }
}