import java.util.Scanner;

public class BankAtm {
    private int balance;

    BankAtm(int amount) {
        this.balance = amount;
    }

    public void depositAmount(int amount) {
        this.balance = this.balance + amount;
    }

    public void withDrawMoney(int withDrawAmount) throws InSufficientBalance {
        System.out.println(withDrawAmount);
        if (this.balance - withDrawAmount >= 500) {
            this.balance = this.balance - withDrawAmount;
        } else {
            throw new InSufficientBalance();
        }
    }

    public void checkBalance() {
        System.out.println("Balance amount in your Account : " + balance);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Initial amount you need to have in your account ! : ");
        int initialBalance = sc.nextInt();
        BankAtm atmProcess = new BankAtm(initialBalance);
        boolean loopSwitch = true;
        int option;

        while (loopSwitch) {
            System.out.println(
                    "Enter a option from 1 to 4 \n 1: deposit amount \n 2:check Balance \n 3:withDraw amount \n 4:Exit ");
            option = sc.nextInt();
            switch (option) {
                case 1:
                    System.out.print("Enter amount you want to Deposit : ");
                    initialBalance = sc.nextInt();
                    atmProcess.depositAmount(initialBalance);
                    break;
                case 2:
                    atmProcess.checkBalance();
                    break;
                case 3:
                    System.out.print("Enter amount you want to Withdraw : ");
                    initialBalance = sc.nextInt();
                    try {
                        atmProcess.withDrawMoney(initialBalance);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    break;
                case 4:
                    System.out.println("Transactions got completed! ");
                    loopSwitch = false;
                    break;
                default:
                    System.out.println("selected option is not valid ! enter option from 1-4 ");
            }
        }

    }

}

class InSufficientBalance extends RuntimeException {
    InSufficientBalance() {
        super("Insufficient Balance in your account! you need to maintain a minimum balance of 500 in your account");
    }
}