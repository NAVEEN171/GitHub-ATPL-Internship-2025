package keywordsUsage;

public class ThisDemo {
    public static void main(String[] args) {
        Emp u1=new Emp("Naveen",4);
        System.out.println(u1.userName+" "+u1.rollNo);
    }
    
}

class Emp{
    String userName;
    int rollNo;
    Emp(String userName,int rollNo){
        this.rollNo=rollNo;
        this.userName=userName;
    }
}
