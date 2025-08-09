package inheritance;
public class Vehicles {
     public static void main(String args[]){
        Bike bike1=new Bike("Honda Shine");
        bike1.startVehicle();
        Car car1=new Car("BMW");
        car1.startVehicle();
     }
}

 class Vehicle{

    String vhType;
    Vehicle(String vhType){
       this.vhType=vhType;
    }
    void startVehicle(){
        System.out.println("Vehicle started! type not known!");
    }
}

class Bike extends Vehicle{
     Bike(String vhType){
        super(vhType);
     }
     void startVehicle(){
        System.out.println("Bike Started!");
          System.out.println(vhType);
     }
}

class Car extends Vehicle{
     Car(String vhType){
        super(vhType);
     }
     void startVehicle(){
        System.out.println("Car Started!");
        System.out.println(vhType);
     }
}
