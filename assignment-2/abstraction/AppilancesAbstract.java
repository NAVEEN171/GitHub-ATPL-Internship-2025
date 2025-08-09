package abstraction;
public class AppilancesAbstract {
    public static void main(String args[]){
        Fan f1=new Fan();
        f1.turnOn();
        f1.isTurnedOn();
        f1.turnOff();
        f1.isTurnedOn();
        Tv t1=new Tv();
        t1.turnOn();
        
        t1.isTurnedOn();
        t1.turnOff();
        t1.isTurnedOn();
    }
     
}

abstract class Appliance{
      abstract void turnOff();
      abstract void turnOn();
}

class Fan extends Appliance{
   private boolean turnedOn=false;
    void turnOff() {
        turnedOn=false;  
    }
    void turnOn(){
        turnedOn=true;
    }
   public void isTurnedOn(){
        if(turnedOn){
            System.out.println("Fan is turned on");
        }
        else{
            System.out.println("Fan is turned off");
        }
    }
}

class Tv extends Appliance{
   private boolean turnedOn=false;
    void turnOff() {
        turnedOn=false;  
    }
    void turnOn(){
        turnedOn=true;
    }
   public void isTurnedOn(){
        if(turnedOn){
            System.out.println("Tv is turned on");
        }
        else{
            System.out.println("Tv is turned off");
        }
    }
}
