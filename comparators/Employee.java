import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Employee {
    String empName;
    int salary;

    Employee(String empName, int salary) {
        this.empName = empName;
        this.salary = salary;
    }

    public static void main(String[] args) {
        List<Employee> employeesList = new ArrayList<>();
        employeesList.add(new Employee("Naveen", 2000));
        employeesList.add(new Employee("Mahesh", 500000));
        employeesList.add(new Employee("dileep", 55000));
        employeesList.add(new Employee("Virat", 1000000000));
        employeesList.add(new Employee("Ajay", 0));
        Iterator<Employee> it = employeesList.iterator();
        while (it.hasNext()) {
            if (it.next().salary < 30000) {
                it.remove();
            }
        }
        for (Employee e : employeesList) {
            System.out.println("EmpName : " + e.empName + " salary: " + e.salary);
        }

    }
}
