public class Bank {
      public static void main(String args[]){
        BankAccount acc1=new BankAccount(5000);
        acc1.checkBalance();
        acc1.depositAmount(5000);
        acc1.checkBalance();
        acc1.withDrawAmount(10000);
        acc1.withDrawAmount(1000);
        acc1.checkBalance();
      }

}

 class BankAccount{
    private int balance=0;
      final int minBalance=500;
      
      BankAccount(int balance){
        this.balance=balance;
      }

      public void checkBalance(){
         System.out.println("Balance is : "+balance);
      }

      public void withDrawAmount(int amountToWithdraw){
          
        if(balance<amountToWithdraw){
            System.out.println("Insufficient Balance");
        }
        else if(balance-500<amountToWithdraw){
          
            System.out.println("Min balance of "+this.minBalance+" should be maintained in your account");

        }
        else{
            this.balance=this.balance-amountToWithdraw;
            System.out.println("you have withdrawed an amount of "+amountToWithdraw);
        }
        
      }

      public void depositAmount(int amount){
           if(amount>0){
              this.balance=this.balance+amount;
              System.out.println("You have successfully Deposited an amount of: "+amount);
           }
      }
}
