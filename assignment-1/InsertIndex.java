import java.util.Scanner;

class InsertIndex {
    public static void main(String args[]) {
        System.out.print("Enter inputArray size: ");
        Scanner sc = new Scanner(System.in);

        int len = sc.nextInt();

        int[] inputArr = new int[len];
        for (int i = 0; i < len; i++) {
            System.out.print("Enter number at " + i + ": ");
            inputArr[i] = sc.nextInt();
        }
        int res[] = new int[inputArr.length + 1];
        System.out.println("Enter number to Insert: ");
        int element = sc.nextInt();

        System.out.println("position: ");
        int position = sc.nextInt();
        if (position > inputArr.length - 1) {
            System.out.println("Position is out of bounds");
            System.exit(0);
        }

        for (int i = 0; i < position; i++) {
            res[i] = inputArr[i];
        }
        res[position] = element;

        for (int i = position; i < inputArr.length; i++) {
            res[i + 1] = inputArr[i];
        }
        for (int i = 0; i < res.length; i++) {
            System.out.print(res[i] + " ");
        }
        sc.close();
    }
}