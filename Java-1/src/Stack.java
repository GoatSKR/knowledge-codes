import java.util.ArrayList;
import java.util.Scanner;

public class Stack {
    ArrayList<Integer> stack = new ArrayList<>(20);

    public static void main(String[] args) {
        Stack stack = new Stack();
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("Stack Interface");
            System.out.println("1. Push.");
            System.out.println("2. Pop.");
            System.out.println("3. Check Empty.");
            System.out.println("4. Print.");
            System.out.println("5. Exit.");
            System.out.println("Enter your choice: ");
            int ch = sc.nextInt();
            switch (ch) {
                case 1:
                    System.out.println("Enter the value to push into the stack : ");
                    int val = sc.nextInt();
                    stack.push(val);
                    break;
                case 2:
                    Integer pop = stack.pop();
                    if (pop!=null){
                        System.out.println(pop+" got popped from the stack.");
                    } else{
                        System.out.println("Stack is empty!!");
                    }
                    break;
                case 3:
                    if(stack.isEmpty()){
                        System.out.println("Stack is Empty!!");
                    } else {
                        System.out.println("Stack is not Empty!!!");
                    }
                    break;
                case 4:
                    stack.display();
                    break;
                case 5:
                    System.out.println("Exiting app!!");
                    sc.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid Choice!!");
                    break;
            }
        }
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public void display() {
        if (!isEmpty()) {
            System.out.println("Stack Elements : ");
            for (int j = stack.size() - 1; j >= 0; j--) {
                System.out.println(stack.get(j) + " ");
            }
            System.out.println();
        } else {
            System.out.println("Stack is empty!!");
        }
    }

    public void push(int val) {
        if (stack.size() < 10) {
            stack.add(val);
            System.out.println(val + " pushed into the stack!!");
        } else {
            System.out.println("Stack is full of 20 elements. Cannot push!!");
        }
    }

    public Integer pop() {
        if(!isEmpty()){
            return stack.remove(stack.size()-1);
        }
        return null;
    }
}
