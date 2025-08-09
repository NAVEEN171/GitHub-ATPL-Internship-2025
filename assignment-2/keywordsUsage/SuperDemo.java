package keywordsUsage;

public class SuperDemo {
    public static void main(String[] args) {
        Intern in1=new Intern();
        in1.setEmpType("SDE1");
        System.out.println("designation : "+in1.empType);
        in1.callParentMethod("SDE1");
        System.out.println("designation : "+in1.empType);
    }
}


class Employee{
      String empType;
      public void setEmpType(String empType){
        this.empType=empType;
      }
}

class Intern extends Employee{
    public void setEmpType(String empType){
            this.empType="INTERN";
    }
    public void callParentMethod(String empType){
        super.setEmpType(empType);
    }
}


