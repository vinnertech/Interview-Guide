export const csharpTutorialQuestions = [
  // Phase 1
  {
    id: 1,
    title: "What is C# and the .NET Ecosystem?",
    category: "Phase 1: Introduction & Setup",
    language: "csharp",
    explanation: "**C# (pronounced 'C-Sharp')** is a modern, object-oriented, and type-safe programming language created by Microsoft in 2000. It is heavily inspired by C++ and Java but designed to be much easier to use while maintaining incredible performance and power.\n\nHowever, C# does not run directly on your computer's hardware. It relies entirely on a massive framework called **.NET** (pronounced 'dot net').\n\nThink of C# as the 'grammar and vocabulary' you use to write instructions. **.NET** is the vast ecosystem that provides two critical things:\n\n1. **The Base Class Library (BCL)**: A gigantic collection of pre-written code (like tools to read files, connect to databases, or handle dates) so you do not have to reinvent the wheel.\n2. **The Execution Engine**: The environment that actually takes your C# code, translates it, and runs it on the machine.\n\nWithout .NET, C# is just text. Together, they form one of the most powerful software development ecosystems in the world.",
    diagram: `flowchart TD
    A(["Your C# Code"]) --> B("C# Compiler")
    B --> C[".NET Ecosystem"]
    
    subgraph netEcosys ["NET Ecosystem"]
        D["Base Class Library   pre-written tools"]
        E["Execution Engine   runs the code"]
    end
    
    C --> D
    C --> E
    E --> F(["Runs on Windows, Mac, Linux"])
    
    style A fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style E fill:#f59e0b,color:#fff
    style F fill:#10b981,color:#fff`,
    summary: "C# is a modern, object-oriented programming language created by Microsoft. It runs on the .NET ecosystem, which provides pre-written libraries and an execution engine."
  },
  {
    id: 2,
    title: "Why learn C#? (Real-world applications)",
    category: "Phase 1: Introduction & Setup",
    language: "csharp",
    explanation: "C# is incredibly versatile and in high demand by enterprises globally. Unlike some languages that are only good for one specific task (like web design or data science), C# is a **general-purpose** language. By learning C#, you open the door to building almost any type of software imaginable.\n\nHere is what you can build with C# today:\n\n- **Enterprise Web Applications & APIs**: Using ASP.NET Core, which is consistently ranked as one of the fastest web frameworks in the world.\n- **Video Games**: Using the Unity Game Engine. C# is the standard language for Unity, which powers over 50% of all mobile games and many PC/Console hits.\n- **Desktop Applications**: For Windows or Mac using technologies like WPF (Windows Presentation Foundation) or the modern .NET MAUI.\n- **Mobile Applications**: Building native iOS and Android apps from a single shared C# codebase using .NET MAUI.\n- **Cloud Architecture**: Building massively scalable backend systems and microservices running on Microsoft Azure or AWS.",
    diagram: `flowchart TD
    A(("C# and .NET")) --> B("Web Apps")
    A --> C("Mobile Apps")
    A --> D("Video Games")
    A --> E("Desktop Apps")
    A --> F("Cloud")
    
    B --> B1("ASP.NET Core")
    B --> B2("Blazor")
    C --> C1(".NET MAUI")
    C --> C2("iOS and Android")
    D --> D1("Unity Engine")
    D --> D2("MonoGame")
    E --> E1("WPF and WinForms")
    E --> E2("Windows and Mac")
    F --> F1("Microservices")
    F --> F2("Azure / AWS")`,
    summary: "C# is incredibly versatile, used for highly-performant Web APIs, Desktop applications, Video Games (Unity), Mobile apps, and Cloud microservices."
  },
  {
    id: 3,
    title: "How C# code compiles and executes",
    category: "Phase 1: Introduction & Setup",
    language: "csharp",
    explanation: "When you write C#, your computer's processor (CPU) cannot understand it directly. CPUs only understand Machine Code (binary 1s and 0s). To get from your readable C# code to Machine Code, .NET uses a highly optimized two-step compilation process.\n\n1. **First Compilation (At Build Time)**: When you click 'Build' or run your code, the C# Compiler translates your `.cs` files into an intermediate, optimized language called **Common Intermediate Language (IL)**. This IL is packaged into an `.exe` or `.dll` file. This file is platform-agnostic, meaning it can run on Windows, Mac, or Linux.\n2. **Second Compilation (At Runtime)**: When you actually double-click or execute the program, a component of .NET called the **Common Language Runtime (CLR)** takes over. The CLR includes a **Just-In-Time (JIT) Compiler**. The JIT Compiler reads the IL and translates it into the exact Machine Code required by your specific computer's CPU, right exactly at the moment it is needed.\n\nThis two-step process allows C# to be cross-platform while maintaining incredibly fast execution speeds.",
    diagram: `flowchart TD
    A(["1. Source Code   .cs files"]) -->|"C# Compiler"| B["2. Intermediate Language   IL / DLL"]
    B -->|"Executed by"| C{"3. Common Language Runtime   CLR"}
    C -->|"Just-In-Time Compiler   JIT translates"| D(["4. Machine Code   1s and 0s"])
    D -->|"Executed by CPU"| E(("Hardware"))
    
    style A fill:#3b82f6,stroke:#fff,stroke-width:2px,color:#fff
    style B fill:#8b5cf6,stroke:#fff,stroke-width:2px,color:#fff
    style C fill:#f59e0b,stroke:#fff,stroke-width:2px,color:#fff
    style D fill:#10b981,stroke:#fff,stroke-width:2px,color:#fff
    style E fill:#ef4444,stroke:#fff,stroke-width:2px,color:#fff`,
    summary: "C# compiles to an Intermediate Language (IL). At runtime, the CLR uses a Just-In-Time (JIT) compiler to translate IL into hardware-specific Machine Code."
  },
  {
    id: 4,
    title: "Writing your first 'Hello, World!' program",
    category: "Phase 1: Introduction & Setup",
    language: "csharp",
    explanation: "To write C#, you need an Integrated Development Environment (IDE). The most popular choices are **Visual Studio** (the heavy, powerful industry standard) or **Visual Studio Code** (lightweight and customizable).\n\nLet's break down the foundational structure of a classic C# program. Every single element has a specific purpose:\n\n- `using System;`: This tells the compiler to import the basic 'System' tools provided by .NET. Without this, we couldn't easily print text to the screen.\n- `namespace MyFirstApp`: A namespace is like a folder. It organizes your code and prevents naming collisions. If you have two classes named 'User', putting them in different namespaces keeps them separate.\n- `class Program`: C# is strictly Object-Oriented. Almost every piece of code must live inside a blueprint called a `class`.\n- `static void Main(string[] args)`: This is the **Entry Point**. Whenever .NET runs your app, it searches exactly for this `Main` method and starts executing line-by-line from there.\n- `Console.WriteLine()`: A built-in command from the System namespace that prints a line of text to the console window.",
    code: `using System; // 1. Importing the System library

namespace MyFirstApp // 2. Organizing our code into a logical namespace
{
    class Program // 3. A container (class) for our code logic
    {
        // 4. The main entry point where execution begins
        static void Main(string[] args) 
        {
            // 5. Printing text to the terminal window
            Console.WriteLine("Hello, World!"); 
        }
    }
}`,
    diagram: `flowchart TD
    A["using System;   Imports .NET libraries"] --> B["namespace   Organizes code logically"]
    B --> C["class Program   Blueprint for code"]
    C --> D["static void Main   The Engine Starter"]
    D --> E["Console.WriteLine   The actual action"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#f59e0b,color:#fff
    style E fill:#10b981,color:#fff`,
    example: "Expected Output: Hello, World!",
    summary: "A traditional C# program requires a namespace, a class, and a static Main method as the execution entry point."
  },
  
  // Phase 2
  {
    id: 5,
    title: "Variables, Data Types, and Memory Architecture",
    category: "Phase 2: Core Fundamentals",
    language: "csharp",
    explanation: "A **Variable** is a named container used to store data in the computer's memory. C# is a **statically typed** language, meaning you must explicitly declare exactly what kind of data the variable will hold (the **Data Type**) before you can use it.\n\n**Memory Architecture: The Stack vs The Heap**\nUnderstanding how C# manages memory will make you a significantly better developer. Memory is divided into two areas:\n\n1. **The Stack**: Very fast, automatically managed, but limited in size. It stores **Value Types** (primitive data like `int`, `double`, `bool`, `char`). The actual value (e.g., the number 25) is stored directly here.\n2. **The Heap**: Slower, much larger, and dynamic. It stores **Reference Types** (complex data like `string`, Arrays, and objects/classes). The actual data lives in the Heap, while a small 'pointer' or 'reference' lives on the Stack, telling the program where to find the data in the Heap.\n\n**Constants**: If you declare a variable with the `const` keyword, its value is locked forever and cannot be changed during execution.",
    code: `// Syntax: DataType variableName = value;

// VALUE TYPES (Stored directly on the Stack)
int age = 25;               // 'int' (Integer) stores whole numbers (-2,147,483,648 to 2,147,483,647)
double price = 19.99;       // 'double' stores decimal numbers with high precision
char grade = 'A';           // 'char' stores a single character (must use single quotes '')
bool isStudent = true;      // 'bool' stores exactly true or false

// REFERENCE TYPES (Stored on the Heap, Stack holds a pointer)
string name = "John Doe";   // 'string' stores text (must use double quotes "")

// CONSTANTS
const double Pi = 3.14159;  // Locked. Trying to do 'Pi = 4;' later will crash the compiler.`,
    diagram: `graph LR
    subgraph Stack["Stack Memory (Fast, Small)"]
        A["int age = 25"]
        B["string name = 0x8F2A (Pointer)"]
    end
    subgraph Heap["Heap Memory (Dynamic, Large)"]
        C["John Doe"]
    end
    B -.->|"Pointer directs to"| C
    
    style A fill:#3b82f6,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff`,
    summary: "Variables require explicit data types. Value types (int, bool) live on the fast Stack memory; Reference types (string, objects) live on the dynamic Heap memory."
  },
  {
    id: 6,
    title: "Type Casting and Data Conversion",
    category: "Phase 2: Core Fundamentals",
    language: "csharp",
    explanation: "Often, you will receive data in one type but need it in another (e.g., reading a user's age from the console always comes in as a `string` text, but you need an `int` to do math on it). Converting between types is called **Casting** or **Conversion**.\n\n- **Implicit Casting**: Happens automatically when you convert a smaller type to a larger type (like `int` to `double`). It is 100% safe because no data can possibly be lost.\n- **Explicit Casting**: Requires you to manually force the conversion by putting the target type in parentheses `(type)`. This is required when going from a larger type to a smaller type (like `double` to `int`). It is dangerous because data can be lost (e.g., losing the decimals).\n- **Helper Methods (Conversion)**: When types are entirely incompatible (like converting the text word \"30\" into the mathematical number 30), casting fails. You must use parsing methods like `Convert.ToInt32()` or `int.Parse()`.",
    code: `// 1. IMPLICIT CASTING (Automatic, Safe)
int smallBox = 9;
double bigBox = smallBox; // Automatically becomes 9.0. Safe because double is larger than int.

// 2. EXPLICIT CASTING (Manual, Data Loss Possible)
double pi = 3.14159;
// int roundedPi = pi; // ERROR! Compiler stops you to prevent accidental data loss.
int roundedPi = (int)pi; // SUCCESS. We force it. The decimal is chopped off. Result: 3.

// 3. CONVERSION / PARSING (Incompatible types)
string userInput = "30";
// int userAge = (int)userInput; // ERROR! Cannot cast text to a number.

int actualAge = Convert.ToInt32(userInput); // Safe conversion using the Convert class.
int anotherAge = int.Parse(userInput);      // Another common way to parse strings to ints.`,
    diagram: `flowchart LR
    A["int 9"] -->|"Implicit   Auto and Safe"| B["double 9.0"]
    C["double 3.14"] -->|"Explicit (int)   Data Loss!"| D["int 3"]
    E["string '30'"] -->|"Convert.ToInt32()   Parsing"| F["int 30"]
    
    style A fill:#3b82f6,color:#fff
    style B fill:#10b981,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#ef4444,color:#fff
    style E fill:#3b82f6,color:#fff
    style F fill:#f59e0b,color:#fff`,
    summary: "Convert types using Implicit Casting (safe/automatic), Explicit Casting (manual/data loss), or Parsing methods (Convert.ToInt32) for strings."
  },
  {
    id: 7,
    title: "Operators (Arithmetic, Relational, Logical)",
    category: "Phase 2: Core Fundamentals",
    language: "csharp",
    explanation: "Operators are special symbols used to perform operations on variables and values. They form the core logic of your application's mathematical and decision-making capabilities.\n\n- **Arithmetic Operators**: Used for standard math operations (`+`, `-`, `*`, `/`). A special operator is the Modulo (`%`), which divides two numbers and returns strictly the remainder. It's incredibly useful for finding even/odd numbers.\n- **Relational Operators**: Used to compare two values. They ALWAYS return a boolean (`true` or `false`). Includes greater than `>`, less than `<`, equal to `==`, and not equal to `!=`.\n- **Logical Operators**: Used to combine multiple boolean conditions together. \n  - **AND (`&&`)**: Returns true ONLY if both the left AND right sides are true.\n  - **OR (`||`)**: Returns true if AT LEAST ONE side is true.",
    code: `int a = 10;
int b = 3;

// --- ARITHMETIC ---
int sum = a + b;       // 13
int remainder = a % b; // 1 (10 divided by 3 is 9, with 1 left over)

// --- RELATIONAL (Returns True/False) ---
bool isGreater = a > b;  // true
bool isEqual = a == b;   // false (Notice double equals '==' is for comparison, single '=' is assignment)
bool isNotEqual = a != b; // true

// --- LOGICAL (Combining conditions) ---
bool hasLicense = true;
bool hasCar = false;

// AND: Must have BOTH to drive. Result: false
bool canDrive = hasLicense && hasCar; 

// OR: Must have AT LEAST ONE to use public transit. Result: true
bool canTakeBus = hasLicense || hasCar;`,
    diagram: `flowchart TD
    subgraph AndGate["Logical AND andand"]
        A("True") --> C{"andand"}
        B("False") --> C
        C --> D["Result: FALSE"]
    end
    subgraph OrGate["Logical OR ||"]
        E("True") --> G{"||"}
        F("False") --> G
        G --> H["Result: TRUE"]
    end
    
    style C fill:#ef4444,color:#fff
    style D fill:#ef4444,color:#fff
    style G fill:#10b981,color:#fff
    style H fill:#10b981,color:#fff`,
    summary: "Operators allow you to perform math (Arithmetic), compare values to get booleans (Relational), or combine logical boolean conditions (Logical)."
  },
  {
    id: 8,
    title: "Console Input, Output, and String Interpolation",
    category: "Phase 2: Core Fundamentals",
    language: "csharp",
    explanation: "Building interactive applications requires communicating with the user. In terminal applications, we use the `Console` class.\n\n- **Outputting Text**: `Console.WriteLine()` prints text and automatically moves to a new line. `Console.Write()` prints text but keeps the cursor on the exact same line.\n- **Receiving Input**: `Console.ReadLine()` pauses the program and waits for the user to type something and press Enter. It ALWAYS returns the user's input as a `string`.\n- **String Interpolation**: A modern C# feature introduced in C# 6. By placing a `$` symbol right before a string's opening quote, you can seamlessly inject variables directly inside curly braces `{}`. This entirely replaces the old, messy way of concatenating strings with `+` signs.",
    code: `using System;

class Program
{
    static void Main()
    {
        // 1. Outputting text
        Console.WriteLine("Welcome to the Interactive C# Guide!");
        
        // Write keeps the cursor on the same line for the user to type
        Console.Write("Please enter your name: ");
        
        // 2. Receiving Input
        string userName = Console.ReadLine(); 
        
        // Let's ask for their age. Remember, ReadLine returns a string!
        Console.Write("Please enter your age: ");
        string ageInput = Console.ReadLine();
        int age = Convert.ToInt32(ageInput); // Parse it to an integer
        
        int nextYearAge = age + 1;
        
        // 3. String Interpolation (Using the $ symbol)
        // This is much cleaner than: "Hello, " + userName + "!"
        Console.WriteLine($"Hello, {userName}! Next year you will be {nextYearAge}.");
    }
}`,
    example: "Expected output:\nWelcome to the Interactive C# Guide!\nPlease enter your name: Alice\nPlease enter your age: 25\nHello, Alice! Next year you will be 26.",
    summary: "Use Console.WriteLine for output, Console.ReadLine for capturing string input, and the $ symbol for clean String Interpolation."
  },
  
  // Phase 3
  {
    id: 9,
    title: "If/Else Conditional Statements",
    category: "Phase 3: Control Flow",
    language: "csharp",
    explanation: "Without control flow, your program would just execute top-to-bottom every single time. **Control flow** allows your application to make intelligent decisions based on variables.\n\nThe fundamental decision block is the `if` statement. It evaluates a boolean condition (true or false). If the condition is true, it executes the code block inside its curly braces `{}`.\n\n- **`if`**: The primary condition to check.\n- **`else if`**: If the first `if` fails, the program checks this next condition. You can have unlimited `else if` blocks.\n- **`else`**: The final fallback. If absolutely every condition above it resulted in `false`, this block is guaranteed to run.",
    code: `int playerHealth = 45;

// The program checks conditions from top to bottom. 
// As soon as ONE condition is true, it runs that block and skips the rest entirely.

if (playerHealth >= 80)
{
    Console.WriteLine("Player is in excellent condition.");
}
else if (playerHealth >= 50)
{
    Console.WriteLine("Player is wounded, but fighting.");
}
else if (playerHealth > 0)
{
    Console.WriteLine("CRITICAL WARNING: Player is near death!");
}
else
{
    // If health is 0 or negative
    Console.WriteLine("Game Over.");
}`,
    diagram: `flowchart TD
    A["Start"] --> B{"Health >= 80?"}
    B -->|"Yes"| C("Excellent condition")
    B -->|"No"| D{"Health >= 50?"}
    D -->|"Yes"| E("Wounded")
    D -->|"No"| F{"Health > 0?"}
    F -->|"Yes"| G("CRITICAL WARNING")
    F -->|"No"| H("Game Over")
    
    style B fill:#3b82f6,color:#fff
    style D fill:#3b82f6,color:#fff
    style F fill:#3b82f6,color:#fff
    style H fill:#ef4444,color:#fff`,
    summary: "If/Else statements allow your code to branch and make intelligent decisions based on boolean logic evaluations."
  },
  {
    id: 10,
    title: "Switch Statements and Switch Expressions",
    category: "Phase 3: Control Flow",
    language: "csharp",
    explanation: "When you find yourself writing a massive chain of `else if` statements checking the exact same variable against specific, hardcoded values (like checking if `day == 1`, `day == 2`), a `switch` statement is a much cleaner, more readable, and slightly faster alternative.\n\nEvery `case` in a traditional switch block **must** end with the `break` keyword to prevent the code from 'falling through' into the next case.\n\n**Modern C# Feature (C# 8.0+)**: Microsoft introduced **Switch Expressions**. Instead of writing clunky `case` and `break` lines that execute code, a switch expression directly evaluates and *returns* a value instantly. It is incredibly concise.",
    code: `int roleLevel = 2;

// 1. Traditional Switch Statement (Executes code blocks)
switch (roleLevel)
{
    case 1:
        Console.WriteLine("Access: Standard User");
        break;
    case 2:
        Console.WriteLine("Access: Moderator");
        break;
    case 3:
        Console.WriteLine("Access: Administrator");
        break;
    default: // Equivalent to 'else'
        Console.WriteLine("Access: Guest");
        break; 
}

// 2. Modern Switch Expression (Directly returns a value)
// Syntax: variable switch { pattern => result };
string roleName = roleLevel switch
{
    1 => "Standard User",
    2 => "Moderator",
    3 => "Administrator",
    _ => "Guest" // The '_' underscore represents the 'default' fallback
};

Console.WriteLine($"You are a {roleName}");`,
    diagram: `flowchart LR
    A(["roleLevel"]) --> B{"Switch"}
    B -->|"Case 1"| C["User"]
    B -->|"Case 2"| D["Moderator"]
    B -->|"Case 3"| E["Admin"]
    B -->|"Default"| F["Guest"]
    
    style B fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Switch statements are cleaner alternatives to multiple if-else checks on a single variable. Switch expressions (C# 8) return values directly."
  },
  {
    id: 11,
    title: "Loops (For, While, Do-While)",
    category: "Phase 3: Control Flow",
    language: "csharp",
    explanation: "One of the most powerful things a computer can do is repeat tasks millions of times per second. **Loops** allow you to execute a specific block of code multiple times without writing the same code over and over.\n\nC# provides three core looping mechanisms:\n\n1. **The `for` loop**: Used when you know *exactly* how many times you want the loop to run (e.g., \"Run this 5 times\"). It contains initialization, condition, and iteration in one line.\n2. **The `while` loop**: Used when you do *not* know how many times it will run, but you want it to keep looping as long as a condition remains true (e.g., \"Keep looping until the player quits\").\n3. **The `do-while` loop**: Identical to the `while` loop, except the condition is checked at the *bottom* of the loop, not the top. This guarantees the code inside will run **at least one time**, even if the condition is false immediately.",
    code: `// 1. FOR LOOP 
// (Initialization: int i = 0; Condition: i < 5; Iteration: i++ adds 1)
for (int i = 0; i < 5; i++)
{
    // This will run exactly 5 times (0, 1, 2, 3, 4)
    Console.WriteLine($"For count: {i}"); 
}

// 2. WHILE LOOP
int stamina = 10;
while (stamina > 0)
{
    Console.WriteLine($"Running! Stamina left: {stamina}");
    stamina -= 3; // Subtract 3 stamina per loop. Loop stops when stamina <= 0.
}

// 3. DO-WHILE LOOP
int passcode;
do
{
    // This input prompt is GUARANTEED to run at least once.
    Console.WriteLine("Enter 4-digit passcode:");
    passcode = Convert.ToInt32(Console.ReadLine());
    
} while (passcode != 1234); // If wrong, loops back to 'do'

Console.WriteLine("Access Granted!");`,
    diagram: `flowchart TD
    subgraph WhileLoop["While Loop"]
        A{"Is Condition True?"} -->|"Yes"| B("Run Code Block")
        B --> A
        A -->|"No"| C("Exit Loop")
    end
    
    subgraph DoWhileLoop["Do-While Loop"]
        D("Run Code Block FIRST") --> E{"Is Condition True?"}
        E -->|"Yes"| D
        E -->|"No"| F("Exit Loop")
    end
    
    style A fill:#3b82f6,color:#fff
    style E fill:#f59e0b,color:#fff`,
    summary: "Use 'for' when the exact count is known, 'while' for condition-based looping, and 'do-while' to guarantee the code executes at least once."
  },
  {
    id: 12,
    title: "Loop Manipulation: Break and Continue",
    category: "Phase 3: Control Flow",
    language: "csharp",
    explanation: "Sometimes you need precise control from *inside* a running loop. C# provides two powerful keywords that instantly alter the flow of execution:\n\n- **`break`**: This acts as an emergency exit. When the program hits the word `break`, it instantly kills the entire loop and moves on to the rest of the application, regardless of whether the loop was finished.\n- **`continue`**: This acts as a 'skip' button. When the program hits `continue`, it instantly stops the *current* iteration, ignores all code below it, and jumps straight back to the top of the loop to begin the *next* iteration.",
    code: `Console.WriteLine("--- Testing Break ---");
for (int i = 1; i <= 10; i++)
{
    if (i == 4)
    {
        Console.WriteLine("Hit 4! Breaking the loop entirely.");
        break; // The loop stops dead. 5 through 10 will never run.
    }
    Console.WriteLine(i); 
}
// Output: 1, 2, 3, Hit 4! Breaking...

Console.WriteLine("\\n--- Testing Continue ---");
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        Console.WriteLine("Skipping 3!");
        continue; // Skips the printing of 3, jumps immediately to i = 4.
    }
    Console.WriteLine(i); 
}
// Output: 1, 2, Skipping 3!, 4, 5`,
    diagram: `flowchart LR
    A["Start Loop"] --> B{"Condition"}
    B --> C["Execute Code"]
    C -.-> D{"Hit Break?"}
    D -->|"Yes"| E["INSTANT EXIT"]
    D -->|"No"| F{"Hit Continue?"}
    F -->|"Yes"| G["SKIP TO NEXT"]
    G -.-> A
    F -->|"No"| H["Finish Iteration"]
    H -.-> A
    
    style E fill:#ef4444,color:#fff
    style G fill:#f59e0b,color:#fff`,
    summary: "Use the 'break' keyword to completely exit and kill a loop. Use 'continue' to skip the rest of the current iteration and jump to the next."
  },

  // Phase 4
  {
    id: 13,
    title: "Arrays (Fixed-Size Data Structures)",
    category: "Phase 4: Data Structures",
    language: "csharp",
    explanation: "Variables hold a single piece of data. If you needed to store 100 student names, creating 100 variables (`string name1`, `string name2`...) would be a nightmare. \n\nAn **Array** solves this. It is a collection of variables of the *exact same data type*, stored together in a contiguous, organized block of memory.\n\n**Critical limitations of Arrays:**\n1. **Fixed Size**: Once you define how many elements an array can hold, it is locked. You cannot add a 6th item to an array sized for 5. You would have to create a brand new array.\n2. **Zero-Indexed**: Humans count from 1. Computers count from 0. The very first item in an array is always at `index [0]`.",
    code: `// Declaring an array that holds exactly 3 integers
int[] numbers = new int["3"];

// Assigning data using the Index (zero-based)
numbers["0"] = 10; // First slot
numbers["1"] = 20; // Second slot
numbers["2"] = 30; // Third slot
// numbers["3"] = 40; // ERROR! IndexOutOfRangeException! The array only holds 3 items (0,1,2).

// Declaring and initializing immediately (Cleanest syntax)
string[] names = { "Alice", "Bob", "Charlie" };

// Accessing and modifying data
Console.WriteLine(names["1"]); // Output: Bob
names["1"] = "Bobby";          // Mutates 'Bob' into 'Bobby'

// Finding out how large the array is
int totalNames = names.Length; // Returns 3`,
    diagram: `graph LR
    A["names Array"] --> B["Index 0: 'Alice'"]
    A --> C["Index 1: 'Bob'"]
    A --> D["Index 2: 'Charlie'"]
    
    style A fill:#8b5cf6,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#3b82f6,color:#fff`,
    summary: "Arrays store multiple items of the same data type. They are highly performant but completely fixed in size and zero-indexed."
  },
  {
    id: 14,
    title: "The Foreach Loop",
    category: "Phase 4: Data Structures",
    language: "csharp",
    explanation: "If you want to view every item inside an array, you could manually write a `for` loop, track an integer `i`, and carefully check that `i < array.Length` so you don't crash the program with an OutOfBounds exception.\n\nC# provides a vastly superior alternative for reading collections: the **`foreach` loop**. \n\nThe `foreach` loop automatically traverses from the first item to the last item, handles all the indexing in the background, and completely eliminates the risk of indexing errors. It is the cleanest, most idiomatic way to iterate over data structures in C#.",
    code: `string[] inventory = { "Sword", "Shield", "Potion" };

// Traditional For Loop (Prone to typos and index errors)
for (int i = 0; i < inventory.Length; i++)
{
    Console.WriteLine(inventory["i"]);
}

// Modern Foreach Loop (Elegant and safe)
// Reads as: "For each string 'item' inside the 'inventory' collection..."
foreach (string item in inventory)
{
    // 'item' temporarily holds the current array value
    Console.WriteLine(item);
}

// NOTE: A foreach loop is Read-Only! 
// You cannot modify the array items (e.g., item = "Axe") inside a foreach loop.`,
    diagram: `flowchart LR
    A(["Array: Sword, Shield, Potion"]) --> B{"Foreach Loop"}
    B -->|"Iteration 1"| C["item = 'Sword'"]
    B -->|"Iteration 2"| D["item = 'Shield'"]
    B -->|"Iteration 3"| E["item = 'Potion'"]
    
    style B fill:#f59e0b,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#10b981,color:#fff`,
    summary: "The Foreach loop is the safest, cleanest, and preferred way to iterate through arrays and collections without dealing with manual index tracking."
  },
  {
    id: 15,
    title: "Generic Lists (Dynamic Arrays)",
    category: "Phase 4: Data Structures",
    language: "csharp",
    explanation: "Because Arrays are fixed-size, they can be restrictive and frustrating to use when building real-world applications where data constantly changes.\n\nA **List<T>** (part of the `System.Collections.Generic` library) is essentially a wrapper around an array that makes it **dynamic**. \n\nYou can `Add()`, `Remove()`, and `Sort()` items in a List freely. When a List runs out of background memory, .NET automatically handles creating a larger array and copying the data over invisibly. 99% of the time in modern C# development, you will use Lists instead of Arrays.",
    code: `using System;
using System.Collections.Generic; // REQUIRED namespace to use Lists

class Program
{
    static void Main()
    {
        // Creating a dynamic List of strings. Notice the <type> syntax.
        List<string> guests = new List<string>();
        
        // 1. Adding items dynamically (No fixed size limit!)
        guests.Add("John");
        guests.Add("Mary");
        guests.Add("Steve");
        
        // 2. Removing items (by exact value or by index)
        guests.Remove("John");      // Removes the exact string "John"
        guests.RemoveAt(0);         // Removes whatever is at index 0 (Mary)
        
        // 3. Checking if an item exists
        bool hasSteve = guests.Contains("Steve"); // Returns true
        
        // 4. Getting the size (Notice it's .Count for Lists, not .Length)
        int total = guests.Count; 
        
        // 5. Looping is identical to an array
        foreach (string guest in guests)
        {
            Console.WriteLine(guest);
        }
    }
}`,
    diagram: `flowchart TD
    A["List Created: Count=0"] -->|"Add('Apple')"| B["Count=1: 'Apple'"]
    B -->|"Add('Banana')"| C["Count=2: 'Apple', 'Banana'"]
    C -->|"Remove('Apple')"| D["Count=1: 'Banana'   Shifts automatically!"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Lists are dynamic arrays. You can safely Add(), Remove(), and manipulate elements without worrying about capacity limits or memory management."
  },
  {
    id: 16,
    title: "Dictionaries (High-Speed Key-Value Pairs)",
    category: "Phase 4: Data Structures",
    language: "csharp",
    explanation: "If you have a list of 10,000 employees and need to find one by their ID, the computer must search through the list one-by-one until it finds a match. This is slow.\n\nA **Dictionary<TKey, TValue>** solves this by storing data in **Key-Value pairs**. It uses a hash table under the hood, allowing it to instantly jump to the exact location of the data using the Key, completely skipping the search process.\n\nThink of a real-world dictionary: you don't read every page to find a definition; you jump straight to the word (the Key) to read the definition (the Value). **Important:** Every Key in a Dictionary must be 100% unique.",
    code: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Dictionary mapping an integer Key (Employee ID) to a string Value (Name)
        Dictionary<int, string> employees = new Dictionary<int, string>();
        
        // Adding Data (Key, Value)
        employees.Add(101, "Alice");
        employees.Add(102, "Bob");
        employees.Add(103, "Charlie");
        
        // employees.Add(101, "David"); // ERROR! Key 101 already exists! Keys must be unique.
        
        // Accessing Data INSTANTLY via the Key
        Console.WriteLine(employees["101"]); // Output: Alice
        
        // Safe lookup: .TryGetValue prevents crashing if the key doesn't exist
        if (employees.TryGetValue(999, out string empName))
        {
            Console.WriteLine($"Found employee: {empName}");
        }
        else
        {
            Console.WriteLine("Key 999 does not exist."); // This will run
        }
        
        // Looping through a Dictionary
        foreach (KeyValuePair<int, string> kvp in employees)
        {
            Console.WriteLine($"ID: {kvp.Key}, Name: {kvp.Value}");
        }
    }
}`,
    diagram: `graph LR
    subgraph KeysTable["Unique Keys (Hash Table)"]
        A["101"]
        B["102"]
        C["103"]
    end
    subgraph ValuesTable["Values"]
        D["Alice"]
        E["Bob"]
        F["Charlie"]
    end
    A -.->|"Instant Lookup"| D
    B -.->|"Instant Lookup"| E
    C -.->|"Instant Lookup"| F
    
    style A fill:#3b82f6,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#10b981,color:#fff
    style F fill:#10b981,color:#fff`,
    summary: "Dictionaries store data in Key-Value pairs, allowing for extremely fast data retrieval using unique Keys instead of slow sequential searching."
  },
  
  // Phase 5: Object-Oriented Programming
  {
    id: 17,
    title: "Classes and Objects: The Blueprints of C#",
    category: "Phase 5: Object-Oriented Programming",
    language: "csharp",
    explanation: "C# is fundamentally an **Object-Oriented Programming (OOP)** language. This means instead of just writing top-to-bottom lists of commands, you model your code after real-world things.\n\nA **Class** is a blueprint. It defines what a thing *is* (its data/variables) and what it *can do* (its methods/functions). A class by itself doesn't actually exist in the game or application; it's just the design.\n\nAn **Object** (also known as an **Instance**) is the actual, physical creation of that blueprint in the computer's memory. You can use one `Car` blueprint (Class) to manufacture thousands of individual `Car` objects, each with their own specific colors and speeds.",
    code: `// 1. Creating the Blueprint (Class)
public class Player
{
    // Variables inside a class are called "Fields"
    public string Name;
    public int Health;
    
    // Functions inside a class are called "Methods"
    public void Attack()
    {
        Console.WriteLine($"{Name} attacks with a sword!");
    }
}

class Program
{
    static void Main()
    {
        // 2. Creating an Instance (Object) from the Blueprint using the 'new' keyword
        Player player1 = new Player();
        
        // 3. Modifying this specific object's data
        player1.Name = "Arthur";
        player1.Health = 100;
        
        // 4. Calling a method on the object
        player1.Attack(); // Output: Arthur attacks with a sword!
        
        // You can create infinite completely separate objects from the same blueprint!
        Player player2 = new Player();
        player2.Name = "Merlin";
    }
}`,
    diagram: `flowchart TD
    A["Blueprint (Class)   class Player"] -->|"new Player()"| B["Object 1   Name: Arthur"]
    A -->|"new Player()"| C["Object 2   Name: Merlin"]
    A -->|"new Player()"| D["Object 3   Name: Lancelot"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "A Class is a blueprint that defines structure and behavior. An Object is a real instance created from that blueprint using the 'new' keyword."
  },
  {
    id: 18,
    title: "Properties (Getters and Setters) and Encapsulation",
    category: "Phase 5: Object-Oriented Programming",
    language: "csharp",
    explanation: "In our previous example, the `Health` variable was a `public` field. This means *any* other part of our code could do `player1.Health = -999;` and instantly break the game logic. This is dangerous.\n\n**Encapsulation** is an OOP principle that says: \"Hide your raw data, and force people to go through a secure gateway to interact with it.\"\n\nIn C#, we achieve Encapsulation using **Properties**. Properties look like variables from the outside, but inside they contain `get` and `set` code blocks. This allows you to write security checks (validation) before allowing a value to be modified. If you just want a standard gateway with no extra logic, you can use **Auto-Implemented Properties**.",
    code: `public class BankAccount
{
    // 1. Private Field: The actual raw data. Hidden from the outside world.
    private double _balance;
    
    // 2. Full Property: The secure gateway to access _balance
    public double Balance 
    {
        get 
        { 
            return _balance; // Anyone can READ the balance
        }
        set 
        { 
            // Security Check! Prevent negative deposits.
            // 'value' is a special keyword representing what the user is trying to set it to.
            if (value >= 0) 
            {
                _balance = value; 
            }
            else
            {
                Console.WriteLine("Error: Cannot set negative balance!");
            }
        }
    }
    
    // 3. Auto-Implemented Property: Used when you don't need security checks yet.
    // The compiler automatically creates a hidden private field for you in the background!
    public string AccountOwner { get; set; }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();
        account.Balance = 100; // Success
        account.Balance = -50; // Triggers our Error! Balance remains 100.
    }
}`,
    diagram: `flowchart LR
    A["Outside Code"] -->|"Tries to write"| B{"Property   (The Gateway)"}
    B -->|"get block"| C["Return Data"]
    B -->|"set block"| D{"Is value >= 0?"}
    D -->|"Yes"| E["Modify Private _balance"]
    D -->|"No"| F["Reject (Error)"]
    
    style B fill:#f59e0b,color:#fff
    style E fill:#10b981,color:#fff
    style F fill:#ef4444,color:#fff`,
    summary: "Properties protect your class's private fields. They use 'get' and 'set' accessors to act as gateways, allowing you to validate data before it is saved."
  },
  {
    id: 19,
    title: "Constructors: Building Objects Automatically",
    category: "Phase 5: Object-Oriented Programming",
    language: "csharp",
    explanation: "When you create an object using `new Player()`, how does the computer know exactly how to build it? It looks for a special method called a **Constructor**.\n\nA Constructor is a method that runs *automatically* the exact millisecond an object is created. It is primarily used to assign default values, setup necessary data, or force the programmer to provide required information (like forcing them to provide a Username when making a User object).\n\n**Rules of Constructors:**\n1. They must have the exact same name as the Class.\n2. They never have a return type (not even `void`).\n3. You can have multiple constructors in one class (called **Constructor Overloading**) as long as they take different parameters.",
    code: `public class Weapon
{
    public string Name;
    public int Damage;

    // 1. Default Constructor (Takes no parameters)
    public Weapon()
    {
        Name = "Rusty Sword"; // Automatically sets these defaults
        Damage = 5;
    }

    // 2. Overloaded Constructor (Forces user to pass specific data)
    public Weapon(string customName, int customDamage)
    {
        Name = customName;
        Damage = customDamage;
    }
}

class Program
{
    static void Main()
    {
        // Triggers the Default Constructor
        Weapon startingWeapon = new Weapon(); 
        Console.WriteLine(startingWeapon.Name); // Output: Rusty Sword
        
        // Triggers the Overloaded Constructor
        Weapon legendarySword = new Weapon("Excalibur", 999);
        Console.WriteLine(legendarySword.Name); // Output: Excalibur
    }
}`,
    diagram: `flowchart TD
    A["new Weapon()"] --> B{"Which Constructor?"}
    B -->|"No arguments"| C["public Weapon()   Name='Rusty Sword'"]
    B -->|"Passed ('Axe', 50)"| D["public Weapon(string, int)   Name='Axe'"]
    
    style B fill:#8b5cf6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Constructors are special methods that run automatically upon object creation, used to set up initial state and default values."
  },
  {
    id: 20,
    title: "Inheritance and Polymorphism",
    category: "Phase 5: Object-Oriented Programming",
    language: "csharp",
    explanation: "What if you have three classes: `Dog`, `Cat`, and `Bird`? They all share similar properties like `Age` and methods like `Eat()`. Instead of copying and pasting the same code three times, C# uses **Inheritance**.\n\nYou create a base class (parent) called `Animal` containing the shared code. Then, `Dog` and `Cat` (child classes) **inherit** from `Animal`. They get all the parent's code for free, while being able to add their own unique features (like a `Bark()` method for the dog).\n\n**Polymorphism (Many Forms)** allows child classes to *override* the behavior of their parents. For example, the parent `Animal` might have a `Speak()` method, but the `Dog` class overrides it to say \"Woof\" while the `Cat` class overrides it to say \"Meow\". We use the `virtual` keyword on the parent and `override` on the child.",
    code: `// 1. BASE CLASS (Parent)
public class Animal
{
    public string Name { get; set; }
    
    // 'virtual' means: "I have default code, but my children are allowed to change it."
    public virtual void Speak()
    {
        Console.WriteLine("The animal makes a generic noise.");
    }
}

// 2. DERIVED CLASS (Child). Syntax: 'ChildClass : ParentClass'
public class Dog : Animal
{
    // 'override' means: "I am completely replacing my parent's version of this method."
    public override void Speak()
    {
        Console.WriteLine("Woof! Woof!");
    }
}

class Program
{
    static void Main()
    {
        Dog myDog = new Dog();
        myDog.Name = "Buddy"; // Inherited from Animal!
        
        myDog.Speak(); // Output: Woof! Woof! (Polymorphism in action)
    }
}`,
    diagram: `flowchart TD
    A["Animal (Base Class)   +Name   +Speak(virtual)"] -->|"Inherits"| B["Dog (Derived)   +Speak(override)"]
    A -->|"Inherits"| C["Cat (Derived)   +Speak(override)"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff`,
    summary: "Inheritance allows child classes to absorb code from a parent class. Polymorphism allows child classes to override (change) inherited behaviors."
  },
  {
    id: 21,
    title: "Interfaces: Enforcing Contracts",
    category: "Phase 5: Object-Oriented Programming",
    language: "csharp",
    explanation: "C# only allows a class to inherit from **one** parent class. But what if you need an object to belong to multiple categories? This is where **Interfaces** come in.\n\nAn Interface is like a legal contract. It contains **no code implementation at all**—only empty method signatures. If a class agrees to \"implement\" an interface, it is forced by the compiler to write the actual code for all the methods listed in that contract.\n\nInterfaces usually start with the letter 'I' (e.g., `IDamageable`, `IFlyable`). They are critical in enterprise software because they guarantee that radically different objects will all share guaranteed behaviors.",
    code: `// 1. The Interface (The Contract)
// No code, just empty method definitions.
public interface IDamageable
{
    void TakeDamage(int amount);
}

// 2. Implementing the Interface
// The Player class agrees to the IDamageable contract.
public class Player : IDamageable 
{
    public int Health = 100;

    // The compiler FORCES the Player to write this method, or it will crash.
    public void TakeDamage(int amount)
    {
        Health -= amount;
        Console.WriteLine($"Player took {amount} damage. Health: {Health}");
    }
}

// Radically different object, but implements the EXACT same contract.
public class WoodenDoor : IDamageable
{
    public void TakeDamage(int amount)
    {
        Console.WriteLine($"The door absorbs {amount} damage and splinters!");
    }
}`,
    diagram: `flowchart TD
    A{"Interface   IDamageable   (Requires: TakeDamage)"} -.->|"Agrees to Contract"| B["Class Player"]
    A -.->|"Agrees to Contract"| C["Class WoodenDoor"]
    A -.->|"Agrees to Contract"| D["Class BossMonster"]
    
    style A fill:#f59e0b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#ef4444,color:#fff`,
    summary: "An Interface is a contract of empty methods. Any class that implements an interface is strictly forced by the compiler to write the actual code for those methods."
  },

  // Phase 6: Advanced C#
  {
    id: 22,
    title: "Exception Handling: Try, Catch, Finally",
    category: "Phase 6: Advanced C#",
    language: "csharp",
    explanation: "When something goes critically wrong in your program (like trying to read a file that doesn't exist, or dividing by zero), .NET throws an **Exception**. If you don't catch it, your entire application crashes instantly to the desktop.\n\nTo build resilient software, you must use **Exception Handling** blocks:\n\n1. **`try`**: The \"danger zone\". You place code that *might* break inside this block.\n2. **`catch`**: The \"safety net\". If (and only if) the code in the `try` block explodes, the program instantly jumps to this block instead of crashing. You can catch specific types of errors or a generic one.\n3. **`finally`**: The \"cleanup crew\". This block is guaranteed to run 100% of the time, whether an error happened or not. It's usually used to close file streams or database connections.",
    code: `using System;

class Program
{
    static void Main()
    {
        try
        {
            // DANGER ZONE
            Console.WriteLine("Attempting division...");
            int divisor = 0;
            int result = 100 / divisor; // Explodes here! DivideByZeroException
            
            // This line NEVER runs because the exception halts the try block instantly.
            Console.WriteLine("Division successful!"); 
        }
        catch (DivideByZeroException ex)
        {
            // SPECIFIC SAFETY NET
            // Triggers specifically for Math errors
            Console.WriteLine("Math Error: You cannot divide by zero!");
        }
        catch (Exception ex)
        {
            // GENERIC SAFETY NET
            // Triggers for any other type of error we didn't predict
            Console.WriteLine($"A critical error occurred: {ex.Message}");
        }
        finally
        {
            // CLEANUP CREW
            // Always runs, crash or no crash.
            Console.WriteLine("Execution finished. Cleaning up memory.");
        }
    }
}`,
    diagram: `flowchart TD
    A["Try Block"] --> B{"Did code crash?"}
    B -->|"Yes"| C["Catch Block (Handles Error)"]
    B -->|"No"| D["Skips Catch Block"]
    C --> E["Finally Block (Always Runs)"]
    D --> E
    
    style A fill:#3b82f6,color:#fff
    style C fill:#ef4444,color:#fff
    style E fill:#f59e0b,color:#fff`,
    summary: "Use Try/Catch blocks to prevent application crashes from unexpected errors. The 'finally' block ensures critical cleanup code always executes regardless of crashes."
  },
  {
    id: 23,
    title: "LINQ (Language Integrated Query)",
    category: "Phase 6: Advanced C#",
    language: "csharp",
    explanation: "**LINQ** is often considered the crown jewel of C#. It gives you the ability to write SQL-like queries directly against any collection (Lists, Arrays) in your code.\n\nBefore LINQ, if you wanted to find all employees older than 30 who work in the IT department, you had to write massive, nested `foreach` loops with `if` statements. It was ugly and hard to read.\n\nWith LINQ, you can filter, sort, and transform massive datasets in a single, highly readable line of code using methods like `.Where()`, `.OrderBy()`, and `.Select()`.\n\n*Note: To use LINQ, you must include \`using System.Linq;\` at the top of your file.*",
    code: `using System;
using System.Collections.Generic;
using System.Linq; // REQUIRED FOR LINQ

public class GameScore
{
    public string PlayerName;
    public int Points;
}

class Program
{
    static void Main()
    {
        List<GameScore> scores = new List<GameScore>
        {
            new GameScore { PlayerName = "Alice", Points = 450 },
            new GameScore { PlayerName = "Bob", Points = 1200 },
            new GameScore { PlayerName = "Charlie", Points = 300 }
        };

        // --- THE OLD WAY (Loops and Ifs) ---
        // Just to find winners (score > 1000)
        foreach (var s in scores)
        {
            if (s.Points > 1000)
                Console.WriteLine(s.PlayerName);
        }

        // --- THE LINQ WAY (One line, readable, functional) ---
        
        // 1. Filter using .Where() and a Lambda Expression 'x =>'
        var winners = scores.Where(x => x.Points > 1000).ToList();
        
        // 2. Sorting using .OrderByDescending()
        var leaderBoard = scores.OrderByDescending(x => x.Points).ToList();
        
        // 3. Transforming data using .Select() (Plucking just the names into a new list)
        List<string> justNames = scores.Select(x => x.PlayerName).ToList();
    }
}`,
    diagram: `flowchart LR
    A["Raw List (1000 items)"] --> B{"LINQ"}
    B -->|".Where(Score > 1000)"| C["Filtered List (50 items)"]
    B -->|".OrderBy(Score)"| D["Sorted List"]
    B -->|".Select(Name)"| E["List of Strings"]
    
    style B fill:#8b5cf6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#10b981,color:#fff`,
    summary: "LINQ allows you to query, filter, sort, and transform lists and arrays using powerful, highly readable, one-line functional commands."
  },
  {
    id: 24,
    title: "Asynchronous Programming (async / await)",
    category: "Phase 6: Advanced C#",
    language: "csharp",
    explanation: "Normally, C# executes line-by-line. If Line 2 asks a database over the internet for 10 million rows of data, the computer will absolutely **FREEZE** on Line 2. The entire UI will lock up until the internet responds. This is called **Blocking**.\n\nModern C# solves this using **Asynchronous Programming** with the `async` and `await` keywords. \n\nWhen C# hits an `await` keyword, it says: \"This might take a while. Instead of freezing the application, I'm going to step away, let the UI keep running, and I will magically teleport back here the exact millisecond the internet data finishes downloading.\"\n\nAny method that uses the `await` keyword must have `async` in its method signature, and it usually returns a `Task` (which represents the ongoing background work).",
    code: `using System;
using System.Threading.Tasks; // Required for Tasks
using System.Net.Http; // Required for web requests

class Program
{
    // The main entry point can be async in modern C#!
    static async Task Main()
    {
        Console.WriteLine("1. Starting UI and Application...");
        
        // We 'await' the heavy task. The app does NOT freeze here!
        string data = await DownloadHeavyDataAsync(); 
        
        Console.WriteLine("3. Data successfully downloaded and displayed!");
    }

    // Notice the 'async' keyword and 'Task<string>' return type
    static async Task<string> DownloadHeavyDataAsync()
    {
        Console.WriteLine("2. Reaching out to server over the internet...");
        
        using (HttpClient client = new HttpClient())
        {
            // The 'await' here pauses this specific method, NOT the whole app.
            // It waits for the website to respond.
            string result = await client.GetStringAsync("https://api.github.com");
            return result;
        }
    }
}`,
    diagram: `sequenceDiagram
    participant Main Thread (UI)
    participant Background Internet Task
    
    Main Thread (UI)->>Background Internet Task: Calls async method
    Note over Main Thread (UI): Hits 'await'. Main thread instantly returns to keep UI responsive!
    Background Internet Task-->>Background Internet Task: Downloading 500MB...
    Background Internet Task-->>Main Thread (UI): Data finished!
    Note over Main Thread (UI): Main thread magically resumes execution right where it left off.`,
    summary: "Asynchronous programming using async/await allows heavy I/O operations (like internet requests) to run in the background without freezing the application's main UI thread."
  },
  
  // Phase 7: Advanced Data Types & Structures
  {
    id: 25,
    title: "Structs vs Classes (Value vs Reference)",
    category: "Phase 7: Advanced Data Types & Structures",
    language: "csharp",
    explanation: "You already know that a **Class** is a blueprint. C# has another blueprint called a **Struct** (short for Structure). They look almost identical, but they behave completely differently in memory.\n\n- **Classes are Reference Types**: They live on the Heap. If you copy a class (`Player p2 = p1;`), you are just copying a *pointer*. Changing `p2.Name` will instantly change `p1.Name` because they point to the exact same object in memory.\n- **Structs are Value Types**: They live on the fast Stack. If you copy a struct (`Vector v2 = v1;`), you are making a complete, physical copy of the data. Changing `v2` does not affect `v1` at all.\n\nStructs are used for small, lightweight data structures (like X/Y/Z coordinates in games) where creating thousands of them as Classes would cause memory lag.",
    code: `// 1. Defining a Struct
public struct Point3D
{
    public int X, Y, Z;
    
    // Structs can have constructors just like classes!
    public Point3D(int x, int y, int z)
    {
        X = x; Y = y; Z = z;
    }
}

class Program
{
    static void Main()
    {
        Point3D p1 = new Point3D(10, 20, 30);
        
        // This makes a COMPLETE COPY of the data, not a pointer.
        Point3D p2 = p1;
        
        p2.X = 999;
        
        // Because they are structs, changing p2 did NOT affect p1!
        Console.WriteLine(p1.X); // Output: 10
        Console.WriteLine(p2.X); // Output: 999
    }
}`,
    diagram: `flowchart LR
    subgraph ClassAssignment["Class Assignment (Pointer)"]
        A["Player p1"] --> B["Heap Memory   { Name: 'Arthur' }"]
        C["Player p2 = p1"] --> B
    end
    
    subgraph StructAssignment["Struct Assignment (Deep Copy)"]
        D["Point p1"] --> E["Stack Memory   { X: 10 }"]
        F["Point p2 = p1"] --> G["Stack Memory   { X: 10 } (Clone)"]
    end
    
    style B fill:#10b981,color:#fff
    style E fill:#f59e0b,color:#fff
    style G fill:#f59e0b,color:#fff`,
    summary: "Structs are lightweight Value Types stored on the Stack. Unlike Classes, assigning a struct to a new variable creates a completely independent copy of the data."
  },
  {
    id: 26,
    title: "Enums (Enumerations)",
    category: "Phase 7: Advanced Data Types & Structures",
    language: "csharp",
    explanation: "An **Enum** (Enumeration) is a special data type that lets you define a fixed list of named constants. \n\nImagine writing a game and trying to track the player's difficulty level using numbers (`1 = Easy`, `2 = Medium`, `3 = Hard`). Six months later, you will forget what `2` means. \n\nInstead, you create an `enum Difficulty { Easy, Medium, Hard }`. Now your code is readable, self-documenting, and the compiler prevents you from ever assigning an invalid difficulty level like `99`.",
    code: `// 1. Defining the Enum
// Under the hood, these are just integers (Easy=0, Normal=1, Hard=2)
public enum Difficulty
{
    Easy,
    Normal,
    Hard,
    Nightmare
}

class Program
{
    static void Main()
    {
        // 2. Using the Enum
        Difficulty currentSetting = Difficulty.Hard;
        
        // 3. Very useful with Switch Statements!
        switch (currentSetting)
        {
            case Difficulty.Easy:
                Console.WriteLine("Enemies deal 50% less damage.");
                break;
            case Difficulty.Hard:
                Console.WriteLine("Enemies deal 200% more damage!");
                break;
        }
        
        // 4. Converting Enum to an integer (if needed)
        int numericalValue = (int)currentSetting; // Returns 2
    }
}`,
    diagram: `flowchart TD
    A["enum Difficulty"] --> B["Easy (0)"]
    A --> C["Normal (1)"]
    A --> D["Hard (2)"]
    A --> E["Nightmare (3)"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#3b82f6,color:#fff
    style E fill:#ef4444,color:#fff`,
    summary: "Enums allow you to define a strongly-typed list of named constants, making your code significantly more readable than using raw integers."
  },
  {
    id: 27,
    title: "Working with Date and Time",
    category: "Phase 7: Advanced Data Types & Structures",
    language: "csharp",
    explanation: "Handling dates, times, and timezones is notoriously difficult in programming. C# provides the powerful `DateTime` struct to make this manageable.\n\n- **`DateTime`**: Represents a specific instant in time (e.g., October 31, 2026, 8:00 AM).\n- **`TimeSpan`**: Represents a *length* of time (e.g., 2 hours, 15 minutes). You get a `TimeSpan` when you subtract two `DateTime` objects.\n\nYou can easily format dates into readable strings using format codes like `\"yyyy-MM-dd\"`.",
    code: `using System;

class Program
{
    static void Main()
    {
        // 1. Getting the exact current time
        DateTime now = DateTime.Now;
        
        // 2. Creating a specific date (Year, Month, Day)
        DateTime releaseDate = new DateTime(2025, 11, 15);
        
        // 3. Adding or Subtracting time
        DateTime nextWeek = now.AddDays(7);
        DateTime lastHour = now.AddHours(-1);
        
        // 4. Comparing dates (Yields a TimeSpan)
        TimeSpan timeUntilRelease = releaseDate - now;
        Console.WriteLine($"Days until release: {timeUntilRelease.Days}");
        
        // 5. Formatting Dates into text
        // yyyy = 4 digit year, MM = 2 digit month, dd = 2 digit day
        string formatted = now.ToString("yyyy-MM-dd HH:mm:ss");
        Console.WriteLine($"Current Time: {formatted}");
    }
}`,
    diagram: `flowchart LR
    A["DateTime.Now   (Nov 1st)"] -->|"Subtract"| B["DateTime   (Oct 25th)"]
    B -->|"Equals"| C["TimeSpan   (7 Days)"]
    
    style A fill:#3b82f6,color:#fff
    style B fill:#8b5cf6,color:#fff
    style C fill:#10b981,color:#fff`,
    summary: "Use the DateTime struct to represent specific dates, and the TimeSpan struct to represent lengths of time or the difference between two dates."
  },
  {
    id: 28,
    title: "Numbers Deep Dive (int, double, decimal, Math)",
    category: "Phase 7: Advanced Data Types & Structures",
    language: "csharp",
    explanation: "We know `int` holds whole numbers, but how do we handle decimals? C# offers three main fractional types:\n\n1. **`float`** (32-bit): Takes up the least memory. Used for video game graphics (Unity uses floats for 3D coordinates). Requires an `f` suffix.\n2. **`double`** (64-bit): The standard C# decimal. Highly precise, fast for math, but suffers from microscopic floating-point rounding errors. Never use it for money.\n3. **`decimal`** (128-bit): Massive memory footprint, slower, but 100% perfectly precise. **Always use this for financial and monetary calculations.** Requires an `m` suffix.\n\nC# also includes a built-in `Math` class containing dozens of helpful mathematical operations.",
    code: `class Program
{
    static void Main()
    {
        // --- Decimal Types ---
        float gravity = 9.81f;           // 'f' suffix. Good for physics/graphics.
        double pi = 3.14159265359;       // No suffix needed. General purpose math.
        decimal bankBalance = 100.50m;   // 'm' suffix. Perfect precision for money.
        
        // --- The Math Class ---
        double value = 4.7;
        
        // Rounding
        Console.WriteLine(Math.Round(value));   // 5
        Console.WriteLine(Math.Floor(value));   // 4 (Forces round down)
        Console.WriteLine(Math.Ceiling(value)); // 5 (Forces round up)
        
        // Utilities
        Console.WriteLine(Math.Max(10, 50));    // 50 (Returns highest)
        Console.WriteLine(Math.Min(10, 50));    // 10 (Returns lowest)
        Console.WriteLine(Math.Pow(2, 3));      // 8  (2 to the power of 3)
    }
}`,
    diagram: `flowchart TD
    A["Fractional Numbers"] --> B["float (32-bit)   Physics/Games"]
    A --> C["double (64-bit)   General Math"]
    A --> D["decimal (128-bit)   Finances/Money"]
    
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Choose 'float' for games, 'double' for scientific math, and 'decimal' specifically for financial calculations to prevent rounding errors."
  },
  {
    id: 29,
    title: "Anonymous and Dynamic Types",
    category: "Phase 7: Advanced Data Types & Structures",
    language: "csharp",
    explanation: "C# is strictly statically typed, meaning you usually have to define a Class blueprint before making an object. However, there are exceptions for temporary data.\n\n- **`var` (Implicit Typing)**: You don't have to write the data type on the left side if the compiler can easily guess it from the right side. It saves typing but remains strongly typed.\n- **Anonymous Types**: Allow you to quickly create an object with read-only properties without ever writing a Class blueprint. Great for temporary data.\n- **`dynamic` Type**: Tells the compiler to completely disable all security and type-checking on this variable until runtime. It acts like Javascript. Avoid this unless you are dealing with unknown JSON data or Python interop, as it causes hidden crashes.",
    code: `class Program
{
    static void Main()
    {
        // 1. Implicit Typing (var)
        // The compiler sees "Hello" and permanently locks 'greeting' as a string.
        var greeting = "Hello"; 
        // greeting = 100; // ERROR! It is still strictly a string.
        
        // 2. Anonymous Types
        // Creating a temporary object without a Class blueprint.
        var tempUser = new { Name = "Alice", Age = 30 };
        Console.WriteLine(tempUser.Name);
        // tempUser.Age = 31; // ERROR! Anonymous types are strictly Read-Only.
        
        // 3. Dynamic Type
        // Disables compiler checks. Completely bypasses C# safety nets.
        dynamic magicVariable = 10;
        magicVariable = "Now I'm a string"; // Valid!
        magicVariable = true;               // Valid!
        
        // magicVariable.FlyToTheMoon(); 
        // ^ The compiler allows this, but the program will crash at runtime!
    }
}`,
    diagram: `flowchart LR
    A["var age = 10"] -->|"Compiler Infers Type"| B["Locks to 'int'"]
    C["dynamic score = 10"] -->|"Compiler Ignores"| D["Can change to string later"]
    
    style A fill:#3b82f6,color:#fff
    style B fill:#10b981,color:#fff
    style C fill:#ef4444,color:#fff
    style D fill:#f59e0b,color:#fff`,
    summary: "Use 'var' to save typing when the type is obvious. Use Anonymous types for quick, read-only data structures. Avoid 'dynamic' unless strictly necessary."
  },

  // Phase 8: Strings, Files, and Flow
  {
    id: 30,
    title: "String Manipulation",
    category: "Phase 8: Strings, Files, and Flow",
    language: "csharp",
    explanation: "Strings are one of the most common data types in programming. C# provides dozens of built-in methods to manipulate, chop, and analyze text instantly without writing manual loops.\n\nCommon methods include `Substring` (extracting a chunk), `Replace` (swapping text), `Split` (chopping a sentence into an array of words), and `ToUpper`/`ToLower`.",
    code: `using System;

class Program
{
    static void Main()
    {
        string text = "  Hello, C# Developers!  ";
        
        // 1. Trim (Removes empty spaces at the very start and end)
        string clean = text.Trim(); // "Hello, C# Developers!"
        
        // 2. ToUpper / ToLower
        Console.WriteLine(clean.ToUpper()); // "HELLO, C# DEVELOPERS!"
        
        // 3. Replace
        string updated = clean.Replace("C#", "Java"); // "Hello, Java Developers!"
        
        // 4. Substring (Start Index, Length)
        // Extract 5 characters starting from index 0.
        string firstWord = clean.Substring(0, 5); // "Hello"
        
        // 5. Split (Chops the string into an Array based on a character)
        string csvData = "Apple,Banana,Orange";
        string[] fruits = csvData.Split(','); // Creates array of 3 strings
        
        // 6. Contains / StartsWith
        bool hasHello = clean.Contains("Hello"); // true
    }
}`,
    diagram: `flowchart TD
    A["Raw String: ' A,B,C '"] --> B["Trim()"]
    B --> C["'A,B,C'"]
    C --> D["Split(',')"]
    D --> E["Array: ['A', 'B', 'C']"]
    
    style A fill:#64748b,color:#fff
    style C fill:#3b82f6,color:#fff
    style E fill:#10b981,color:#fff`,
    summary: "C# includes powerful string manipulation methods like Trim, Replace, Substring, and Split to easily process and format text data."
  },
  {
    id: 31,
    title: "Optimizing Strings (StringBuilder)",
    category: "Phase 8: Strings, Files, and Flow",
    language: "csharp",
    explanation: "In C#, strings are **Immutable**. This means once a string is created in memory, it can NEVER be changed. \n\nWhen you do `text = text + \"a\"`, C# does not actually add \"a\". It physically creates a brand new string in memory, copies the old data, adds \"a\", and throws the old string in the garbage. If you do this inside a loop 10,000 times, you will create 10,000 garbage strings, causing massive memory lag.\n\nTo solve this, we use **`StringBuilder`**. It acts like a mutable string buffer. You can append to it millions of times instantly, and it only creates the final string when you call `.ToString()` at the very end.",
    code: `using System;
using System.Text; // Required for StringBuilder

class Program
{
    static void Main()
    {
        // BAD: Creating 10,000 strings in memory. Will cause massive lag.
        string badText = "";
        for (int i = 0; i < 10000; i++)
        {
            badText += i.ToString(); 
        }

        // GOOD: Highly optimized. Modifies a single buffer in memory.
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10000; i++)
        {
            sb.Append(i.ToString()); 
        }
        
        // Generates the actual string ONCE at the very end.
        string finalResult = sb.ToString(); 
    }
}`,
    diagram: `flowchart LR
    subgraph StringAssignment["Standard String (+)"]
        A["Create String 1"] --> B["Create String 2"]
        B --> C["Create String 3..."]
    end
    
    subgraph StringBuilderFlow["StringBuilder (.Append)"]
        D["Single Memory Buffer"] -->|"Append()"| D
        D -->|"ToString()"| E["Create Final String ONCE"]
    end
    
    style C fill:#ef4444,color:#fff
    style E fill:#10b981,color:#fff`,
    summary: "Strings are immutable (cannot be changed). Modifying strings inside loops causes memory leaks. Always use StringBuilder for heavy string manipulations."
  },
  {
    id: 32,
    title: "File Operations (System.IO)",
    category: "Phase 8: Strings, Files, and Flow",
    language: "csharp",
    explanation: "Most applications need to save data permanently (like high scores or configuration settings) to the hard drive. C# provides the `System.IO` namespace for this.\n\nThe `File` class provides static methods to instantly Read, Write, Append, or Check for files on your hard drive.\n\n*Warning: Always remember that File Operations can throw Exceptions (e.g., if the file doesn't exist, or if Windows denies you permission). It is best practice to wrap them in `try/catch` blocks.*",
    code: `using System;
using System.IO; // REQUIRED for File operations

class Program
{
    static void Main()
    {
        string filePath = "C:\\Temp\\log.txt"; // Use double backslashes in Windows paths
        
        // 1. Check if file exists
        if (!File.Exists(filePath))
        {
            // 2. Write completely new text (Overwrites file if it exists)
            File.WriteAllText(filePath, "Application Started.\\n");
        }
        
        // 3. Append text to the end without deleting the old stuff
        File.AppendAllText(filePath, "New event logged.\\n");
        
        // 4. Read the entire file into a single string
        string content = File.ReadAllText(filePath);
        Console.WriteLine("--- FILE CONTENT ---");
        Console.WriteLine(content);
        
        // 5. Read all lines into an Array (Useful for reading huge lists)
        string[] allLines = File.ReadAllLines(filePath);
    }
}`,
    diagram: `flowchart TD
    A["File Class Methods"] --> B["WriteAllText()   (Overwrites)"]
    A --> C["AppendAllText()   (Adds to end)"]
    A --> D["ReadAllText()   (Returns 1 String)"]
    A --> E["ReadAllLines()   (Returns Array)"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#10b981,color:#fff`,
    summary: "The System.IO.File class provides simple, powerful, one-line methods to read, write, and append text files on the local file system."
  },
  {
    id: 33,
    title: "The Ternary Operator ( ? : )",
    category: "Phase 8: Strings, Files, and Flow",
    language: "csharp",
    explanation: "Often, you write simple `if/else` statements solely to assign a value to a variable based on a condition. This takes up 5 or 6 lines of code.\n\nThe **Ternary Operator** allows you to condense a simple `if/else` assignment into a single, highly readable line.\n\nThe syntax is: `condition ? true_result : false_result;`",
    code: `class Program
{
    static void Main()
    {
        int playerHealth = 40;
        string statusMessage;
        
        // --- THE OLD WAY (6 lines of code) ---
        if (playerHealth > 50)
        {
            statusMessage = "Healthy";
        }
        else
        {
            statusMessage = "Critical";
        }
        
        // --- THE TERNARY WAY (1 line of code) ---
        // Reads as: "If health > 50, return 'Healthy', otherwise return 'Critical'"
        string quickStatus = (playerHealth > 50) ? "Healthy" : "Critical";
        
        Console.WriteLine(quickStatus); // Output: Critical
    }
}`,
    diagram: `flowchart LR
    A{"Condition   (Health > 50)"} -->|"Question Mark (?)"| B{"Is True?"}
    B -->|"Yes"| C["Return 'Healthy'"]
    B -->|"No (Colon :)"| D["Return 'Critical'"]
    
    style A fill:#8b5cf6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#ef4444,color:#fff`,
    summary: "The Ternary Operator allows you to write one-line if/else statements, specifically for assigning values based on a true/false condition."
  },
  
  // Phase 9: Advanced Class Features
  {
    id: 34,
    title: "Static Types and Members",
    category: "Phase 9: Advanced Class Features",
    language: "csharp",
    explanation: "Normally, when you add a variable to a Class (like `public int Score`), every single Object you create gets its *own* separate copy of that Score. \n\nIf you mark a variable or method as **`static`**, it means there is only **one shared copy** of it in the entire application, and it belongs to the Class itself, not the objects.\n\nYou access static members by typing the Class name directly (e.g., `Player.TotalPlayers`), rather than creating an object with `new` first. If you mark an entire class as `static` (like the built-in `Math` class), you are never allowed to create objects of it.",
    code: `public class Player
{
    public string Name; // Every player has their own Name
    
    // STATIC: There is only ONE TotalPlayers variable shared across the entire game.
    public static int TotalPlayers = 0; 

    public Player(string name)
    {
        Name = name;
        TotalPlayers++; // Every time a new player is born, the shared counter goes up
    }
}

class Program
{
    static void Main()
    {
        Player p1 = new Player("Alice");
        Player p2 = new Player("Bob");
        
        Console.WriteLine(p1.Name); // "Alice"
        
        // Console.WriteLine(p1.TotalPlayers); // ERROR! You cannot access statics via an object.
        
        // Correct way to access a static member: Use the Class name.
        Console.WriteLine(Player.TotalPlayers); // Output: 2
    }
}`,
    diagram: `flowchart TD
    subgraph ClassMemory["Class Memory (Static)"]
        A["Player.TotalPlayers = 2"]
    end
    
    subgraph ObjectMemory["Object Memory (Instances)"]
        B["Player 1   Name = 'Alice'"]
        C["Player 2   Name = 'Bob'"]
    end
    
    B -.->|"Modifies shared"| A
    C -.->|"Modifies shared"| A
    
    style A fill:#ef4444,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#3b82f6,color:#fff`,
    summary: "Static members belong to the Class itself, not to individual objects. There is only one shared copy of a static variable in memory across the entire application."
  },
  {
    id: 35,
    title: "Namespaces and Reserved Keywords",
    category: "Phase 9: Advanced Class Features",
    language: "csharp",
    explanation: "**Namespaces** are how C# organizes hundreds of thousands of classes to prevent name collisions. Imagine you download a Physics library that has a `Vector` class, and a 3D Graphics library that also has a `Vector` class. If you try to use both, the compiler will panic. By keeping them in different namespaces (like `PhysicsLib.Vector` and `GraphicsLib.Vector`), they remain distinct.\n\n**Reserved Keywords**: C# has about 80 special words that the compiler reserves for itself (like `class`, `int`, `if`, `new`, `static`, `void`). You are strictly forbidden from using these words as variable names or class names. \n*(Hack: If you absolutely MUST name a variable 'class', you can bypass this by putting an `@` symbol in front of it: `int @class = 1;`, though this is heavily discouraged.)*",
    code: `// 1. Defining a custom namespace
namespace GameEngine.Audio
{
    public class AudioPlayer
    {
        public void Play() { /* ... */ }
    }
}

namespace GameEngine.Graphics
{
    class Program
    {
        static void Main()
        {
            // 2. We must import the audio namespace to use its classes
            // using GameEngine.Audio; (At the top of the file)
            // OR fully qualify it:
            GameEngine.Audio.AudioPlayer player = new GameEngine.Audio.AudioPlayer();
            
            // 3. Reserved Keywords
            // int static = 5; // ERROR! 'static' is a reserved keyword.
            int @static = 5;   // Valid, but ugly. Avoid doing this.
        }
    }
}`,
    diagram: `flowchart LR
    subgraph Physics["Namespace: Physics"]
        A["class Vector"]
    end
    
    subgraph Graphics["Namespace: Graphics"]
        B["class Vector"]
    end
    
    C["Your Code"] -.->|"using Physics"| A
    C -.->|"using Graphics"| B
    
    style A fill:#3b82f6,color:#fff
    style B fill:#10b981,color:#fff
    style C fill:#8b5cf6,color:#fff`,
    summary: "Namespaces act as folders to organize classes and prevent naming collisions. Reserved keywords are special C# words that cannot be used as variable names."
  },
  {
    id: 36,
    title: "Object Initializer Syntax",
    category: "Phase 9: Advanced Class Features",
    language: "csharp",
    explanation: "When you create an object that has a lot of properties, you typically call the constructor, and then spend the next 5 lines of code manually setting `obj.Name = X;`, `obj.Age = Y;`, etc.\n\nC# 3.0 introduced **Object Initializer Syntax**. It allows you to rapidly assign values to any public fields or properties at the exact same moment you instantiate the object, using curly braces `{}`. It makes your code drastically cleaner and easier to read.",
    code: `public class Enemy
{
    public string Name { get; set; }
    public int Health { get; set; }
    public int Damage { get; set; }
}

class Program
{
    static void Main()
    {
        // --- THE OLD WAY ---
        Enemy goblin = new Enemy();
        goblin.Name = "Goblin";
        goblin.Health = 50;
        goblin.Damage = 10;
        
        // --- OBJECT INITIALIZER SYNTAX ---
        // Beautiful, highly readable, one-line instantiation.
        Enemy troll = new Enemy 
        { 
            Name = "Troll", 
            Health = 300, 
            Damage = 50 
        };
        
        // Works seamlessly with Lists too!
        List<Enemy> spawns = new List<Enemy>
        {
            new Enemy { Name = "Orc", Health = 100 },
            new Enemy { Name = "Slime", Health = 10 }
        };
    }
}`,
    summary: "Object Initializer Syntax uses curly braces {} to cleanly assign properties at the exact moment of object creation, saving lines of code and improving readability."
  },
  {
    id: 37,
    title: "Partial Classes",
    category: "Phase 9: Advanced Class Features",
    language: "csharp",
    explanation: "Sometimes a single Class becomes overwhelmingly massive (e.g., thousands of lines of code). Or, you might be using a tool that automatically generates C# code for you (like database models), and you want to add your own custom methods to that class without editing the auto-generated file.\n\nA **`partial class`** allows you to physically split the code for a single class across multiple different `.cs` files. When you compile the program, the C# compiler automatically stitches all the partial pieces back together into one massive class in memory.",
    code: `// --- FILE 1: Player_Stats.cs ---
// Note the 'partial' keyword
public partial class Player
{
    public string Name { get; set; }
    public int Level { get; set; }
}

// --- FILE 2: Player_Combat.cs ---
// Completely different file, but exactly the same class name and 'partial' keyword.
public partial class Player
{
    public void Attack()
    {
        Console.WriteLine($"{Name} attacks with level {Level} strength!");
    }
}

// --- FILE 3: Program.cs ---
class Program
{
    static void Main()
    {
        // The compiler has stitched the two files together! 
        // The Player object has both the properties from File 1 and methods from File 2.
        Player p = new Player();
        p.Name = "Hero";
        p.Level = 99;
        p.Attack();
    }
}`,
    diagram: `flowchart LR
    A["File 1: partial class Player   (Properties)"] --> C{"C# Compiler"}
    B["File 2: partial class Player   (Methods)"] --> C
    C -->|"Stitches together"| D["Single 'Player' Class in Memory"]
    
    style A fill:#3b82f6,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#f59e0b,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Partial classes allow you to split the code for a single class across multiple physical files. The compiler automatically merges them into one complete class at build time."
  },
  {
    id: 38,
    title: "Extension Methods",
    category: "Phase 9: Advanced Class Features",
    language: "csharp",
    explanation: "What if you want to add a cool new method to the built-in `string` or `int` data types? Because Microsoft wrote those classes, you don't have access to their source code to edit them.\n\n**Extension Methods** allow you to \"inject\" brand new methods into existing classes without touching their original source code, without recompiling them, and without inheriting from them.\n\nTo create one:\n1. It MUST be placed inside a `static` class.\n2. The method MUST be `static`.\n3. The very first parameter MUST use the `this` keyword, followed by the type you want to extend.",
    code: `using System;

// 1. Must be a static class
public static class MyExtensions
{
    // 2. Must be a static method
    // 3. 'this string text' means: Inject this method into the 'string' data type.
    public static int WordCount(this string text)
    {
        if (string.IsNullOrWhiteSpace(text)) return 0;
        
        string[] words = text.Split(' ');
        return words.Length;
    }
}

class Program
{
    static void Main()
    {
        string sentence = "Hello world this is amazing!";
        
        // WOW! WordCount() magically appears on all strings natively!
        int count = sentence.WordCount(); 
        
        Console.WriteLine($"That sentence has {count} words."); // Output: 5
    }
}`,
    diagram: `flowchart TD
    A["Existing Locked Class   (e.g., string)"] -.->|"this string"| B["Your Static Extension Method   WordCount()"]
    B -->|"Magically injects"| C["'Hello'.WordCount()"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff`,
    summary: "Extension methods allow you to permanently add new, custom methods to existing classes (even built-in .NET classes like strings) without altering their source code."
  },

  // Phase 10: Delegates, Events & Functional C#
  {
    id: 39,
    title: "Delegates (Passing Methods as Variables)",
    category: "Phase 10: Delegates, Events & Functional C#",
    language: "csharp",
    explanation: "You know how to pass a `string` variable into a method. But what if you wanted to pass an entire *Method* into another Method? \n\nA **Delegate** is a special data type that holds a pointer (reference) to a method, rather than holding standard data. \n\nDelegates allow you to treat functions exactly like variables. You can assign them, swap them out on the fly, or pass them as parameters. This is the foundation of \"Functional Programming\" in C#. The modern, built-in delegates used 99% of the time are `Action` (for methods that return void) and `Func` (for methods that return a value).",
    code: `using System;

class Program
{
    // A method that matches the Action delegate signature (returns void, takes no parameters)
    static void AttackWithSword() { Console.WriteLine("Swung a Sword!"); }
    static void AttackWithBow() { Console.WriteLine("Shot an Arrow!"); }

    static void Main()
    {
        // 1. Defining a built-in Delegate. 
        // 'Action' specifically means: A method that returns 'void'.
        Action currentAttackMethod;
        
        // 2. We can assign methods directly to this variable! (Do not use parenthesis)
        currentAttackMethod = AttackWithSword;
        
        // 3. Executing the variable actually executes the method inside it
        currentAttackMethod(); // Output: Swung a Sword!
        
        // 4. Swapping the behavior dynamically at runtime!
        currentAttackMethod = AttackWithBow;
        currentAttackMethod(); // Output: Shot an Arrow!
    }
}`,
    diagram: `flowchart LR
    A["Action currentAttack"] -->|"Assign = AttackWithSword"| B["Points to Sword Method"]
    A -->|"Assign = AttackWithBow"| C["Points to Bow Method"]
    A -.->|"currentAttack()"| D["Executes the pointed method"]
    
    style A fill:#8b5cf6,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#f59e0b,color:#fff`,
    summary: "Delegates are variables that hold references to Methods. They allow you to swap behaviors dynamically or pass functions as parameters to other functions."
  },
  {
    id: 40,
    title: "Events (The Publisher/Subscriber Model)",
    category: "Phase 10: Delegates, Events & Functional C#",
    language: "csharp",
    explanation: "If you want a UI Health Bar to update when the Player takes damage, you *could* have the Player directly modify the Health Bar. But what if you add an Audio Manager that also needs to play a hurt sound? And a Particle Manager? Having the Player directly talk to all of these systems creates messy, heavily-coupled code.\n\n**Events** solve this using the **Publisher/Subscriber** model. \n\n1. The Player (Publisher) declares an `event`. When they take damage, they simply scream into the void: \"I took damage!\" and they don't care who is listening.\n2. The Health Bar, Audio Manager, etc. (Subscribers) \"subscribe\" to the Player's event using `+=`. \nWhen the event fires, C# automatically notifies every subscriber instantly.",
    code: `using System;

// 1. THE PUBLISHER
public class Player
{
    // Defining the Event (using the built-in Action delegate)
    public event Action OnPlayerDeath; 
    
    public void TakeDamage(int amount)
    {
        Console.WriteLine($"Player took {amount} damage.");
        // If the event has subscribers (is not null), Invoke/Fire it!
        if (amount >= 100 && OnPlayerDeath != null) 
        {
            OnPlayerDeath.Invoke(); 
        }
    }
}

// 2. THE SUBSCRIBER
public class AudioManager
{
    public void PlayDeathSound() { Console.WriteLine("AUDIO: Playing Sad Trombone."); }
}

class Program
{
    static void Main()
    {
        Player hero = new Player();
        AudioManager audio = new AudioManager();
        
        // 3. SUBSCRIBING to the event using +=
        // We attach the audio manager's method to the player's event.
        hero.OnPlayerDeath += audio.PlayDeathSound;
        
        // 4. Triggering it
        hero.TakeDamage(100); 
        // Output: Player took 100 damage.
        // Output: AUDIO: Playing Sad Trombone.
    }
}`,
    diagram: `flowchart LR
    A["Player (Publisher)   Takes 100 Damage"] -->|"Fires Event!"| B{"OnPlayerDeath"}
    B -->|"Notifies"| C["AudioManager (Subscriber)"]
    B -->|"Notifies"| D["UI HealthBar (Subscriber)"]
    B -->|"Notifies"| E["GameManager (Subscriber)"]
    
    style A fill:#ef4444,color:#fff
    style B fill:#f59e0b,color:#fff
    style C fill:#3b82f6,color:#fff
    style D fill:#3b82f6,color:#fff
    style E fill:#3b82f6,color:#fff`,
    summary: "Events allow objects to broadcast notifications (Publisher) to any other objects that are listening (Subscribers), keeping your codebase decoupled and clean."
  },
  {
    id: 41,
    title: "Lambda Expressions (Inline Functions)",
    category: "Phase 10: Delegates, Events & Functional C#",
    language: "csharp",
    explanation: "When you use LINQ or Events, you constantly need to pass tiny, one-line functions around (like a function that just checks if a number is `> 10`). Creating a full, named method for these tiny checks is exhausting.\n\n**Lambda Expressions** use the `=>` (goes to) operator to create tiny, nameless functions directly inline on a single line of code.\n\nThe syntax is: `(input_parameters) => expression_or_code_block`",
    code: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 5, 12, 8, 20, 3 };
        
        // --- WITHOUT LAMBDA (Requires writing a whole separate method) ---
        // var bigNumbers = numbers.Where(CheckIfBig); 
        
        // --- WITH LAMBDA ---
        // Reads as: "Given variable 'x', return true if x > 10"
        // The lambda perfectly replaces the need to write an entire method!
        var bigNumbers = numbers.Where(x => x > 10).ToList();
        
        
        // Using lambdas with Delegates (Action)
        Action greet = () => Console.WriteLine("Hello from a Lambda!");
        greet(); // Output: Hello from a Lambda!
        
        // Using lambdas with Events
        // Subscribe an inline function directly without declaring a method
        Player hero = new Player();
        hero.OnPlayerDeath += () => Console.WriteLine("Inline death log triggered.");
    }
}

