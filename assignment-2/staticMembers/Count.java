package staticMembers;

class Counter{
    static int count=0;
    Counter(){
      count++;
    }
}

public class Count {
    public static void main(String[] args) {
        Counter c1=new Counter();
        Counter c2=new Counter();
        System.out.println("count : "+c1.count);
        System.out.println("count : "+c2.count);

    }
}
