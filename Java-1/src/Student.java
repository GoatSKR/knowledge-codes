import java.util.Comparator;
import java.util.Scanner;

class Student {
    private String Name;
    private int Age;
    private int[] Scores;

    public Student(String name, int age, int[] scores) {
        this.Name = name;
        this.Age = age;
        this.Scores = scores;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Student[] students = new Student[3];
        System.out.println("Enter details of 3 students:");

        for (int i = 0; i < students.length; i++) {

            System.out.println("Enter details for Student " + (i + 1));
            System.out.print("Name: ");
            String name = scanner.next();
            System.out.print("Age: ");
            int age = scanner.nextInt();
            System.out.println("Enter scores for 5 subjects:");
            int[] scores = new int[5];
            for (int j = 0; j < 5; j++) {
                System.out.print("Enter score for Subject " + (j + 1) + ": ");
                scores[j] = scanner.nextInt();
            }
            students[i] = new Student(name, age, scores);
        }
        boolean exit = false;
        while (!exit) {
            System.out.println("\n**********Student Management System*********:");
            System.out.println("1. Average score for each student");
            System.out.println("2. Details of each student");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    for (int i = 0; i < students.length; i++) {
                        double averageScore = students[i].averageScore();
                        System.out.println("Student " + (i + 1) + " is having Average Score = " + averageScore);
                    }
                    break;
                case 2:
                    for (int i = 0; i < students.length; i++) {
                        System.out.println("Name: " + students[i].getName() + ", Age: " + students[i].getAge() +
                                ", Average Score: " + students[i].averageScore());
                    }
                    break;
                case 3:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }

        scanner.close();
    }

    public String getName() {
        return Name;
    }

    public int getAge() {
        return Age;
    }

    public int[] getScores() {
        return Scores;
    }

    public double averageScore() {
        int sum = 0;
        for (int score : Scores) {
            sum += score;
        }
        return (double) sum / Scores.length;
    }


}