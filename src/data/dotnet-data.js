// data.js - Contains all the interview questions
// We will populate this incrementally in batches.

export const categories = [
    "All",
    ".NET Fundamentals",
    "CLR & Memory",
    "OOP Concepts",
    "Delegates & Events",
    "Collections",
    "Multithreading",
    "Exception Handling",
    "Abstract & Interfaces",
    "Design Patterns",
    "Repository Pattern",
    "Factory & DI Patterns"
];

// Structure of a question object:
// {
//    id: 1,
//    title: "Explain difference between .NET and C# ?",
//    category: ".NET Fundamentals",
//    explanation: "...",
//    example: "...",
//    code: "...",
//    tip: "...",
//    mistake: "...",
//    summary: "..."
// }

export const interviewQuestions = [];

interviewQuestions.push(
    {
        id: 1,
        title: "Explain difference between .NET and C# ?",
        category: ".NET Fundamentals",
        explanation: "C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. .NET, on the other hand, is a software framework and runtime environment where C# applications are executed. Think of C# as the language used to write instructions, while .NET is the ecosystem that provides the base class libraries (BCL) and the Common Language Runtime (CLR) to execute those instructions.",
        example: "Building a car: C# is the engineering design and the tools used to assemble the car. .NET is the factory floor, the assembly line, and the raw materials provided to make the car a reality.",
        code: `// C# is the language used to define this class
using System;

namespace InterviewGuide 
{
    class Program 
    {
        static void Main() 
        {
            // The Console class is provided by the .NET Base Class Library (BCL)
            Console.WriteLine("C# is the syntax; .NET provides the runtime!");
        }
    }
}`,
        tip: "Clearly state that C# cannot run on a machine without the .NET runtime (CLR). Mention that .NET also supports other languages like F# and VB.NET.",
        mistake: "Confusing the two by saying 'C# is a framework' or 'C# and .NET are exactly the same thing.'",
        summary: "C# is the programming language; .NET is the runtime and framework."
    },
    {
        id: 2,
        title: ".NET Framework vs .NET Core vs .NET 5.0+",
        category: ".NET Fundamentals",
        explanation: "**.NET Framework:** The original, Windows-only framework developed in the early 2000s. Heavy, tied to Windows components, and not open-source initially.\n\n**.NET Core:** A complete rewrite of the framework to be cross-platform (Windows, Linux, macOS), open-source, highly modular, and optimized for cloud/microservices.\n\n**.NET 5.0 (and later .NET 6, 7, 8):** The unification of the .NET ecosystem. Microsoft dropped 'Core' and 'Framework' from the name to signal a single, unified platform moving forward, starting with .NET 5.",
        example: "Imagine a restaurant. .NET Framework is a traditional dine-in restaurant (Windows only). .NET Core is a modern food truck that can go anywhere (cross-platform). .NET 5+ is a global franchise combining the best of both worlds.",
        code: `// To check your .NET version in code (works in .NET Core 3.0+)
using System;
using System.Runtime.InteropServices;

class Program
{
    static void Main()
    {
        // Prints the current .NET version (e.g., .NET 8.0.0)
        Console.WriteLine($"Running on: {RuntimeInformation.FrameworkDescription}");
        Console.WriteLine($"OS: {RuntimeInformation.OSDescription}");
    }
}`,
        tip: "Emphasize that .NET 5+ is the evolution of .NET Core, not .NET Framework. .NET Framework 4.8 is the final version of the legacy framework.",
        mistake: "Assuming .NET 5 is an upgrade to .NET Framework 4.8. It is actually the next version of .NET Core 3.1.",
        summary: ".NET Framework = Windows only legacy. .NET Core = Cross-platform modern. .NET 5+ = Unified future."
    },
    {
        id: 3,
        title: "What is IL (Intermediate Language) Code ?",
        category: "CLR & Memory",
        explanation: "Intermediate Language (IL), also known as MSIL (Microsoft Intermediate Language) or CIL (Common Intermediate Language), is the CPU-independent instruction set into which .NET source code (like C# or VB.NET) is compiled. Instead of compiling directly to machine code, the C# compiler (Roslyn) converts the code into IL. This IL is stored in an assembly (DLL or EXE) and is later converted to machine code by the JIT compiler at runtime.",
        example: "Translating a book. An English (C#) book is translated into Esperanto (IL) which is a universal language. Later, when a reader wants to read it in France or Japan, an interpreter (JIT) translates Esperanto into French or Japanese (Machine code).",
        code: `// C# Code
public class MathOps 
{
    public int Add(int a, int b) 
    {
        return a + b;
    }
}

/* 
 * Equivalent IL Code (Conceptual):
 * IL_0000: ldarg.1
 * IL_0001: ldarg.2
 * IL_0002: add
 * IL_0003: ret
 */`,
        tip: "Explain the two-step compilation process: Source Code -> IL (at compile time) -> Machine Code (at runtime via JIT).",
        mistake: "Thinking that C# compiles directly to machine code like C or C++ does.",
        summary: "IL is the low-level, CPU-independent code generated by the .NET compiler from source code."
    },
    {
        id: 4,
        title: "What is the use of JIT (Just-In-Time) compiler ?",
        category: "CLR & Memory",
        explanation: "The Just-In-Time (JIT) compiler is a core component of the Common Language Runtime (CLR). Its primary job is to compile Intermediate Language (IL) code into native machine code (CPU-specific instructions) right before the code is executed. It does this 'just in time' rather than ahead of time. Once a method is JIT-compiled, the resulting machine code is cached in memory for subsequent calls, improving performance.",
        example: "Think of an UN translator. Instead of translating a speech and printing it out beforehand (AOT compilation), the translator listens to the speaker and translates the speech into the local language in real-time (JIT) as it is needed.",
        code: `using System;

class Program
{
    static void Main()
    {
        // First time this is called, JIT compiles the MethodA from IL to Machine Code.
        MethodA(); 
        
        // Second time, it executes the cached Machine Code directly (faster).
        MethodA(); 
    }

    static void MethodA()
    {
        Console.WriteLine("Executing Method A");
    }
}`,
        tip: "Mention that JIT optimization allows the runtime to optimize the machine code specifically for the architecture of the CPU it is currently running on.",
        mistake: "Saying JIT compiles C# code. JIT only compiles IL code to machine code. The C# compiler compiles C# to IL.",
        summary: "JIT converts CPU-independent IL code into CPU-specific native machine code at runtime."
    },
    {
        id: 5,
        title: "Is it possible to view IL code ?",
        category: "CLR & Memory",
        explanation: "Yes, it is completely possible to view IL code. Microsoft provides a tool called IL DASM (Intermediate Language Disassembler) with Visual Studio. Additionally, there are powerful third-party tools like dotPeek (by JetBrains), ILSpy, and .NET Reflector that can inspect assemblies, view IL, and even decompile IL back into C# source code.",
        example: "Like taking a compiled program and putting it under a microscope to see its DNA. ILSpy acts as the microscope that translates the binary assembly back into readable IL or C#.",
        code: `// Run this command in the Developer Command Prompt for Visual Studio:
// ildasm MyApplication.exe

// This opens a GUI where you can navigate the namespaces, classes, 
// and methods to view the underlying IL instructions.`,
        tip: "Mentioning specific tools like ILSpy or dotPeek shows you have practical experience exploring compiled assemblies and debugging at a deeper level.",
        mistake: "Thinking that once code is compiled to a DLL, it is completely hidden and secure. (It is not, which is why obfuscation is sometimes used).",
        summary: "Yes, using tools like ILDASM, ILSpy, or dotPeek."
    },
    {
        id: 6,
        title: "What is the benefit of compiling into IL code ?",
        category: "CLR & Memory",
        explanation: "Compiling into IL provides two major benefits:\n\n1. **Language Interoperability:** Because different .NET languages (C#, VB.NET, F#) all compile down to the same standard IL, they can seamlessly interact. A class written in C# can inherit from a class written in VB.NET.\n\n2. **Platform Independence / Portability:** The compiled IL is CPU-agnostic. The exact same DLL can be moved to a 32-bit Windows machine, a 64-bit Linux server, or an ARM-based Mac, and the local JIT compiler will handle creating the correct machine code for that specific architecture.",
        example: "IL is like standard USB type-C. Whether you have an Apple, Samsung, or Dell device, the USB-C standard allows them all to connect and communicate without needing special adapters.",
        code: `// C# Project compiling to MyLibrary.dll
public class Logger {
    public void Log(string msg) { Console.WriteLine(msg); }
}

// VB.NET Project referencing MyLibrary.dll
// Because both compile to IL, VB.NET can consume the C# DLL natively.
Module Program
    Sub Main()
        Dim myLogger As New Logger()
        myLogger.Log("Hello from VB.NET calling C#!")
    End Sub
End Module`,
        tip: "Use the term 'Write once, run anywhere (within the .NET ecosystem)'. IL is the key to .NET's cross-platform capabilities.",
        mistake: "Stating that IL makes the code run faster. It doesn't; it actually adds a JIT step. Its main benefits are interoperability and portability.",
        summary: "IL enables language interoperability and platform independence."
    },
    {
        id: 7,
        title: "Does .NET support multiple programming languages ?",
        category: ".NET Fundamentals",
        explanation: "Yes, .NET is inherently designed to be a multi-language platform. Microsoft officially supports C#, F# (functional programming), and Visual Basic .NET (VB.NET). Furthermore, there are third-party languages that have been adapted for the .NET runtime (like IronPython). All these languages compile down to Common Intermediate Language (CIL), allowing them to share the Base Class Library and interoperate flawlessly.",
        example: "A software team can have data scientists writing analytical algorithms in F# while the backend API developers consume those F# libraries using C#. Both run on the same .NET runtime.",
        code: `// C# Code
public class Calculator {
    public int Add(int a, int b) => a + b;
}

// F# Code consuming the C# class
// let calc = Calculator()
// let result = calc.Add(5, 10)
// printfn "Result is %d" result`,
        tip: "Mentioning F# specifically as a functional language on .NET shows a broader understanding of the ecosystem beyond just C#.",
        mistake: "Assuming C# is the only language .NET supports.",
        summary: "Yes, primarily C#, F#, and VB.NET, which all compile to the same IL."
    },
    {
        id: 8,
        title: "What is CLR (Common Language Runtime) ?",
        category: "CLR & Memory",
        explanation: "The Common Language Runtime (CLR) is the execution engine or the heart of the .NET framework. When an application is executed, the CLR takes charge. It is responsible for loading the IL code, performing Just-In-Time (JIT) compilation to machine code, managing memory (via Garbage Collection), handling exceptions, and ensuring type safety and thread management.",
        example: "The CLR is like the engine of a car or the operating system for .NET applications. You write the code (the driver), but the CLR actually executes the commands, manages the fuel (memory), and handles safety (exceptions).",
        code: `using System;

class Program
{
    static void Main()
    {
        // When this program runs, it is the CLR that:
        // 1. Loads this assembly.
        // 2. JIT compiles the IL to machine code.
        // 3. Allocates memory for the string.
        // 4. Cleans up the memory after execution.
        Console.WriteLine("Hello CLR!");
    }
}`,
        tip: "If asked 'What handles memory in .NET?', don't just say 'Garbage Collector'. Say 'The Garbage Collector, which is a component of the CLR.'",
        mistake: "Confusing CLR with BCL (Base Class Library). BCL is the pre-written code; CLR is the runtime engine.",
        summary: "CLR is the execution engine of .NET responsible for JIT compilation, memory management, and security."
    },
    {
        id: 9,
        title: "What is managed and unmanaged code ?",
        category: "CLR & Memory",
        explanation: "**Managed Code:** Code whose execution is strictly managed by the CLR. The CLR handles memory allocation, garbage collection, and type safety. Code written in C# and compiled to IL is managed code.\n\n**Unmanaged Code:** Code executed directly by the operating system, outside the control of the CLR. It requires manual memory management (e.g., C, C++). In .NET, interacting with COM components, Windows APIs, or using raw pointers falls under unmanaged code.",
        example: "Managed code is like a guided tour where the tour guide (CLR) ensures you don't get lost and cleans up your trash. Unmanaged code is exploring the wilderness alone; you have complete freedom, but you are responsible for your own safety and trash removal.",
        code: `using System;
using System.Runtime.InteropServices;

class Program
{
    // Unmanaged code interaction via P/Invoke
    // Calling a native Windows C++ API directly
    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    public static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);

    static void Main()
    {
        // Managed code
        string message = "This string is managed by CLR.";
        
        // Calling unmanaged code
        MessageBox(IntPtr.Zero, message, "Unmanaged Call", 0);
    }
}`,
        tip: "Mention that interacting with unmanaged code requires implementing the `IDisposable` interface to manually free unmanaged resources.",
        mistake: "Assuming .NET cannot execute unmanaged code. It can, using `unsafe` blocks or P/Invoke.",
        summary: "Managed code is executed and controlled by the CLR. Unmanaged code runs directly on the OS without CLR supervision."
    },
    {
        id: 10,
        title: "Explain the importance of Garbage Collector ?",
        category: "Garbage Collector",
        explanation: "The Garbage Collector (GC) is a background process in the CLR that manages the allocation and release of memory for an application automatically. Its importance lies in preventing memory leaks. Without a GC, developers would have to manually allocate and free memory (like in C++), which is highly prone to human error. The GC periodically inspects the managed heap, identifies objects that are no longer being referenced by the application, and reclaims their memory.",
        example: "The GC is like a robotic vacuum cleaner in a house. You can just drop things (objects) on the floor when you're done with them. Periodically, the vacuum wakes up, sees what is no longer needed, and cleans it up, keeping the house from overflowing with trash.",
        code: `using System;

class Program
{
    static void Main()
    {
        for (int i = 0; i < 10000; i++)
        {
            // Creating objects. 
            // We do NOT need to call 'delete obj' or 'free(obj)'.
            Customer obj = new Customer { Id = i };
        }
        
        // At some point, the GC will automatically clean up the 10000 
        // Customer objects since they are no longer referenced.
    }
}
class Customer { public int Id { get; set; } }`,
        tip: "Mention that the GC only manages memory on the Managed Heap, not the Stack, and it operates in Generations (0, 1, and 2) to optimize performance.",
        mistake: "Believing the GC cleans up *everything* immediately. The GC is non-deterministic; you don't control exactly when it runs.",
        summary: "GC automatically reclaims memory of unused managed objects, preventing memory leaks."
    },
    {
        id: 11,
        title: "Can garbage collector claim unmanaged objects ?",
        category: "Garbage Collector",
        explanation: "No, the Garbage Collector has absolutely no knowledge of unmanaged objects (like file handles, database connections, network sockets, or memory allocated via native OS calls). If you open a database connection, the GC knows about the wrapper object, but not the actual underlying network socket. To claim unmanaged objects, developers must explicitly write cleanup code, typically by implementing the `IDisposable` interface and using the `using` statement.",
        example: "The GC is like a maid hired to clean the inside of your house (managed). If you leave a garden hose running outside (unmanaged), the maid won't touch it. You have to turn it off yourself.",
        code: `using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Using statement ensures Dispose() is called, 
        // cleaning up the UNMANAGED file handle immediately.
        using (FileStream fs = new FileStream("test.txt", FileMode.OpenOrCreate))
        {
            // Do work with the file
        } // fs.Dispose() is implicitly called here closing the OS file handle.
    }
}`,
        tip: "Always bring up the `IDisposable` interface and the `using` block when talking about unmanaged resources.",
        mistake: "Thinking that setting a database connection to `null` will close the connection. It won't; it just leaves the connection dangling until a timeout occurs.",
        summary: "No, GC only manages managed heap memory. Unmanaged resources must be manually cleaned up via IDisposable."
    },
    {
        id: 12,
        title: "What is the importance of CTS (Common Type System) ?",
        category: "CLR & Memory",
        explanation: "The Common Type System (CTS) defines how types are declared, used, and managed in the runtime. It is the standard that ensures that data types defined in one .NET language are perfectly understood by another .NET language. For example, an `Integer` in VB.NET and an `int` in C# both map to the exact same CTS type: `System.Int32`.",
        example: "CTS is like the metric system for .NET. Even if one person calls it 'centimeters' and another calls it 'cm', they are referring to the exact same universal measurement standard. This ensures seamless integration.",
        code: `// C# Code
int myCsharpInt = 5;

// Behind the scenes, the C# compiler maps 'int' to the CTS type 'System.Int32'
System.Int32 myCtsInt = 5;

// If a VB.NET developer writes: Dim myVbInt As Integer = 5
// It also maps to System.Int32.
// Therefore, C# and VB.NET can easily pass integers to each other.`,
        tip: "Mention that CTS is what makes cross-language integration possible. It defines Value Types, Reference Types, and rules for inheritance.",
        mistake: "Confusing CTS with CLS. CTS defines ALL the data types. CLS is just a subset of CTS.",
        summary: "CTS is a standard that ensures data types are uniform across all .NET languages, enabling language interoperability."
    },
    {
        id: 13,
        title: "Explain CLS (Common Language Specification) ?",
        category: "CLR & Memory",
        explanation: "The Common Language Specification (CLS) is a subset of the CTS. It is a set of rules and guidelines that all .NET languages must follow to ensure full interoperability. If a library only uses CLS-compliant features, any other .NET language can consume it. For example, C# supports unsigned integers (`uint`), but VB.NET (historically) did not. Therefore, `uint` is part of CTS, but it is NOT CLS-compliant.",
        example: "If CTS is a massive dictionary of all English words, CLS is the 'Basic English' dictionary containing only the words that every single English speaker is guaranteed to understand.",
        code: `using System;

// An assembly can be marked as CLS compliant
[assembly: CLSCompliant(true)]

public class Calculator
{
    // This is CLS Compliant (Both C# and VB.NET understand Int32)
    public int Add(int a, int b) => a + b;

    // WARNING: This is NOT CLS Compliant!
    // If you uncomment this, the compiler will throw a warning because 
    // uint is not guaranteed to be understood by all .NET languages.
    // public uint AddUnsigned(uint a, uint b) => a + b;
}`,
        tip: "Use the `uint` example to perfectly illustrate the difference between CTS and CLS.",
        mistake: "Using CLS and CTS interchangeably. Remember: CLS is a *subset* of CTS.",
        summary: "CLS is a set of foundational rules (a subset of CTS) that ensures true interoperability among all .NET languages."
    },
    {
        id: 14,
        title: "Difference between Stack vs Heap ?",
        category: "CLR & Memory",
        explanation: "**Stack:** A block of memory used for static memory allocation. It stores Value Types (like int, bool, structs) and reference pointers. It is LIFO (Last-In-First-Out) and extremely fast. Memory here is automatically cleaned up when the method scope ends.\n\n**Heap:** A block of memory used for dynamic memory allocation. It stores Reference Types (like classes, strings, arrays). It is slower to allocate and access. Memory here is managed by the Garbage Collector.",
        example: "The Stack is like a stack of plates in a cafeteria; you quickly put plates on top and take them off the top (fast, orderly). The Heap is like a large warehouse where you place bulky items wherever there is space (slower, requires a manager/GC to clean up).",
        code: `public void Method()
{
    // 'x' is a value type. It is stored on the Stack.
    int x = 10; 
    
    // 'customer' is a reference type. 
    // The actual object data { Id = 1 } is stored on the Heap.
    // However, the pointer/reference named 'customer' is stored on the Stack.
    Customer customer = new Customer { Id = 1 };
} // End of method: 'x' and the pointer 'customer' are popped off the Stack instantly.
  // The Customer object remains on the Heap until the GC cleans it up.`,
        tip: "A common trick question: 'Where are strings stored?' Strings are Reference Types, so they are stored on the Heap, even though they look like value types.",
        mistake: "Saying 'Everything is on the heap' or 'Value types are always on the stack'. (A value type declared inside a class is stored on the heap as part of that class object).",
        summary: "Stack is fast, scoped memory for Value Types. Heap is dynamic memory for Reference Types managed by the GC."
    },
    {
        id: 15,
        title: "What are Value types & Reference types?",
        category: "CLR & Memory",
        explanation: "**Value Types:** Variables that directly contain their data. They are derived from `System.ValueType`. Examples include `int`, `double`, `bool`, `char`, `enum`, and `struct`. Assigning one value type to another copies the actual value.\n\n**Reference Types:** Variables that store a reference (memory address) to their data, not the data itself. Examples include `class`, `interface`, `delegate`, `string`, and `object`. Assigning one reference type to another copies the address, so both variables point to the same object.",
        example: "Value Type is like photocopying a document. If you write on your copy, the original is unaffected. Reference Type is like sharing a Google Doc link. If someone edits the document via the link, everyone sees the changes.",
        code: `// Value Type Example
int a = 10;
int b = a;  // Creates a copy
b = 20;     // 'a' is still 10

// Reference Type Example
int[] arr1 = { 10 };
int[] arr2 = arr1; // Copies the reference, not the array
arr2[0] = 20;      // arr1[0] is now 20 as well!`,
        tip: "Mention that structs are value types and classes are reference types. This is the fundamental architectural difference between them.",
        mistake: "Assuming `string` is a value type because it behaves like one (it is immutable). String is a reference type.",
        summary: "Value types hold the actual data (copies on assignment). Reference types hold a pointer to the data (shares on assignment)."
    },
    {
        id: 16,
        title: "Explain boxing and unboxing ?",
        category: "CLR & Memory",
        explanation: "**Boxing:** The process of converting a Value Type (like int) into a Reference Type (like object). When a value type is boxed, memory is allocated on the Heap, and the value is copied into it.\n\n**Unboxing:** The reverse process. It extracts the value type from the object. Unboxing involves checking the object instance to ensure it is a boxed value of the given type, and then copying the value from the Heap back to the Stack.",
        example: "Boxing is like packing a small book (value) into a large shipping box (object/heap). Unboxing is taking the book out of the box and putting it on your reading table (stack).",
        code: `int num = 123;      // Value type on the Stack

// Boxing: Implicitly converting int to object
object obj = num;   // 'num' is boxed and placed on the Heap

// Unboxing: Explicitly converting object back to int
int unboxedNum = (int)obj;  // 'unboxedNum' is back on the Stack`,
        tip: "Boxing is implicit (done automatically), but unboxing is explicit (requires a cast).",
        mistake: "Thinking boxing/unboxing just moves the pointer. No, it involves physically allocating memory and copying the data, which is why it impacts performance.",
        summary: "Boxing: Value Type -> Reference Type (Stack to Heap). Unboxing: Reference Type -> Value Type (Heap to Stack)."
    },
    {
        id: 17,
        title: "What is the consequence of boxing and unboxing ?",
        category: "CLR & Memory",
        explanation: "The main consequence is a **performance hit and memory overhead**. \n\n1. Boxing requires allocating new memory on the Heap and copying the value from the Stack.\n2. Unboxing requires checking the type safety and copying the value back to the Stack.\n3. Boxing creates more objects on the Heap, which forces the Garbage Collector to work harder to clean them up.",
        example: "If you have to pack and unpack your laptop into a suitcase every time you want to check an email, it takes significantly more time and effort than just leaving it on the desk.",
        code: `using System.Collections;
using System.Diagnostics;

class Program
{
    static void Main()
    {
        ArrayList list = new ArrayList();
        
        // CONSEQUENCE: We are doing Boxing 10,000 times!
        // This allocates 10,000 objects on the Heap unnecessarily.
        for(int i = 0; i < 10000; i++) 
        {
            list.Add(i); // 'i' is boxed to an object
        }
        
        // Solution: Use Generic Collections (List<int>) to avoid boxing!
    }
}`,
        tip: "When asked how to avoid this consequence, the answer is always: 'Use Generic Collections (e.g., `List<T>`) instead of legacy collections (e.g., `ArrayList`).'",
        mistake: "Underestimating the GC impact. High boxing rates in a tight loop can cause severe application stutter due to GC pauses.",
        summary: "It causes performance degradation and extra Garbage Collection overhead due to heap allocations."
    },
    {
        id: 18,
        title: "Explain casting, implicit casting, and explicit casting ?",
        category: "OOP Concepts",
        explanation: "**Casting:** Converting a variable from one data type to another.\n\n**Implicit Casting:** Done automatically by the compiler when there is NO risk of data loss. It always goes from a smaller type to a larger type (e.g., `int` to `long`, or derived class to base class).\n\n**Explicit Casting:** Must be done manually by the developer using a cast operator `(type)`. This is required when there IS a risk of data loss (e.g., `double` to `int`, or base class to derived class).",
        example: "Implicit casting is pouring water from a small glass into a large bucket (no spills). Explicit casting is pouring from a large bucket into a small glass; you must force it, and water (data) might spill out.",
        code: `// Implicit Casting (Safe, no data loss)
int myInt = 9;
double myDouble = myInt; // Automatic conversion to 9.0

// Explicit Casting (Unsafe, potential data loss)
double myPreciseValue = 9.78;
// int myInt2 = myPreciseValue; // ERROR: Compiler blocks this!
int myInt2 = (int)myPreciseValue; // Explicit cast. Value becomes 9 (0.78 is lost)

// Object Casting
object obj = "Hello";
string str = (string)obj; // Explicit downcast`,
        tip: "Mention the `as` and `is` keywords. They are the safe way to perform explicit casting for reference types without throwing exceptions.",
        mistake: "Confusing casting with parsing. Casting changes the type of identical/compatible data. `int.Parse(\"1\")` is not a cast; it's string parsing.",
        summary: "Implicit casting is automatic and safe. Explicit casting is manual and risks data loss."
    },
    {
        id: 19,
        title: "What can happen during explicit casting ?",
        category: "OOP Concepts",
        explanation: "Two major things can go wrong during explicit casting:\n\n1. **Data Loss (Truncation):** When explicitly casting a larger numeric type to a smaller one, data that exceeds the capacity of the smaller type is lost (e.g., decimals are truncated when casting `double` to `int`).\n2. **InvalidCastException:** When casting reference types, if the object in memory is not actually of the type you are casting it to, the CLR will throw a runtime exception.",
        example: "Data loss: Trying to fit a 2-liter bottle of soda into a 1-liter bottle. Exception: Trying to force a circle peg through a square hole; the system breaks.",
        code: `using System;

class Program
{
    static void Main()
    {
        // Scenario 1: Data Loss
        double pi = 3.14159;
        int piInt = (int)pi; 
        Console.WriteLine(piInt); // Output: 3 (Data lost!)

        // Scenario 2: InvalidCastException
        object myObj = 123; // boxed int
        try 
        {
            string s = (string)myObj; // Throws InvalidCastException!
        }
        catch(InvalidCastException ex) 
        {
            Console.WriteLine("Cannot cast boxed int to string.");
        }
    }
}`,
        tip: "Always suggest using the `as` keyword for reference types. `string s = myObj as string;` will return `null` instead of throwing an exception, which is much safer.",
        mistake: "Assuming the compiler will catch all bad explicit casts. Explicit casting tells the compiler 'trust me', moving the risk to runtime.",
        summary: "Explicit casting can result in data truncation (loss of precision) or an `InvalidCastException` at runtime."
    },
    {
        id: 20,
        title: "Differentiate between Array and ArrayList ?",
        category: "Collections",
        explanation: "**Array:** A strongly-typed collection with a FIXED size. You must specify the size when you create it, and it can only hold items of the specific type it was declared with (e.g., `int[]` can only hold integers).\n\n**ArrayList:** A non-generic collection with a DYNAMIC size. It grows automatically as you add items. However, it is not strongly typed; it stores everything as type `object`, which means it can hold mixed types (an int, a string, a boolean all in one list).",
        example: "An Array is like a carton of eggs; it has exactly 12 slots, and it only holds eggs. An ArrayList is like a moving box; you can keep throwing different things in it (books, shoes, toys), and it expands as needed.",
        code: `using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // --- ARRAY ---
        // Fixed size of 3, strongly typed to int
        int[] numbers = new int[3]; 
        numbers[0] = 1;
        // numbers[3] = 4; // ERROR: IndexOutOfRangeException
        // numbers[1] = "Hello"; // ERROR: Cannot implicitly convert string to int

        // --- ARRAYLIST ---
        // Dynamic size, weakly typed (holds objects)
        ArrayList list = new ArrayList();
        list.Add(1);        // Boxing occurs!
        list.Add("Hello");  // Mixed types are allowed
        list.Add(true);
        
        // Reading requires unboxing and casting
        int firstItem = (int)list[0];
    }
}`,
        tip: "Always mention that `ArrayList` is considered legacy in modern C#. We use `List<T>` today to get dynamic size WITH strong typing.",
        mistake: "Thinking `ArrayList` is just a dynamically sized array. The critical difference is the weak typing (`object`) and the boxing overhead it causes.",
        summary: "Array is fixed-size and strongly typed. ArrayList is dynamic-size and weakly typed (stores objects)."
    },
    {
        id: 21,
        title: "Whose performance is better Array or ArrayList ?",
        category: "Collections",
        explanation: "**Array performance is significantly better than ArrayList.**\n\nThere are two main reasons:\n1. **No Boxing/Unboxing:** Because an Array is strongly typed, value types (like `int`) are stored directly. `ArrayList` stores everything as an `object`, meaning every value type added must be Boxed, and every item retrieved must be Unboxed and cast. This adds massive CPU and memory overhead.\n2. **Memory Contiguity:** Arrays are allocated as a single, contiguous block of memory, making CPU cache access extremely fast. `ArrayList` involves objects scattered across the heap.",
        example: "Array is like taking a direct, non-stop flight to your destination. ArrayList is taking a flight with 3 layovers, unpacking and repacking your bags (boxing/unboxing) at every stop.",
        code: `using System.Collections;
using System.Diagnostics;

// Performance comparison concept
int[] array = new int[10000];
ArrayList arrayList = new ArrayList();

// FAST: Direct memory write
for(int i = 0; i < 10000; i++) array[i] = i; 

// SLOW: Allocates 10000 'object' wrappers on the Heap (Boxing)
for(int i = 0; i < 10000; i++) arrayList.Add(i); 

// SLOW: Requires unboxing check and cast
int value = (int)arrayList[500];`,
        tip: "If performance is a concern but you need dynamic sizing, use `List<T>`. It gives you the dynamic resizing of `ArrayList` with the performance and type-safety of an Array.",
        mistake: "Assuming the performance difference is just about resizing. The biggest performance killer in `ArrayList` is the Boxing/Unboxing of value types.",
        summary: "Array is vastly faster because it is strongly typed, avoiding the heavy boxing/unboxing overhead of ArrayList."
    },
    {
        id: 22,
        title: "What are generic collections ?",
        category: "Collections",
        explanation: "Generic collections (found in the `System.Collections.Generic` namespace) are collections that enforce Type Safety at compile time. By using angle brackets `<T>`, you define exactly what type of data the collection will hold when you create it (e.g., `List<int>`, `Dictionary<string, string>`). They solve the two major problems of legacy non-generic collections: they eliminate runtime casting errors and they completely prevent the performance overhead of Boxing/Unboxing.",
        example: "A non-generic collection is a generic recycling bin where paper, glass, and plastic are all thrown together. A generic collection provides specific bins for Paper `<Paper>`, Glass `<Glass>`, and Plastic `<Plastic>`, keeping everything organized and efficient.",
        code: `using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // We define the type <string> at instantiation
        List<string> names = new List<string>();
        
        names.Add("John");
        names.Add("Jane");
        // names.Add(123); // COMPILER ERROR! Type safety enforced!

        // No casting required to read data!
        string first = names[0]; 

        // Dictionary is another powerful generic collection
        Dictionary<int, string> employees = new Dictionary<int, string>();
        employees.Add(1, "Alice");
    }
}`,
        tip: "Generic collections are the modern standard in C#. You should mention that `List<T>` replaces `ArrayList`, and `Dictionary<TKey, TValue>` replaces `Hashtable`.",
        mistake: "Forgetting that generics resolve both type safety (compiler errors instead of runtime crashes) AND performance issues (no boxing).",
        summary: "Generic collections enforce type safety at compile time using `<T>`, preventing boxing overhead and runtime cast exceptions."
    },
    {
        id: 23,
        title: "What are threads (Multithreading)?",
        category: "Multithreading",
        explanation: "A Thread is the smallest unit of execution within a process. By default, an application runs on a single main thread. **Multithreading** is the ability of a CPU to execute multiple threads concurrently. It allows an application to perform multiple operations at the same time, such as keeping the UI responsive while downloading a massive file in the background.",
        example: "Think of a restaurant kitchen. A single-threaded kitchen has one chef doing everything: chopping, cooking, and plating (slow). A multithreaded kitchen has a Head Chef, a Sous Chef, and a prep cook all working simultaneously (fast, responsive).",
        code: `using System;
using System.Threading;

class Program
{
    static void Main()
    {
        // Create a new thread
        Thread workerThread = new Thread(DoHeavyWork);
        workerThread.Start(); // Starts execution concurrently

        // Main thread continues immediately
        Console.WriteLine("Main thread is doing other things...");
    }

    static void DoHeavyWork()
    {
        Console.WriteLine("Worker thread started.");
        Thread.Sleep(3000); // Simulate heavy work (3 seconds)
        Console.WriteLine("Worker thread finished.");
    }
}`,
        tip: "Be prepared to explain the difference between Multithreading (doing multiple things at the same time) and Asynchronous programming (not waiting for I/O bounds).",
        mistake: "Assuming more threads always means faster execution. Too many threads cause 'Context Switching', which actually slows down the CPU.",
        summary: "A thread is an execution path. Multithreading runs multiple paths concurrently to improve responsiveness and CPU utilization."
    },
    {
        id: 24,
        title: "How are threads different from TPL (Task Parallel Library) ?",
        category: "Multithreading",
        explanation: "While `Thread` is a low-level OS construct, the **Task Parallel Library (TPL)** is a higher-level abstraction built on top of the Thread Pool. \n\n1. **Management:** With `Thread`, you manually create and destroy OS threads (heavy). With `Task`, the CLR manages a pool of threads for you efficiently.\n2. **Return Values:** A `Thread` cannot easily return a value. A `Task<T>` easily returns results.\n3. **Chaining:** Tasks can be chained (`ContinueWith`), awaited (`async/await`), and easily cancelled via `CancellationToken`.",
        example: "Using a `Thread` is like manually hiring a specific plumber, managing their schedule, and paying them directly. Using a `Task` is like calling a contractor agency (ThreadPool) that sends whichever worker is currently available to do the job efficiently.",
        code: `using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main() // TPL allows async Main!
    {
        // 1. TPL makes it easy to return values from background work
        Task<int> calculationTask = Task.Run(() => 
        {
            // This runs on a thread pool thread
            return 10 * 10;
        });

        // 2. We can await the result without freezing the app
        int result = await calculationTask;
        Console.WriteLine($"Result: {result}");
    }
}`,
        tip: "Always recommend TPL (`Task.Run` and `async/await`) over raw `Thread` creation in modern C#. Raw threads are rarely needed today.",
        mistake: "Thinking a Task is a Thread. A Task is a *promise* to do work; it represents an asynchronous operation, which *might* use a ThreadPool thread.",
        summary: "TPL (Tasks) is a higher-level, more efficient abstraction over raw OS Threads, supporting return values, chaining, and thread-pooling."
    },
    {
        id: 25,
        title: "How do we handle exceptions in C# (try/catch)?",
        category: "Exception Handling",
        explanation: "Exceptions are handled using the `try-catch-finally` blocks. \n\n- **try:** Contains the code that might throw an exception.\n- **catch:** Catches and handles the exception if it occurs. You can have multiple catch blocks to handle specific exception types (e.g., `SqlException`, `DivideByZeroException`).\n- **throw:** Used to manually trigger an exception or re-throw a caught exception up the call stack.",
        example: "A `try` block is like driving a car. A `catch` block is the airbag. If a crash (exception) happens while driving, the airbag deploys to handle the crash and prevent the application from dying completely.",
        code: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int numerator = 10;
            int denominator = 0;
            int result = numerator / denominator; // Throws DivideByZeroException
        }
        catch (DivideByZeroException ex)
        {
            // Catches the specific exception
            Console.WriteLine("You cannot divide by zero!");
        }
        catch (Exception ex)
        {
            // Catches any other unexpected exception
            Console.WriteLine($"An error occurred: {ex.Message}");
        }
    }
}`,
        tip: "Always order your catch blocks from most specific to least specific (`Exception` base class must be last).",
        mistake: "Using `catch(Exception ex) { throw ex; }`. This destroys the original Stack Trace! Use `throw;` instead to preserve the stack trace.",
        summary: "Use `try` for risky code, `catch` to handle specific errors, and `throw` to bubble errors up."
    },
    {
        id: 26,
        title: "What is the need of finally?",
        category: "Exception Handling",
        explanation: "The `finally` block is used to execute critical cleanup code, and it **guarantees execution** regardless of whether an exception was thrown in the `try` block or not. Even if there is a `return` statement inside the `try` or `catch`, the `finally` block will still run before the method exits. It is typically used to close database connections, release file handles, or dispose of unmanaged resources.",
        example: "If you rent a car (`try`), you might have a smooth ride, or you might crash it (`catch`). But in either scenario, you MUST return the keys to the rental agency (`finally`).",
        code: `using System;
