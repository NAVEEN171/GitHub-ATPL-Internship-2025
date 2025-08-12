public class AnalyseSentence {
    public static void main(String[] args) {
        String str1="Learning java is fun and interesting";
        String[] strArr=str1.split(" ");
        System.out.println(strArr.length);
        System.out.println("is String starting with Learn : "+str1.startsWith("Learn"));
        System.out.println("is String ending with ing : "+str1.endsWith("ing"));
        System.out.println("First Occurence of i : "+str1.indexOf('i'));
        System.out.println("Last Occurence of i : "+str1.lastIndexOf('i'));
    }
}
