package anonomousClasses;

public class ShapeAbs {
    public static void main(String[] args) {
        Shape s1=new Shape(){
             void draw(){
                System.out.println("Drawing shape circle ...");
            }
        };
        s1.draw();
    }
    
}


abstract class Shape{
    abstract void draw();
}
