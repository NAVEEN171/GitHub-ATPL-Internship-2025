import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class WordFrequencyCounter {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        HashMap<String,Integer> wordsCount=new HashMap<>();
        System.out.println("Enter paragraph ( Each word seperated by space )");
        String[] inputArr=sc.nextLine().split(" ");
        for(String word:inputArr){
            if(wordsCount.get(word)!=null){
                wordsCount.put(word,wordsCount.get(word)+1);
            }
            else{
               wordsCount.put(word,1);
            }
            // wordsCount.put(word,wordsCount.getOrDefault(word,0)+1);

        }

        System.out.println("--Words--");
        for(String word:wordsCount.keySet()){
            System.out.println("Key: "+word+" Value : "+wordsCount.get(word));
        }
        
    }
}
