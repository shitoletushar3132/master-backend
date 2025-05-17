public class Star{
    public static void main(String[] args) {
    char c1 = '*';

    for(int i = 0; i < 10; i++){
      for(int j = 1; j <= i; j++){
        System.out.print(c1);
      }
      System.out.println();
    }

    for(int i = 1; i <=5; i++){

      for(int k=5; k>i; k--){
        System.out.print(" ");
      }
      
      for(int j = 1; j <= 2 *i-1; j++){
        System.out.print(c1);
      }
      System.out.println();
    }
   } 
}