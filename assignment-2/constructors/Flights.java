package constructors;
public class Flights {
    public static void main(String args[]){
    Flight flight1=new Flight(123,"Chennai",4);
    Flight flight2=new Flight();
    flight1.showDetails();
    flight2.showDetails();
    }  
}

class Flight{
   int flightNo;
   String destination;
   int duration;
   Flight(){
       flightNo=145;
       destination="Mumbai";
       duration=5;
   }
   Flight(int flightNo,String destination,int duration){
       this.flightNo=flightNo;
       this.destination=destination;
       this.duration=duration;
   }
   void showDetails(){
       System.out.println("flight no : "+this.flightNo+" destination : "+this.destination+" time duration : "+this.duration);
   }
}
