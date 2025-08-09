package keywordsUsage;

public class Subscriptions {
    public static void main(String[] args) {
        User u1=new User(SubscribeOption.PRO);
        System.out.println("subscription: "+u1.SubscriptionType);
    }
    
}

enum SubscribeOption{
    PRO,
    BASIC,
    INTER
}

class Subscription{
    SubscribeOption SubscriptionType;
    Subscription( SubscribeOption SubscriptionType){
          this.SubscriptionType=SubscriptionType;
    }
}

class User extends Subscription{
    User(SubscribeOption SubscriptionType){
        super(SubscriptionType);
    }
}


