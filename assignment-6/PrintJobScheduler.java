import java.util.LinkedList;
import java.util.Queue;
import java.util.Iterator;
public class PrintJobScheduler {
    public static void main(String[] args) {
        Queue<String> jobScheduler=new LinkedList<>();
        jobScheduler.add("Naveen-Resume1.pdf");
        jobScheduler.add("Harish-Resume1.pdf");
        jobScheduler.add("Pawan-Resume1.pdf");
        jobScheduler.add("Dileep-Resume1.pdf");
        jobScheduler.add("Mahesh-Resume1.pdf");
        jobScheduler.remove();
        jobScheduler.remove();
        Iterator<String> iterator=jobScheduler.iterator();
        while(iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }
}
