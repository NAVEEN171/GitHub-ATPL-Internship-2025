package polyMorphism;
public class Payments {
    public static void main(String args[]){
            CreditCardPayment card1=new CreditCardPayment();
            card1.processPayment();
            UPIPayment upiMethod1=new UPIPayment();
            upiMethod1.processPayment();
    }
}

class ProcessPayment{
    void  processPayment(){
        System.out.println("Processing Payment....");
    }
    
}

class CreditCardPayment extends ProcessPayment{
    @Override
    void processPayment(){
        System.out.println("Processing Payment Through Credit Card...");
    }
    
}
class UPIPayment extends ProcessPayment{
    @Override
    void processPayment(){
        System.out.println("Processing Payment Through UPI");
    }
}