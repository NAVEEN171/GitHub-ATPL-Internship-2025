import java.util.LinkedList;

public class LinkedListDemo {
    public static void printLinkedList(LinkedList<Integer> list){
          for(Integer num:list){
            System.out.print(num+ " ");
          }
          System.out.println();
    
    }
    public static void main(String[] args) {
        LinkedList<Integer> list=new LinkedList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        System.out.println("LL after Addition: ");
        printLinkedList(list);
        list.addFirst(5);
        list.addLast(60);
        System.out.println("LL after adding First and after adding Last");
        printLinkedList(list);
        list.remove(2);
        System.out.println("LL after Removing index 2 element");
        printLinkedList(list);
        
    }
}
