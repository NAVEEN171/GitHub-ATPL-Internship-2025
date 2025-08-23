import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class NumsSort {

    public static void main(String[] args) {
        List<Integer> nums=Arrays.asList(9,5,4,3,2,1);
        nums.sort(new Comparator<Integer>() {
            public int compare(Integer a,Integer b){
                  return a-b;
            }
            
        });
        for(int i=0;i<nums.size();i++){
            System.out.println(nums.get(i)+" ");
        }
    }
}
