import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class MathOperations {
    public static void main(String[] args) {
        Set<Integer> set1=new HashSet<>();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        set1.add(4);
        Set<Integer> set2=new HashSet<>();
        set2.add(3);
        set2.add(4);
        set2.add(5);
        set2.add(6);
        int tempEle;
        List<Integer> intersectionNums=new ArrayList<>();
        Set<Integer> union=new HashSet<>();
        List<Integer> DiffWithRespectToA=new ArrayList<>();
        List<Integer> DiffWithRespectToB=new ArrayList<>();




        Iterator<Integer> it=set1.iterator();
        while(it.hasNext()){
            tempEle=it.next();
            union.add(tempEle);
            if(set2.contains(tempEle)){
              intersectionNums.add(tempEle);
            }
            else{
                DiffWithRespectToA.add(tempEle);
            }
        }
        it=set2.iterator();
        while(it.hasNext()){
            tempEle=it.next();
            if(!set1.contains(tempEle)){
               DiffWithRespectToB.add(tempEle);
            }
            union.add(tempEle);
        }
        System.out.println("Intersection");
        for(Integer num:intersectionNums){
            System.out.print(num+ " ");
        }
        System.out.println();
        System.out.println("Union");
        for(Integer num:union){
            System.out.print(num+ " ");
        }
        System.out.println();
        System.out.println("A-B");
        for(Integer num:DiffWithRespectToA){
            System.out.print(num+ " ");
        }
        System.out.println();
        System.out.println("B-A");
        for(Integer num:DiffWithRespectToB){
            System.out.print(num+ " ");
        }
        System.out.println();

        


    }
}
