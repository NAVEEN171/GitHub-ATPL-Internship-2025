package abstraction;

public class MovableDemo {
    public static void main(String args[]) {
        Car c1 = new Car();
        c1.move();
        Drone d1 = new Drone();
        d1.move();
        Robot r1 = new Robot();
        r1.move();
    }
}

interface Movable {
    public void move();
}

class Car implements Movable {
    public void move() {
        System.out.println("car is moving...");
    }
}

class Drone implements Movable {
    public void move() {
        System.out.println("Drone is moving...");
    }
}

class Robot implements Movable {
    public void move() {
        System.out.println("Robot is moving ...");
    }
}
