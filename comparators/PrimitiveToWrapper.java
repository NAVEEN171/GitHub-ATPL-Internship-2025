public class PrimitiveToWrapper {
    public static void main(String[] args) {
        int a = 20;
        Integer num = a;
        System.out.println(num instanceof Integer);
        double b = 2.23;
        Double numDouble = b;
        char ch = 'A';
        Character character = ch;
        boolean value = true;
        Boolean valueBool = value;
    }
}
