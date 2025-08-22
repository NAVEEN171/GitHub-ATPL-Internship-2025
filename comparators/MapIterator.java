import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class MapIterator {
    public static void main(String[] args) {
        Map<String, Integer> productsList = new HashMap<>();
        productsList.put("Iphone", 50000);
        productsList.put("MacBook", 80000);
        productsList.put("Lenovo Laptop ", 20000);

        Iterator<Map.Entry<String, Integer>> entryIterator = productsList.entrySet().iterator();
        while (entryIterator.hasNext()) {
            Map.Entry<String, Integer> product = entryIterator.next();
            System.out.println(product.getKey());
            System.out.println(product.getValue());
        }

    }
}
