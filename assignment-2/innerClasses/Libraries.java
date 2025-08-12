package innerClasses;

public class Libraries {
    public static void main(String[] args) {
        Library L = new Library();
        L.showLibrary();
        Library.Norms rules = L.new Norms();
        rules.followNorms();
    }

}

class Library {
    public int num = 8;

    void showLibrary() {
        System.out.println("Search for a book and read it ");
    }

    class Norms {
        void followNorms() {
            System.out.println("Stay Silent in library !");
        }
    }
}