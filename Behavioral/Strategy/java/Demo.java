//This is a class.  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStreamReader;  
import java.util.HashMap;  

public class Demo {
	public static void main(String[] args) throws NumberFormatException, IOException {  
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));  
		System.out.print("Enter the first value: ");  
		float value1=Float.parseFloat(br.readLine());
		System.out.print("Enter the second value: ");  
		float value2=Float.parseFloat(br.readLine());

		HashMap<String, Context>  operators = new HashMap<String, Context>();
		operators.put("Add",new Context(new Addition()));
		operators.put("Sub",new Context(new Subtraction()));
		operators.put("Mul",new Context(new Multiplication()));
		
		for (String operator: operators.keySet()){
			System.out.println(operator +": "+ operators.get(operator).executeStrategy(value1,value2));
		}
	}
}	    
