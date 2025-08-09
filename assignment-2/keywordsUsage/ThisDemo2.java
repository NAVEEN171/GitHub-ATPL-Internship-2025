package keywordsUsage;

public class ThisDemo2 {
    public static void main(String[] args) {
        Vehicle v1=new Vehicle();
        Vehicle v2=new Vehicle("CAR",4);
        System.out.println("default : "+v1.vhType+" "+v1.tyres);
        System.out.println("parameterized : "+v2.vhType+" "+v2.tyres);
    }
    
}

 class Vehicle{
    String vhType;
    int tyres;
    Vehicle(){
       this("BIKE",2);
    }
    Vehicle(String vhType,int tyres){
        this.vhType=vhType;
        this.tyres=tyres;
    }
}
