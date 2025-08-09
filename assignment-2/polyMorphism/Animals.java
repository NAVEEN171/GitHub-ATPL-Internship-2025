package polyMorphism;
public class Animals {
    public static void main(String args[]){
        Dog dog1=new Dog();
        dog1.makeSound();
        Cow cow1=new Cow();
        cow1.makeSound();
        Cat cat1=new Cat();
        cat1.makeSound();
    }
}

class Animal{
   void makeSound(){
       System.out.println("hahaha ! don't know what sort of sound this animal will make ");
    }
}
class Cow extends Animal{
    void makeSound(){
        System.out.println("moo moo moo ");
    }
}
class Dog extends Animal{
    void makeSound(){
        System.out.println("bow bow bow");
    }
}
class Cat extends Animal{
    void makeSound(){
        System.out.println("meow meow");
    }
}


