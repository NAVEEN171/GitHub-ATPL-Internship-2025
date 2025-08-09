package accessModifiers;

public class TestCls {
    public int num=5;
    //same class with public
    public int getNumber(){
        return num;
     }
}
//cannot be created like this, illegal modifier for class
// private class Test2{

// }
//cannot be created like this ok ,illegal modifier for class
// protected class Test3{

// }


//default
class Book{
     String bookName="Harry Potter";
     int price=5000;
}

