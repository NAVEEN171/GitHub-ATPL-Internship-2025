import java.util.Vector;
import java.util.Enumeration;
public class VectorDemo {
    public static void main(String[] args) {
        Vector<Double> vc=new Vector<>();
        vc.add(1.25);
        vc.add(5.55);
        vc.add(9.95);
        vc.add(10.78);
        vc.add(45.77);

        Enumeration<Double> elements=vc.elements();
        while(elements.hasMoreElements()){
            System.out.println(elements.nextElement());
        }

    }
}
