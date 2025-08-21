import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class WordsFrequency {

    public static void main(String[] args) {
        Map<String, Integer> freqCount = new HashMap<>();

        try {
            FileReader fr = new FileReader("./assignment-7/input.txt");
            BufferedReader br = new BufferedReader(fr);
            FileWriter fw = new FileWriter("./assignment-7/word_frequencies.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            String Line;
            StringBuffer fileContent = new StringBuffer();
            while ((Line = br.readLine()) != null) {
                fileContent.append(" " + Line.trim());
            }
            String[] splittedString = fileContent.toString().split(" ");
            for (String str : splittedString) {
                if (str.trim().length() > 0) {
                    freqCount.put(str, (freqCount.getOrDefault(str, 0)) + 1);
                }
            }

            ArrayList<Map.Entry<String, Integer>> arr = new ArrayList<>();
            for (Map.Entry<String, Integer> entry : freqCount.entrySet()) {
                arr.add(entry);
            }
            Collections.sort(arr, new FrequencySorting());
            String entryText;
            for (Map.Entry<String, Integer> entry : arr) {
                entryText = entry.getKey() + ":" + entry.getValue() + " ";
                fw.write(entryText);
            }
            fw.close();
            bw.close();
            fr.close();
            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class FrequencySorting implements Comparator<Object> {
    public int compare(Object entry1, Object entry2) {
        Map.Entry e1 = (Map.Entry) entry1;
        Map.Entry e2 = (Map.Entry) entry2;
        return (Integer) e2.getValue() - (Integer) e1.getValue();

    }
}
