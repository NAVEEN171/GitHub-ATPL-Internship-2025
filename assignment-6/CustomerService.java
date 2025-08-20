
import java.util.Queue;
import java.util.LinkedList;

public class CustomerService {
    Queue<String> customerServices = new LinkedList<>();

    public void addToService(String name) {
        if (name != null) {
            customerServices.add(name);
        }
    }

    public void serveCustomer() {
        if (customerServices.isEmpty()) {
            System.out.println("No one is left to Serve");
        } else {
            System.out.println("Served " + customerServices.peek() + " Person");
            System.out.println("Visit Again! ");
            customerServices.poll();
        }
    }

    public String firstCustomer() {
        if (!customerServices.isEmpty()) {
            return customerServices.peek();
        }
        return null;
    }

    public static void main(String[] args) {
        CustomerService customerQueue = new CustomerService();
        customerQueue.addToService("Naveen");
        customerQueue.addToService("Dileep");
        customerQueue.addToService("Mahesh");
        customerQueue.serveCustomer();

        if (customerQueue.firstCustomer() != null) {
            System.out.println("Current First Customer - " + customerQueue.firstCustomer());
        }
        ;

    }
}
