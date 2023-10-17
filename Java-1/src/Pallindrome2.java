import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Pallindrome2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String - ");
        String str = sc.nextLine();
        printAllPalindromes(str);
    }

    public static void printAllPalindromes(String str) {
        Set<String> probables = new HashSet<>();
        generateProbable("", str, probables);

        for (String strng : probables) {
            if (checkPallindrome(strng)) {
                System.out.print(strng + " ");
            }
        }
    }

    public static void generateProbable(String ans, String str, Set<String> palindromes) {
        if (str.length() == 0) {
            palindromes.add(ans);
            return;
        }

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            String remaining = str.substring(0, i) + str.substring(i + 1);
            generateProbable(ans + c, remaining, palindromes);
        }
    }

    public static boolean checkPallindrome(String str) {
        int l = 0;
        int r = str.length() - 1;

        while (l < r) {
            if (str.charAt(l) != str.charAt(r)) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
