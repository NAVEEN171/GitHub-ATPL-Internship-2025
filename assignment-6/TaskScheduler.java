import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class TaskScheduler {
    Map<String, Queue<String>> tasks = new HashMap<>();

    public void AddTask(ArrayList<String> currentTasks, String Day) {
        Queue<String> queue1 = new LinkedList<>(currentTasks);
        tasks.put(Day, queue1);
    }

    public void printTasks() {
        System.out.println("------------------------");

        System.out.println("printing task....");
        for (Map.Entry<String, Queue<String>> entry : tasks.entrySet()) {
            System.out.print(entry.getKey() + " - ");
            System.out.println(entry.getValue());
        }
        System.out.println("------------------------");

    }

    public void Removetask(String task) {
        if (tasks.containsKey(task)) {
            tasks.remove(task);
        } else {
            System.out.println("Task Not Found ! ");
        }
    }

    public static void main(String[] args) {

        TaskScheduler ts = new TaskScheduler();
        ts.AddTask(new ArrayList<>(Arrays.asList("OfficeWork", "Bring Groceries", "Have Food")), "Monday");
        ts.AddTask(new ArrayList<>(Arrays.asList("OfficeWork", "Bring Groceries", "Have Dinner")), "Tuesday");
        ts.AddTask(new ArrayList<>(Arrays.asList("OfficeWork", "Bring Groceries", "Have Dinner")), "Wednesday");
        ts.printTasks();
        ts.Removetask("Thursday");
        ts.printTasks();
        ts.Removetask("Monday");
        ts.printTasks();

    }
}
