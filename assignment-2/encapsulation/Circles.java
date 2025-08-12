package encapsulation;

public class Circles {
  public static void main(String args[]) {
    Circle cr = new Circle();
    cr.setRadius(3.5f);
    System.out.println("area is " + cr.getArea());
    System.out.println("Circumfernece is " + cr.getCircumference());
  }

}

class Circle {
  private float radius;
  final double pi = 3.14;

  public void setRadius(float radius) {
    if (this.isRadiusValid(radius)) {
      this.radius = radius;
    } else {
      System.out.println("Radius should be grater than 0");
    }
  }

  private boolean isRadiusValid(float radius) {
    return radius > 0;
  }

  double getArea() {
    return this.pi * this.radius * this.radius;
  }

  double getCircumference() {
    return 2 * this.pi * this.radius;
  }

}
