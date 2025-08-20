import java.util.ArrayDeque;
import java.util.Deque;

import java.util.Scanner;

public class PalindromecheckerDeque {
    public static boolean palindromeCheck(Deque<Character> palindromeChecker) {
        Character firstElement;
        Character lastElement;
        int len = palindromeChecker.size();
        if (palindromeChecker.isEmpty()) {
            return false;
        }
        if (palindromeChecker.size() == 1) {
            return true;
        } else {
            for (int i = 0; i < len / 2; i++) {
                firstElement = palindromeChecker.peekFirst();
                lastElement = palindromeChecker.peekLast();
                if (firstElement != null && lastElement != null) {
                    if (Character.toLowerCase(firstElement) != Character.toLowerCase(lastElement)) {
                        return false;
                    }
                    palindromeChecker.pollFirst();
                    palindromeChecker.pollLast();
                }
            }
            return true;
        }

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String originalStr = sc.next();
        Deque<Character> palindromeChecker = new ArrayDeque<>();
        for (int i = 0; i < originalStr.length(); i++) {
            palindromeChecker.add(originalStr.charAt(i));
        }

        System.out.println(palindromeCheck(palindromeChecker));
        sc.close();
    }
}
