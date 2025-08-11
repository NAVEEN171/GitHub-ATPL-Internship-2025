package classObjects;

 class Book {
      private String title;
      private float price;
      private float originalPrice;
      private String author;
       Book(String title,int price,String author){
        this.title=title;
        this.originalPrice=price;
        this.price=price;
        this.author=author; 
       }
       void applyDiscount(float discount){
        if(discount<=60){
             this.price=this.originalPrice-this.originalPrice*(discount/100);
        }
       }
       void showBookDetails(){
           System.out.println("BookName : "+this.title);
           System.out.println("author : "+this.author);
           System.out.println("originalPrice : "+this.originalPrice);
           System.out.println("price: "+this.price);

       }
       
}

public class BookStore {
    public static void main(String args[]){
           Book book1=new Book("Harry Potter", 2000, "J. K. Rowling");
           book1.showBookDetails();
           book1.applyDiscount(90);
           book1.showBookDetails();
           Book book2=new Book("Spider Man", 4000, "Peter Parkar");
           book2.showBookDetails();
           book2.applyDiscount(10);
           book2.showBookDetails();

    }   
}


