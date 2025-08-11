public class InternDemo {
    public static void main(String[] args) {
        String s1=new String("Hello");
        String s2=s1.intern();
        String s3="Hello";
        System.out.println(s1==s2);
        System.out.println(s2==s3);
        System.out.println(s1==s3);
    }
}