using System.IO;

class Program
{
    static void ReadFile()
    {
        FileStream fs = null;
        try
        {
            fs = new FileStream("data.txt", FileMode.Open);
            // Read data...
            // If this throws an exception, we jump to catch
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine("File not found.");
        }
        finally
        {
            // This ALWAYS runs, preventing memory/file locks
            if (fs != null)
            {
                fs.Close(); 
                Console.WriteLine("File stream closed.");
            }
        }
    }
}`,
        tip: "Mention that the `using` statement in C# is actually just syntactic sugar for a `try/finally` block that calls `.Dispose()`.",
        mistake: "Thinking `finally` will execute if the process is hard-killed (e.g., pulling the power plug or `Environment.FailFast`). In catastrophic OS crashes, finally does not run.",
        summary: "The finally block guarantees execution of cleanup code, regardless of exceptions or return statements."
    },
    {
        id: 27,
        title: "Why do we need the out keyword ?",
        category: "OOP Concepts",
        explanation: "In C#, methods can only return one value. The `out` keyword allows a method to return **multiple values** by passing arguments by reference. Unlike the `ref` keyword, a variable passed as an `out` parameter does not need to be initialized before being passed. However, the method receiving the `out` parameter is explicitly forced by the compiler to assign a value to it before the method returns.",
        example: "Imagine asking an ATM for money. You put your card in (input parameter), and the ATM returns your cash (return value), but it also prints a receipt and hands it to you via an entirely separate slot (`out` parameter).",
        code: `using System;

class Program
{
    static void Main()
    {
        // 'remainder' does not need to be initialized beforehand
        int divisionResult = Divide(10, 3, out int remainder);
        
        Console.WriteLine($"Result: {divisionResult}, Remainder: {remainder}");
        // Output: Result: 3, Remainder: 1
    }

    // Method returning multiple values using 'out'
    static int Divide(int a, int b, out int remainder)
    {
        remainder = a % b; // MUST assign a value to out parameter
        return a / b;
    }
}`,
        tip: "Mention that in modern C# (7.0+), Tuples (`(int result, int remainder)`) are often a cleaner alternative to using `out` parameters for returning multiple values.",
        mistake: "Confusing `out` with `ref`. `ref` requires the variable to be initialized BEFORE passing it. `out` requires it to be assigned INSIDE the method.",
        summary: "The `out` keyword allows passing arguments by reference to return multiple values from a single method."
    },
    {
        id: 28,
        title: "What is the need of Delegates ?",
        category: "Delegates & Events",
        explanation: "A Delegate is a type-safe function pointer. It holds a reference to a method. We need delegates because they allow us to pass methods as arguments to other methods. This is the foundation of callback programming in .NET, event handling, and LINQ (which uses the `Func` and `Action` delegates extensively). They allow for highly decoupled and extensible code.",
        example: "A delegate is like giving your friend your phone number. You are delegating the action of 'calling you'. You don't know WHEN they will call, but you gave them the exact pointer (number) to do so when they are ready.",
        code: `using System;

class Program
{
    // 1. Declare the delegate signature
    public delegate void LogMessage(string message);

    static void Main()
    {
        // 2. Instantiate the delegate with a matching method
        LogMessage logger = LogToConsole;
        
        // 3. Invoke the delegate
        ProcessData(logger);
    }

    // A method that takes a delegate as a parameter (Callback)
    static void ProcessData(LogMessage logCallback)
    {
        // Doing work...
        logCallback("Data processing complete."); 
    }

    static void LogToConsole(string msg) => Console.WriteLine(msg);
}`,
        tip: "Always mention `Action` and `Func`. In modern C#, we rarely declare custom delegates using the `delegate` keyword; we just use the built-in `Action` (void) and `Func` (returns a value).",
        mistake: "Explaining delegates without mentioning they are 'type-safe'. Unlike C++ function pointers, delegates verify the method signature at compile time.",
        summary: "Delegates are type-safe function pointers used to pass methods as arguments and implement callbacks."
    },
    {
        id: 29,
        title: "What are events ?",
        category: "Delegates & Events",
        explanation: "An Event is a wrapper over a delegate. It is an encapsulation mechanism that implements the Publisher/Subscriber pattern. A class (Publisher) raises an event to notify other classes (Subscribers) that something happened. \n\nThe `event` keyword restricts the underlying delegate so that outside classes can only Subscribe (`+=`) or Unsubscribe (`-=`). They cannot invoke the event directly, nor can they clear out other subscribers (which they could do if it was just a raw public delegate).",
        example: "A YouTube channel is the Publisher. Viewers are Subscribers. The channel announces a new video (raises an event). Viewers can subscribe (`+=`) or unsubscribe (`-=`), but a viewer cannot force the channel to publish a video, nor can they unsubscribe other viewers.",
        code: `using System;

public class Button
{
    // 1. Declare the Event based on the built-in EventHandler delegate
    public event EventHandler OnClick;

    // 2. Method to trigger the event
    public void Click()
    {
        Console.WriteLine("Button physically clicked.");
        // Raise the event if there are subscribers
        OnClick?.Invoke(this, EventArgs.Empty);
    }
}

class Program
{
    static void Main()
    {
        Button btn = new Button();
        // 3. Subscriber attaches a handler to the event
        btn.OnClick += Button_Clicked; 
        
        btn.Click(); // Simulates user click
    }

