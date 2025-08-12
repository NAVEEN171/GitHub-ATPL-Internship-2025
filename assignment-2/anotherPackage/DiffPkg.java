
package anotherPackage;

import accessModifiers.TestCls;
//import accessModifiers.Book;
//During import it says book is not visible since it is a different package and we are using default class for book

public class DiffPkg {
    public static void main() {
        // with different package
        TestCls t1 = new TestCls();
        System.out.println("num is" + t1.getNumber());
        // Book book2=new Book();
        // this will not work
    }
}
