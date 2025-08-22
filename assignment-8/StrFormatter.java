public class StrFormatter {

    public static String constructStringFormatter(String name, int Age, String dept, float cgpa) {

        return String.format("| %-10s | %-3d | %-12s | %-3.2f |", name, Age, dept, cgpa);

    }

    public static void main(String[] args) {
        String formatedString = String.format("| %-10s | %-3s | %-12s | %-3s |", "Name", "Age", "Department", "cgpa");
        System.out.println("------------------------------------------");

        System.out.println(formatedString);
        System.out.println("------------------------------------------");
        String resultstring = constructStringFormatter("Naveen", 21, "ECE", 9.4f);
        System.out.println(resultstring);
        resultstring = constructStringFormatter("Mahesh", 25, "CSE", 6.7f);
        System.out.println(resultstring);
        resultstring = constructStringFormatter("Jadeja", 39, "EEE", 9.65f);
        System.out.println(resultstring);
        System.out.println("------------------------------------------");

    }
}
