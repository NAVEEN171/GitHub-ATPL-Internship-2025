package abstraction;

public class PrintDemo {
    public static void main(String args[]) {
        Document d1 = new Document();
        d1.print();
        Image image1 = new Image();
        image1.print();
        Invoice invoice1 = new Invoice();
        invoice1.print();
    }
}

interface Printable {
    public void print();
}

class Document implements Printable {
    public void print() {
        System.out.println("Printing Document...");
    }
}

class Image implements Printable {
    public void print() {
        System.out.println("Printing Image...");
    }
}

class Invoice implements Printable {
    public void print() {
        System.out.println("Printing Invoice...");
    }
}
