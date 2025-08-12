package innerClasses;

public class StaticInnerDemo {
    public static void main(String[] args) {
        SystemUtils utils = new SystemUtils();
        utils.showUtils();
        SystemUtils.Logger log1 = new SystemUtils.Logger();
        log1.showLogger();
    }
}

class SystemUtils {
    void showUtils() {
        System.out.println("showing util libraries...");
    }

    static class Logger {
        void showLogger() {
            System.out.println("I am in the static logger function");
        }
    }
}
