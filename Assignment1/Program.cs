/*	Name: Derek Thibert
	Date: 180911
	Purpose: To output text to console.
*/

using System;
using static System.Console;

namespace Assignment
{

    class Assignment
    {
        static void Main()
        {
            WriteLine("Output #1:");

            WriteLine(" It was the best of times, it was the worst of times.");
            //ReadKey();

            WriteLine("Output #2:");

            WriteLine(" It was the best\n of times, it was\n the worst of times.");
            //ReadKey();

            WriteLine("Output #3:");

            WriteLine(" It\n was\n the\n best\n of\n times,\n it\n was\n the\n worst\n of\n times.");
            ReadKey();
        }
    }
}
