 enum Role{
    STUDENT,
    TEACHER,
    SUPPORT
}

public class Persons {
      public static void main(String args[]){
           Teacher teacher1=new Teacher(Role.TEACHER);
           System.out.println("role is : "+teacher1.getRole());
           Student student2=new Student(Role.STUDENT);
           System.out.println("role is : "+student2.getRole());
      }
}


class Person{
    private Role role;
    Person(Role role){
      this.role=role;
    }
    Role getRole(){
       return this.role; 
    }
}

class Student extends Person{
    Student(Role role){
       super(role);
    }
}

class Teacher extends Student{
    Teacher(Role role){
        super(role);
    }
}


