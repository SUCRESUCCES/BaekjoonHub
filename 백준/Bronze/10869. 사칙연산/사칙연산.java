import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int A,B;
        A = sc.nextInt();
        B = sc.nextInt();

        if(A >= 1 && B <= 10000){


            System.out.println(A+B);
            System.out.println(A-B);
            System.out.println(A*B);
            System.out.println(A/B);
            System.out.println(A%B);
        }
    }
}