// See https://aka.ms/new-console-template for more information
using System;
class Program1  
{  
    // declare delegate  
    public delegate void PrintWord(int value);  
  


  public static void PrintNum(int num)  
    {  
        Console.WriteLine("Number: {0,-12:N0}",num);  
    }  
  
    public static void PrintMoney(int money)  
    {  
        Console.WriteLine("Money: {0:C}", money);  
    }  

    
    static void Main(string[] args)  
    {  
        // Print delegate points to PrintNum  
        PrintWord printDel = PrintNum;  
          
        // or  
        // Print printDel = new Print(PrintNumber);  
              
        printDel(100000);  
        printDel(200);  
  
        // Print delegate points to PrintMoney  
        printDel = PrintMoney;  
  
        printDel(10000);  
        printDel(200);  
    }  
  
    
}  