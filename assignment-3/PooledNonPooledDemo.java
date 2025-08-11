public class PooledNonPooledDemo {
    public static void main(String[] args) {
        String s1="hello";
        String s2="hello";
        String s3=new String("hello");
        System.out.println(s1==s2); //true literals are stored in strinfg pool and they refernce the same value
        System.out.println(s1.equals(s2)); //true because equals checks for values regardless of the address
        System.out.println(s1==s3); //false because one is refering to string pool (s1) and other is refering to heap so the address wont match 
        System.out.println(s1==s3); //true because equals checks for values
    }
    
    
}
