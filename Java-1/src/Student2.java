import java.util.*;
public class Student2 {
    private String Name;
    private int Age;
    private int[] Scores;

    @Override
    public String toString() {
        return "Student2{" +
                "Name='" + Name + '\'' +
                ", Age=" + Age +
                ", Scores=" + Arrays.toString(Scores) +
                '}';
    }

    public Student2(String name, int age, int[] scores) {
        this.Name = name;
        this.Age = age;
        this.Scores = scores;
    }
    public Student2() {
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Student2> students = new ArrayList<Student2>();
        Student2 studentInstance = new Student2();
        System.out.println("Enter details of 3 students:");
        for (int i = 0; i < 3; i++) {
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
            Student2 std = new Student2(name, age, scores);
            students.add(std);
        }
        boolean exit = false;
        while (!exit) {
            System.out.println("\n**********Student Management System*********:");
            System.out.println("1. Average score for each student");
            System.out.println("2. Details of each student");
            System.out.println("3. Sorting");
            System.out.println("4. Searching ");
            System.out.println("5. Updating according to name.");
            System.out.println("6. Remove Student data from list.");
            System.out.println("7. Exit ");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    for (int i = 0; i < students.size(); i++) {
                        double averageScore = students.get(i).averageScore();
                        System.out.println("Student " + (i + 1) + " is having Average Score = " + averageScore);
                    }
                    break;
                case 2:
                    for (int i = 0; i < students.size(); i++) {
                        System.out.println("Name: " + students.get(i).getName() + ", Age: " + students.get(i).getAge() +
                                ", Average Score: " + students.get(i).averageScore());
                    }
                    break;
                case 3:
                    System.out.println("Enter A to sort in Ascending or enter D to sort in descending : ");
                    String ch = scanner.next();
                    ch = ch.toLowerCase();
                    if(ch.equals("a")){
                        studentInstance.aSorting(students);
                    }else{
                        studentInstance.dSorting(students);
                    }
                    break;
                case 4:
                    System.out.println("Enter the name of the student you want to search : ");
                    String nam = scanner.next();
                    scanner.nextLine();
                    studentInstance.searching(students,nam);
                    break;
                case 5:
                    System.out.println("Enter the student name you want to update the data : ");
                    String n = scanner.next();
                    scanner.nextLine();
                    studentInstance.update(students,n,scanner);
                    break;
                case 6:
                    System.out.println("Enter the student name you want to remove from the list : ");
                    String delName = scanner.next();
                    scanner.nextLine();
                    studentInstance.deleteStudent(students,delName);
                    break;
                case 7:
                    exit = true;
                    System.out.println("Exiting from App Thank you!");
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
    public void aSorting(ArrayList<Student2> students){
        Collections.sort(students, Comparator.comparingDouble(Student2::averageScore));
        System.out.println("Students sorted in ascending order of average scores:");
        for (Student2 student : students) {
            System.out.println("Name: "+student.getName()+ ", Age: " +student.getAge()+", Average Marks: "+student.averageScore());
        }
    }
    public void dSorting(ArrayList<Student2> students){
        Collections.sort(students, Comparator.comparingDouble(Student2::averageScore).reversed());
        System.out.println("Students sorted in descending order of average scores: ");
        for (Student2 student : students){
            System.out.println("Name: "+student.getName()+ ",Age: "+student.getAge()+
                    ", Average Score: "+student.averageScore());
        }
    }
    public void searching(ArrayList<Student2> students, String SearchStud){
        for(Student2 student : students) {
            if (student.getName().equals(SearchStud)) {
                System.out.println("Student is found: ");
                System.out.println("NAME: " + student.getName() + ", AGE: " + student.getAge() + ", AVERAGE MARKS: " + student.averageScore());
                return;
            }
        }
        System.out.println("Student is not found!!!");
    }
    public void update(ArrayList<Student2> students, String UpdateName, Scanner scanner){
        for(Student2 student : students){
            if(student.getName().equalsIgnoreCase(UpdateName)){
                System.out.println("Enter updated scores for "+UpdateName+": ");
                int[] newScores = new int[5];
                for(int i=0;i<5;i++){
                    System.out.println("Enter score for Subject "+(i+1)+": ");
                    newScores[i] = scanner.nextInt();
                }
                student.Scores = newScores;
                System.out.println("Scores are updated!");
                System.out.println("Updated Average score: "+student.averageScore());
                return;
            }
        }
        System.out.println("Student not found!");
    }

    public void deleteStudent(ArrayList<Student2> students, String deletingName){
        for(Student2 student : students){
            if(student.getName().equalsIgnoreCase(deletingName)){
                students.remove(student);
                System.out.println("Student "+deletingName+" removed.");
                return;
            }
        }
        System.out.println("Student not found!!");
    }

}


