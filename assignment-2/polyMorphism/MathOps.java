package polyMorphism;
public class MathOps {
     public static void main(String args[]){
        MathUtils math1=new MathUtils();
        System.out.println("int addition "+math1.add(45,56));
        System.out.println("double addition "+math1.add(9600000, 67000000));
     }
}

class MathUtils{
    int add(int a,int b){
        return a+b;
    }
    double add(double a,double b){
        return a+b;
    }
}
