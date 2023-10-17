import java.util.*;

public class Student2 {
    private String Name;
    private int Age;
    private int[] Scores;

    public Student2(String name, int age, int[] scores) {
        this.Name = name;
        this.Age = age;
        this.Scores = scores;
    }

    public Student2() {

    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Student2[] students = new Student2[3];
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
            students[i] = new Student2(name, age, scores);
        }
        boolean exit = false;
        while (!exit) {
            System.out.println("\n**********Student Management System*********:");
            System.out.println("1. Average score for each student");
            System.out.println("2. Details of each student");
            System.out.println("3. Sorting");
            System.out.println("4. Exit");
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
                    List<Student2> studentList = Arrays.asList(students); // Convert array to list
                    Student2 studentInstance = new Student2(); // Create an instance
                    studentInstance.aSorting(studentList);
                    break;

                case 4:
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
    public void aSorting(List<Student2> students){
        Collections.sort(students, Comparator.comparingDouble(Student2::averageScore));
        System.out.println("Students sorted in ascending order of average scores:");
        for (Student2 student : students) {
            System.out.println("Name: "+student.getName()+ ", Age: " +student.getAge()+", Average Marks: "+student.averageScore());
        }

    }
}
