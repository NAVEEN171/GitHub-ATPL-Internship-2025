package b;

import a.A;

public class B extends A {
    public static void main() {
        A test1 = new A();
        // System.out.println(""+test1.name);
        // not accessible
        // System.out.println(""+test1.role);
        // not accessible
        B test2 = new B();
        // System.out.println(""+test2.name);
        // not accessible because it is a different package
        System.out.println("" + test2.role);
    }

}
