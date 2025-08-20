import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class TaskScheduler {
    Map<String, Queue<String>> tasks = new HashMap<>();

    public void constructQueue() {
        Queue<String> queue1 = new LinkedList<>(Arrays.asList("hello", "hello"));
        System.out.println(queue1);
    }

    public static void main(String[] args) {

        TaskScheduler ts = new TaskScheduler();
    }
}
