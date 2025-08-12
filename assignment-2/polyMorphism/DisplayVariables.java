package polyMorphism;

public class DisplayVariables {
    public static void main(String args[]) {
        Display display1 = new Display();
        display1.show(5);
        display1.show("Naveen");
        display1.show(new int[] { 1, 2, 3, 4, 5 });
    }

}

class Display {
    void show(int num) {
        System.out.println("integer " + num);
    }

    void show(String st) {
        System.out.println(st);
    }

    void show(int[] arr) {
        for (int idx = 0; idx < arr.length; idx++) {
            System.out.println("element : " + arr[idx]);
        }
    }
}
