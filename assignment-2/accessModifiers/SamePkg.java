package accessModifiers;

public class SamePkg {
    public static void main(String args[]) {
        // I can access with in same package
        TestCls test1 = new TestCls();
        System.out.println("num is" + test1.getNumber());
        Book book1 = new Book();
        // no error here because default is package-private can be accessed inside a
        // package
    }
}
