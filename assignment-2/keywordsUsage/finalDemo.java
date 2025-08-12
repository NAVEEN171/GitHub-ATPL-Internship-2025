package keywordsUsage;

public class finalDemo extends Demo {
    // cannot override the final method
    // void logName(){
    // System.out.println("name is harish");
    // }
    public static void main(String[] args) {
        finalDemo fd1 = new finalDemo();
        // final cannot be accessed
        // fd1.a=9;

    }
}

class Demo {
    final int a = 7;

    final void logName() {
        System.out.println("name is naveen");
    }
}
