import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class EmployeeSkillTracker {
    public static void getEmployeesWithSkill(HashMap<String,Set<String>> employeesList,String skill){
        Set<String> st;
        for(String key:employeesList.keySet()){
             st=new HashSet<>(employeesList.get(key));
             if(st.contains(skill)){
                System.out.println("Person "+key+" has "+skill);
             }
        }

    }
    public static void getCommonSkills(HashMap<String,Set<String>> employeesList,String emp1,String emp2){
      

        if(!employeesList.containsKey(emp1) && !employeesList.containsKey(emp2)){
            System.out.println("Employee List doesnt contain these employees");
        }
        else{
         Set<String> commonSkills=new HashSet<>(employeesList.get(emp1));
         commonSkills.retainAll(employeesList.get(emp2));
         System.out.print("Common skills are:- ");

         for(String st:commonSkills){
            System.out.print(st+" ");
         }
        }
        System.out.println(" ");

    }
    public static void main(String[] args) {
       HashMap<String,Set<String>> employeesList=new HashMap<>();
       employeesList.put("Naveen",new HashSet<>(Arrays.asList("Reactjs","Nodejs","Nextjs","Mongodb","Redis","Java")));
       employeesList.put("Dileep",new HashSet<>(Arrays.asList("Java","angular")));
       employeesList.put("Mahesh",new HashSet<>(Arrays.asList("Java","angular","Reactjs")));
       getEmployeesWithSkill(employeesList,"Reactjs");
       getCommonSkills(employeesList, "Dileep", "Naveen");
       getCommonSkills(employeesList, "Dileep", "Mahesh");



    }
}
