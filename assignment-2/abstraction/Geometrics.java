package abstraction;

public class Geometrics {
  public static void main(String args[]) {
    Triangle t1 = new Triangle(3.5, 4);
    Square s1 = new Square(5);
    System.out.println("Square area : " + s1.area());
    System.out.println("Triangle area : " + t1.area());
  }
}

abstract class Shape {
  abstract double area();
}

class Triangle extends Shape {
  double base;
  double height;

  Triangle(double base, double height) {
    this.base = base;
    this.height = height;
  }

  public double area() {
    return 0.5 * this.base * this.height;
  }
}

class Square extends Shape {
  double side;

  Square(double side) {
    this.side = side;
  }

  public double area() {
    return this.side * this.side;
  }
}
