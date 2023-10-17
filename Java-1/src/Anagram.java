import java.util.Scanner;
import java.util.Arrays;

public class Anagram {
    public static String sortString(String str) {
        char[] charArray = str.toCharArray();
        Arrays.sort(charArray);
        return new String(charArray);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Sentence 1: ");
        String S1 = sc.nextLine();
        S1 = S1.replaceAll("[^a-zA-Z]", "").toLowerCase();
        S1 = sortString(S1);

        System.out.print("Sentence 2: ");
        String S2 = sc.nextLine();
        S2 = S2.replaceAll("[^a-zA-Z]", "").toLowerCase();
        S2 = sortString(S2);
        if (S1.equals(S2)) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not Anagram");
        }
    }
}