    static void Button_Clicked(object sender, EventArgs e)
    {
        Console.WriteLine("Event handler executed: Button was clicked!");
    }
}`,
        tip: "Explain that `event` provides encapsulation for delegates. It prevents subscribers from accidentally overwriting (`=`) the delegate list.",
        mistake: "Confusing an event with a delegate. A delegate is the underlying plumbing (the type); an event is the specialized property that restricts access to that delegate.",
        summary: "Events are encapsulated delegates used to implement the publish/subscribe pattern safely."
    },
    {
        id: 30,
        title: "Whats the difference between Abstract class and interface ?",
        category: "Abstract & Interfaces",
        explanation: "1. **Multiple Inheritance:** A class can implement multiple Interfaces, but can only inherit from one Abstract Class.\n2. **Implementation:** Abstract classes can have both fully implemented methods and abstract methods. Historically, Interfaces could only contain signatures (though C# 8.0 introduced default implementations for interfaces).\n3. **Access Modifiers:** Abstract classes can have public, private, protected members. Interface members are inherently public.\n4. **Fields:** Abstract classes can have state (fields/variables) and constructors. Interfaces cannot have state or constructors.\n5. **Usage:** Use an Abstract class to define core identity ('Is-A' relationship). Use an Interface to define capabilities ('Can-Do' relationship).",
        example: "An Abstract Class is like a `Vehicle` blueprint (has an engine variable, and common logic like StartEngine). An Interface is like `IFlyable`. An Airplane 'IS A' Vehicle (Abstract) and 'CAN DO' IFlyable (Interface). A Bird is NOT a Vehicle, but it CAN DO IFlyable.",
        code: `// --- Abstract Class (Core Identity & Shared State) ---
public abstract class Animal 
{
    protected string name; // State
    public Animal(string n) { name = n; } // Constructor
    
    public void Sleep() { Console.WriteLine("Zzzz"); } // Shared logic
    public abstract void Speak(); // Must be implemented by child
}

// --- Interface (Capability) ---
public interface IRunnable 
{
    void Run(); // Signature only (pre-C# 8.0)
}

// --- Implementation ---
public class Dog : Animal, IRunnable // Inherits ONE class, Multiple Interfaces
{
    public Dog(string n) : base(n) { }
    public override void Speak() { Console.WriteLine("Woof"); }
    public void Run() { Console.WriteLine("Running fast!"); }
}`,
        tip: "Interviewers look for the 'Is-A' vs 'Can-Do' architectural explanation, not just the syntax differences.",
        mistake: "Stating that interfaces can NEVER have implementation. Since C# 8.0, interfaces *can* have Default Interface Methods (DIM). Always mention this modern feature to impress the interviewer.",
        summary: "Abstract classes define core identity, state, and shared logic. Interfaces define distinct capabilities and support multiple inheritance."
    },
    {
        id: 31,
        title: "What is a Delegate and how to create a Delegate?",
        category: "Delegates & Events",
        explanation: "A delegate is a type that represents references to methods with a particular parameter list and return type. It allows methods to be passed as parameters. \n\nTo create a delegate, you use the `delegate` keyword followed by the return type, the delegate name, and the parameters.",
        example: "Think of a delegate as a contract for a job. The contract says 'I need someone who takes in two numbers and gives back one number'. Any method that fits this description can be hired (assigned) to do the job.",
        code: `using System;

class Program
{
    // 1. Declare Delegate
    public delegate int MathOperation(int a, int b);

    static void Main()
    {
        // 2. Instantiate and assign method
        MathOperation add = AddNumbers;
        
        // 3. Invoke delegate
        int result = add(5, 10);
        Console.WriteLine(result); // 15
    }

