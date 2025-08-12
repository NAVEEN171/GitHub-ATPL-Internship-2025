public class InternDemo {
    public static void main(String[] args) {
        String s1 = new String("Hello");
        String s2 = s1.intern();
        String s3 = "Hello";
        // intern checks whether a value exists in the string pool or not if
        // the value exists then it returns the refernce to it to string or creates a
        // new object in scp and returns the address to the string
        System.out.println(s1 == s2);
        System.out.println(s2 == s3);
        System.out.println(s1 == s3);
    }
}
