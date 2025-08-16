//   forward=[]
//   back=[]
//   current=""

// forward=[]
//back=[a,b]
//current="c"


import java.util.ArrayDeque;
import java.util.Deque;

public class BrowserHistory {
    String currentUrl=null;
    public Deque<String> back=new ArrayDeque<>();
    public Deque<String> fwd=new ArrayDeque<>();


    public String visitUrl(String url){
        if(currentUrl!=null) back.push(this.currentUrl);
        fwd.clear();
        this.currentUrl=url;
        return this.currentUrl;
    }

    public String backNavigate(){
        if(back.isEmpty()) return this.currentUrl;
        fwd.push(currentUrl);
        currentUrl=back.pop();
        return this.currentUrl;
    }

    public String forward(){
        if(fwd.isEmpty()) return this.currentUrl;
        back.push(currentUrl);
        currentUrl=fwd.pop();
        return this.currentUrl;
    }

    public void logHistory(){

        System.out.println("-----------------");
        System.out.println("forward Stack-"+fwd);
        System.out.println("current-"+currentUrl);
        System.out.println("backward Stack-"+back);
    }



    public static void main(String[] args) {
        BrowserHistory browser=new BrowserHistory();
        browser.visitUrl("Google.com");
        browser.visitUrl("Amazon.com");
        browser.visitUrl("FlipKart.com");
        browser.visitUrl("SnapChat.com");
        browser.visitUrl("Insta.com");

        browser.logHistory();
        browser.forward();
        browser.logHistory();
        browser.backNavigate();
        browser.backNavigate();
        browser.logHistory();

    }
}
