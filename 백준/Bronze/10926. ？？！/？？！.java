import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String id = sc.nextLine();
        if(id.length() <= 50 && id.matches("[a-z]+")){
            System.out.println(id + "??!");
        }else{
            System.out.println("입력 조건이 맞지않습니다.");
        }
    }
}