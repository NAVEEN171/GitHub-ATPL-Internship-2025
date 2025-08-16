import java.util.Scanner;

public class CircularQueue {
    int[] circularList;
    int rear=-1; // push
    int front=-1; //removal

    public void intialiseList(int len){
        if(len>0){
            circularList=new int[len];
        }
        
    }
    public void enqueue(int num){
        System.out.println(rear+ " "+front);
        if(rear==-1 && front==-1){
            front=0;
            circularList[++rear]=num;
        }
        else{
            int nextIndex=(rear+1)%circularList.length;
            if(nextIndex==front){
             System.out.println("Circular List is full to update remove some elements!");
            }
            else{
                circularList[nextIndex]=num;
                rear=nextIndex;
            }

        }

    }
    public void dequeue(){
        if(rear==-1 && front==-1){
            System.out.println("Cannot remove element from Queue! Queue is Empty");
        }
        else if(rear==front){
            rear=-1;
            front=-1;
        }
        else{
            front=(front+1)%circularList.length;
        }
    }

    public int peek(){
        if(front!=-1){
            return circularList[front];
        }
        return -1;
    }

    public boolean isEmpty(){
      if(front==-1 && rear==-1){
          return true;
      }
      return false;

    }
     public boolean isFull(){

      if(front==-1){
        return false;
      }
      if((rear+1)%circularList.length==front){
          return true;
      }
      return false;

    }

    public void printCircularList(){
        int looptimes=0;

        if(front==-1){
            System.out.println("[]");
        }
        else{
         
        if(rear>=front){
            looptimes=(rear-front)+1;
         }
         else{
            looptimes=(circularList.length-front)+(rear+1);
         }
         int curr=front;
        System.out.print("[ ");
        while(looptimes-- >0){
             System.out.print(circularList[(curr)%circularList.length]+ " , ");
             curr++;
        }
        System.out.print(" ]");
        System.out.println();
        }
        


    }
   
    public static void main(String[] args) {
        CircularQueue customQueue=new CircularQueue();
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the len of the Circular Queue: ");
        int len=sc.nextInt();
        customQueue.intialiseList(len);
       
        int option;
        boolean loop=true;
        int tempVar;
        customQueue.printCircularList();
        while(loop){
            System.out.println("Enter an option: \n 1:Enqueue \n 2.Dequeue \n 3.Peek \n 4.IsEmptyCheck \n 5:IsFullCheck \n 6.PrintCircularQueue \n 7:Exit");
            option=sc.nextInt();
            switch(option){
                case 1:
                  System.out.print("Enter a value to be added:");
                  tempVar=sc.nextInt();
                  customQueue.enqueue(tempVar); 
                  customQueue.printCircularList();
                  break;
                case 2: 
                  customQueue.dequeue();
                  customQueue.printCircularList();                  
                  break;
                case 3:
                if(!customQueue.isEmpty()){
                  System.out.println(customQueue.peek());
                }
                else{
                  System.out.println("Queue is empty");
                }
                  break;
                case 4:
                 System.out.println("Circular queue is "+(customQueue.isEmpty()?"Empty":"NotEmpty"));
                 break;
                case 5:
                 System.out.println("Circular queue is "+(customQueue.isFull()?"Full":"Having Space Remaining"));
                 break;
                case 6:
                 customQueue.printCircularList();
                 break;
                case 7:
                  loop=false;
                  break;
                default:
                  System.out.println("Enter a valid value between 1-7 ");

            }

        }

        
       


    }
}
