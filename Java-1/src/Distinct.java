import java.util.HashMap;
import java.util.Scanner;

public class Distinct {
    public static void main(String args[]) {
        String str;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter String - ");
        str = sc.nextLine();
        int count = 0;
        HashMap<Character, Integer> lastINdexMap = new HashMap<>();
        int n = str.length();
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            char ch = str.charAt(i);
            if (lastINdexMap.containsKey(ch)) {
                int lastINdex = lastINdexMap.get(ch);
                dp[i] = Math.min(i - lastINdex, dp[i - 1] + 1);
            } else {
                if (i > 0) {
                    dp[i] = dp[i - 1] + 1;
                } else {
                    dp[i] = 1;
                }
            }
            lastINdexMap.put(ch, i);
            count += dp[i];
        }
        System.out.println(count);
    }
}
