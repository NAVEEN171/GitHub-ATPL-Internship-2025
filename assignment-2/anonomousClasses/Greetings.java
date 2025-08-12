package anonomousClasses;

public class Greetings implements Greeting {
    public void sayHello() {
        System.out.println("Hello from Greetings class");
    }

    public static void main(String[] args) {
        Greetings g1 = new Greetings() {
            public void sayHello() {
                System.out.println("Hello from ananomous class");
            }
        };
        g1.sayHello();

    }
}

interface Greeting {
    void sayHello();
}