// You no longer have to write tedious methods like this just for LINQ
// static bool CheckIfBig(int x) { return x > 10; }`,
    summary: "Lambda Expressions (=>) allow you to write tiny, nameless, inline functions. They are heavily used in LINQ and Events to drastically reduce boilerplate code."
  },
  
  // Phase 11: Architecture & Multithreading
  {
    id: 42,
    title: "Multithreading, Processes, and Tasks",
    category: "Phase 11: Architecture & Multithreading",
    language: "csharp",
    explanation: "Modern CPUs have many cores (e.g., 8-core or 16-core). If you write a standard `while` loop, it only runs on a single core, leaving 90% of your computer's power untouched.\n\n- **Process**: A completely isolated program running on your OS (e.g., Google Chrome vs Microsoft Word). If one crashes, the other survives.\n- **Thread**: A single worker *inside* your process. If your UI thread gets stuck doing heavy math, the whole app freezes. You can spawn background threads to do math while the UI stays responsive.\n- **Tasks (`Task`)**: The modern, safe C# wrapper around Threads. Instead of manually managing raw memory threads (which is extremely dangerous and prone to crashing), you use `Task.Run()` to let C# automatically assign the work to an available background core.",
    code: `using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        Console.WriteLine("Main thread started.");

        // 1. Spawning a Background Task (Modern Multithreading)
        // This instantly assigns the heavy work to a completely different CPU core.
        Task.Run(() => 
        {
            DoHeavyMath();
        });

        // The Main thread keeps running instantly while the background thread does the math!
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine("UI Thread is still responsive!");
            Thread.Sleep(500); // Wait 0.5 seconds
        }
    }

    static void DoHeavyMath()
    {
        Console.WriteLine("--- BACKGROUND TASK STARTED ---");
        Thread.Sleep(3000); // Simulate 3 seconds of heavy calculations
        Console.WriteLine("--- BACKGROUND TASK FINISHED! ---");
    }
}`,
    diagram: `flowchart TD
    A["Process (Your App)"] --> B["Main UI Thread   (Updates Screen)"]
    A --> C["Background Thread 1   (Audio)"]
    A --> D["Background Thread 2   (Physics)"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#10b981,color:#fff`,
    summary: "Multithreading allows your program to perform multiple operations simultaneously on different CPU cores. Always use the modern `Task` class instead of raw `Thread` management."
  },
  {
    id: 43,
    title: "The SOLID Principles",
    category: "Phase 11: Architecture & Multithreading",
    language: "csharp",
    explanation: "As your application grows to 50,000+ lines of code, it becomes a fragile nightmare to maintain. **SOLID** is an acronym for 5 design principles that prevent spaghetti code:\n\n1. **S**ingle Responsibility: A Class should do exactly one thing. Don't make a `Player` class that also saves data to the database.\n2. **O**pen/Closed: You should be able to add new features without altering existing code. (e.g., using Interfaces instead of giant switch statements).\n3. **L**iskov Substitution: If you replace a Parent class with a Child class, the program shouldn't break.\n4. **I**nterface Segregation: Don't force classes to implement massive interfaces they don't need. Break giant interfaces into smaller ones.\n5. **D**ependency Inversion: High-level classes shouldn't depend directly on low-level classes. Both should depend on Abstractions (Interfaces).",
    code: `// --- VIOLATING Single Responsibility (BAD) ---
public class Player
{
    public void Walk() { /* ... */ }
    public void Jump() { /* ... */ }
    
    // BAD: The player shouldn't be responsible for talking to SQL databases!
    public void SaveToDatabase() { /* ... */ } 
}

// --- FOLLOWING Single Responsibility (GOOD) ---
public class Player
{
    public void Walk() { /* ... */ }
    public void Jump() { /* ... */ }
}

public class PlayerDatabaseRepository
{
    // GOOD: A dedicated class solely responsible for database interactions.
    public void SaveToDatabase(Player p) { /* ... */ }
}`,
    diagram: `flowchart TD
    A["SOLID Principles"] --> S["S: Single Responsibility"]
    A --> O["O: Open/Closed"]
    A --> L["L: Liskov Substitution"]
    A --> I["I: Interface Segregation"]
    A --> D["D: Dependency Inversion"]
    
    style A fill:#64748b,color:#fff
    style S fill:#3b82f6,color:#fff
    style O fill:#10b981,color:#fff
    style L fill:#f59e0b,color:#fff
    style I fill:#8b5cf6,color:#fff
    style D fill:#ef4444,color:#fff`,
    summary: "SOLID is a set of 5 architectural principles that prevent 'spaghetti code', ensuring your codebase remains modular, scalable, and easy to maintain over years of development."
  },
  {
    id: 44,
    title: "C# Versions and Evolution",
    category: "Phase 11: Architecture & Multithreading",
    language: "csharp",
    explanation: "C# is not a stagnant language. Microsoft updates it every year with new syntax to make coding faster and safer. \n\nHere are some of the most famous evolutionary leaps:\n\n- **C# 1.0 (2002)**: Basic OOP. Released with the original .NET Framework.\n- **C# 2.0 (2005)**: Introduced **Generics** (`List<T>`). We no longer had to cast everything from `object`!\n- **C# 3.0 (2007)**: A massive update. Introduced `var`, **LINQ**, and **Lambda Expressions**.\n- **C# 5.0 (2012)**: Changed the world with **async / await** for asynchronous programming.\n- **C# 7.0 (2017)**: Introduced **Tuples** and Pattern Matching.\n- **C# 9.0 (2020)**: Introduced **Records** (immutable data types) and Top-level statements (removing the need for `static void Main`).\n- **C# 11.0 & 12.0 (Modern)**: Introduced Raw String Literals, Primary Constructors, and Collection Expressions `[]`.",
    code: `// --- EVOLUTION EXAMPLE: CREATING A LIST ---

class Program
{
    static void Main()
    {
        // C# 1.0 (2002): No generics. Extremely dangerous because it takes 'object'.
        // ArrayList list1 = new ArrayList(); 
        
        // C# 2.0 (2005): Generics introduced! Safe, but verbose.
        List<int> list2 = new List<int>();
        
        // C# 3.0 (2007): 'var' keyword introduced. Less typing.
        var list3 = new List<int>();
        
        // C# 9.0 (2020): Target-typed 'new'. Even less typing!
        List<int> list4 = new();
        
        // C# 12.0 (2023): Collection Expressions. The ultimate clean syntax.
        List<int> list5 = [1, 2, 3];
    }
}`,
    diagram: `flowchart LR
    A["C# 1.0   (2002)"] -->|"Generics"| B["C# 2.0   (2005)"]
    B -->|"LINQ and var"| C["C# 3.0   (2007)"]
    C -->|"async/await"| D["C# 5.0   (2012)"]
    D -->|"Records"| E["C# 9.0   (2020)"]
    E -->|"Clean Syntax"| F["C# 12.0   (2023)"]
    
    style A fill:#64748b,color:#fff
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#8b5cf6,color:#fff
    style E fill:#f59e0b,color:#fff
    style F fill:#ef4444,color:#fff`,
    summary: "C# constantly evolves. Understanding its history helps you recognize why older codebases look different than modern, highly optimized C# 12+ codebases."
  }
];
