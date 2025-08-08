public class LaptopStore {
    public static void main(String args[]){
        Laptop laptop1=new Laptop("HP", 16, "Ryzen i5 core"); 
        System.out.println(laptop1.laptopProcessor);
        Laptop laptop2=new Laptop("Lenovo");
        System.out.println(laptop2.laptopProcessor);
        Laptop laptop3=new Laptop(32);
        System.out.println(laptop3.brand);
    }
}


class Laptop{
    String brand;
    int laptopRam;
    String laptopProcessor;
    Laptop(String brand,int laptopRam,String lProcessor){
        this.brand=brand;
        
        this.laptopProcessor=lProcessor;
        this.laptopRam=laptopRam;

    }
    Laptop(String brand){
          this.brand=brand;
          this.laptopProcessor="Intel core i7";
          this.laptopRam=8;
    }
    Laptop(int laptopRam){
          this.brand="Apple";
          this.laptopProcessor="Intel core i7";
          this.laptopRam=laptopRam;
    }

}
