public class AnalyseSentence {
    public static void main(String[] args) {
        String str="Learning java is fun and interesting";
        String[] strArr=str.split(" ");
        System.out.println(strArr.length);
        System.out.println(str.startsWith("Learn"));
        System.out.println(str.endsWith("ing"));
        System.out.println(str.indexOf('i'));
        System.out.println(str.lastIndexOf('i'));
    }
}