    static int AddNumbers(int x, int y) => x + y;
}`,
        tip: "In modern C#, we usually skip custom delegate declarations and use built-in `Func<T>` and `Action<T>` delegates instead.",
        mistake: "Forgetting that a delegate's signature (return type and parameters) MUST exactly match the method it points to.",
        summary: "A delegate is a type-safe function pointer declared using the `delegate` keyword."
    },
    {
        id: 32,
        title: "Where have you used Delegates?",
        category: "Delegates & Events",
        explanation: "Delegates are used extensively in modern C# applications. \n1. **LINQ Queries:** Every time you use `.Where(x => x.Id == 1)`, you are passing a delegate (`Func<T, bool>`) to the LINQ method.\n2. **Event Handling:** UI button clicks in WPF/WinForms or Web API event hooks use delegates.\n3. **Callbacks:** Passing a method to an asynchronous operation so it knows what to call when it finishes.\n4. **Dependency Injection & Factories:** Using `Func<T>` to inject a factory method instead of a hardcoded class.",
        example: "In a restaurant app, when a user clicks 'Order', an event (delegate) is fired. When searching for vegetarian food, a delegate is passed to LINQ to filter the menu.",
        code: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
        
        // The lambda expression (n => n % 2 == 0) is actually
        // a delegate (Func<int, bool>) being passed to the Where method!
        var evens = numbers.Where(n => n % 2 == 0);
    }
}`,
        tip: "Give concrete examples from your own project, especially LINQ, as it proves you understand that lambdas are just syntactic sugar for delegates.",
        mistake: "Saying 'I never use delegates' because you only use lambdas. Lambdas ARE anonymous delegates!",
        summary: "Delegates are used in LINQ, UI Event Handling, Asynchronous Callbacks, and Factory patterns."
    },
    {
        id: 33,
        title: "What is a Multicast Delegate?",
        category: "Delegates & Events",
        explanation: "A Multicast Delegate is a delegate that holds references to **more than one method**. When you invoke a multicast delegate, it calls all the methods in its invocation list sequentially, in the order they were added. You add methods using the `+=` operator and remove them using the `-=` operator.",
        example: "A multicast delegate is like a group email. You send one email (invoke the delegate), and it automatically gets delivered to five different people (methods) on the mailing list.",
        code: `using System;

class Program
{
    public delegate void Notify();

    static void Main()
    {
        // Combine methods using +=
        Notify notifyAll = SendEmail;
        notifyAll += SendSMS;
        
        // Invoking this calls BOTH SendEmail and SendSMS
        notifyAll(); 
    }

    static void SendEmail() => Console.WriteLine("Email Sent");
    static void SendSMS() => Console.WriteLine("SMS Sent");
}`,
        tip: "Mention that if a multicast delegate has a return type, it only returns the value from the VERY LAST method in the invocation list. The previous return values are lost. (This is why multicast delegates usually return `void`).",
        mistake: "Assuming all methods run in parallel. They do not; they run synchronously one after the other.",
        summary: "A multicast delegate points to multiple methods and executes them sequentially."
    },
    {
        id: 34,
        title: "What is an Event?",
        category: "Delegates & Events",
        explanation: "An Event is a specialized wrapper around a delegate that provides the **Publisher/Subscriber** model. It adds a layer of protection to the delegate, ensuring that external classes can only subscribe (`+=`) or unsubscribe (`-=`). External classes cannot invoke the event, nor can they clear the entire invocation list by using the `=` operator.",
        example: "A delegate is a raw microphone on a stage. Anyone can grab it and speak, or unplug it. An Event puts the microphone behind a glass booth; you can only listen (subscribe), but only the host (publisher class) can actually speak into it.",
        code: `using System;

public class AlarmClock
{
    // The Event declaration
    public event Action OnRing;

    public void TriggerAlarm()
    {
        Console.WriteLine("Time to wake up!");
        // Only the class that owns the event can invoke it
        OnRing?.Invoke(); 
    }
}

class Program
{
    static void Main()
    {
        AlarmClock clock = new AlarmClock();
        // Subscribers can only use += or -=
        clock.OnRing += () => Console.WriteLine("Snoozing alarm...");
        // clock.OnRing = null; // ERROR: Cannot assign directly!
        // clock.OnRing();      // ERROR: Cannot invoke from outside!
    }
}`,
        tip: "Always emphasize the 'protection/encapsulation' aspect. Events prevent subscribers from ruining the delegate chain for other subscribers.",
        mistake: "Defining public delegates in your classes instead of events, which breaks encapsulation.",
        summary: "An event is an encapsulated delegate that restricts outside access to only subscribing and unsubscribing."
    },
    {
        id: 35,
        title: "How to Create an Event?",
        category: "Delegates & Events",
        explanation: "To create an event, you need two things: \n1. A delegate type (either custom, or built-in like `EventHandler`).\n2. The `event` keyword applied to a property of that delegate type.\nBy .NET convention, events should use the `EventHandler` or `EventHandler<TEventArgs>` delegates, which pass the `sender` object and the event arguments.",
        example: "Creating an event is like setting up a newsletter. You define the format of the newsletter (the delegate), and then you create the signup form (the event keyword).",
        code: `using System;

// Custom EventArgs
public class PriceChangedEventArgs : EventArgs 
{
    public decimal NewPrice { get; set; }
}

public class Stock
{
    // Step 1 & 2: Define event using EventHandler<T>
    public event EventHandler<PriceChangedEventArgs> PriceChanged;

    public void UpdatePrice(decimal price)
    {
        // Step 3: Raise the event safely using ?.Invoke
        PriceChanged?.Invoke(this, new PriceChangedEventArgs { NewPrice = price });
    }
}`,
        tip: "Always use the null-conditional operator `?.Invoke()` to raise events. This prevents a `NullReferenceException` if no one is subscribed to the event.",
        mistake: "Creating custom delegates for every event instead of using the standard `EventHandler<TEventArgs>`.",
        summary: "Use the `event` keyword alongside `EventHandler` or `Action`, and invoke it using `?.Invoke()`."
    },
    {
        id: 36,
        title: "Delegate VS Events",
        category: "Delegates & Events",
        explanation: "1. **Definition:** A Delegate is a type (a function pointer). An Event is an encapsulation modifier applied to a delegate.\n2. **Access:** A public delegate can be invoked, cleared (`= null`), or modified by any outside class. An event restricts outside classes to only `+=` (subscribe) and `-=` (unsubscribe).\n3. **Usage:** Delegates are used for callbacks and LINQ (passing a method as a parameter). Events are used strictly for Publisher/Subscriber notifications.",
        example: "Delegate = A raw variable (`public int Age;`). Event = A property with a private setter (`public int Age { get; private set; }`). An event gives you control over the delegate.",
        code: `// DELEGATE (Unsafe)
public Action MyDelegate;
// Outside code can do: obj.MyDelegate = null; (Wipes out all subscribers!)
// Outside code can do: obj.MyDelegate(); (Invokes it unexpectedly!)

// EVENT (Safe)
public event Action MyEvent;
// Outside code CANNOT do: obj.MyEvent = null; 
// Outside code CANNOT do: obj.MyEvent();
// Outside code can ONLY do: obj.MyEvent += MyMethod;`,
        tip: "If the interviewer asks 'Why not just use a public delegate?', explain the security and encapsulation risks of doing so.",
        mistake: "Saying they are completely different concepts. An event is literally just a wrapper around a delegate.",
        summary: "Delegates are the raw function pointers; events are the protective wrappers around delegates."
    },
    {
        id: 37,
        title: "Why do we need Object Oriented Programming (OOP)?",
        category: "OOP Concepts",
        explanation: "Object-Oriented Programming (OOP) is needed to manage software complexity as applications grow larger. Procedural programming (writing functions in a top-down script) becomes unmaintainable spaghetti code. OOP solves this by breaking the software down into modular, real-world 'objects' that bundle data (state) and behavior (methods) together. This promotes code reuse, maintainability, scalability, and data security (encapsulation).",
        example: "Without OOP, writing a banking app is like having a giant pile of money and a single book where one clerk writes every transaction. With OOP, you create 'Customer', 'Account', and 'Transaction' objects, each responsible for managing its own data safely.",
        code: `// Non-OOP (Procedural - hard to maintain)
decimal accountBalance = 1000;
void Withdraw(decimal amount) { accountBalance -= amount; }

// OOP (Organized, Reusable, Secure)
public class BankAccount 
{
    public decimal Balance { get; private set; } // Encapsulated State
    
    public void Withdraw(decimal amount) // Bundled Behavior
    {
        if(amount <= Balance) Balance -= amount;
    }
}`,
        tip: "Mention that OOP mimics real-world modeling, making the code much easier for human developers to reason about.",
        mistake: "Saying OOP is faster. OOP actually adds slight memory overhead compared to raw procedural code; its benefit is purely in organization and maintainability.",
        summary: "OOP manages complexity by bundling data and behavior into reusable, real-world objects."
    },
    {
        id: 38,
        title: "What are the important pillars of OOPs ?",
        category: "OOP Concepts",
        explanation: "There are four fundamental pillars of Object-Oriented Programming:\n1. **Encapsulation:** Hiding internal state and requiring all interaction to be performed through an object's methods/properties (Data Hiding).\n2. **Abstraction:** Hiding complex implementation details and showing only the essential features of the object.\n3. **Inheritance:** Creating new classes based on existing classes to promote code reuse (Is-A relationship).\n4. **Polymorphism:** The ability of different objects to respond to the same method call in their own unique way (Many forms).",
        example: "Car analogy: \n- Encapsulation: The engine is hidden under the hood.\n- Abstraction: You only need to know how to press the gas pedal, not how fuel injection works.\n- Inheritance: A Ferrari is a specific type of Car.\n- Polymorphism: Pressing the gas pedal on a Ferrari sounds different than pressing it on a Prius.",
        code: `// See subsequent questions for code examples of each pillar.`,
        tip: "Memorize the acronym 'A-P-I-E' (Abstraction, Polymorphism, Inheritance, Encapsulation) so you never forget them in an interview.",
        mistake: "Confusing Abstraction and Encapsulation. Encapsulation hides the *data* (security). Abstraction hides the *complexity* (design).",
        summary: "The 4 pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism."
    },
    {
        id: 39,
        title: "What is a class and object ?",
        category: "OOP Concepts",
        explanation: "**Class:** A blueprint, template, or definition that describes the properties (data) and behaviors (methods) that a certain type of entity will have. It exists only conceptually in the code.\n\n**Object:** An actual instance of a class that occupies memory on the Heap. It is created using the `new` keyword based on the blueprint provided by the class.",
        example: "A Class is the architectural blueprint for a house. You cannot live in a blueprint. An Object is the actual physical house built from that blueprint. You can build 100 houses (Objects) from 1 blueprint (Class).",
        code: `using System;

// 1. The Class (Blueprint)
public class Car 
{
    public string Color { get; set; }
    public void Drive() => Console.WriteLine($"The {Color} car is driving.");
}

class Program
{
    static void Main()
    {
        // 2. The Object (Instance in memory)
        Car myCar = new Car(); 
        myCar.Color = "Red";
        myCar.Drive();
    }
}`,
        tip: "Mention that Classes are Reference Types, meaning the Object lives on the Heap, while the reference to it lives on the Stack.",
        mistake: "Using the terms interchangeably. A class does not take up memory (other than the compiled code); an object takes up memory.",
        summary: "A Class is a blueprint. An Object is a physical instance of that blueprint in memory."
    },
    {
        id: 40,
        title: "Abstraction vs Encapsulation?",
        category: "OOP Concepts",
        explanation: "**Encapsulation** is about *Data Hiding*. It protects the internal state of an object from being modified directly from the outside, enforcing validation through properties/methods.\n\n**Abstraction** is about *Implementation Hiding*. It focuses on what the object does, hiding the complex internal logic from the user. It is achieved using Abstract Classes and Interfaces.",
        example: "Encapsulation: You cannot manually change the temperature of the oven's heating element directly (private field). You must use the dial (public property). \nAbstraction: When you press 'Bake' on the oven, you don't care how the electricity routes to the element; you just care that the oven bakes your food.",
        code: `// --- ENCAPSULATION ---
public class BankAccount 
{
    private decimal balance; // Hidden data
    public void Deposit(decimal amount) // Controlled access
    {
        if(amount > 0) balance += amount; 
    }
}

// --- ABSTRACTION ---
public interface IEmailService 
{
    void SendEmail(); // Hides HOW the email is sent (SMTP, API, etc.)
}`,
        tip: "Use the phrase: 'Encapsulation is information hiding. Abstraction is complexity hiding.'",
        mistake: "Assuming they are the same thing just because both involve 'hiding'.",
        summary: "Encapsulation protects data via access modifiers. Abstraction hides complex logic via interfaces and abstract classes."
    },
    {
        id: 41,
        title: "Explain Inheritance ?",
        category: "OOP Concepts",
        explanation: "Inheritance is an OOP mechanism where a new class (Derived/Child class) inherits the properties and methods of an existing class (Base/Parent class). It models an 'IS-A' relationship. The child class can reuse the code of the parent, extend it with new functionality, or modify (override) existing functionality. In C#, a class can only inherit from ONE base class.",
        example: "An `Employee` class has an ID and Name. A `Manager` class inherits from `Employee`, meaning the Manager automatically gets the ID and Name, but adds a new property like `TeamSize`. A Manager IS AN Employee.",
        code: `using System;

// Base Class
public class Employee 
{
    public string Name { get; set; }
    public void Work() => Console.WriteLine($"{Name} is working.");
}

// Derived Class
public class Manager : Employee 
{
    public int TeamSize { get; set; }
    public void ApproveLeave() => Console.WriteLine("Leave approved.");
}

class Program
{
    static void Main()
    {
        Manager mgr = new Manager();
        mgr.Name = "Alice"; // Inherited property!
        mgr.Work();         // Inherited method!
    }
}`,
        tip: "Mention that C# does not support multiple inheritance for classes (to avoid the Diamond Problem), but does support it via Interfaces.",
        mistake: "Using inheritance just to share a few utility methods. Inheritance should strictly follow the 'IS-A' rule.",
        summary: "Inheritance allows a child class to acquire the properties and methods of a parent class (IS-A relationship)."
    },
    {
        id: 42,
        title: "Explain virtual keyword ?",
        category: "OOP Concepts",
        explanation: "The `virtual` keyword is used in a Base Class to declare that a method or property can be overridden (modified) by a Derived Class. If a method is not marked as `virtual` (or `abstract`), it cannot be overridden. A virtual method provides a default implementation, which the child class can choose to keep or change.",
        example: "A base class `Bird` has a `virtual void Move()` method that prints 'Flying'. An Ostrich inherits from Bird, but it can't fly, so it overrides `Move()` to print 'Running'.",
        code: `using System;

public class Employee 
{
    // Virtual means "I provide this logic, but children can change it"
    public virtual void CalculateBonus() 
    {
        Console.WriteLine("Standard bonus: $1000");
    }
}

public class Executive : Employee 
{
    // Override is used to change the virtual method's logic
    public override void CalculateBonus() 
    {
        Console.WriteLine("Executive bonus: $10,000");
    }
}`,
        tip: "Explain the difference between `virtual` (has a body, optional to override) and `abstract` (no body, mandatory to override).",
        mistake: "Trying to override a standard (non-virtual) method. This results in a compiler error. If you force it using `new`, you are hiding, not overriding.",
        summary: "The `virtual` keyword allows a base class method to be overridden by a derived class."
    },
    {
        id: 43,
        title: "What is overriding ?",
        category: "OOP Concepts",
        explanation: "Overriding is a feature that allows a child class to provide a specific, customized implementation of a method that is already provided by its parent class. This is achieved by using the `override` keyword in the child class, which must match the exact signature of a `virtual` or `abstract` method in the base class. Overriding is the core mechanism of Run-time Polymorphism.",
        example: "A standard `Printer` has a `Print()` method that prints in black and white. A `ColorPrinter` inherits from it and overrides `Print()` to print in color.",
        code: `using System;

public class Animal 
{
    public virtual void Speak() => Console.WriteLine("Animal sound");
}

public class Cat : Animal 
{
    // Overriding the base method
    public override void Speak() => Console.WriteLine("Meow!");
}

class Program
{
    static void Main()
    {
        Animal myPet = new Cat();
        // At RUNTIME, the CLR sees it's a Cat and calls the overridden method
        myPet.Speak(); // Output: "Meow!"
    }
}`,
        tip: "Emphasize that overriding enables Late Binding (Dynamic Polymorphism), where the actual method executed is determined at runtime based on the object's actual type.",
        mistake: "Confusing overriding (same signature, parent/child classes) with overloading (different signatures, same class).",
        summary: "Overriding allows a child class to replace the implementation of a parent class's virtual or abstract method."
    },
    {
        id: 44,
        title: "Explain overloading ?",
        category: "OOP Concepts",
        explanation: "Method Overloading is the ability to create multiple methods within the same class that share the **exact same name**, but have **different parameters** (either different types, different number of parameters, or different order). It is a form of Compile-time (Static) Polymorphism.",
        example: "Think of a `Draw()` method. You can have `Draw(Circle)`, `Draw(Square)`, and `Draw(Triangle)`. Same action name, but different inputs require different logic.",
        code: `using System;

public class MathOperations 
{
    // Method 1: Two ints
    public int Add(int a, int b) => a + b;

    // Method 2: Three ints (different number of parameters)
    public int Add(int a, int b, int c) => a + b + c;

    // Method 3: Two doubles (different types of parameters)
    public double Add(double a, double b) => a + b;
}
// The compiler knows which one to call based on the arguments passed!`,
        tip: "Note that you CANNOT overload a method based purely on its Return Type. The parameter list must be different.",
        mistake: "Thinking overloading requires inheritance. Overloading happens entirely within a single class.",
        summary: "Overloading is having multiple methods with the same name but different parameters in the same class."
    },
    {
        id: 45,
        title: "Overloading vs Overriding ?",
        category: "OOP Concepts",
        explanation: "1. **Location:** Overloading occurs within the *same* class. Overriding occurs between *Base and Derived* classes.\n2. **Signature:** In Overloading, methods must have the *same name but different parameters*. In Overriding, methods must have the *exact same name and parameters*.\n3. **Polymorphism Type:** Overloading is *Compile-time* polymorphism (Early Binding). Overriding is *Run-time* polymorphism (Late Binding).\n4. **Keywords:** Overloading requires no special keywords. Overriding requires `virtual`/`abstract` in the base and `override` in the child.",
        example: "Overloading: A chef who can `Cook(Pasta)` or `Cook(Steak)`. Overriding: A Father teaches his Son to `Drive()`, but the Son overrides the method to drive much faster than the Father.",
        code: `// OVERLOADING (Same Class, Different Params)
class Logger {
    public void Log(string msg) { }
    public void Log(Exception ex) { }
}

// OVERRIDING (Parent/Child, Exact Same Signature)
class BaseLogger {
    public virtual void Log() { }
}
class FileLogger : BaseLogger {
    public override void Log() { }
}`,
        tip: "This is a highly common interview question. Be ready to quickly list the 4 differences mentioned above.",
        mistake: "Mixing up Early Binding (Overloading) and Late Binding (Overriding).",
        summary: "Overloading is same name/different params in one class (Compile-time). Overriding is same name/same params in parent/child classes (Run-time)."
    },
    {
        id: "44b",
        title: "What is polymorphism ?",
        category: "OOP Concepts",
        explanation: "Polymorphism comes from Greek meaning 'many forms'. In OOP, it is the ability of a variable, function, or object to take on multiple forms. Specifically, it allows a single interface or base class reference to represent different underlying derived types, and the appropriate method implementation is executed based on the actual object type at runtime.",
        example: "A universal remote control (the interface). The 'Power' button means something different if the remote is currently pointing at a TV versus pointing at a DVD player. The action (Power) takes 'many forms' based on the object receiving it.",
        code: `using System;
using System.Collections.Generic;

public abstract class Shape { public abstract void Draw(); }
public class Circle : Shape { public override void Draw() => Console.WriteLine("Drawing Circle"); }
public class Square : Shape { public override void Draw() => Console.WriteLine("Drawing Square"); }

class Program
{
    static void Main()
    {
        // Polymorphism in action: The list is of type Shape, 
        // but it holds different forms (Circle, Square).
        List<Shape> shapes = new List<Shape> { new Circle(), new Square() };
        
        foreach (var shape in shapes)
        {
            // Resolves the correct method at runtime
            shape.Draw(); 
        }
    }
}`,
        tip: "Explain that Polymorphism allows you to write code against abstractions (base classes/interfaces) rather than concrete implementations.",
        mistake: "Saying polymorphism is just overriding methods. Overriding is the *mechanism* that enables Runtime Polymorphism.",
        summary: "Polymorphism is the ability of objects of different types to be treated as instances of the same class through a common interface."
    },
    {
        id: "45b",
        title: "Can polymorphism work without inheritance ?",
        category: "OOP Concepts",
        explanation: "Yes, definitely. While *Runtime Polymorphism* (Late Binding via overriding) strictly requires inheritance (either from a base class or an interface), *Compile-time Polymorphism* (Early Binding via Method Overloading) does NOT require inheritance. You can have multiple overloaded methods within a single, standalone class.",
        example: "A single calculator class that can `Add(int, int)` and `Add(double, double)`. This is polymorphism (the 'Add' action takes multiple forms), but there is absolutely no inheritance involved.",
        code: `public class Calculator 
{
    // Polymorphism without Inheritance (Overloading)
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
}`,
        tip: "If asked this trick question, explicitly distinguish between Compile-time (Overloading) and Run-time (Overriding) polymorphism.",
        mistake: "Saying 'No, inheritance is required'. This implies you only know about overriding and forgot about overloading.",
        summary: "Yes, compile-time polymorphism (method overloading) works entirely without inheritance."
    },
    {
        id: 46,
        title: "Explain static vs dynamic polymorphism ?",
        category: "OOP Concepts",
        explanation: "**Static Polymorphism (Compile-Time / Early Binding):** The response to a function call is decided at compile time. It is achieved through Method Overloading and Operator Overloading. It executes faster because the compiler knows exactly which method to call.\n\n**Dynamic Polymorphism (Run-Time / Late Binding):** The response to a function call is decided at runtime. It is achieved through Method Overriding using `virtual` and `override` keywords. It is slightly slower due to the v-table lookup at runtime, but offers immense flexibility.",
        example: "Static: Pre-booking a specific table at a restaurant (decided early). Dynamic: Walking into a restaurant and the host decides which table fits you best at that exact moment based on availability (decided late).",
        code: `// Static (Overloading) - Compiler resolves this immediately
public void Print(int i) { }
public void Print(string s) { }

// Dynamic (Overriding) - CLR resolves this at runtime
public class Base { public virtual void Show() {} }
public class Child : Base { public override void Show() {} }

// Usage:
Base obj = new Child();
obj.Show(); // The compiler sees Base.Show(), but at RUNTIME, Child.Show() is called.`,
        tip: "Use the terms 'Early Binding' and 'Late Binding' interchangeably with Static and Dynamic polymorphism.",
        mistake: "Confusing which one uses Overloading and which uses Overriding.",
        summary: "Static = Overloading (resolved at compile time). Dynamic = Overriding (resolved at runtime)."
    },
    {
        id: 47,
        title: "Explain operator overloading ?",
        category: "OOP Concepts",
        explanation: "Operator Overloading is a type of static polymorphism where you redefine the way standard operators (like `+`, `-`, `*`, `==`) work for your custom user-defined types (classes or structs). This allows custom objects to be manipulated as naturally as built-in primitive types.",
        example: "If you have a `Vector` class, it makes mathematical sense to add two vectors together. Instead of writing `vector1.Add(vector2)`, operator overloading allows you to elegantly write `vector1 + vector2`.",
        code: `using System;

public class ComplexNumber
{
    public int Real { get; set; }
    public int Imaginary { get; set; }

    // Overloading the '+' operator
    public static ComplexNumber operator +(ComplexNumber c1, ComplexNumber c2)
    {
        return new ComplexNumber 
        { 
            Real = c1.Real + c2.Real, 
            Imaginary = c1.Imaginary + c2.Imaginary 
        };
    }
}

class Program
{
    static void Main()
    {
        var n1 = new ComplexNumber { Real = 1, Imaginary = 2 };
        var n2 = new ComplexNumber { Real = 3, Imaginary = 4 };
        
        var result = n1 + n2; // Uses the overloaded operator!
    }
}`,
        tip: "Mention that operator overloading methods must always be `public` and `static`. Also note that if you overload `==`, you must also overload `!=`.",
        mistake: "Abusing operator overloading. Don't overload `+` to do subtraction just because you can. It must remain intuitive.",
        summary: "Operator overloading allows you to redefine standard operators (+, -, ==) for custom classes."
    },
    {
        id: 48,
        title: "Why do we need Abstract classes ?",
        category: "Abstract & Interfaces",
        explanation: "Abstract classes are needed when we want to create a common base class that provides a shared implementation for some methods, while forcing child classes to provide their own implementation for other methods. It prevents the instantiation of a concept that is 'incomplete' on its own.",
        example: "You shouldn't be able to instantiate a generic `Employee` if your business logic dictates an employee must specifically be a `Manager`, `Developer`, or `HR`. Making `Employee` abstract enforces this rule while allowing them to share the `CalculateTax()` logic.",
        code: `public abstract class Employee 
{
    // Shared logic (All employees get paid the same way)
    public void ProcessPayroll() { /* Code to process */ }

    // Forced implementation (Different roles work differently)
    public abstract void DoWork();
}

public class Developer : Employee 
{
    // Must implement
    public override void DoWork() => Console.WriteLine("Writing code.");
}`,
        tip: "Emphasize that abstract classes are the perfect blend of code sharing (concrete methods) and contractual obligations (abstract methods).",
        mistake: "Using an abstract class when an interface would suffice, tying up the single inheritance slot unnecessarily.",
        summary: "They provide a base blueprint that shares common logic but prevents direct instantiation of incomplete concepts."
    },
    {
        id: 49,
        title: "Are Abstract methods virtual ?",
        category: "Abstract & Interfaces",
        explanation: "Conceptually, yes. Abstract methods are inherently virtual because they are designed to be overridden by a derived class. In fact, when you implement an abstract method in a child class, you must use the `override` keyword, exactly as you do for a `virtual` method. \n\nThe difference is that `virtual` methods provide a default body, while `abstract` methods have no body and MUST be overridden.",
        example: "Virtual is saying 'Here is a generic steering wheel, but you can swap it for a racing wheel if you want.' Abstract is saying 'You MUST provide a steering wheel, because I am not giving you one.'",
        code: `public abstract class Shape 
{
    // Virtual: Has a body. Child CAN override it, but doesn't have to.
    public virtual void Rotate() { Console.WriteLine("Rotating 90 deg"); }

    // Abstract: No body. Child MUST override it. (Inherently virtual behavior)
    public abstract void Draw(); 
}`,
        tip: "Clarify that while they exhibit virtual behavior (polymorphism), you cannot use the `virtual` keyword and the `abstract` keyword on the same method.",
        mistake: "Saying 'No, they are different keywords.' While true syntactically, under the hood (IL code), abstract methods are marked as virtual.",
        summary: "Yes, abstract methods behave virtually because they enforce runtime polymorphism and require the `override` keyword."
    },
    {
        id: 50,
        title: "Can we create a instance of Abstract classes ?",
        category: "Abstract & Interfaces",
        explanation: "No. You cannot instantiate an abstract class using the `new` keyword. Because an abstract class can contain abstract methods (which have no implementation), instantiating it would mean having an object in memory with incomplete methods, which the CLR does not allow.",
        example: "You cannot build and live inside an architectural blueprint (Abstract Class). You can only build a specific House (Derived Class) based on that blueprint.",
        code: `public abstract class DatabaseConnection 
{
    public abstract void Connect();
}

class Program 
{
    static void Main() 
    {
        // COMPILER ERROR: Cannot create an instance of the abstract type
        // DatabaseConnection db = new DatabaseConnection(); 
    }
}`,
        tip: "Even though you can't instantiate them, mention that abstract classes CAN have constructors. These constructors are called when the child class is instantiated.",
        mistake: "Thinking that because it has a constructor, you can instantiate it.",
        summary: "No, abstract classes cannot be instantiated because they represent incomplete blueprints."
    },
    {
        id: 51,
        title: "Is it compulsory to implement Abstract methods ?",
        category: "Abstract & Interfaces",
        explanation: "Yes, if a non-abstract (concrete) class inherits from an abstract class, it is **absolutely compulsory** for it to implement all of the abstract methods. The compiler will throw an error if you fail to do so. \n\nHowever, if an abstract class inherits from another abstract class, it is not required to implement the abstract methods; it can simply pass the obligation down to the next child.",
        example: "If a Parent signs a contract (abstract method), the Child inheriting the estate must fulfill that contract. If the Child is also a minor (abstract class), the obligation passes to the Grandchild (concrete class).",
        code: `public abstract class Base { public abstract void DoWork(); }

// ERROR: 'Child' does not implement inherited abstract member 'DoWork'
// public class Child : Base { } 

public class ValidChild : Base 
{
    // Compulsory implementation
    public override void DoWork() { Console.WriteLine("Working"); }
}`,
        tip: "Mention the edge case: Abstract classes inheriting from Abstract classes don't need to implement the methods immediately.",
        mistake: "Believing you can provide a default implementation later. The concrete class MUST provide it immediately.",
        summary: "Yes, every concrete child class must implement all inherited abstract methods."
    },
    {
        id: 52,
        title: "Why can’t simple base class replace Abstract class ?",
        category: "Abstract & Interfaces",
        explanation: "A simple base class (concrete class) CAN provide shared logic, but it CANNOT enforce rules. An abstract class enforces a strict contract (via abstract methods) that guarantees every child class provides specific behavior. Furthermore, a simple base class can be instantiated, which might not make sense logically in your domain.",
        example: "A simple base class `Shape` can have a `Draw()` method that prints 'Drawing Shape'. Someone could instantiate `new Shape()`. But what does a generic 'Shape' look like? It makes no sense. `Shape` should be abstract to force developers to create concrete `Circle` or `Square` objects.",
        code: `// Concrete Base Class (Flawed design)
public class Shape 
{
    // A developer could just ignore overriding this, leading to generic bad behavior
    public virtual void Draw() { Console.WriteLine("Drawing something..."); }
}

// Abstract Class (Robust design)
public abstract class Shape 
{
    // The developer is FORCED to define exactly how this shape is drawn
    public abstract void Draw(); 
}`,
        tip: "Use the word 'Contract'. Abstract classes enforce a contract on their children. Simple base classes only offer suggestions.",
        mistake: "Thinking it's just about the `new` keyword. It's heavily about architectural enforcement.",
        summary: "Simple base classes cannot force child classes to implement specific methods, nor can they prevent instantiation of generic base concepts."
    },
    {
        id: 53,
        title: "Explain interfaces and why do we need it ?",
        category: "Abstract & Interfaces",
        explanation: "An Interface is a completely abstract type that acts as a strict contract. It defines a set of methods, properties, or events that a class MUST implement if it chooses to inherit the interface. \n\nWe need interfaces for three main reasons:\n1. **Multiple Inheritance:** A class can implement multiple interfaces.\n2. **Loose Coupling / Abstraction:** It allows us to build systems that depend on contracts rather than concrete implementations (crucial for Dependency Injection).\n3. **Polymorphism:** Grouping unrelated classes by a shared capability (e.g., `Car` and `Human` both implement `IMovable`).",
        example: "A USB port is an interface. It dictates exactly how a device must connect (the shape, the pins). The computer doesn't care if the device is a mouse, keyboard, or camera, as long as it correctly implements the USB interface.",
        code: `public interface ILogger 
{
    void Log(string message);
}

// Concrete implementation
public class DatabaseLogger : ILogger 
{
    public void Log(string message) => Console.WriteLine("Saved to DB: " + message);
}

public class Application 
{
    // Application depends on the Interface, not the concrete class! (Loose Coupling)
    public Application(ILogger logger) { logger.Log("App Started"); }
}`,
        tip: "Always tie Interfaces to Dependency Injection (DI) and loose coupling. That is their primary use in modern enterprise applications.",
        mistake: "Viewing interfaces as just 'classes without code'. They are structural contracts.",
        summary: "Interfaces define capabilities and strict contracts, enabling loose coupling, DI, and multiple inheritance."
    },
    {
        id: 54,
        title: "Can we write logic in interface ?",
        category: "Abstract & Interfaces",
        explanation: "Historically (before C# 8.0), NO. Interfaces could only contain signatures. \n\nHowever, **starting from C# 8.0, YES**, we can write logic in interfaces using a feature called **Default Interface Methods (DIM)**. This was introduced primarily to allow developers to add new methods to an existing interface without breaking all the classes that already implement it.",
        example: "You have an `ILogger` implemented by 50 classes. You want to add `LogWarning()`. Before C# 8.0, all 50 classes would break. With C# 8.0, you can add `LogWarning()` to the interface with a default body, and none of the 50 classes break.",
        code: `public interface ILogger 
{
    void Log(string message); // Signature

    // C# 8.0 Feature: Default Interface Method (Contains Logic)
    void LogError(string message) 
    {
        Console.WriteLine("ERROR: " + message);
    }
}

public class MyLogger : ILogger 
{
    // Only obligated to implement the signature without a body
    public void Log(string message) { Console.WriteLine(message); }
}

class Program {
    static void Main() {
        ILogger logger = new MyLogger();
        logger.LogError("File missing"); // Calls the default logic in the interface!
    }
}`,
        tip: "Answering this correctly separates juniors from seniors. Always mention C# 8.0 Default Interface Methods.",
        mistake: "Giving a hard 'No' because that's what was true 5+ years ago.",
        summary: "Yes, since C# 8.0, interfaces support Default Interface Methods which can contain logic."
    },
    {
        id: 55,
        title: "Can we define methods as private in interface ?",
        category: "Abstract & Interfaces",
        explanation: "Historically (before C# 8.0), NO. All members of an interface were implicitly public, and you could not specify any access modifiers.\n\nHowever, **starting from C# 8.0, YES**. Because interfaces can now contain logic (Default Interface Methods), they also introduced the ability to add `private` methods. These private methods are used as helper methods to share logic between multiple default interface methods within the interface itself.",
        example: "An interface might have default methods for `LogWarning()` and `LogError()`. Both might need to format a timestamp. You can create a `private string GetTimestamp()` inside the interface to share that formatting logic without exposing it to the implementing classes.",
        code: `public interface ILogger 
{
    // Standard public signature
    void Log(string message);

    // Default interface method
    public void LogError(string msg) 
    {
        Console.WriteLine($"[ERR] {GetTime()}: {msg}");
    }

    // Private helper method inside the interface! (C# 8.0+)
    private string GetTime() 
    {
        return DateTime.Now.ToString("HH:mm:ss");
    }
}`,
        tip: "Explain that private methods in an interface cannot be accessed by the classes that implement the interface; they are strictly internal to the interface.",
        mistake: "Saying 'No'. Keep your C# knowledge updated to C# 8.0+ features.",
        summary: "Yes, since C# 8.0, private methods are allowed to act as helper methods for Default Interface Methods."
    },
    {
        id: 56,
        title: "If I want to change interface what's the best practice ?",
        category: "Abstract & Interfaces",
        explanation: "Interfaces are meant to be immutable contracts. Changing them breaks every class that implements them. \n\nBest Practices:\n1. **Interface Segregation (ISP):** Instead of modifying the existing interface, create a new interface (e.g., `ILoggerV2` or `IAdvancedLogger`) and have classes implement the new one if they need the new features.\n2. **Default Interface Methods (C# 8.0+):** Add the new method to the existing interface but provide a default implementation. This prevents existing classes from breaking, while providing the new feature.",
        example: "You have an `IPrinter` interface. You want to add `Scan()`. Instead of changing `IPrinter` (which breaks 100 printer classes), you create `IScanner`. Then your new MultiFunctionPrinter class implements both `IPrinter` and `IScanner`.",
        code: `// Old Interface
public interface IPrinter { void Print(); }

// BAD PRACTICE: Adding to existing interface breaks old implementations
// public interface IPrinter { void Print(); void Scan(); }

// BEST PRACTICE 1: Create a new Interface (Interface Segregation Principle)
public interface IScanner { void Scan(); }
public class ModernPrinter : IPrinter, IScanner 
{
    public void Print() { }
    public void Scan() { }
}

// BEST PRACTICE 2: Use C# 8.0 Default Implementation
public interface IPrinterV2 
{
    void Print();
    void Scan() { Console.WriteLine("Default scanning..."); } // Won't break old classes!
}`,
        tip: "Mention the SOLID principles, specifically the 'I' - Interface Segregation Principle.",
        mistake: "Suggesting to just add the method and fix all the compile errors. In a large enterprise app or a published Nuget package, that is impossible/disastrous.",
        summary: "Create a new extended interface (ISP) or use C# 8.0 Default Interface Methods to avoid breaking existing implementations."
    },
    {
        id: 57,
        title: "Explain Multiple inheritance in Interface ?",
        category: "Abstract & Interfaces",
        explanation: "While C# classes do not support multiple inheritance (a class cannot have two base classes), a class **can implement multiple interfaces**. This allows a class to fulfill multiple contracts and exhibit multiple capabilities simultaneously without suffering from the 'Diamond Problem' (ambiguity caused by inheriting conflicting methods from multiple base classes).",
        example: "A `Smartphone` class inherits from one base class (`ElectronicDevice`), but it can implement `IPhone`, `ICamera`, and `IGps`. It has multiple capabilities.",
        code: `public interface IFlyable { void Fly(); }
public interface ISwimmable { void Swim(); }

// The Duck class implements multiple interfaces!
public class Duck : IFlyable, ISwimmable 
{
    public void Fly() => Console.WriteLine("Duck is flying.");
    public void Swim() => Console.WriteLine("Duck is swimming.");
}`,
        tip: "Be prepared to explain how to resolve naming collisions. If two interfaces have a method with the same name, you must use **Explicit Interface Implementation** (e.g., `void IFlyable.Move() { }`).",
        mistake: "Confusing class multiple inheritance (which C++ has, but C# blocks) with interface multiple inheritance.",
        summary: "C# allows a single class to implement any number of interfaces, enabling multiple distinct capabilities."
    },
    {
        id: 58,
        title: "Explain Interface Segregation principle ?",
        category: "Abstract & Interfaces",
        explanation: "The Interface Segregation Principle (ISP) is the 'I' in SOLID. It states that **clients should not be forced to depend on interfaces they do not use**. Instead of creating one massive 'fat' interface, you should break it down into smaller, highly cohesive, role-specific interfaces.",
        example: "A massive `IWorker` interface has `Work()`, `Eat()`, and `Sleep()`. If a `Robot` implements `IWorker`, it is forced to implement `Eat()` and `Sleep()`, which makes no sense. Instead, split it into `IWorkable` and `IEatable`. Human implements both; Robot only implements `IWorkable`.",
        code: `// BAD: Fat Interface
public interface IMachine 
{
    void Print();
    void Scan();
    void Fax();
}
// A basic printer is FORCED to implement Scan and Fax with NotImplementedException

// GOOD: Segregated Interfaces
public interface IPrinter { void Print(); }
public interface IScanner { void Scan(); }
public interface IFax { void Fax(); }

// Now a basic printer only implements what it needs!
public class BasicPrinter : IPrinter 
{
    public void Print() => Console.WriteLine("Printing");
}`,
        tip: "Use the Robot/Eat example or the Printer/Fax example. Interviewers love clear real-world analogies for SOLID principles.",
        mistake: "Creating interfaces with 20 methods. This creates maintenance nightmares.",
        summary: "Break large, bulky interfaces into smaller, specific ones so classes only implement exactly what they need."
    },
    {
        id: 59,
        title: "Can we create instance of interface ?",
        category: "Abstract & Interfaces",
        explanation: "No, you cannot instantiate an interface directly using the `new` keyword because interfaces represent an abstract contract with no implementation (or at best, default implementations). \n\nHowever, you CAN create a reference variable of an interface type, and point it to an instance of a concrete class that implements that interface. This is the cornerstone of polymorphism.",
        example: "You cannot build a 'Blueprint' (`new IBlueprint()`). But you can point your Blueprint reference to a 'House' that was built using that blueprint.",
        code: `public interface ILogger { void Log(); }
public class FileLogger : ILogger { public void Log() { } }

class Program 
{
    static void Main() 
    {
        // ERROR: Cannot instantiate an interface
        // ILogger logger = new ILogger(); 

        // SUCCESS: Interface reference pointing to a concrete implementation
        ILogger logger = new FileLogger(); 
        logger.Log();
    }
}`,
        tip: "Explain that this concept (Interface references pointing to concrete objects) is exactly how Dependency Injection (DI) works in .NET Core.",
        mistake: "Answering just 'No' without explaining that you CAN use interface references for polymorphism.",
        summary: "You cannot instantiate an interface directly, but you can create an interface reference that points to an implementing object."
    },
    {
        id: 60,
        title: "Can we do Multiple inheritance with Abstract classes ?",
        category: "Abstract & Interfaces",
        explanation: "No. C# strictly forbids multiple class inheritance. A class can inherit from at most ONE base class, regardless of whether that base class is abstract or concrete. If you need a class to inherit behaviors from multiple sources, you must use Interfaces.",
        example: "A `Smartphone` cannot inherit from both an abstract `Computer` class and an abstract `Phone` class. It must inherit from one, and implement the other's behaviors via an Interface.",
        code: `public abstract class Animal { }
public abstract class Machine { }

// COMPILER ERROR: Class cannot have multiple base classes
// public class CyborgDog : Animal, Machine { } 

// CORRECT WAY: One abstract class, multiple interfaces
public interface IMachine { }
public class CyborgDog : Animal, IMachine { }`,
        tip: "Explain WHY C# blocks this: The 'Diamond Problem'. If both abstract classes provided a virtual method with the same name, the compiler wouldn't know which one the child class was inheriting.",
        mistake: "Thinking abstract classes bypass the single-inheritance rule. They do not.",
        summary: "No, C# only supports single class inheritance. To achieve multiple inheritance, you must use interfaces."
    },
    {
        id: 61,
        title: "Abstract Class vs Interface",
        category: "Abstract & Interfaces",
        explanation: "1. **Multiple Inheritance:** A class can implement multiple interfaces, but can only inherit from one abstract class.\n2. **State:** Abstract classes can have fields (state) and constructors. Interfaces cannot have state (fields) or constructors.\n3. **Access Modifiers:** Abstract classes can use all access modifiers (`private`, `protected`, etc.). Prior to C# 8, interfaces were strictly public. (Now they support private for internal use only).\n4. **Purpose:** Abstract classes define core identity (IS-A) and share code. Interfaces define capabilities (CAN-DO) and strict contracts.",
        example: "A `Dog` IS-A `Animal` (Abstract Class). It shares the state `BloodType`. But a `Dog` CAN `Bark` and `Run` (Interfaces). A `Car` can also `Run`. You group them by capability using interfaces, but by identity using abstract classes.",
        code: `// Abstract Class (Identity & State)
public abstract class Animal 
{
    public int Age { get; set; } // State
    public abstract void Eat();  // Contract
}

// Interface (Capability & Contract)
public interface IMovable 
{
    void Move(); // Contract
}

// Implementation
public class Dog : Animal, IMovable 
{
    public override void Eat() { }
    public void Move() { }
}`,
        tip: "Mention that with C# 8 Default Interface Methods, the gap has narrowed, but the key difference remains: Interfaces CANNOT hold state (instance fields).",
        mistake: "Saying interfaces cannot have logic. Since C# 8, they can.",
        summary: "Abstract classes are for IS-A relationships with state. Interfaces are for CAN-DO capabilities without state."
    },
    {
        id: 62,
        title: "Why do we need constructors ?",
        category: "Constructors & Execution Order",
        explanation: "A Constructor is a special method used to initialize an object when it is created. We need constructors to ensure that an object starts its life in a valid state. Without constructors, we would create an empty object and have to manually assign values to its properties one by one, risking an invalid state if we forget one.",
        example: "If you are manufacturing a Car, the constructor is the final assembly line step that puts the engine and tires in. You wouldn't want a user driving away with a Car object that doesn't have an engine.",
        code: `public class BankAccount 
{
    public string AccountNumber { get; }
    public decimal Balance { get; private set; }

    // Constructor enforces that every new account MUST have an ID and a starting balance
    public BankAccount(string accNum, decimal initialDeposit) 
    {
        AccountNumber = accNum;
        Balance = initialDeposit;
    }
}

class Program 
{
    static void Main() 
    {
        // Enforced initialization
        BankAccount acc = new BankAccount("12345", 500m); 
    }
}`,
        tip: "Mention 'Constructor Injection'. In modern enterprise apps, constructors are heavily used to inject dependencies (like database contexts or loggers) into a class.",
        mistake: "Confusing constructors with normal methods. Constructors have NO return type, not even `void`.",
        summary: "Constructors are used to initialize an object and ensure it exists in a valid state upon creation."
    },
    {
        id: 63,
        title: "In parent child which constructor fires first ?",
        category: "Constructors & Execution Order",
        explanation: "When you instantiate a Child class, the **Parent (Base) class constructor fires FIRST**, followed immediately by the Child (Derived) class constructor. This makes sense logically because the child class is built UPON the foundation of the base class. The foundation must exist before the child can use it.",
        example: "Building a house. You must lay the Foundation (Parent Constructor) before you can build the Second Floor (Child Constructor).",
        code: `using System;

public class Parent 
{
    public Parent() => Console.WriteLine("1. Parent Constructor");
}

public class Child : Parent 
{
    public Child() => Console.WriteLine("2. Child Constructor");
}

class Program 
{
    static void Main() 
    {
        Child c = new Child(); 
        // Output:
        // 1. Parent Constructor
        // 2. Child Constructor
    }
}`,
        tip: "Explain the `base()` keyword. If the parent class has a parameterized constructor, the child class constructor MUST call it using `: base(param)`.",
        mistake: "Assuming the child constructor runs first because you called `new Child()`. The CLR implicitly traverses up to `System.Object` and executes downwards.",
        summary: "The Parent (Base) constructor always executes before the Child (Derived) constructor."
    },
    {
        id: 64,
        title: "How are initializers executed ?",
        category: "Constructors & Execution Order",
        explanation: "Field initializers (assigning a value to a field exactly where it is declared) run **BEFORE** the constructor is executed. If a class inherits from a parent class, the Child's field initializers run, then the Parent's field initializers run, then the Parent constructor, and finally the Child constructor.",
        example: "Initializers are like bringing the raw materials to the site before the builder (Constructor) arrives. The materials must be there before the builder starts working.",
        code: `using System;

public class Parent 
{
    int y = Print("Parent Field Initializer");
    public Parent() => Print("Parent Constructor");

    static int Print(string msg) { Console.WriteLine(msg); return 0; }
}

public class Child : Parent 
{
    int x = Print("Child Field Initializer");
    public Child() => Print("Child Constructor");
}

// OUTPUT for new Child():
// Child Field Initializer
// Parent Field Initializer
// Parent Constructor
// Child Constructor`,
        tip: "This is a tricky interview question. The order is: Derived Fields -> Base Fields -> Base Constructor -> Derived Constructor.",
        mistake: "Assuming constructors always run before field initializers.",
        summary: "Field initializers run before the constructor body. Derived fields run before base fields."
    },
    {
        id: 65,
        title: "How are static constructors executed in Parent child ?",
        category: "Constructors & Execution Order",
        explanation: "Static constructors run only ONCE per application domain, before any instance is created or any static member is referenced. In a parent-child relationship, if you instantiate the Child, the **Child's static constructor runs FIRST**, followed immediately by the Parent's static constructor. This is the exact OPPOSITE order of instance constructors.",
        example: "Static constructors are like setting up the factory before building cars. Setting up the specialized 'Sports Car' factory wing triggers the setup of the main 'General Car' factory.",
        code: `using System;

public class Parent 
{
    static Parent() => Console.WriteLine("Parent Static Constructor");
    public Parent() => Console.WriteLine("Parent Instance Constructor");
}

public class Child : Parent 
{
    static Child() => Console.WriteLine("Child Static Constructor");
    public Child() => Console.WriteLine("Child Instance Constructor");
}

// OUTPUT for new Child():
// Child Static Constructor
// Parent Static Constructor
// Parent Instance Constructor
// Child Instance Constructor`,
        tip: "Memorize this counter-intuitive behavior: Static constructors execute Derived -> Base, while Instance constructors execute Base -> Derived.",
        mistake: "Assuming static constructors follow the same top-down execution order as instance constructors.",
        summary: "Static constructors execute exactly once, and run in Derived-then-Base order."
    },
    {
        id: 66,
        title: "When does static constructor fires ?",
        category: "Constructors & Execution Order",
        explanation: "A static constructor fires automatically by the CLR. It fires **exactly once** per application lifetime. It fires precisely before the first instance of the class is created, OR before the first static member of the class is referenced, whichever happens first.",
        example: "A static constructor is like the initialization sequence of a cash register at a store. It happens exactly once when the store opens or right before the very first customer is rung up, but never again for subsequent customers.",
        code: `using System;

public class Configuration 
{
    public static string ConnectionString;

    // Static constructor
    static Configuration() 
    {
        Console.WriteLine("Static constructor fired!");
        ConnectionString = "Server=myServer;Database=myDB;";
    }
}

class Program 
{
    static void Main() 
    {
        Console.WriteLine("App started.");
        // The static constructor fires right here, just before accessing the static field
        string conn = Configuration.ConnectionString; 
        
        // It will NOT fire again here
        string conn2 = Configuration.ConnectionString;
    }
}`,
        tip: "Mention that static constructors cannot take parameters and cannot have access modifiers (they are implicitly private).",
        mistake: "Trying to call a static constructor manually. You cannot. The CLR handles it.",
        summary: "It fires automatically once, right before the first instantiation or first static member access."
    },
    {
        id: 127,
        title: "Explain Garbage collector (GC)?",
        category: "CLR & Memory Management",
        explanation: "The Garbage Collector (GC) is a core component of the .NET CLR that serves as an automatic memory manager. It allocates and releases memory for your application on the Managed Heap. When objects are no longer in use (no longer referenced by the application), the GC automatically destroys them and reclaims the memory, preventing memory leaks and freeing developers from manual memory management.",
        example: "The GC is like a robotic janitor in a hotel. You can freely throw trash (objects) on the floor. When the hotel starts running out of space, the janitor automatically sweeps the floors, finds trash nobody is using anymore, and throws it out.",
        code: `using System;

class Program
{
    static void Main()
    {
        // Object created on the heap
        Customer c1 = new Customer(); 
        
        // We remove the only reference to it
        c1 = null; 
        
        // At some point, the GC will wake up, see the Customer object has no references,
        // and reclaim its memory automatically.
        // You can force it (NOT recommended in production): GC.Collect();
    }
}`,
        tip: "The GC operates in 'Generations' (Gen 0, 1, and 2) to optimize performance. Always mention Generations when explaining the GC.",
        mistake: "Thinking the GC cleans up *everything*. It only cleans Managed Memory (the Heap). Unmanaged resources (file handles, database connections) require `IDisposable`.",
        summary: "The GC is an automated memory manager in the CLR that reclaims memory from unused objects."
    },
    {
        id: 128,
        title: "How does Garbage collector know when to clean the objects ?",
        category: "CLR & Memory Management",
        explanation: "The GC knows an object is ready for cleanup by building a **Graph of Roots**. \n\nA 'Root' is a reference to a memory location (e.g., local variables on the stack, static variables, or CPU registers). During a garbage collection cycle, the GC pauses the application, traces every root, and marks every object on the heap that can be reached from those roots. \n\nAny object on the heap that is **NOT marked** (unreachable from any root) is considered garbage and is subsequently cleaned up.",
        example: "Roots are like power outlets, references are extension cords, and objects are lamps. The GC unplugs everything, then plugs the main cords in. Any lamp that doesn't light up (isn't connected to an outlet) is thrown away.",
        code: `void DoWork()
{
    // 'p' is a root (local variable on the stack)
    Person p = new Person(); 
    
    // As long as 'DoWork' is running, 'p' is reachable.
    
} // The method ends. The 'p' root is popped off the stack.
  // The Person object on the heap is now unreachable from any root.
  // The GC will clean it up on the next cycle.`,
        tip: "Use the phrase 'Mark and Sweep'. The GC 'Marks' reachable objects via roots, and 'Sweeps' away the unreachable ones.",
        mistake: "Saying it uses 'Reference Counting'. .NET does NOT use reference counting (like COM or Swift). It uses Root Tracing.",
        summary: "The GC traces references from Application Roots. Objects that cannot be reached from any root are marked as garbage."
    },
    {
        id: 149,
        title: "Explain weak and strong references ?",
        category: "CLR & Memory Management",
        explanation: "**Strong Reference:** The default type of reference in C#. As long as a strong reference points to an object on the heap, the Garbage Collector (GC) absolutely will not collect it. \n\n**Weak Reference:** A reference that does NOT protect the object from being collected by the GC. It allows the application to access the object if it still exists in memory, but if memory pressure triggers a GC cycle, the object can be destroyed, and the weak reference will simply point to null.",
        example: "Strong Reference: A leash tied to your dog. The dog cannot run away (be collected). Weak Reference: Looking at a dog through a window. You can see it (access it), but if it decides to run away (be collected), you can't stop it.",
        code: `using System;

class Program
{
    static void Main()
    {
        // Strong Reference
        byte[] largeData = new byte[100000]; 
        
        // Weak Reference wrapper around the object
        WeakReference weakRef = new WeakReference(largeData);

        // Remove the strong reference
        largeData = null; 

        // Sometime later, we try to use it...
        if (weakRef.IsAlive) 
        {
            byte[] dataWeSaved = (byte[])weakRef.Target;
            Console.WriteLine("Data is still alive, we saved memory by not reloading it!");
        }
        else 
        {
            Console.WriteLine("GC collected it. We must reload from DB/Disk.");
        }
    }
}`,
        tip: "In modern C#, use `WeakReference<T>` (the generic version) instead of the old non-generic `WeakReference` to avoid boxing/unboxing.",
        mistake: "Assuming weak references guarantee the object is destroyed immediately. They don't; they just allow it to be destroyed WHEN the GC decides it's time.",
        summary: "Strong references prevent GC collection. Weak references allow GC collection but permit access if the object is still alive."
    },
    {
        id: 150,
        title: "When will you use weak references ?",
        category: "CLR & Memory Management",
        explanation: "Weak references are primarily used for **Caching large, expensive-to-create objects** (like images, large datasets, or parsed XML files). If the application has plenty of memory, you can retrieve the object quickly from the weak reference cache. If the system runs low on memory, the GC will automatically wipe the cache, and your application will simply have to recreate/reload the data the next time it's needed.",
        example: "A web browser caching high-res images of the previous page. If you hit 'Back', it loads instantly. But if you open 50 new tabs and memory gets tight, the GC deletes those old images to keep the browser from crashing. Hitting 'Back' now requires re-downloading them.",
        code: `// Practical caching example using generic WeakReference<T>
public class ImageCache
{
    private WeakReference<byte[]> _cachedImage;

    public byte[] GetProfilePicture()
    {
        // 1. Try to get it from the weak cache
        if (_cachedImage != null && _cachedImage.TryGetTarget(out byte[] img))
        {
            return img; // Cache hit! Fast!
        }

        // 2. Cache miss or GC collected it. Reload it.
        byte[] newImg = LoadFromDatabase(); 
        
        // 3. Store back in WeakReference
        _cachedImage = new WeakReference<byte[]>(newImg); 
        return newImg;
    }
    
    private byte[] LoadFromDatabase() => new byte[50000]; // Simulated load
}`,
        tip: "Always check if the object is still alive using `.TryGetTarget()` before attempting to use it, as it could have been collected a millisecond ago.",
        mistake: "Using weak references for tiny objects like strings or ints. The WeakReference object itself takes up memory and processing time; only use it for large, heavy objects.",
        summary: "Use weak references for memory-sensitive caching of large objects that can be recreated if deleted by the GC."
    },
    {
        id: 151,
        title: "What are design patterns?",
        category: "Design Patterns",
        explanation: "Design Patterns are proven, standardized solutions to common, recurring problems in software design. They are not specific pieces of code, but rather templates or blueprints for solving an architectural problem in a way that is robust, maintainable, and highly reusable.",
        example: "If you have the problem of 'I need to make sure my application only ever has exactly one configuration manager', you don't need to invent a solution. The 'Singleton Pattern' was invented in 1994 to solve this exact problem perfectly.",
        code: `// A Design Pattern isn't code itself, it's the concept behind the code.
// See the specific pattern questions below for code examples (Singleton, Factory, Repository).`,
        tip: "Mention the 'Gang of Four (GoF)'. They wrote the famous 1994 book that categorized the original 23 design patterns.",
        mistake: "Confusing Design Patterns (structural solutions like Singleton/Factory) with Architectural Patterns (macro-level structures like MVC, Microservices).",
        summary: "Design Patterns are standardized, reusable blueprints for solving common software engineering problems."
    },
    {
        id: 152,
        title: "Which are the different types of design patterns?",
        category: "Design Patterns",
        explanation: "According to the Gang of Four (GoF), the 23 classical design patterns are categorized into three main types based on their purpose:\n1. **Creational Patterns** (Deals with object creation mechanisms)\n2. **Structural Patterns** (Deals with object composition and relationships)\n3. **Behavioral Patterns** (Deals with communication and assignment of responsibilities between objects)",
        example: "Creational: Factory, Singleton, Builder.\nStructural: Adapter, Decorator, Facade.\nBehavioral: Observer, Strategy, Command.",
        code: `// 1. Creational: How do I create a DatabaseConnection? (Singleton)
// 2. Structural: How do I make this OldXmlLogger work with my NewJsonApp? (Adapter)
// 3. Behavioral: How do I notify 5 UI panels that the price changed? (Observer)`,
        tip: "You don't need to memorize all 23. Memorize 2-3 from each category and explain them confidently.",
        mistake: "Listing SOLID principles or MVC when asked for Design Pattern categories.",
        summary: "The three main types are Creational, Structural, and Behavioral."
    },
    {
        id: 153,
        title: "Explain structural, Behavioral and Creational design pattern ?",
        category: "Design Patterns",
        explanation: "**Creational:** Solves problems related to *how* objects are instantiated. They abstract the instantiation process, making the system independent of how its objects are created, composed, and represented. (e.g., hiding the `new` keyword).\n\n**Structural:** Solves problems related to *how* classes and objects are assembled into larger structures. They use inheritance and composition to create flexible, efficient structures (e.g., wrapping a legacy class so a modern system can use it).\n\n**Behavioral:** Solves problems related to *algorithms* and the assignment of responsibilities. They describe patterns of communication between objects (e.g., how objects talk to each other without being tightly coupled).",
        example: "Creational is the Factory building the car. Structural is the chassis and frame that hold the engine and wheels together. Behavioral is the steering wheel communicating with the front axle.",
        code: `// See questions on Singleton/Factory (Creational) for deep dives.`,
        tip: "When explaining, use simple keywords: Creational = 'Creation/Instantiating'. Structural = 'Composition/Assembly'. Behavioral = 'Communication/Algorithms'.",
        mistake: "Mixing them up. For example, calling Singleton a Structural pattern.",
        summary: "Creational = Object Instantiation. Structural = Object Composition. Behavioral = Object Communication."
    },
    {
        id: "154a",
        title: "Which design pattern have you used in your project?",
        category: "Design Patterns",
        explanation: "As an enterprise developer, you have likely used multiple patterns, even if you didn't realize it. \n1. **Dependency Injection / IOC:** Used extensively in ASP.NET Core for injecting services.\n2. **Repository Pattern & Unit of Work:** Used heavily with Entity Framework Core to abstract database access.\n3. **Singleton Pattern:** Used for global configurations, caching, or shared HttpClients.\n4. **Factory Pattern:** Used to dynamically create different types of objects based on user input or configuration.",
        example: "In my recent e-commerce project, I used the **Repository Pattern** to hide EF Core queries, **Dependency Injection** to inject the repositories into my Controllers, and a **Singleton** to hold application-wide configuration settings loaded from a JSON file.",
        code: `// A standard modern ASP.NET Core setup utilizes all of these implicitly:
builder.Services.AddSingleton<IConfig, AppConfig>(); // Singleton
builder.Services.AddScoped<IOrderRepo, OrderRepo>(); // Repository + DI`,
        tip: "Do NOT list a pattern you haven't actually coded. Interviewers will immediately ask you to whiteboard it. Stick to Repository, DI, Singleton, and Factory.",
        mistake: "Saying 'I use the MVC pattern'. MVC is an Architectural pattern, not a GoF Design Pattern.",
        summary: "Commonly used patterns include Repository, Dependency Injection, Singleton, and Factory."
    },
    {
        id: "154b",
        title: "Explain Singleton Pattern and the use of the same?",
        category: "Singleton Pattern",
        explanation: "The Singleton Pattern is a Creational design pattern that guarantees a class has **only one instance** globally throughout the lifetime of the application, and provides a global point of access to it. \n\nWe use it when instantiating a class is extremely resource-heavy (like establishing a database connection pool), or when all parts of the application must share the exact same state (like a global application configuration or a shared Cache manager).",
        example: "A country has exactly one Government. Regardless of who asks for the government, they all receive a reference to the exact same entity. You cannot create a `new Government()`.",
        code: `// Real-world use case: HttpClient (Microsoft strongly recommends making it Singleton)
// If you instantiate a new HttpClient for every request, you will exhaust socket resources (Socket Exhaustion).
public class ApiClient
{
    private static readonly HttpClient _httpClient = new HttpClient();
    
    // Everyone shares this single instance
    public static HttpClient Instance => _httpClient; 
}`,
        tip: "Always mention thread-safety. In a web application, hundreds of threads might try to access the singleton simultaneously.",
        mistake: "Using Singletons as global variables just to pass data around easily. Singletons tightly couple your code and make unit testing difficult.",
        summary: "Singleton ensures a class has only one global instance, used for heavy resources or shared state (like Caching or Configuration)."
    },
    {
        id: 155,
        title: "How did you implement singleton pattern?",
        category: "Singleton Pattern",
        explanation: "To manually implement a true Singleton, you need three things:\n1. A **Private Constructor** (prevents external code from using the `new` keyword).\n2. A **Private Static Field** (holds the one and only instance).\n3. A **Public Static Property/Method** (provides global access to the instance, creating it if it doesn't exist yet).",
        example: "The constructor is locked behind a vault door (private). The only way to get the object is to ask the receptionist (public static property). The receptionist checks if the object exists; if not, they build it once, then hand it to you.",
        code: `public sealed class ConfigurationManager
{
    // 2. Private static field
    private static ConfigurationManager _instance = null;

    // 1. Private constructor
    private ConfigurationManager() { }

    // 3. Public static property
    public static ConfigurationManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = new ConfigurationManager(); // Created only once
            }
            return _instance;
        }
    }
}`,
        tip: "Note that the code above is NOT thread-safe. This is just the basic conceptual implementation.",
        mistake: "Forgetting to make the class `sealed`. If it's not sealed, a nested class could inherit from it and bypass the private constructor.",
        summary: "Implement it using a private constructor, a private static field, and a public static access property."
    },
    {
        id: 156,
        title: "Can we use Static class rather than using a private constructor?",
        category: "Singleton Pattern",
        explanation: "Yes, you can use a static class to achieve a single global state, but it is fundamentally different from a Singleton. \n\nA **Static Class** cannot be instantiated at all, cannot inherit from other classes, cannot implement interfaces, and cannot be passed as a parameter. \n\nA **Singleton** is a real object. It can inherit, implement interfaces (e.g., `ILogger`), be passed around to methods, and participate in Dependency Injection.",
        example: "A static class is like a mathematical formula on a chalkboard (Math.Round). A Singleton is like the Chalkboard itself—a physical object that implements an interface (IChalkboard), but there is only one in the room.",
        code: `// STATIC CLASS (Inflexible)
public static class StaticLogger 
{
    public static void Log() { }
    // Cannot implement ILogger! Cannot be passed as a parameter!
}

// SINGLETON (Flexible)
public sealed class SingletonLogger : ILogger 
{
    // Implementation here...
    // Can be passed to methods expecting ILogger!
}`,
        tip: "If you need an object to conform to an interface (like for mock testing or DI), you MUST use a Singleton. You cannot use a static class.",
        mistake: "Thinking they are interchangeable. Static classes are for utility methods (like `Math` or `Convert`). Singletons are for stateful services.",
        summary: "Static classes cannot implement interfaces or be passed as parameters. Singletons are real, flexible objects."
    },
    {
        id: 157,
        title: "Static vs Singleton pattern?",
        category: "Singleton Pattern",
        explanation: "1. **Instantiation:** Static classes cannot be instantiated. Singletons are instantiated exactly once.\n2. **Inheritance & Interfaces:** Static classes cannot inherit or implement interfaces. Singletons can do both.\n3. **Passing as Arguments:** You cannot pass a static class to a method. You can pass a Singleton instance.\n4. **Memory:** Static class members are loaded into the High Frequency Heap immediately. Singletons can be 'Lazy Loaded' (only taking up memory when actually requested for the first time).",
        example: "Static classes are strict utilities. Singletons are standard OOP objects that just happen to have a self-imposed restriction of 'only one allowed'.",
        code: `// Static - strict utility
Math.Max(5, 10); 

// Singleton - normal object with single instance
ILogger myLogger = AppLogger.Instance; 
myLogger.Log("System started");`,
        tip: "State clearly: 'Use Static for stateless utility functions. Use Singleton for stateful services that require interface implementation.'",
        mistake: "Using Singletons for pure utility methods. That is overkill and anti-pattern.",
        summary: "Singletons support Interfaces, OOP principles, and Lazy Loading. Static classes are just containers for utility functions."
    },
    {
        id: 158,
        title: "How did you implement thread safety in Singleton?",
        category: "Singleton Pattern",
        explanation: "In a multi-threaded application (like a web app), multiple threads might check `if (_instance == null)` at the exact same millisecond. Both threads will see `null`, and both will execute `new Singleton()`, breaking the pattern! \n\nTo prevent this, we implement thread safety using the **lock** keyword. We lock a dedicated readonly object during the creation process, ensuring only one thread can ever execute the instantiation code.",
        example: "Think of a tiny bathroom with one toilet (the Singleton). If two people check the door simultaneously, they might both walk in. We put a heavy Lock on the door so only one person can enter the creation phase at a time.",
        code: `public sealed class ThreadSafeSingleton
{
    private static ThreadSafeSingleton _instance = null;
    
    // A dedicated object specifically for locking
    private static readonly object _padlock = new object();

    private ThreadSafeSingleton() { }

    public static ThreadSafeSingleton Instance
    {
        get
        {
            // Thread safely locked!
            lock (_padlock)
            {
                if (_instance == null)
                {
                    _instance = new ThreadSafeSingleton();
                }
                return _instance;
            }
        }
    }
}`,
        tip: "Always create a dedicated `private static readonly object _padlock = new object();` for locking. Never lock on `this` or the `typeof` the class, as this can cause deadlocks.",
        mistake: "Locking the entire `get` accessor without the double-null check (which causes massive performance drops). See the next question.",
        summary: "Thread safety is achieved by using a private static readonly `lock` object around the instantiation logic."
    },
    {
        id: 159,
        title: "What is double null check in Singleton?",
        category: "Singleton Pattern",
        explanation: "The thread-safe code in the previous question has a massive performance flaw: EVERY time a thread requests the instance, it has to wait in line for the `lock`, even if the instance was created 5 hours ago! \n\nThe **Double-Check Locking Pattern** fixes this by checking for null *before* the lock, and then *again* inside the lock. This ensures the expensive `lock` operation is only ever executed exactly once (during creation).",
        example: "Check 1: Is the door open? (If yes, just walk in. Fast!). If the door is closed, stand in line for the Lock. Once you get past the Lock, Check 2: Did the guy in front of me already open the door?",
        code: `public sealed class DoubleCheckSingleton
{
    private static DoubleCheckSingleton _instance = null;
    private static readonly object _padlock = new object();

    private DoubleCheckSingleton() { }

    public static DoubleCheckSingleton Instance
    {
        get
        {
            // FIRST CHECK: Avoids lock overhead 99.999% of the time!
            if (_instance == null) 
            {
                lock (_padlock)
                {
                    // SECOND CHECK: Ensures only one thread creates it
                    if (_instance == null) 
                    {
                        _instance = new DoubleCheckSingleton();
                    }
                }
            }
            return _instance;
        }
    }
}`,
        tip: "This is the 'Gold Standard' answer for older .NET versions. Interviewers love hearing about the Double-Check Lock because it proves you understand thread performance.",
        mistake: "Forgetting the second check inside the lock. If you don't do it, thread B will overwrite thread A's instance.",
        summary: "It checks for null before the lock (for performance) and inside the lock (for safety) to avoid locking on every read."
    },
    {
        id: 160,
        title: "Can Singleton pattern code be made easy with Lazy keyword?",
        category: "Singleton Pattern",
        explanation: "Yes! Since .NET 4.0, Microsoft introduced the `Lazy<T>` type. It handles all the thread-safety, locking, and lazy-loading internally, completely eliminating the need for the bulky Double-Check Lock code. It is currently the most recommended, robust, and easiest way to implement a Singleton in C#.",
        example: "Instead of building your own complex locking mechanism with a padlock, you just use the built-in `Lazy` vault provided by Microsoft.",
        code: `public sealed class ModernSingleton
{
    // The Lazy<T> object handles thread-safety automatically!
    private static readonly Lazy<ModernSingleton> _lazy = 
        new Lazy<ModernSingleton>(() => new ModernSingleton());

    private ModernSingleton() { }

    // Just return the .Value property
    public static ModernSingleton Instance => _lazy.Value;
}`,
        tip: "If asked to write a Singleton on a whiteboard, write the `Lazy<T>` version. It's clean, modern, and shows you know the modern framework features.",
        mistake: "Not knowing that `Lazy<T>` is thread-safe by default.",
        summary: "Yes, `Lazy<T>` completely replaces the complex double-check locking logic and provides built-in thread safety and lazy evaluation."
    },
    {
        id: 161,
        title: "Can we get rid of this double null check code?",
        category: "Singleton Pattern",
        explanation: "Yes, there are two ways to get rid of the double-null check code:\n1. Use `Lazy<T>` (as explained in the previous question - this is the best way).\n2. Use **Static Initialization** (Eager Loading). By initializing the static field inline, the CLR guarantees thread safety implicitly. The only downside is that it is created immediately when the class is loaded, rather than being strictly 'lazy loaded' when requested.",
        example: "Static initialization is like a chef cooking the special meal before the restaurant opens, guaranteeing it's ready safely. Lazy loading is waiting until a customer actually orders it.",
        code: `public sealed class EagerSingleton
{
    // EAGER INITIALIZATION: The CLR guarantees thread safety here automatically!
    private static readonly EagerSingleton _instance = new EagerSingleton();

    // Explicit static constructor tells C# compiler not to mark type as beforefieldinit
    static EagerSingleton() { }

    private EagerSingleton() { }

    public static EagerSingleton Instance => _instance;
}`,
        tip: "In modern ASP.NET Core apps, we don't even write Singleton classes manually anymore. We just use Dependency Injection: `services.AddSingleton<MyClass>();`",
        mistake: "Thinking manual singletons are still heavily used. Always mention that DI containers handle singletons today.",
        summary: "Yes, by using `Lazy<T>` or by relying on CLR thread-safety via Eager Static Initialization."
    },
    {
        id: 162,
        title: "What is the use of repository pattern?",
        category: "Repository & Unit of Work",
        explanation: "The Repository Pattern acts as an abstraction layer between the Data Access Layer (DAL) and the Business Logic Layer. It hides the complexities of data access (like raw SQL or complex Entity Framework LINQ queries) behind a simple interface. \n\nThe main uses are:\n1. **Decoupling:** Business logic doesn't care if data comes from SQL Server, MongoDB, or an API.\n2. **Centralization:** Queries are kept in one place. No duplicated LINQ queries spread across 50 controllers.\n3. **Testability:** It makes unit testing controllers incredibly easy by allowing you to mock the repository interface.",
        example: "The Business Logic is a Manager, the Database is the Warehouse. The Manager doesn't go into the warehouse to search for boxes (complex queries). They just ask the Repository (the Warehouse Clerk): 'Give me all active orders'. The clerk knows exactly how to find them.",
        code: `// The abstraction
public interface IProductRepository 
{
    IEnumerable<Product> GetActiveProducts();
}

// The complex EF Core implementation hidden away
public class ProductRepository : IProductRepository 
{
    private readonly AppDbContext _context;
    
    public IEnumerable<Product> GetActiveProducts() 
    {
        // Centralized logic!
        return _context.Products.Where(p => p.IsActive && p.Stock > 0).ToList();
    }
}`,
        tip: "Always emphasize 'Testability'. Mocking `IProductRepository` in a unit test is trivial. Mocking Entity Framework's `DbContext` directly is notoriously difficult.",
        mistake: "Leaking `IQueryable` from the repository. Repositories should return `IEnumerable` or `List`. Returning `IQueryable` means the controller is still executing database queries, which defeats the purpose of the pattern.",
        summary: "It abstracts data access logic, centralizes queries, decouples the database, and enables easy unit testing."
    },
    {
        id: 163,
        title: "Is Dal (Data access Layer) and Repository same?",
        category: "Repository & Unit of Work",
        explanation: "No. The Data Access Layer (DAL) is a broader architectural concept (a whole tier of your application responsible for talking to the database). The Repository Pattern is a specific Design Pattern *used within* the DAL.\n\nThink of the DAL as a library building. The Repository Pattern is the specific indexing system (like the Dewey Decimal System) used inside that library to keep things organized.",
        example: "Your project might have a separate project folder named `MyApp.Data` (This is the DAL). Inside that folder, you have `CustomerRepository.cs` and `OrderRepository.cs` (These use the Repository pattern).",
        code: `// The DAL is the entire collection of classes dealing with the DB.
// The Repository is just the specific pattern implementing the access.`,
        tip: "Clarify that the Repository acts as a *bridge* between the Business Logic and the DAL.",
        mistake: "Using the terms interchangeably. One is an architectural layer, the other is a design pattern.",
        summary: "DAL is an architectural layer. The Repository is a specific design pattern used inside the DAL to structure code."
    },
    {
        id: 164,
        title: "What is Generic repository pattern ?",
        category: "Repository & Unit of Work",
        explanation: "In a standard repository pattern, you write `Add()`, `Update()`, `Delete()`, and `GetById()` for every single entity (Customer, Order, Product). This leads to massive code duplication. \n\nThe Generic Repository Pattern uses C# Generics (`<T>`) to create a single base repository class that handles all standard CRUD operations for ANY entity, drastically reducing boilerplate code.",
        example: "Instead of hiring a specific mechanic for a Ford, one for a Toyota, and one for a Honda, you hire a Generic Mechanic `<T>` who knows how to fix any car.",
        code: `// The Generic Interface
public interface IRepository<T> where T : class
{
    T GetById(int id);
    void Add(T entity);
    void Delete(T entity);
}

// The Generic Implementation
public class Repository<T> : IRepository<T> where T : class
{
    private readonly DbContext _context;
    private DbSet<T> _dbSet;

    public Repository(DbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public void Add(T entity) => _dbSet.Add(entity);
    public T GetById(int id) => _dbSet.Find(id);
}

// Usage in DI:
// builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));`,
        tip: "Explain that while Generic Repositories are great for basic CRUD, you will still need specific repositories (e.g., `ICustomerRepository`) for complex, entity-specific queries.",
        mistake: "Forgetting the `where T : class` constraint, which is required by Entity Framework's `DbSet<T>`.",
        summary: "It uses C# Generics to create one base repository that handles standard CRUD operations for all entities."
    },
    {
        id: 165,
        title: "Is abstraction the only benefit of Repository?",
        category: "Repository & Unit of Work",
        explanation: "No, abstraction is just one benefit. The other major benefits are:\n1. **DRY (Don't Repeat Yourself):** Complex LINQ queries are written once in the repository, not duplicated across 10 controllers.\n2. **Unit Testing:** You can easily mock the `IRepository` interface to test business logic without hitting a real database.\n3. **Caching:** You can easily implement a caching layer inside the repository (e.g., check Redis first, then SQL) without the Business Logic ever knowing.",
        example: "If you decide to cache all 'Active Products' in Redis for 10 minutes to improve performance, you only have to change code in ONE place (`ProductRepository.GetActiveProducts()`). The controllers don't change at all.",
        code: `public IEnumerable<Product> GetActiveProducts()
{
    // Caching logic hidden entirely inside the repository!
    var cached = _cache.Get("active_prods");
    if (cached != null) return cached;
    
    var dbProds = _context.Products.Where(p => p.IsActive).ToList();
    _cache.Set("active_prods", dbProds);
    return dbProds;
}`,
        tip: "Highlight Caching and Unit Testing. Interviewers love developers who write testable and performant code.",
        mistake: "Only mentioning 'hiding the database'. That's the textbook answer, not the enterprise developer answer.",
        summary: "No, it also provides massive benefits for Unit Testing, Query Centralization, and Caching."
    },
    {
        id: 166,
        title: "How to implement transaction in repository?",
        category: "Repository & Unit of Work",
        explanation: "If you have multiple repositories (e.g., `CustomerRepo` and `OrderRepo`), and you need to insert a Customer and their Order in a single transaction (so if one fails, both roll back), you **CANNOT** manage the transaction inside the individual repositories. \n\nTo implement transactions across multiple repositories, you must use the **Unit of Work** design pattern. The Unit of Work wraps all repositories and provides a single `SaveChanges()` or `Commit()` method.",
        example: "A Repository is a single worker placing items in a shopping cart. The Unit of Work is the Cashier. The Cashier processes the entire cart as one single transaction. If your card declines, the entire cart is rolled back.",
        code: `// See the Unit of Work question for the full implementation code.`,
        tip: "Never write `_context.SaveChanges()` inside a Repository's `Add` method. That breaks the ability to have transactions across multiple repositories.",
        mistake: "Calling `SaveChanges()` inside the repository. This forces every single operation into its own isolated transaction.",
        summary: "Transactions spanning multiple repositories are managed by implementing the Unit of Work pattern, which coordinates a single SaveChanges call."
    },
    {
        id: 167,
        title: "What is Unit of work design pattern?",
        category: "Repository & Unit of Work",
        explanation: "The Unit of Work (UoW) pattern is used to group one or more operations (usually across multiple repositories) into a single database transaction. \n\nIt maintains a single instance of the database context (`DbContext`) and shares it across all repositories. When all business logic is complete, the UoW's `Commit()` method is called, which triggers a single `SaveChanges()` to the database. If any operation fails, the entire unit of work is discarded.",
        example: "Transferring $100 from Account A to Account B. \nStep 1: Repo A deducts $100. \nStep 2: Repo B adds $100. \nStep 3: UoW.Commit(). \nIf Step 2 fails, the UoW ensures Step 1 is never committed to the database.",
        code: `public interface IUnitOfWork : IDisposable
{
    // The UoW exposes the repositories, ensuring they share the same DB Context
    ICustomerRepository Customers { get; }
    IOrderRepository Orders { get; }
    
    // The single point of saving
    int Commit();
}

public class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _context;
    public ICustomerRepository Customers { get; private set; }
    public IOrderRepository Orders { get; private set; }

    public UnitOfWork(AppDbContext context)
    {
        _context = context;
        Customers = new CustomerRepository(_context);
        Orders = new OrderRepository(_context);
    }

    // One single transaction!
    public int Commit() => _context.SaveChanges(); 
    public void Dispose() => _context.Dispose();
}`,
        tip: "Unit of Work perfectly complements the Repository pattern. They are almost always implemented together in enterprise C# applications.",
        mistake: "Instantiating a new DbContext inside each repository. They MUST share the exact same DbContext instance provided by the UoW.",
        summary: "Unit of Work coordinates multiple repositories by sharing a single DbContext and committing all changes in a single transaction."
    },
    {
        id: 168,
        title: "Do we need repository pattern as EF does almost the same work?",
        category: "Repository & Unit of Work",
        explanation: "This is a massive debate in the .NET community. \n\n**Arguments against Repository:** Entity Framework Core *is already* an implementation of the Repository/UoW pattern! `DbSet<T>` is the generic repository, and `DbContext` is the Unit of Work. Wrapping a repository over EF is often considered redundant 'onion architecture' that slows down development.\n\n**Arguments for Repository:** Hiding EF behind an `IRepository` makes Unit Testing controllers drastically easier (mocking `DbContext` is hard). It also centralizes complex LINQ queries, and allows you to easily swap ORMs (e.g., from EF to Dapper) in the future.",
        example: "Using EF directly in a controller is like buying a pre-built engine and dropping it in a car. Building a Repository over EF is like building a custom box to hold the engine just in case you ever want to swap it for an electric motor later.",
        code: `// Direct EF approach (No Repository)
public class OrderController
{
    private readonly AppDbContext _context;
    
    // Business logic mixed with data access (harder to test, but faster to write)
    public IActionResult Get() => Ok(_context.Orders.Where(o => o.IsActive));
}`,
        tip: "Acknowledge both sides! Say: 'While EF Core is inherently a UoW/Repository, wrapping it in a custom interface is still highly valuable for mocking in Unit Tests and centralizing complex business queries.'",
        mistake: "Taking an extremist stance. Neither side is 100% right; it depends on the project's size and testing requirements.",
        summary: "EF Core already implements these patterns, but custom Repositories are still widely used to facilitate easy unit testing and query centralization."
    },
    {
        id: 169,
        title: "Did you do unit testing with Repository ?",
        category: "Repository & Unit of Work",
        explanation: "Yes, the primary reason we implemented the Repository pattern in our project was to facilitate Unit Testing. By having our Controllers depend on `IProductRepository` rather than the concrete `AppDbContext`, we were able to use mocking frameworks (like Moq) in our xUnit test projects to simulate database responses without ever touching a real database.",
        example: "When testing the `CalculateDiscount` logic in the controller, we don't want the test to fail just because the SQL Server is offline. We mock the repository to return a fake list of products instantly.",
        code: `// Test Code using Moq
[Fact]
public void GetProducts_ReturnsActiveProducts()
{
    // 1. Arrange: Create a fake repository
    var mockRepo = new Mock<IProductRepository>();
    mockRepo.Setup(r => r.GetActive()).Returns(new List<Product> { new Product() });
    
    // 2. Inject the fake repo into the controller
    var controller = new ProductController(mockRepo.Object);

    // 3. Act & Assert...
}`,
        tip: "Mention the specific testing tools you used: usually **xUnit** or **NUnit** for the test runner, and **Moq** or **NSubstitute** for the mocking framework.",
        mistake: "Saying 'Yes' but being unable to name a mocking framework.",
        summary: "Yes, repositories allow us to easily mock database calls using frameworks like Moq for isolated unit testing."
    },
    {
        id: 170,
        title: "How does repository pattern make unit testing easy?",
        category: "Repository & Unit of Work",
        explanation: "It relies on **Polymorphism and Dependency Injection**. \n\nBecause the Controller asks for an Interface (`IUserRepository`), it has no idea what the underlying implementation is. In Production, the DI container gives it a `SqlUserRepository`. But during Unit Testing, the test framework passes in a `MockUserRepository` (a fake class that just returns hardcoded data in memory). \n\nSince the mock runs entirely in RAM, the tests run in milliseconds, require no database setup, and are completely isolated from network issues.",
        example: "Testing a pilot in a flight simulator (Mock Repo) vs testing a pilot in a real $100M Boeing 747 (Real DB). The simulator is fast, safe, and easily reset.",
        code: `// Production Startup.cs:
services.AddScoped<IUserRepository, SqlUserRepository>();

// Unit Test Setup:
IUserRepository fakeRepo = new MockUserRepository();
var controller = new UserController(fakeRepo); // Controller is easily fooled!`,
        tip: "Explain that unit tests must be FAST. Hitting a real database takes milliseconds/seconds. Reading from a mock repository in memory takes nanoseconds.",
        mistake: "Saying it makes testing 'easier' without explaining the mechanism (Interface-based Dependency Injection).",
        summary: "It allows us to inject Fake/Mock implementations of the interface during testing, completely avoiding the need for a real database."
    },
    {
        id: 171,
        title: "How can we do mock testing with Repository?",
        category: "Repository & Unit of Work",
        explanation: "To perform mock testing, you use a library like **Moq**. \n1. You instantiate a `Mock<IRepository>` object.\n2. You use the `.Setup()` method to define what the repository should return when a specific method is called with specific parameters.\n3. You extract the fake object using `.Object` and pass it into the constructor of the class you are testing.\n4. You can also use `.Verify()` at the end of the test to ensure the controller actually called the repository method.",
        example: "You instruct the Mock object: 'If the controller asks for User ID 5, give it this fake User object named John.'",
        code: `using Moq;
using Xunit;

public class UserControllerTests
{
    [Fact]
    public void GetUser_ReturnsUser_WhenFound()
    {
        // 1. Create Mock
        var mockRepo = new Mock<IUserRepository>();
        
        // 2. Setup Behavior
        var fakeUser = new User { Id = 5, Name = "John" };
        mockRepo.Setup(repo => repo.GetById(5)).Returns(fakeUser);

        // 3. Inject Mock
        var controller = new UserController(mockRepo.Object);

        // 4. Act
        var result = controller.GetUser(5);

        // 5. Verify it was called exactly once
        mockRepo.Verify(repo => repo.GetById(5), Times.Once);
    }
}`,
        tip: "Knowing the syntax for Moq (Setup, Returns, Verify) is a massive green flag for interviewers looking for senior developers.",
        mistake: "Writing manual mock classes (e.g., `class FakeRepo : IRepo`) instead of using a dynamic mocking framework like Moq.",
        summary: "Use a framework like Moq to Setup expected behaviors and Returns on the IRepository interface, then inject the mock Object."
    },
    {
        id: 172,
        title: "What is Factory pattern and how does it benefit?",
        category: "Factory Pattern",
        explanation: "The Factory Pattern is a Creational design pattern that delegates the logic of object instantiation to a dedicated 'Factory' class or method. Instead of calling `new Product()` directly in your business logic, you call `Factory.CreateProduct()`. \n\n**Benefits:**\n1. It hides complex creation logic (e.g., if an object requires 5 dependencies to be initialized).\n2. It centralizes creation, so if the constructor signature changes, you only update the Factory, not 50 different files.\n3. It allows returning different derived types based on input parameters (polymorphism).",
        example: "Instead of you trying to build a Pizza from scratch in your living room (calling `new Pizza(dough, sauce, cheese)`), you call the PizzaFactory (Domino's) and say 'Give me a Pepperoni'. They handle the complex assembly and hand you the finished product.",
        code: `// The abstraction
public interface ITransport { void Deliver(); }
public class Truck : ITransport { public void Deliver() { } }
public class Ship : ITransport { public void Deliver() { } }

// The Factory isolates the creation logic (and the IF/ELSE conditions)
public static class TransportFactory 
{
    public static ITransport Create(string type) 
    {
        if (type == "Road") return new Truck();
        if (type == "Sea") return new Ship();
        throw new Exception("Unknown transport");
    }
}

// Client code is completely decoupled from concrete classes!
ITransport transport = TransportFactory.Create("Road");`,
        tip: "The core benefit to highlight is that the Client code only knows about the Interface (`ITransport`), and is completely decoupled from the concrete classes (`Truck`/`Ship`).",
        mistake: "Using a Factory just to return a single type with a parameterless constructor. Factories are for complex logic or polymorphic returns.",
        summary: "The Factory pattern centralizes and abstracts object creation logic, returning interface implementations based on parameters."
    },
    {
        id: 173,
        title: "How does centralizing object creation helps in loose coupling ?",
        category: "Factory Pattern",
        explanation: "Loose coupling means classes are independent of one another. If Class A creates Class B using the `new` keyword, Class A is **tightly coupled** to Class B. If Class B's constructor changes, Class A breaks. \n\nBy centralizing creation in a Factory, Class A never uses the `new` keyword. It only interacts with an Interface. If the concrete implementation changes, or requires new constructor parameters, you ONLY update the Factory. Class A remains entirely untouched.",
        example: "If a Controller relies on `new EmailService(\"smtp.server.com\", 587)`, and tomorrow the email service switches to an API requiring a token, the Controller breaks. If a Factory handles creation, the Controller just asks the factory for an `IEmailService`, remaining blissfully unaware of the changes.",
        code: `// TIGHT COUPLING (Bad)
public class OrderProcessor 
{
    // Processor is tightly coupled to the concrete SqlLogger and its constructor
    public void Process() { var log = new SqlLogger("db_conn"); } 
}

// LOOSE COUPLING (Good)
public class OrderProcessor 
{
    // Processor only knows about ILogger. The Factory handles the messy details.
    public void Process() { ILogger log = LoggerFactory.CreateLogger(); }
}`,
        tip: "Use the phrase 'Program to an Interface, not an Implementation'. The Factory allows client code to strictly program to interfaces.",
        mistake: "Thinking loose coupling means no dependencies. Classes always have dependencies; loose coupling just means they depend on Abstractions (Interfaces), not Concretions.",
        summary: "It prevents client code from using the `new` keyword on concrete classes, forcing them to depend solely on stable interfaces."
    },
    {
        id: 174,
        title: "What is IOC and DI ?",
        category: "Dependency Injection & IoC",
        explanation: "**IoC (Inversion of Control):** A broad architectural *principle* where the control flow of a system is inverted. Instead of a custom class calling reusable libraries, a framework calls the custom class. More specifically, objects do not create their own dependencies; control of creation is given to an external entity.\n\n**DI (Dependency Injection):** A specific *Design Pattern* used to implement IoC. It is the act of passing (injecting) the required dependencies into an object (usually via its constructor), rather than having the object instantiate them itself.",
        example: "IoC is the Hollywood Principle: 'Don't call us, we'll call you.' DI is the delivery guy: Instead of you going to the store to get ingredients (instantiating objects), the delivery guy (DI Container) brings exactly what you need to your front door (Constructor).",
        code: `// BAD: Control is NOT inverted. The class controls creation.
public class Car {
    private Engine _engine = new V8Engine(); // Tight coupling
}

// GOOD (DI): Control is INVERTED. The creator of the Car injects the dependency.
public class Car {
    private IEngine _engine;
    
    // The dependency is INJECTED via the constructor
    public Car(IEngine engine) {
        _engine = engine;
    }
}`,
        tip: "Explain that modern .NET Core has a built-in DI Container (`IServiceCollection`) that manages the lifetimes (Transient, Scoped, Singleton) of all injected dependencies.",
        mistake: "Thinking IoC and DI are exactly the same thing. IoC is the Principle. DI is the Pattern.",
        summary: "IoC is the principle of removing control of object creation from the class. DI is the pattern of injecting those objects via constructors."
    },
    {
        id: 175,
        title: "DI vs IOC ?",
        category: "Dependency Injection & IoC",
        explanation: "This is a common semantic interview question.\n\n- **IoC (Inversion of Control)** is the overarching principle. It is the conceptual idea of saying 'A class should not configure itself or create its own dependencies.'\n- **DI (Dependency Injection)** is a concrete design pattern. It is the specific implementation of IoC where dependencies are passed into a class through its Constructor, Properties, or Methods.\n\nNote: DI is not the *only* way to achieve IoC. The Service Locator pattern and Events/Delegates are also forms of IoC.",
        example: "IoC is the concept of 'Transportation'. DI is a specific implementation of it, like 'Driving a Car'. Service Locator would be 'Taking a Bus'. Both achieve Transportation, but via different mechanisms.",
        code: `// IoC Principle: The class shouldn't create its dependencies.
// DI Pattern: Achieving IoC via Constructor Injection.
public class UserService 
{
    private readonly ILogger _logger;
    // Dependency injected!
    public UserService(ILogger logger) => _logger = logger; 
}`,
        tip: "Be explicit: IoC is a Principle, DI is a Pattern.",
        mistake: "Arguing they are synonymous. They are heavily related, but hierarchically different.",
        summary: "IoC is the conceptual principle of inverting control. DI is the specific design pattern used to achieve it by injecting dependencies."
    },
    {
        id: 176,
        title: "What is a service locator ?",
        category: "Dependency Injection & IoC",
        explanation: "The Service Locator is a design pattern used to achieve Inversion of Control. It acts as a central registry (a 'locator') where services are registered. When a class needs a dependency, instead of having it injected via the constructor (like DI), the class actively queries the Service Locator to 'locate' and return the dependency.",
        example: "Instead of your groceries being delivered to your door (Dependency Injection), you have a massive warehouse directory (Service Locator). When you need milk, you ask the directory, 'Where is the milk?', and then go get it yourself.",
        code: `// The Service Locator
public static class Locator 
{
    private static Dictionary<Type, object> _services = new Dictionary<Type, object>();
    
    public static void Register<T>(T service) => _services[typeof(T)] = service;
    public static T Get<T>() => (T)_services[typeof(T)];
}

// A class using the Service Locator
public class OrderProcessor 
{
    public void Process() 
    {
        // The class actively goes and fetches its dependency
        ILogger logger = Locator.Get<ILogger>();
        logger.Log("Processing...");
    }
}`,
        tip: "In modern C#, the `IServiceProvider` interface acts as the built-in Service Locator.",
        mistake: "Thinking Service Locator is the same as DI. In DI, the class is *passive* (it receives dependencies). In Service Locator, the class is *active* (it fetches dependencies).",
        summary: "A Service Locator is a central registry that classes query to resolve their own dependencies."
    },
    {
        id: 177,
        title: "Service Locator vs DI ?",
        category: "Dependency Injection & IoC",
        explanation: "1. **Control Flow:** In DI, dependencies are PUSHED into the class (usually via constructor). In Service Locator, dependencies are PULLED by the class.\n2. **Visibility:** DI makes a class's dependencies explicitly visible in its constructor signature. Service Locator hides dependencies inside the class methods.\n3. **Coupling:** DI decouples the class completely from the framework. Service Locator couples the class to the Locator itself (the class must know the locator exists).",
        example: "DI: `public Car(IEngine engine)` (I can clearly see a Car needs an Engine to exist). \nService Locator: `public Car() { var eng = Locator.Get<IEngine>(); }` (The dependencies are hidden; the constructor is deceptive).",
        code: `// DI (Transparent)
public class User(ILogger log) { }

// Service Locator (Opaque)
public class User() 
{ 
    public void DoWork() { var log = Locator.Get<ILogger>(); } 
}`,
        tip: "Use the terms 'Push' vs 'Pull' to differentiate them.",
        mistake: "Arguing one is fundamentally wrong. Both achieve IoC, but DI is widely preferred today.",
        summary: "DI pushes dependencies to the class transparently. Service Locator forces the class to pull dependencies opaquely."
    },
    {
        id: 178,
        title: "Which is good to use Service Locator or DI ?",
        category: "Dependency Injection & IoC",
        explanation: "**Dependency Injection is heavily preferred** in almost all modern enterprise applications. It makes code highly testable, self-documenting (you can see all requirements in the constructor), and strictly enforces the Single Responsibility Principle. \n\nThe Service Locator is often considered an **Anti-Pattern** today because it hides dependencies, making classes harder to test and maintain, and tightly couples your business logic to the Locator framework.",
        example: "If you want to unit test a class using DI, you just pass in mock objects. If you want to unit test a class using a Service Locator, you have to configure the entire global Locator state before the test can run.",
        code: `// Most modern frameworks (ASP.NET Core, Angular) use DI exclusively by default.`,
        tip: "Mention that Service Locator is an Anti-Pattern. Interviewers love developers who understand modern architectural consensus.",
        mistake: "Saying Service Locator is better because 'it cleans up the constructor'. Massive constructors in DI are actually a 'Code Smell' telling you that your class is doing too much (violating SRP).",
        summary: "DI is significantly better. Service Locator is widely considered an anti-pattern because it hides dependencies and hampers testing."
    },
    {
        id: 179,
        title: "Cannot we use a simple class rather than interface for DI ?",
        category: "Dependency Injection & IoC",
        explanation: "Yes, you *can* inject concrete classes directly, but you absolutely *should not* unless the class is a simple Data Transfer Object (DTO). \n\nInjecting concrete classes defeats the main purposes of DI: **Loose Coupling** and **Testability**. If you inject a concrete `SqlDatabaseLogger`, you cannot swap it out for a `MockLogger` during unit testing, nor can you easily swap it for an `ApiLogger` in the future without changing the consumer's code.",
        example: "Injecting a concrete class is like welding a specific brand of battery into a flashlight. Injecting an Interface is like creating a standard AA battery slot. Any brand of battery (Mock, SQL, API) will work as long as it fits the interface.",
        code: `// BAD: Tightly coupled to SQL. Cannot be mocked easily.
public class OrderService(SqlLogger logger) { }

// GOOD: Loosely coupled. Highly testable.
public class OrderService(ILogger logger) { }`,
        tip: "Always tie Interfaces back to Unit Testing (Mocking). It is the strongest argument for using interfaces.",
        mistake: "Saying the compiler prevents it. The DI container will happily inject concrete classes if you configure it to do so.",
        summary: "You can, but it prevents loose coupling and destroys the ability to inject Mock objects during unit testing."
    },
    {
        id: 180,
        title: "Is DI a Factory Pattern?",
        category: "Dependency Injection & IoC",
        explanation: "No. While both deal with providing objects, their intent and mechanisms are completely different. \n\nA **Factory** is responsible for *instantiating* objects dynamically based on logic (e.g., creating a Truck vs a Ship). \n\n**DI** is responsible for *wiring* objects together. It provides dependencies that have already been created (or are created generically by the container).",
        example: "A Factory is the manufacturing plant that builds the specific engine. DI is the robotic arm that takes that finished engine and drops it into the car chassis.",
        code: `// Factory creates things based on logic
var transport = TransportFactory.Create("Sea");

// DI injects things that are already resolved
public class Car(IEngine engine) { }`,
        tip: "Explain that DI frameworks (like Microsoft.Extensions.DependencyInjection) actually *use* the Factory pattern under the hood to create the objects before injecting them.",
        mistake: "Confusing them because both hide the `new` keyword.",
        summary: "No. Factories create specific objects based on runtime logic. DI injects resolved dependencies into objects."
    },
    {
        id: 181,
        title: "So If you just centralize object creation is it Factory pattern?",
        category: "Factory Pattern",
        explanation: "Not necessarily. Centralizing object creation without any abstraction or polymorphic return types is usually just called a **Simple Factory** (or a Factory Object), which is an idiom, not a true Gang of Four design pattern. \n\nThe true GoF **Factory Method Pattern** requires an interface/abstract base class, and relies on inheritance, allowing subclasses to alter the type of objects that will be created.",
        example: "A simple static method `CreateUser()` in a helper class is just centralized creation. A true Factory Method involves a `UserFactory` interface that might have a `PremiumUserFactory` implementation and a `StandardUserFactory` implementation.",
        code: `// This is a "Simple Factory" (Idiom, not a GoF pattern)
public static class SimpleFactory {
    public static User Create() => new User();
}`,
        tip: "Be careful. Most developers say 'Factory Pattern' when they are actually writing a 'Simple Factory'. Knowing the difference shows deep architectural knowledge.",
        mistake: "Thinking any method with the word 'Create' is the Factory Pattern.",
        summary: "No. Simple centralization is just an idiom. The true GoF pattern relies on polymorphism and inheritance."
    },
    {
        id: 182,
        title: "Static DI vs Dynamic DI ?",
        category: "Dependency Injection & IoC",
        explanation: "**Static DI:** Dependencies are resolved at compile-time, typically by manually writing code to wire up the dependencies. It is extremely fast and type-safe, but less flexible.\n\n**Dynamic DI:** Dependencies are resolved at runtime using Reflection by a dedicated DI Container (like ASP.NET Core's built-in container, Autofac, or Ninject). It is slightly slower due to reflection, but highly flexible, allowing dependencies to be swapped via configuration files.",
        example: "Static DI is hardcoding the wiring: `var c = new Controller(new Repo());`. Dynamic DI is telling a framework: 'Whenever anyone asks for an IRepo, figure it out at runtime and give them a SqlRepo.'",
        code: `// Static DI (Manual wiring)
var repo = new SqlRepo();
var controller = new UserController(repo);

// Dynamic DI (IoC Container using Reflection)
services.AddTransient<IRepo, SqlRepo>(); // Framework handles it magically at runtime`,
        tip: "Dynamic DI is the industry standard for enterprise applications (ASP.NET Core). Static DI is mostly used in performance-critical mobile/gaming apps or simple console apps.",
        mistake: "Thinking DI requires a container. You can do 'Pure DI' (Static DI) manually without any framework.",
        summary: "Static DI is manually wiring dependencies at compile-time. Dynamic DI uses a container and reflection to resolve dependencies at runtime."
    },
    {
        id: 183,
        title: "In which scenarios to use Static DI vs Dynamic DI ?",
        category: "Dependency Injection & IoC",
        explanation: "Use **Dynamic DI (Containers)** for almost all enterprise web applications (like ASP.NET Core APIs). It provides massive productivity boosts, automatic lifetime management (Scoped/Transient), and clean architecture.\n\nUse **Static DI (Manual/Pure DI)** when extreme performance and startup speed are required (like in high-frequency trading, Unity game engines, or small micro-optimised AWS Lambdas), because it avoids the overhead of runtime Reflection.",
        example: "For a banking API where maintainability and testing are key, use Dynamic DI. For a mobile game rendering 60 frames per second on a weak processor, use Static DI.",
        code: `// Unity Game Engine (Prefers Static DI to avoid Garbage Collection spikes)
public class Player {
    public Player(IWeapon weapon) { /* ... */ } 
}`,
        tip: "Mention that Source Generators in modern .NET are bridging this gap, allowing for DI containers that generate static wiring code at compile time!",
        mistake: "Assuming Dynamic DI is always better. Reflection has a real performance cost.",
        summary: "Dynamic DI for enterprise web apps and maintainability. Static DI for extreme performance and memory-constrained environments."
    },
    {
        id: 184,
        title: "The real Factory pattern ?",
        category: "Factory Pattern",
        explanation: "The true GoF **Factory Method Pattern** defines an interface for creating an object, but lets subclasses decide which class to instantiate. It defers instantiation to subclasses.\n\nInstead of a single centralized class with a massive `switch` statement, you create an abstract `Creator` class with an abstract `FactoryMethod()`. Different concrete creators override this method to produce different concrete products.",
        example: "Instead of one Logistics company with a switch statement (If Road -> Truck, If Sea -> Ship), you have an abstract `Logistics` company. The `RoadLogistics` subclass creates Trucks. The `SeaLogistics` subclass creates Ships.",
        code: `// The true Factory Method Pattern
public abstract class Logistics
{
    // The Factory Method
    public abstract ITransport CreateTransport(); 
}

public class RoadLogistics : Logistics
{
    public override ITransport CreateTransport() => new Truck();
}

public class SeaLogistics : Logistics
{
    public override ITransport CreateTransport() => new Ship();
}`,
        tip: "The key phrase is 'defers instantiation to subclasses'. This adheres perfectly to the Open/Closed Principle.",
        mistake: "Writing a 'Simple Factory' (static method with a switch statement) and calling it the true Factory pattern.",
        summary: "It defines an interface for creating an object, but delegates the actual instantiation logic to subclasses."
    },
    {
        id: 185,
        title: "Factory Method vs Factory pattern ?",
        category: "Factory Pattern",
        explanation: "This is a terminology clarification.\n\n- **Simple Factory:** An idiom. A single class/method with a switch statement that returns different objects. (Often incorrectly called 'The Factory Pattern').\n- **Factory Method:** A GoF design pattern. An abstract method in a base class that derived classes override to instantiate different objects.\n- **Abstract Factory:** A GoF design pattern. A factory of factories, used to create families of related objects.",
        example: "Simple Factory: A vending machine (1 machine, many drinks). Factory Method: A franchise model (McDonalds NY makes NY burgers, McDonalds Tokyo makes Tokyo burgers).",
        code: `// Simple Factory (Idiom) = One class, lots of IFs
// Factory Method (GoF) = Abstract base class, derived classes implement creation`,
        tip: "If an interviewer asks to build a 'Factory', start by building a Simple Factory, but explicitly mention that it is a Simple Factory. If they want the GoF pattern, upgrade it to the Factory Method.",
        mistake: "Getting bogged down in semantics. Just ensure you know the difference between a centralized switch statement and polymorphic creation.",
        summary: "Simple Factory is an idiom using switch statements. Factory Method is a GoF pattern using inheritance to defer creation to subclasses."
    },
    {
        id: 186,
        title: "How are new behaviors created in Factory pattern ?",
        category: "Factory Pattern",
        explanation: "In the true **Factory Method Pattern**, new behaviors (new types of products) are created by adding a **new concrete Creator subclass** and a **new concrete Product class**, WITHOUT modifying any existing code. This perfectly adheres to the Open/Closed Principle (Open for extension, Closed for modification).",
        example: "If you want to add 'Air Transport' (Helicopter), you do not modify `RoadLogistics` or `SeaLogistics`. You simply create a new `AirLogistics` class that returns a `Helicopter`. Existing code remains untouched.",
        code: `// Adding new behavior WITHOUT modifying existing factories!
public class Helicopter : ITransport { /*...*/ }

public class AirLogistics : Logistics
{
    // Overriding the factory method
    public override ITransport CreateTransport() => new Helicopter();
}`,
        tip: "Always tie the true Factory Method back to the **Open/Closed Principle**.",
        mistake: "Adding a new `if` statement to a Simple Factory. That modifies existing code, violating the Open/Closed Principle.",
        summary: "By adding new subclass creators and products, adhering strictly to the Open/Closed Principle."
    },
    {
        id: 187,
        title: "What is Abstract Factory Pattern ?",
        category: "Factory Pattern",
        explanation: "The Abstract Factory Pattern is a Creational design pattern that lets you produce **families of related or dependent objects** without specifying their concrete classes. It is essentially a 'Factory of Factories'.",
        example: "You need to create UI elements (Button, Checkbox). If the user is on Windows, you need `WindowsButton` and `WindowsCheckbox`. If on Mac, you need `MacButton` and `MacCheckbox`. An Abstract Factory ensures that if you are using the `MacFactory`, you get matching Mac elements, preventing you from accidentally mixing a Windows Button with a Mac Checkbox.",
        code: `// The Abstract Factory
public interface IGUIFactory 
{
    IButton CreateButton();
    ICheckbox CreateCheckbox();
}

// Concrete Factory 1 (Creates a Family of Windows objects)
public class WinFactory : IGUIFactory 
{
    public IButton CreateButton() => new WinButton();
    public ICheckbox CreateCheckbox() => new WinCheckbox();
}

// Concrete Factory 2 (Creates a Family of Mac objects)
public class MacFactory : IGUIFactory 
{
    public IButton CreateButton() => new MacButton();
    public ICheckbox CreateCheckbox() => new MacCheckbox();
}`,
        tip: "The keyword to memorize for Abstract Factory is **'Families of related objects'**.",
        mistake: "Using Abstract Factory to just return random unrelated interfaces. The interfaces must logically belong to a specific 'theme' or 'family'.",
        summary: "It is a factory of factories used to create entire families of related objects (like themes or OS-specific UI components)."
    },
    {
        id: 188,
        title: "Does Abstract Factory Pattern use FP inside ?",
        category: "Factory Pattern",
        explanation: "Yes! The Abstract Factory Pattern typically uses the **Factory Method Pattern** inside it to actually instantiate the objects. \n\nAn Abstract Factory is basically just an interface declaring *several* Factory Methods (one for each product in the family). The concrete factories implement those Factory Methods to produce the specific family members.",
        example: "The `IGUIFactory` (Abstract Factory) declares `CreateButton()` and `CreateCheckbox()`. These individual declarations are essentially Factory Methods.",
        code: `public interface IGUIFactory 
{
    // These are Factory Methods living inside an Abstract Factory!
    IButton CreateButton();
    ICheckbox CreateCheckbox();
}`,
        tip: "This highlights the composable nature of Design Patterns. Patterns often use other patterns to achieve their goals.",
        mistake: "Treating them as mutually exclusive concepts. They work together.",
        summary: "Yes, an Abstract Factory usually consists of multiple Factory Methods grouped together to create a family of objects."
    },
    {
        id: 189,
        title: "Simple Factory vs Factory Method vs Abstract Factory ?",
        category: "Factory Pattern",
        explanation: "1. **Simple Factory:** One single class with a switch/if statement. Creates ONE type of abstraction. Violates Open/Closed Principle. (Not a GoF pattern).\n2. **Factory Method:** An abstract base class where child classes override a method to decide what to create. Creates ONE type of abstraction. Adheres to Open/Closed Principle.\n3. **Abstract Factory:** An interface containing multiple Factory Methods. Creates MULTIPLE related abstractions (a Family of objects).",
        example: "Simple: Give me a car (I'll use a switch statement to pick which one). \nFactory Method: I am the Honda Factory, I only build Hondas. \nAbstract Factory: I am the Honda Enterprise Factory, I build Honda Cars, Honda Motorcycles, and Honda Boats (a family).",
        code: `// Simple:  Factory.Create("Car");
// Method:  HondaFactory.Create(); -> Returns ICar
// Abstract: HondaFactory.CreateCar(); HondaFactory.CreateBike();`,
        tip: "Use the 'Scale of Complexity' to explain them. Simple -> Method -> Abstract.",
        mistake: "Overengineering by jumping straight to Abstract Factory when a Simple Factory would suffice for your project scope.",
        summary: "Simple uses switches. Method defers creation to subclasses. Abstract creates entire families of objects."
    },
    {
        id: 190,
        title: "How to remove IF conditions from Simple Factory?",
        category: "Factory Pattern",
        explanation: "A major downside of a Simple Factory is the massive `switch` or `if/else` block that must be modified every time a new class is added. You can remove these completely using **Reflection** or a **Dictionary (Registration)** approach.",
        example: "Instead of hardcoding `if (type == \"Truck\") return new Truck();`, you keep a Dictionary mapping the string \"Truck\" to the `Type` of Truck. When asked, you look up the Dictionary and instantiate it dynamically.",
        code: `public class SmartFactory
{
    // Dictionary mapping strings to Types
    private Dictionary<string, Type> _transports = new Dictionary<string, Type>();

    public SmartFactory()
    {
        // Register types at startup
        _transports.Add("Road", typeof(Truck));
        _transports.Add("Sea", typeof(Ship));
    }

    public ITransport Create(string type)
    {
        // NO IF CONDITIONS! Uses Reflection (Activator) to instantiate.
        if (_transports.TryGetValue(type, out Type t))
        {
            return (ITransport)Activator.CreateInstance(t);
        }
        throw new Exception("Not found");
    }
}`,
        tip: "Explain that while Reflection (`Activator.CreateInstance`) is powerful, it has a performance cost. A modern alternative is to use `Func<ITransport>` delegates in the dictionary instead of `Type` to avoid reflection.",
        mistake: "Leaving massive 50-case switch statements in enterprise codebases.",
        summary: "You can remove IF conditions by using a Dictionary to map keys to Types or Delegates, often leveraging Reflection to instantiate them dynamically."
    },
    {
        id: 191,
        title: "What are the three lifetimes of Dependency Injection in .NET Core?",
        category: "Dependency Injection & IoC",
        explanation: "In modern .NET DI (like ASP.NET Core), services can be registered with three distinct lifetimes:\n1. **Transient:** A new instance is created EVERY single time it is requested. Best for lightweight, stateless services.\n2. **Scoped:** A new instance is created ONCE per HTTP request. All components sharing that HTTP request get the same instance. Best for database contexts or user-session state.\n3. **Singleton:** A single instance is created the first time it is requested, and that exact same instance is shared across the entire application for all requests. Best for caching, global configuration, or shared HttpClient.",
        example: "Transient = Buying a new disposable cup every time you want water. Scoped = Getting one glass at a restaurant; you use it for your whole meal, then it's washed. Singleton = The town water tower; everyone shares it permanently.",
        code: `// ASP.NET Core Program.cs Registration
builder.Services.AddTransient<IEmailSender, SmtpEmailSender>();
builder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();
builder.Services.AddSingleton<ICacheManager, RedisCacheManager>();`,
        tip: "Memorize these three perfectly. It is the most commonly asked DI question in .NET interviews.",
        mistake: "Registering a DbContext as a Singleton or Transient. DbContext is not thread-safe and MUST be Scoped in a web application.",
        summary: "Transient (created every time), Scoped (created once per HTTP request), Singleton (created once globally)."
    },
    {
        id: 192,
        title: "What is a Captive Dependency in DI?",
        category: "Dependency Injection & IoC",
        explanation: "A Captive Dependency is a dangerous bug that occurs when a service with a longer lifetime holds a reference to a service with a shorter lifetime. \n\nFor example, if you register a `Singleton` service, but inject a `Transient` or `Scoped` service into its constructor. Because the Singleton is only instantiated once, the Transient/Scoped dependency is also 'trapped' or 'held captive' inside the Singleton forever. It will never be disposed or recreated, defeating its intended lifetime and often causing massive memory leaks or threading issues (like a trapped DbContext).",
        example: "A town builds a permanent monument (Singleton). Inside the monument, they trap a temporary rental worker (Transient). The rental worker can never leave and eventually dies (throws an exception when trying to access disposed resources).",
        code: `// BAD: Captive Dependency!
// Startup: AddSingleton<AppLogger>(); AddScoped<DbContext>();

public class AppLogger // I am a Singleton
{
    private readonly DbContext _context; 
    
    // The Scoped DbContext is trapped here forever!
    public AppLogger(DbContext context) 
    {
        _context = context;
    }
}`,
        tip: "Modern ASP.NET Core has a built-in protection against this. If you enable `ValidateScopes = true`, the app will crash on startup if it detects a captive dependency.",
        mistake: "Thinking lifetimes reset dynamically. Once an object is injected into a Singleton, it effectively becomes a Singleton itself.",
        summary: "A bug where a long-lived service (Singleton) injects and permanently holds a short-lived service (Transient/Scoped)."
    },
    {
        id: 193,
        title: "How do you resolve multiple implementations of the same interface in .NET DI?",
        category: "Dependency Injection & IoC",
        explanation: "Sometimes you have an interface like `IPaymentProcessor` and multiple implementations (`StripeProcessor`, `PayPalProcessor`). If you register both in the DI container, how do you get the right one?\n\n1. **IEnumerable Injection:** You can inject `IEnumerable<IPaymentProcessor>` into the constructor, and it will return a list of ALL registered implementations. You then use LINQ to pick the one you want based on some property.\n2. **Keyed Services (.NET 8+):** Microsoft recently added native support for Keyed Services, allowing you to register and inject specific implementations using a string key.",
        example: "The customer selects 'PayPal' on the UI. The Controller receives a list of all processors, loops through them, finds the one named 'PayPal', and executes it.",
        code: `// Method 1: IEnumerable Injection
public class Checkout(IEnumerable<IPaymentProcessor> processors)
{
    public void Pay(string type)
    {
        var processor = processors.First(p => p.Name == type);
        processor.Process();
    }
}

// Method 2: Keyed Services (.NET 8)
builder.Services.AddKeyedScoped<IPaymentProcessor, PayPal>("paypal");

public class Checkout([FromKeyedServices("paypal")] IPaymentProcessor paypal) { }`,
        tip: "Mentioning 'Keyed Services in .NET 8' shows that you stay incredibly up-to-date with modern C# features.",
        mistake: "Thinking the DI container will crash if you register two implementations. It won't; by default, if you ask for a single instance, it just returns the *last* one registered.",
        summary: "Inject an IEnumerable of the interface to get all of them, or use the new Keyed Services feature in .NET 8."
    },
    {
        id: 194,
        title: "Why should a Repository NEVER return IQueryable?",
        category: "Repository & Unit of Work",
        explanation: "Returning `IQueryable<T>` from a Repository is considered a severe anti-pattern (often called a 'Leaky Abstraction'). \n\n`IQueryable` means the SQL query has not been executed yet. It allows the caller (the Controller) to add `.Where()` or `.Include()` clauses. This means the Controller is now directly writing database queries! The entire purpose of the Repository is to HIDE database logic. If the DB changes, the controller breaks.",
        example: "The Warehouse Clerk (Repository) says, 'I won't get the boxes for you, but here's a map to the warehouse (IQueryable). Go get them yourself.' This defeats the purpose of having a clerk.",
        code: `// BAD (Leaky Abstraction)
public IQueryable<User> GetUsers() => _context.Users; 
// Controller does: repo.GetUsers().Where(u => u.Age > 18).ToList(); (DB Logic in Controller!)

// GOOD (Encapsulated)
public IEnumerable<User> GetAdultUsers() => _context.Users.Where(u => u.Age > 18).ToList();
// Controller does: repo.GetAdultUsers(); (Controller knows nothing about DB logic!)`,
        tip: "Repositories should always return materialized collections (like `IEnumerable<T>`, `List<T>`, or `Task<IEnumerable<T>>`). The SQL should execute inside the repository.",
        mistake: "Returning IQueryable to 'save time' writing multiple methods. It saves time now, but ruins maintainability and testability later.",
        summary: "Returning IQueryable leaks database query execution to the business logic, defeating the entire purpose of the abstraction."
    },
    {
        id: 195,
        title: "How do you implement the Specification Pattern with Repository?",
        category: "Repository & Unit of Work",
        explanation: "If a Repository shouldn't return `IQueryable`, how do you handle complex, dynamic filtering without writing 100 different methods (like `GetByColor`, `GetByColorAndSize`)? \n\nYou use the **Specification Pattern**. A Specification is a class that encapsulates a specific LINQ expression (the 'rule'). You pass the Specification object into the generic Repository, and the repository applies the rule internally before executing the query.",
        example: "Instead of asking the clerk to 'Find red shoes' and 'Find blue shoes', you hand the clerk a standardized Form (Specification) with checkboxes. The clerk reads the form and applies it.",
        code: `// 1. The Specification encapsulates the rule
public class ActiveUsersSpec : ISpecification<User>
{
    public Expression<Func<User, bool>> Criteria => user => user.IsActive;
}

// 2. The Repository accepts the Specification
public IEnumerable<User> Find(ISpecification<User> spec)
{
    // The DB logic stays in the Repo!
    return _context.Users.Where(spec.Criteria).ToList(); 
}

// 3. Controller Usage
var users = _repo.Find(new ActiveUsersSpec());`,
        tip: "The Specification pattern is the enterprise solution to the 'IQueryable vs IEnumerable' debate. It keeps queries encapsulated but highly dynamic.",
        mistake: "Confusing it with just passing a raw `Expression<Func<T, bool>>` to the repo. A true specification is an object, meaning it can be unit tested independently!",
        summary: "The Specification pattern encapsulates complex query logic into objects, allowing dynamic filtering while keeping the repository strongly encapsulated."
    },
    {
        id: 196,
        title: "How do you handle Asynchronous operations in the Repository?",
        category: "Repository & Unit of Work",
        explanation: "In modern applications, all database calls should be asynchronous to prevent blocking thread pool threads (Thread Starvation). \n\nThe Repository Interface should define methods returning `Task<T>` or `Task<IEnumerable<T>>`, and the implementation should use EF Core's async methods like `ToListAsync()` and `FirstOrDefaultAsync()`.",
        example: "Synchronous is the thread standing at the warehouse door doing nothing for 5 seconds while the clerk finds the item. Asynchronous means the thread goes to help other customers, and the clerk calls them back when the item is ready.",
        code: `public interface IUserRepository
{
    // Interface returns Tasks
    Task<IEnumerable<User>> GetAllAsync();
    Task<User> GetByIdAsync(int id);
}

public class UserRepository : IUserRepository
{
    // Implementation uses await and Async EF methods
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }
}`,
        tip: "Remember that you shouldn't use `.Result` or `.Wait()` on these tasks in the controller, as it can cause deadlocks. Always `await` them all the way up the chain.",
        mistake: "Writing `return Task.FromResult(_context.Users.ToList());`. This is fake async! The `ToList()` still blocks the thread synchronously.",
        summary: "Return `Task` or `Task<T>` from interface methods and use `await` with ORM-specific async methods like `ToListAsync()`."
    },
    {
        id: 197,
        title: "What is the difference between a Factory and a Builder pattern?",
        category: "Factory Pattern",
        explanation: "Both are Creational patterns, but they solve different problems.\n\n- **Factory Pattern:** Used when object creation is a single-step process, but the *type* of the object is determined at runtime based on logic/parameters.\n- **Builder Pattern:** Used when object creation is a complex, multi-step process requiring extensive configuration. The type is known, but the assembly is hard.",
        example: "Factory: Asking a restaurant for a 'Burger'. They give you a standard burger. Builder: Going to Subway and saying 'Add lettuce, add mayo, toast the bread'. It's a multi-step assembly process.",
        code: `// Factory (1 step, decides type)
IVehicle v = VehicleFactory.Create("Truck"); 

// Builder (Multi-step complex assembly)
var house = new HouseBuilder()
                .AddDoors(4)
                .AddWindows(10)
                .AddPool()
                .Build();`,
        tip: "If creation requires a massive constructor with 10 optional parameters, use the Builder pattern. If you need polymorphism, use the Factory.",
        mistake: "Thinking they are interchangeable. Builder is for complexity of state. Factory is for complexity of type.",
        summary: "Factory handles single-step creation with polymorphic types. Builder handles complex, multi-step configuration of a single type."
    },
    {
        id: 198,
        title: "How does the Factory pattern violate the Single Responsibility Principle, and how to fix it?",
        category: "Factory Pattern",
        explanation: "A standard Factory often becomes a 'God Class'. If a `TransportFactory` has a massive switch statement knowing how to build 50 different vehicles (Trucks, Ships, Planes, Bikes), it violates the SRP because it has 50 reasons to change. It also tightly couples the factory to all 50 concrete classes.\n\n**To fix it:**\n1. Use the **Abstract Factory / Factory Method** to delegate creation to smaller, specialized subclasses (e.g., `AirFactory`, `SeaFactory`).\n2. Use **Dependency Injection** with `IServiceProvider` or delegates to resolve types dynamically without the Factory needing to reference the concrete classes directly.",
        example: "One mechanic trying to fix every brand of car in the world (SRP Violation). A network of specialized mechanics (Abstract Factories).",
        code: `// SRP Violation:
public ITransport Create(string type) {
   if (type=="Car") return new Car(engine, wheels, doors); // Factory knows too much!
   if (type=="Plane") return new Plane(wings, jet);
}

// Fix using DI (Factory just asks the container)
public ITransport Create(string type) {
   return _serviceProvider.GetKeyedService<ITransport>(type); 
}`,
        tip: "Interviewers ask this to see if you understand the limits of patterns. Patterns aren't perfect; they can introduce new architectural smells if overused.",
        mistake: "Assuming a pattern makes your code flawless. Design patterns are tools, and like any tool, they can cause damage if used poorly.",
        summary: "It becomes a God Class with massive switch statements. Fix it using the Abstract Factory pattern, Dictionaries, or modern Dependency Injection."
    }
);

