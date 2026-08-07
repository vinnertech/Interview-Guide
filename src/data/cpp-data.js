export const interviewQuestions = [
  {
    "id": 1,
    "category": "C++ Fundamentals",
    "title": "What is C++ and what are its main features?",
    "explanation": "C++ is a general-purpose, high-level, compiled programming language developed by Bjarne Stroustrup as an extension of the C programming language. It is renowned for its performance, efficiency, and flexibility.\n\nMain Features:\n- **Object-Oriented**: Supports classes, inheritance, polymorphism, encapsulation, and abstraction.\n- **Multi-paradigm**: Supports procedural, object-oriented, and generic programming.\n- **Compiled**: C++ code translates directly to machine code, making it extremely fast.\n- **Memory Management**: Offers direct access to hardware and dynamic memory allocation via pointers.\n- **Rich Standard Library (STL)**: Provides heavily optimized, generic data structures and algorithms.",
    "code": "#include <iostream>\n\nclass Hello {\npublic:\n    void sayHello() {\n        std::cout << \"Hello World!\" << std::endl;\n    }\n};\n\nint main() {\n    Hello h;\n    h.sayHello();\n    return 0;\n}",
    "example": "A high-performance trading engine, a AAA video game (like Unreal Engine), or a modern web browser engine (like V8) are heavily reliant on C++.",
    "tip": "When asked this, always emphasize that it was built as an extension of C to include object-oriented features while retaining close-to-the-metal hardware control.",
    "summary": "Understanding what is c++ and what are its main features"
  },
  {
    "id": 2,
    "category": "C++ Fundamentals",
    "title": "What are the differences between C and C++?",
    "explanation": "While C++ is derived from C, they have significant fundamental differences primarily centered around programming paradigms.\n\nKey Differences:\n- **Paradigm**: C is procedural. C++ is multi-paradigm (procedural + object-oriented + generic).\n- **Data Hiding**: C does not support encapsulation (data is globally accessible). C++ uses access modifiers (`public`, `private`, `protected`).\n- **Functions**: C++ supports function overloading and virtual functions. C does not.\n- **Memory Management**: C uses `malloc()` and `free()`. C++ introduces `new` and `delete` operators.\n- **References**: C relies strictly on pointers for pass-by-reference. C++ introduces true reference variables (`int& x = y;`).\n- **Error Handling**: C uses return codes. C++ uses `try`/`catch` exception handling.",
    "code": "// C Style Memory Allocation\nint* ptrC = (int*)malloc(sizeof(int));\nfree(ptrC);\n\n// C++ Style Memory Allocation\nint* ptrCpp = new int;\ndelete ptrCpp;",
    "example": "",
    "tip": "C++ is technically almost a superset of C, meaning most valid C code will compile in a C++ compiler, but writing C-style code in C++ is highly discouraged.",
    "summary": "Understanding what are the differences between c and c++"
  },
  {
    "id": 3,
    "category": "C++ Fundamentals",
    "title": "Why is C++ called a multi-paradigm programming language?",
    "explanation": "A programming paradigm is a style or \"way\" of programming. C++ is called a multi-paradigm language because it allows developers to write code using different architectural styles, choosing the best tool for the specific problem.\n\n1. **Procedural Programming**: Code is written as a sequence of steps or functions (inherited directly from C).\n2. **Object-Oriented Programming (OOP)**: Code is organized around objects and data (using classes, inheritance, polymorphism).\n3. **Generic Programming**: Writing code that is independent of data types, achieved via C++ Templates (e.g., STL containers).\n4. **Functional Programming**: Since C++11, lambda expressions and `<functional>` allow developers to treat functions as first-class citizens.",
    "code": "// Generic Programming (Templates)\ntemplate <typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\n// Functional Programming (Lambdas)\nauto multiply = [](int x, int y) { return x * y; };",
    "example": "You might use OOP to design a game entity hierarchy, templates to build a generic inventory system, and procedural functions for startup routines.",
    "tip": "Don't just list the paradigms—briefly define them (e.g., procedural is functions, OOP is objects, generic is templates).",
    "summary": "Understanding why is c++ called a multi-paradigm programming language"
  },
  {
    "id": 4,
    "category": "C++ Fundamentals",
    "title": "What are the major features introduced in modern C++?",
    "explanation": "Modern C++ generally refers to C++11 and later versions (C++14, C++17, C++20). These versions introduced massive features that made C++ safer, faster, and more expressive, moving away from manual memory management.\n\nMajor Features:\n- **`auto` Keyword**: Type inference at compile time.\n- **Smart Pointers**: `<memory>` library (`std::unique_ptr`, `std::shared_ptr`) for automatic memory management (RAII).\n- **Lambda Expressions**: Anonymous, inline functions.\n- **Move Semantics**: Rvalue references (`&&`) to eliminate deep copying for performance.\n- **`constexpr`**: Evaluating functions/variables at compile-time.\n- **`std::thread`**: Native language support for multithreading.\n- **Concepts (C++20)**: Constraints on template parameters.",
    "code": "// Pre-C++11\nstd::vector<int>::iterator it = vec.begin();\n\n// Modern C++ (C++11+)\nauto it = vec.begin();\n\n// Smart Pointers (No delete needed!)\nstd::unique_ptr<int> ptr = std::make_unique<int>(10);",
    "example": "",
    "tip": "If asked about modern C++, immediately mention Smart Pointers, Auto, and Lambdas. They are the holy trinity of C++11 improvements.",
    "summary": "Understanding what are the major features introduced in modern c++"
  },
  {
    "id": 5,
    "category": "C++ Fundamentals",
    "title": "What is the difference between compiler, linker, and loader?",
    "explanation": "The journey of C++ source code to an executable program involves three distinct stages handled by the compiler, linker, and loader.\n\n1. **Compiler**: Takes human-readable source code (`.cpp` files) and translates it into machine code, producing an Object File (`.o` or `.obj`). It checks for syntax errors and type safety.\n2. **Linker**: Takes one or more object files and links them together with external libraries. It resolves external symbols (e.g., matching a function call in File A to the function definition in File B) and produces the final Executable (`.exe` or `.out`).\n3. **Loader**: A part of the Operating System that loads the final executable into RAM, allocates memory, initializes registers, and starts execution at the `main()` function.",
    "code": "",
    "example": "Compiler makes the puzzle pieces. Linker connects the puzzle pieces together. Loader puts the finished puzzle on the table to be viewed.",
    "tip": "If you get a 'Syntax Error', it's the compiler. If you get an 'Unresolved External Symbol' error, it's the linker!",
    "summary": "Understanding what is the difference between compiler, linker, and loader"
  },
  {
    "id": 6,
    "category": "C++ Fundamentals",
    "title": "What is the difference between declaration and definition?",
    "explanation": "The distinction between declaration and definition is crucial in C++ due to the separation of headers and source files.\n\n- **Declaration**: Introduces an identifier (name) and its type to the compiler, but does not allocate memory or provide the actual implementation. It tells the compiler \"this exists somewhere.\"\n- **Definition**: Provides the actual implementation or allocates memory for the identifier. Every definition is also a declaration, but not vice versa.\n\n**One Definition Rule (ODR)**: You can declare a variable or function as many times as you want, but it must be defined exactly once.",
    "code": "// Declaration (usually in .h file)\nextern int myVariable;\nint add(int a, int b);\n\n// Definition (usually in .cpp file)\nint myVariable = 100;\nint add(int a, int b) {\n    return a + b;\n}",
    "example": "",
    "tip": "Think of a declaration as a promise that something exists. The definition is fulfilling that promise.",
    "summary": "Understanding what is the difference between declaration and definition"
  },
  {
    "id": 7,
    "category": "C++ Fundamentals",
    "title": "What is a header file?",
    "explanation": "A header file (typically with a `.h` or `.hpp` extension) is a file used to declare functions, classes, macros, and external variables. \n\nInstead of rewriting the same declarations in multiple source (`.cpp`) files, developers place them in a header file. Other source files can then include this header using the `#include` directive. This promotes code reusability, modularity, and keeps compilation times lower by separating interface from implementation.",
    "code": "// Math.h (Header)\n#pragma once\nint multiply(int a, int b);\n\n// Math.cpp (Source)\n#include \"Math.h\"\nint multiply(int a, int b) {\n    return a * b;\n}",
    "example": "The `<iostream>` header contains the declarations for `std::cout` and `std::cin`. You include it so your program knows how to use them.",
    "tip": "Always mention `#pragma once` or include guards (`#ifndef`) when talking about headers to show you know how to prevent multiple-inclusion errors.",
    "summary": "Understanding what is a header file"
  },
  {
    "id": 8,
    "category": "C++ Fundamentals",
    "title": "What is the purpose of #include?",
    "explanation": "The `#include` directive is a preprocessor command that tells the compiler to take the entire contents of a specified header file and literally paste it into the current file before actual compilation begins.\n\nThere are two syntaxes:\n1. `#include <filename>`: Used for standard library headers. The compiler searches in system directories.\n2. `#include \"filename\"`: Used for user-defined headers. The compiler searches in the current local directory first.",
    "code": "#include <iostream>   // System header\n#include \"MyClass.h\" // Local project header",
    "example": "",
    "tip": "Remember that `#include` literally copy-pastes text. This is why circular includes (A includes B, B includes A) cause massive compiler crashes if include guards aren't used.",
    "summary": "Understanding what is the purpose of #include"
  },
  {
    "id": 9,
    "category": "C++ Fundamentals",
    "title": "What are preprocessor directives?",
    "explanation": "Preprocessor directives are instructions executed by the preprocessor *before* the actual compilation of the code begins. They are not C++ statements, so they do not end with a semicolon `;`.\n\nThey always begin with a hash symbol `#`.\n\nCommon Directives:\n- `#include`: Inserts the contents of another file.\n- `#define`: Creates a macro or constant text replacement.\n- `#ifdef` / `#ifndef` / `#endif`: Conditional compilation (often used for include guards).\n- `#pragma`: Issues compiler-specific commands (like `#pragma once`).",
    "code": "#define PI 3.14159\n\n#ifndef MY_HEADER_H\n#define MY_HEADER_H\n// Header contents here to prevent double inclusion\n#endif",
    "example": "",
    "tip": "The preprocessor only does blind text manipulation. It knows nothing about C++ syntax, types, or scope.",
    "summary": "Understanding what are preprocessor directives"
  },
  {
    "id": 10,
    "category": "C++ Fundamentals",
    "title": "What is the difference between #define and const?",
    "explanation": "Both `#define` and `const` can be used to create constants, but they work entirely differently under the hood. `const` is vastly superior in C++.\n\n- **#define**: A preprocessor macro. It blindly does a literal text find-and-replace before compilation. It has no concept of scope, type checking, or memory address.\n- **const**: A language keyword handled by the compiler. It defines a strongly-typed, read-only variable. It respects scope (like class or namespace boundaries) and has a memory address, making it visible to debuggers.",
    "code": "#define MAX_ENEMIES 100 // Preprocessor text replacement\n\nconst int MaxEnemies = 100; // Strongly typed compiler constant",
    "example": "",
    "tip": "In modern C++, `#define` should almost never be used for constants. Always use `const` or `constexpr` for type safety.",
    "summary": "Understanding what is the difference between #define and const"
  },
  {
    "id": 11,
    "category": "C++ Fundamentals",
    "title": "What are namespaces in C++?",
    "explanation": "A namespace is a declarative region that provides a scope for the identifiers (names of types, functions, variables) inside it. Namespaces are used to organize code into logical groups and, most importantly, to prevent **name collisions**.\n\nFor example, if two different libraries both define a function called `print()`, the compiler wouldn't know which one to use. By wrapping them in different namespaces (e.g., `LibA::print()` and `LibB::print()`), the ambiguity is resolved.",
    "code": "namespace Physics {\n    float gravity = 9.8f;\n}\n\nnamespace Graphics {\n    float gravity = 0.0f; // No conflict!\n}\n\nint main() {\n    std::cout << Physics::gravity;\n}",
    "example": "",
    "tip": "The Standard Template Library (STL) places all of its classes and functions (like `cout`, `vector`, `string`) inside the `std` namespace to avoid clashing with your code.",
    "summary": "Understanding what are namespaces in c++"
  },
  {
    "id": 12,
    "category": "C++ Fundamentals",
    "title": "What is the purpose of using namespace std?",
    "explanation": "`using namespace std;` is a directive that pulls all the identifiers from the `std` (standard) namespace into the current global scope. \n\n**Purpose**: It saves typing. Instead of writing `std::cout` and `std::vector`, you can simply write `cout` and `vector`.\n\n**The Danger**: It is widely considered a bad practice, especially in header files, because it completely defeats the purpose of namespaces. It floods the global scope with hundreds of standard library names, significantly increasing the risk of name collisions (e.g., if you name a variable `count`, it will collide with `std::count`).",
    "code": "// Bad Practice\nusing namespace std;\ncout << \"Hello\";\n\n// Good Practice\nstd::cout << \"Hello\";",
    "example": "",
    "tip": "If an interviewer asks if you use `using namespace std;`, say 'No, I prefer explicitly typing `std::` to avoid namespace pollution and name collisions.'",
    "summary": "Understanding what is the purpose of using namespace std"
  },
  {
    "id": 13,
    "category": "C++ Fundamentals",
    "title": "What are primitive data types in C++?",
    "explanation": "Primitive data types are the fundamental building blocks built directly into the C++ language.\n\nKey Categories:\n1. **Integer Types**: `int`, `short`, `long`, `long long`. Can be `signed` (default) or `unsigned` (positive only).\n2. **Floating-Point Types**: `float` (single precision), `double` (double precision).\n3. **Character Types**: `char` (1 byte, holds an ASCII character), `wchar_t`.\n4. **Boolean**: `bool` (holds `true` or `false`).\n5. **Void**: `void` (represents the absence of type, used for functions that return nothing).",
    "code": "int age = 25;\nunsigned int distance = 1000;\nfloat price = 19.99f;\nbool isValid = true;\nchar grade = 'A';",
    "example": "",
    "tip": "The exact size in bytes of primitive types is not strictly defined by C++ (except `char` which is always 1 byte). It depends on the compiler and system architecture (32-bit vs 64-bit).",
    "summary": "Understanding what are primitive data types in c++"
  },
  {
    "id": 14,
    "category": "C++ Fundamentals",
    "title": "What is type casting in C++?",
    "explanation": "Type casting is the process of converting a variable from one data type into another.\n\nIn C++, casting is critical when doing math with mixed types, converting pointers, or working with class hierarchies.\n\nC++ supports two styles of casting:\n1. **C-Style Casting**: `(int)myFloat`. Simple, but highly dangerous because it forces the cast without any safety checks.\n2. **C++ Style Casting**: Uses specific cast operators (`static_cast`, `dynamic_cast`, `const_cast`, `reinterpret_cast`) to provide compile-time and runtime safety checks.",
    "code": "double pi = 3.14159;\n\n// C-Style cast (Avoid)\nint approx1 = (int)pi;\n\n// C++ Style cast (Preferred)\nint approx2 = static_cast<int>(pi);",
    "example": "",
    "tip": "Always mention that C++ style casts are safer because they declare the programmer's exact intent and allow the compiler to enforce strict rules.",
    "summary": "Understanding what is type casting in c++"
  },
  {
    "id": 15,
    "category": "C++ Fundamentals",
    "title": "What is implicit vs explicit type conversion?",
    "explanation": "Conversions in C++ can happen automatically or manually.\n\n- **Implicit Conversion (Coercion)**: Happens automatically by the compiler when you mix types. The compiler \"promotes\" the smaller type to the larger type to prevent data loss. For example, assigning an `int` to a `double`.\n- **Explicit Conversion (Casting)**: The programmer manually forces the conversion using a cast operator. This is required when converting a larger type to a smaller type (which could result in data loss) to tell the compiler \"I know what I'm doing.\"",
    "code": "// Implicit\nint x = 10;\ndouble y = x; // Compiler automatically converts int to double\n\n// Explicit\ndouble a = 9.99;\nint b = static_cast<int>(a); // Truncates to 9, requires explicit cast",
    "example": "",
    "tip": "Constructors that take a single argument can cause unintended implicit conversions. Using the `explicit` keyword on a constructor prevents this.",
    "summary": "Understanding what is implicit vs explicit type conversion"
  },
  {
    "id": 16,
    "category": "C++ Fundamentals",
    "title": "What is the difference between static_cast, dynamic_cast, const_cast, and reinterpret_cast?",
    "explanation": "C++ provides four specific cast operators, each serving a unique, strict purpose:\n\n1. **`static_cast`**: The most common. Used for standard, well-defined conversions (e.g., `float` to `int`, or upcasting pointers in an inheritance hierarchy). Checked at compile-time.\n2. **`dynamic_cast`**: Used exclusively for handling polymorphism (downcasting a base pointer to a derived pointer). It performs a runtime check. If the cast is invalid, it returns `nullptr`.\n3. **`const_cast`**: Used strictly to add or remove the `const` qualifier from a variable. Dangerous if used to modify data that was originally declared constant.\n4. **`reinterpret_cast`**: The most dangerous. Performs a raw, bitwise reinterpretation of memory. Used for low-level casting between completely unrelated types (e.g., casting a pointer to an integer).",
    "code": "Base* b = new Derived();\n\n// dynamic_cast safely checks at runtime if b is actually a Derived\nDerived* d = dynamic_cast<Derived*>(b); \nif (d != nullptr) {\n    d->derivedFunction();\n}",
    "example": "",
    "tip": "This is a very common interview question. Memorize the exact use-case for each. `static` for normal stuff, `dynamic` for polymorphism, `const` for constness, `reinterpret` for low-level memory hacks.",
    "summary": "Understanding what is the difference between static_cast, dynamic_cast, const_cast, and reinterpret_cast"
  },
  {
    "id": 17,
    "category": "C++ Fundamentals",
    "title": "What is an lvalue and rvalue?",
    "explanation": "In C++, expressions are categorized as lvalues or rvalues, which dictate how they reside in memory.\n\n- **lvalue (Locator Value)**: An object that occupies an identifiable location in memory (it has a memory address). It usually has a name and persists beyond a single expression. It can appear on the Left side of an assignment `=`.\n- **rvalue (Read Value)**: A temporary object or literal value that does not have an identifiable memory address. It exists only temporarily during the execution of an expression. It can only appear on the Right side of an assignment.",
    "code": "int x = 10;\n// 'x' is an lvalue (it has a memory address)\n// '10' is an rvalue (it is a temporary literal)\n\nint y = x + 5;\n// 'y' is an lvalue\n// 'x + 5' evaluates to an rvalue (a temporary result of 15)",
    "example": "",
    "tip": "If you can safely take its memory address using `&`, it's an lvalue.",
    "summary": "Understanding what is an lvalue and rvalue"
  },
  {
    "id": 18,
    "category": "C++ Fundamentals",
    "title": "What is an rvalue reference?",
    "explanation": "Introduced in C++11, an rvalue reference (denoted by `&&`) is a reference that binds specifically to a temporary object (an rvalue) that is about to be destroyed.\n\n**Why is this important?** \nBefore C++11, when objects were returned from functions, they were copied (which is slow). Rvalue references allow the compiler to identify temporary objects, allowing developers to \"steal\" their memory resources instead of copying them. This is the foundation of **Move Semantics**, which drastically increased C++ performance.",
    "code": "int&& rRef = 20; // Binds to the temporary rvalue 20\n\n// Used in Move Constructors:\nMyClass(MyClass&& other) {\n    this->data = other.data; // Steal the pointer\n    other.data = nullptr;    // Leave the temporary in a valid empty state\n}",
    "example": "",
    "tip": "Rvalue references (`&&`) are the key to Move Semantics and `std::move()`.",
    "summary": "Understanding what is an rvalue reference"
  },
  {
    "id": 19,
    "category": "C++ Fundamentals",
    "title": "What is nullptr?",
    "explanation": "`nullptr` is a keyword introduced in C++11 representing a null pointer literal. \n\nIt is of a specialized type `std::nullptr_t`. It was introduced to provide a strongly-typed, completely unambiguous representation of a pointer that points to \"nothing\". Because it is explicitly a pointer type, it cannot be accidentally confused with an integer, solving a massive flaw with the old `NULL` macro.",
    "code": "int* ptr = nullptr;\n\nif (ptr == nullptr) {\n    std::cout << \"Pointer is empty\";\n}",
    "example": "",
    "tip": "Always use `nullptr` in modern C++. Never use `NULL` or `0`.",
    "summary": "Understanding what is nullptr"
  },
  {
    "id": 20,
    "category": "C++ Fundamentals",
    "title": "What is the difference between NULL, 0, and nullptr?",
    "explanation": "Historically, C++ relied on `NULL` or `0` to represent empty pointers, but this caused severe issues with function overloading.\n\n- **0**: An integer literal. \n- **NULL**: A preprocessor macro typically defined as `0`.\n- **nullptr**: A literal of type `std::nullptr_t`.\n\n**The Problem**: If you have two overloaded functions: `void foo(int)` and `void foo(char*)`, calling `foo(NULL)` will actually call the `int` version because the compiler sees `NULL` as the integer `0`. Calling `foo(nullptr)` correctly routes to the pointer version.",
    "code": "void process(int x) { cout << \"Integer version\"; }\nvoid process(int* p) { cout << \"Pointer version\"; }\n\nprocess(0);       // Calls Integer version\nprocess(NULL);    // Calls Integer version (DANGEROUS!)\nprocess(nullptr); // Calls Pointer version (SAFE!)",
    "example": "",
    "tip": "Explaining the function overload bug is the best way to prove you understand exactly why `nullptr` was added to the language.",
    "summary": "Understanding what is the difference between null, 0, and nullptr"
  },
  {
    "id": 21,
    "category": "OOP Concepts",
    "title": "What are the four pillars of OOP?",
    "explanation": "Object-Oriented Programming (OOP) in C++ is built upon four fundamental pillars:\n\n1. **Encapsulation**: Bundling data (variables) and methods (functions) that operate on that data into a single unit (a class), and restricting outside access using access modifiers.\n2. **Abstraction**: Hiding complex implementation details from the user and exposing only the essential features (often achieved via abstract classes or interfaces).\n3. **Inheritance**: Allowing a new class (derived class) to inherit properties and behaviors from an existing class (base class), promoting code reusability.\n4. **Polymorphism**: The ability of different objects to respond in their own unique way to the same function call (achieved via function overloading, templates, or virtual functions).",
    "code": "",
    "example": "",
    "tip": "Memorize these four. You will almost certainly be asked to name them and briefly define them in any entry-level C++ interview.",
    "summary": "Understanding what are the four pillars of oop"
  },
  {
    "id": 22,
    "category": "OOP Concepts",
    "title": "What is a class?",
    "explanation": "A class is a user-defined blueprint or template for creating objects. It defines the structure (data members) and behaviors (member functions) that an object of that class will possess.\n\nIn C++, a class is completely conceptual; it does not occupy any memory space for its data until an object of that class is actually instantiated.",
    "code": "class Car {\npublic:\n    std::string brand;\n    void honk() {\n        std::cout << \"Beep!\\n\";\n    }\n};",
    "example": "A class is like the architectural blueprint for a house. You cannot live in the blueprint, but it dictates exactly how the house is built.",
    "tip": "",
    "summary": "Understanding what is a class"
  },
  {
    "id": 23,
    "category": "OOP Concepts",
    "title": "What is an object?",
    "explanation": "An object is a tangible, physical instance of a class. When a class is defined, no memory is allocated. When an object is instantiated, memory is allocated to hold its specific data state.\n\nAn object holds actual values for the properties defined in the class and can execute the functions defined by the class.",
    "code": "Car myCar; // 'myCar' is an object of the 'Car' class\nmyCar.brand = \"Toyota\";\nmyCar.honk();",
    "example": "If 'Car' is the blueprint, an object is a specific physical car sitting in your driveway, like a red Toyota Corolla.",
    "tip": "",
    "summary": "Understanding what is an object"
  },
  {
    "id": 24,
    "category": "OOP Concepts",
    "title": "Class vs object?",
    "explanation": "The difference between a class and an object is fundamental to OOP:\n\n- **Class**: A logical blueprint, template, or design. It declares what attributes and methods exist. It does not occupy data memory.\n- **Object**: A physical instance created from that blueprint. It has state (actual data values) and behavior. It occupies physical memory.",
    "code": "",
    "example": "Class = Cookie Cutter. Object = The actual cookies you bake and eat.",
    "tip": "",
    "summary": "Understanding class vs object"
  },
  {
    "id": 25,
    "category": "OOP Concepts",
    "title": "What is encapsulation?",
    "explanation": "Encapsulation is the practice of wrapping data (variables) and the methods (functions) that manipulate that data into a single unit (a class), while simultaneously restricting direct access to some of that object's components.\n\nIn C++, this is enforced using access specifiers (`private`, `protected`). Data is typically made `private`, and access to it is strictly controlled via public getter and setter methods. This protects the internal state of the object from unintended corruption by external code.",
    "code": "class BankAccount {\nprivate:\n    double balance; // Hidden from outside world\n\npublic:\n    void deposit(double amount) {\n        if (amount > 0) balance += amount; // Controlled access\n    }\n};",
    "example": "A capsule of medicine encapsulates the chemicals inside. You swallow the capsule (the public interface) without interacting directly with the raw chemicals (private data).",
    "tip": "Encapsulation is about **Information Hiding** and protecting internal state.",
    "summary": "Understanding what is encapsulation"
  },
  {
    "id": 26,
    "category": "OOP Concepts",
    "title": "What is abstraction?",
    "explanation": "Abstraction is the process of hiding the complex background implementation details and showing only the essential features to the user.\n\nIn C++, abstraction is primarily achieved through **Abstract Classes** (classes with at least one pure virtual function) and **Interfaces**. It allows programmers to focus on *what* an object does instead of *how* it does it. This greatly reduces system complexity.",
    "code": "class CoffeeMachine { // Abstract concept\npublic:\n    virtual void brew() = 0; // Pure virtual function\n};\n\nclass EspressoMachine : public CoffeeMachine {\npublic:\n    void brew() override { /* Complex logic hidden here */ }\n};",
    "example": "When you drive a car, you abstract away the combustion engine. You just press the gas pedal (the interface) without needing to know how the fuel injection works.",
    "tip": "Abstraction hides complexity. Encapsulation hides state data.",
    "summary": "Understanding what is abstraction"
  },
  {
    "id": 27,
    "category": "OOP Concepts",
    "title": "What is inheritance?",
    "explanation": "Inheritance is a mechanism that allows a new class (the Derived Class or Child Class) to inherit the properties and behaviors (methods) of an existing class (the Base Class or Parent Class).\n\nInheritance models an \"IS-A\" relationship. It promotes code reusability by allowing the child class to reuse the code written in the parent class, while optionally adding new features or overriding existing behaviors.",
    "code": "class Animal { // Base Class\npublic:\n    void eat() { cout << \"Eating...\"; }\n};\n\nclass Dog : public Animal { // Derived Class\npublic:\n    void bark() { cout << \"Barking...\"; }\n};",
    "example": "A `Dog` inherits from `Animal`. Therefore, a `Dog` can automatically `eat()`, but it also introduces its own unique behavior: `bark()`.",
    "tip": "Always specify the access modifier when inheriting (e.g., `class Dog : public Animal`). If you omit it, it defaults to `private` inheritance for classes!",
    "summary": "Understanding what is inheritance"
  },
  {
    "id": 28,
    "category": "OOP Concepts",
    "title": "What is polymorphism?",
    "explanation": "Polymorphism means \"many forms.\" In C++, it is the ability of a single interface, function, or operator to behave differently depending on the context or the type of object it is acting upon.\n\nThere are two main types of polymorphism in C++:\n1. **Compile-time (Static) Polymorphism**: Achieved via Function Overloading, Operator Overloading, and Templates. The behavior is resolved by the compiler during compilation.\n2. **Runtime (Dynamic) Polymorphism**: Achieved via Inheritance and Virtual Functions. The behavior is resolved during execution based on the actual object type in memory.",
    "code": "",
    "example": "A `draw()` function. If called on a `Circle` object, it draws a circle. If called on a `Square` object, it draws a square. Same function name, different behavior.",
    "tip": "",
    "summary": "Understanding what is polymorphism"
  },
  {
    "id": 29,
    "category": "OOP Concepts",
    "title": "What is compile-time polymorphism?",
    "explanation": "Compile-time polymorphism (also called Static Binding or Early Binding) occurs when the compiler determines exactly which function to execute during the compilation phase.\n\nIt is incredibly fast because there is no overhead at runtime. The compiler resolves the function call by looking at the number and types of arguments passed.\n\nIt is achieved using:\n- **Function Overloading**\n- **Operator Overloading**\n- **Templates**",
    "code": "class Math {\npublic:\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n};\n\n// Compiler knows exactly which one to call at compile time.",
    "example": "",
    "tip": "",
    "summary": "Understanding what is compile-time polymorphism"
  },
  {
    "id": 30,
    "category": "OOP Concepts",
    "title": "What is runtime polymorphism?",
    "explanation": "Runtime polymorphism (also called Dynamic Binding or Late Binding) occurs when the exact function to execute is determined at runtime, rather than during compilation.\n\nIt is achieved using **Inheritance** and **Virtual Functions**. When a base class pointer points to a derived class object, calling a virtual function on that pointer will execute the derived class's version of the function. This is resolved dynamically using a Virtual Table (vtable).",
    "code": "class Base {\npublic: \n    virtual void show() { cout << \"Base\"; }\n};\nclass Derived : public Base {\npublic: \n    void show() override { cout << \"Derived\"; }\n};\n\nBase* b = new Derived();\nb->show(); // Prints \"Derived\". Resolved at runtime!",
    "example": "",
    "tip": "Runtime polymorphism always requires pointers or references to base classes!",
    "summary": "Understanding what is runtime polymorphism"
  },
  {
    "id": 31,
    "category": "OOP Concepts",
    "title": "What is function overloading?",
    "explanation": "Function overloading is a feature that allows you to define multiple functions with the exact same name in the same scope, provided they have different parameter lists (different number of parameters, different types of parameters, or both).\n\nThe compiler differentiates them based on their signature. Note that changing only the **return type** is NOT sufficient to overload a function.",
    "code": "void print(int i) { cout << \"Printing int: \" << i; }\nvoid print(double f) { cout << \"Printing float: \" << f; }\nvoid print(string s) { cout << \"Printing string: \" << s; }",
    "example": "",
    "tip": "Function overloading is an example of Compile-Time Polymorphism.",
    "summary": "Understanding what is function overloading"
  },
  {
    "id": 32,
    "category": "OOP Concepts",
    "title": "What is function overriding?",
    "explanation": "Function overriding occurs when a Derived Class provides a completely new implementation for a function that is already defined in its Base Class.\n\nFor overriding to work correctly with runtime polymorphism, the base class function must be marked as `virtual`, and the derived class function must match the base class function's signature exactly (same name, same parameters, same return type).",
    "code": "class Animal {\npublic:\n    virtual void speak() { cout << \"Animal Sound\"; }\n};\nclass Cat : public Animal {\npublic:\n    void speak() override { cout << \"Meow\"; } // Overriding the base function\n};",
    "example": "",
    "tip": "Always use the `override` keyword in modern C++. It forces the compiler to verify that you are actually overriding a base class virtual function.",
    "summary": "Understanding what is function overriding"
  },
  {
    "id": 33,
    "category": "OOP Concepts",
    "title": "What is operator overloading?",
    "explanation": "Operator overloading allows you to redefine or provide custom behaviors for standard C++ operators (like `+`, `-`, `==`, `<<`) when they are applied to user-defined data types (classes).\n\nFor example, if you create a `Vector2D` class, you can overload the `+` operator so that `v1 + v2` magically adds the X and Y coordinates together, making your code incredibly readable.",
    "code": "class Vector2D {\npublic:\n    int x, y;\n    Vector2D operator+(const Vector2D& other) {\n        return {x + other.x, y + other.y};\n    }\n};",
    "example": "",
    "tip": "You cannot overload operators for primitive types (like changing how `int + int` works), nor can you create completely new operator symbols.",
    "summary": "Understanding what is operator overloading"
  },
  {
    "id": 34,
    "category": "OOP Concepts",
    "title": "What is the difference between overloading and overriding?",
    "explanation": "Overloading and Overriding are two completely different concepts that sound similar:\n\n- **Overloading**: Happens in the *same class/scope*. Functions have the *same name* but *different parameters*. It is resolved at *compile-time* (Static Polymorphism).\n- **Overriding**: Happens between *base and derived classes*. Functions have the *same name* AND the *same parameters*. The base function must be `virtual`. It is resolved at *run-time* (Dynamic Polymorphism).",
    "code": "",
    "example": "",
    "tip": "Overloading = Same name, different arguments. Overriding = Same name, same arguments, replacing parent behavior.",
    "summary": "Understanding what is the difference between overloading and overriding"
  },
  {
    "id": 35,
    "category": "OOP Concepts",
    "title": "What are access specifiers in C++?",
    "explanation": "Access specifiers dictate the visibility and accessibility of a class's members (variables and functions).\n\nC++ provides three primary access specifiers:\n1. **`public`**: Members are accessible from anywhere outside the class.\n2. **`private`**: Members are accessible ONLY from within the class itself (and by `friend` functions/classes). This is the default for `class`.\n3. **`protected`**: Members are accessible from within the class AND from derived classes, but NOT from outside.",
    "code": "",
    "example": "",
    "tip": "In a `class`, members are `private` by default. In a `struct`, members are `public` by default.",
    "summary": "Understanding what are access specifiers in c++"
  },
  {
    "id": 36,
    "category": "OOP Concepts",
    "title": "What is the difference between public, private, and protected?",
    "explanation": "Understanding the precise difference between the three access specifiers is crucial for class design and inheritance:\n\n- **Public**: The interface of the class. Anyone can call public functions or modify public variables. Use for getters/setters and behaviors.\n- **Private**: The internal state. Fully hidden from the outside world AND hidden from child classes. Use for sensitive data that should never be altered directly.\n- **Protected**: A middle ground. Hidden from the outside world, but fully accessible to child classes that inherit from this class. Use for base-class utilities that only children need.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is the difference between public, private, and protected"
  },
  {
    "id": 37,
    "category": "OOP Concepts",
    "title": "What is a constructor?",
    "explanation": "A constructor is a special member function that is automatically called by the compiler at the exact moment an object is instantiated (created in memory).\n\nIts primary purpose is to initialize the object's data members to valid starting states and allocate any dynamic memory the object requires.\n\nRules:\n- It must have the exact same name as the class.\n- It has no return type (not even `void`).\n- It is usually marked `public`.",
    "code": "class Player {\npublic:\n    int health;\n    // Constructor\n    Player() {\n        health = 100; \n        cout << \"Player created!\";\n    }\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a constructor"
  },
  {
    "id": 38,
    "category": "OOP Concepts",
    "title": "What are the different types of constructors?",
    "explanation": "C++ supports several types of constructors:\n\n1. **Default Constructor**: Takes no arguments. Automatically provided by the compiler if no other constructors are defined.\n2. **Parameterized Constructor**: Takes arguments to initialize the object with specific values.\n3. **Copy Constructor**: Initializes a new object as an exact copy of an existing object (`MyClass obj2 = obj1;`).\n4. **Move Constructor (C++11)**: Steals resources from a temporary (rvalue) object instead of copying them.",
    "code": "class Box {\npublic:\n    Box() {} // Default\n    Box(int size) {} // Parameterized\n    Box(const Box& other) {} // Copy\n    Box(Box&& other) noexcept {} // Move\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what are the different types of constructors"
  },
  {
    "id": 39,
    "category": "OOP Concepts",
    "title": "What is a destructor?",
    "explanation": "A destructor is a special member function that is automatically called by the compiler when an object is destroyed (when it goes out of scope, or when `delete` is called on its pointer).\n\nIts primary purpose is to clean up resources: freeing dynamically allocated memory, closing file handles, and releasing network sockets.\n\nRules:\n- It has the exact same name as the class, prefixed with a tilde `~`.\n- It takes no arguments.\n- It has no return type.\n- A class can have only exactly one destructor.",
    "code": "class FileHandler {\npublic:\n    ~FileHandler() {\n        // Code to close the file handle safely\n        cout << \"File closed and object destroyed.\";\n    }\n};",
    "example": "",
    "tip": "If your class allocates memory using `new`, you MUST write a custom destructor using `delete` to prevent memory leaks (or just use Smart Pointers).",
    "summary": "Understanding what is a destructor"
  },
  {
    "id": 40,
    "category": "OOP Concepts",
    "title": "Can a constructor be virtual?",
    "explanation": "No, a constructor CANNOT be virtual in C++.\n\n**Reason**: Virtual functions are resolved dynamically at runtime using a Virtual Table (vtable). However, the vtable pointer (vptr) for an object is actually set up *during* the execution of the constructor. Therefore, at the time a constructor is executing, the object is not fully formed and the vtable mechanism doesn't exist for it yet. Furthermore, to instantiate an object, you must know its exact physical type at compile time; dynamic dispatch makes no sense when creating memory.",
    "code": "",
    "example": "If you need polymorphic creation, you use the **Factory Design Pattern** or a virtual `clone()` method.",
    "tip": "This is a classic trap question. The answer is always an emphatic NO.",
    "summary": "Understanding can a constructor be virtual"
  },
  {
    "id": 41,
    "category": "OOP Concepts",
    "title": "Can a destructor be virtual?",
    "explanation": "Yes, a destructor CAN and often MUST be virtual in C++.\n\n**Reason**: If you have a base class pointer that points to a derived class object, and you call `delete` on that base pointer, the compiler will look at the type of the pointer (Base) and only call the Base Destructor. The Derived Destructor is skipped, causing a massive memory leak for any resources the derived class held.\n\nMaking the base destructor `virtual` ensures the program routes through the Virtual Table, correctly calling the Derived destructor first, and then the Base destructor.",
    "code": "class Base {\npublic:\n    virtual ~Base() { cout << \"Base destroyed\"; } // MUST BE VIRTUAL\n};\n\nclass Derived : public Base {\npublic:\n    ~Derived() { cout << \"Derived destroyed\"; }\n};\n\nBase* b = new Derived();\ndelete b; // Safely calls Derived destructor, then Base destructor",
    "example": "",
    "tip": "Golden Rule: If a class is designed to be inherited from (it has even one virtual function), its destructor MUST be declared virtual.",
    "summary": "Understanding can a destructor be virtual"
  },
  {
    "id": 42,
    "category": "OOP Concepts",
    "title": "What is a copy constructor?",
    "explanation": "A copy constructor is a special constructor that initializes a newly created object as an exact copy of an existing object of the same class.\n\nIt is invoked automatically by the compiler in three scenarios:\n1. When an object is instantiated and initialized with another object (`MyClass a = b;` or `MyClass a(b);`).\n2. When an object is passed to a function by value.\n3. When an object is returned from a function by value.\n\nIf you do not define one, the compiler generates a default copy constructor that performs a **Shallow Copy**.",
    "code": "class StringWrapper {\npublic:\n    // Custom Copy Constructor\n    StringWrapper(const StringWrapper& other) {\n        // perform deep copy here\n    }\n};",
    "example": "",
    "tip": "The parameter for a copy constructor MUST be a reference (`const ClassName&`). If it were passed by value, calling the copy constructor would trigger a copy, causing an infinite loop!",
    "summary": "Understanding what is a copy constructor"
  },
  {
    "id": 43,
    "category": "OOP Concepts",
    "title": "What is a copy assignment operator?",
    "explanation": "A copy assignment operator (the overloaded `=` operator) is used to copy the values from one *already existing* object to another *already existing* object.\n\n**Difference from Copy Constructor**:\n- Copy Constructor: Creates a brand new object and initializes it.\n- Copy Assignment Operator: Replaces the data of an object that has already been constructed.\n\nLike the copy constructor, the compiler generates a default assignment operator that does a shallow copy. If your class manages dynamic memory, you must write a custom one to perform a Deep Copy and clean up the old memory.",
    "code": "MyClass a;      // Default constructor\nMyClass b;      // Default constructor\nb = a;          // Copy Assignment Operator!\n\nMyClass c = a;  // Copy Constructor! (c is being created)",
    "example": "",
    "tip": "Always check for self-assignment (`if (this == &other) return *this;`) inside a custom assignment operator to prevent deleting your own data.",
    "summary": "Understanding what is a copy assignment operator"
  },
  {
    "id": 44,
    "category": "OOP Concepts",
    "title": "What is constructor initialization list?",
    "explanation": "The constructor initialization list is a syntax used to initialize member variables before the body of the constructor even begins executing.\n\n**Why is it important?**\nIt is significantly more efficient than assigning values inside the constructor body. If you assign inside the body, the compiler first default-constructs the variables, and then you overwrite them. The initialization list constructs them directly with the final value.\n\nFurthermore, initialization lists are **mandatory** for initializing `const` members, reference members (`&`), or calling base class constructors.",
    "code": "class Entity {\nprivate:\n    int x, y;\n    const int id;\npublic:\n    // Initialization List\n    Entity(int startX, int startY, int entityId) : x(startX), y(startY), id(entityId) {\n        // Constructor body\n    }\n};",
    "example": "",
    "tip": "Always prefer initialization lists over body assignment for performance and safety.",
    "summary": "Understanding what is constructor initialization list"
  },
  {
    "id": 45,
    "category": "OOP Concepts",
    "title": "What is the this pointer?",
    "explanation": "The `this` pointer is a hidden constant pointer that exists inside all non-static member functions of a class. It holds the memory address of the specific object that invoked the function.\n\nIt is primarily used for:\n1. Resolving naming conflicts when a local variable has the same name as a member variable (`this->x = x;`).\n2. Returning a reference to the calling object (returning `*this`) to allow method chaining (e.g., `obj.doA().doB();`).",
    "code": "class Box {\nprivate:\n    int width;\npublic:\n    void setWidth(int width) {\n        this->width = width; // Resolves name shadowing\n    }\n    Box& grow() {\n        this->width++;\n        return *this; // Returns the object itself for chaining\n    }\n};",
    "example": "",
    "tip": "Static member functions do not have a `this` pointer because they belong to the class as a whole, not to any specific instantiated object.",
    "summary": "Understanding what is the this pointer"
  },
  {
    "id": 46,
    "category": "Inheritance & Polymorphism",
    "title": "What are the different types of inheritance in C++?",
    "explanation": "C++ supports five distinct types of inheritance:\n1. **Single Inheritance**: One derived class inherits from exactly one base class.\n2. **Multiple Inheritance**: One derived class inherits from two or more base classes simultaneously.\n3. **Multilevel Inheritance**: A class is derived from a class, which in turn is derived from another class (e.g., A -> B -> C).\n4. **Hierarchical Inheritance**: Multiple derived classes inherit from a single base class.\n5. **Hybrid Inheritance**: A combination of two or more of the above types (often involves Multiple and Hierarchical).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what are the different types of inheritance in c++"
  },
  {
    "id": 47,
    "category": "Inheritance & Polymorphism",
    "title": "What is single inheritance?",
    "explanation": "Single inheritance is the simplest form of inheritance where a derived class inherits properties and behaviors from one and only one base class.",
    "code": "class Animal { // Base\npublic:\n    void eat() {}\n};\nclass Dog : public Animal { // Derived from 1 base\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is single inheritance"
  },
  {
    "id": 48,
    "category": "Inheritance & Polymorphism",
    "title": "What is multiple inheritance?",
    "explanation": "Multiple inheritance is a feature of C++ where a derived class can inherit from more than one base class at the same time. While highly powerful, it can lead to complexity and ambiguity (like the Diamond Problem).\n\nOther languages like Java and C# intentionally omit this feature for classes (using interfaces instead) to avoid this complexity.",
    "code": "class Printer {};\nclass Scanner {};\nclass MultiFunctionDevice : public Printer, public Scanner {\n    // Inherits everything from both!\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is multiple inheritance"
  },
  {
    "id": 49,
    "category": "Inheritance & Polymorphism",
    "title": "What is multilevel inheritance?",
    "explanation": "Multilevel inheritance occurs when a derived class acts as the base class for another derived class. It forms a chain or lineage of inheritance.",
    "code": "class Animal {};          // Grandparent\nclass Mammal : public Animal {}; // Parent\nclass Dog : public Mammal {};    // Child",
    "example": "",
    "tip": "",
    "summary": "Understanding what is multilevel inheritance"
  },
  {
    "id": 50,
    "category": "Inheritance & Polymorphism",
    "title": "What is hierarchical inheritance?",
    "explanation": "Hierarchical inheritance occurs when multiple different derived classes inherit from the exact same single base class. It forms a tree structure.",
    "code": "class Shape {}; // Base\nclass Circle : public Shape {};\nclass Square : public Shape {};\nclass Triangle : public Shape {};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is hierarchical inheritance"
  },
  {
    "id": 51,
    "category": "Inheritance & Polymorphism",
    "title": "What is hybrid inheritance?",
    "explanation": "Hybrid inheritance is any combination of more than one type of inheritance. For example, combining hierarchical inheritance and multiple inheritance creates a diamond shape.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is hybrid inheritance"
  },
  {
    "id": 52,
    "category": "Inheritance & Polymorphism",
    "title": "What is the diamond problem?",
    "explanation": "The Diamond Problem is a severe ambiguity issue that arises in Multiple Inheritance when a class inherits from two classes that both share a common base class.\n\nImagine Class A. Class B and Class C both inherit from Class A. Class D inherits from both Class B and Class C.\nBecause both B and C inherited a copy of A's data, Class D will actually contain *two separate copies* of Class A. If you try to access a member of A from D, the compiler throws an error because it doesn't know *which* copy of A you are referring to.",
    "code": "class A { public: int value; };\nclass B : public A {};\nclass C : public A {};\nclass D : public B, public C {};\n\nD obj;\n// obj.value = 10; // AMBIGUITY ERROR! Does it use B's value or C's value?",
    "example": "",
    "tip": "Draw the diamond shape in the air or on a whiteboard if asked this question. It makes it instantly clear.",
    "summary": "Understanding what is the diamond problem"
  },
  {
    "id": 53,
    "category": "Inheritance & Polymorphism",
    "title": "How does virtual inheritance solve the diamond problem?",
    "explanation": "Virtual Inheritance is the C++ language feature used to solve the Diamond Problem.\n\nBy using the `virtual` keyword when Classes B and C inherit from Class A, you instruct the compiler to ensure that only **one shared instance** of Class A is inherited by any derived classes further down the chain. \n\nTherefore, Class D will only contain exactly one copy of Class A, completely resolving the ambiguity.",
    "code": "class A { public: int value; };\nclass B : virtual public A {}; // Virtual Inheritance!\nclass C : virtual public A {}; // Virtual Inheritance!\nclass D : public B, public C {};\n\nD obj;\nobj.value = 10; // Works perfectly. Only one 'value' exists.",
    "example": "",
    "tip": "",
    "summary": "Understanding how does virtual inheritance solve the diamond problem"
  },
  {
    "id": 54,
    "category": "Inheritance & Polymorphism",
    "title": "What is a virtual function?",
    "explanation": "A virtual function is a member function in a base class that you expect to be redefined (overridden) in derived classes. \n\nWhen you use a pointer or reference to a base class to call a virtual function, C++ dynamically determines which function to call at **runtime** based on the actual object type being pointed to (Dynamic Polymorphism), rather than the type of the pointer.",
    "code": "class Base { \npublic: \n    virtual void print() { cout << \"Base\"; } \n};\nclass Derived : public Base { \npublic: \n    void print() override { cout << \"Derived\"; } \n};\n\nBase* b = new Derived();\nb->print(); // Outputs \"Derived\" because it is virtual.",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a virtual function"
  },
  {
    "id": 55,
    "category": "Inheritance & Polymorphism",
    "title": "How does virtual function dispatch work?",
    "explanation": "Virtual function dispatch works through a hidden mechanism called the Virtual Table (vtable) and Virtual Pointer (vptr).\n\n1. When a class contains at least one virtual function, the compiler creates a hidden array of function pointers for that class, called the **vtable**.\n2. Every object instantiated from that class gets a hidden pointer injected into it, called the **vptr**, which points to that class's vtable.\n3. At runtime, when a virtual function is called on an object, the program follows the object's `vptr` to the `vtable`, looks up the correct memory address for the overridden function, and executes it. This lookup process is called Dynamic Dispatch.",
    "code": "",
    "example": "",
    "tip": "Always mention the slight performance overhead of virtual functions (the extra pointer dereference) when explaining this to show deep architectural understanding.",
    "summary": "Understanding how does virtual function dispatch work"
  },
  {
    "id": 56,
    "category": "Inheritance & Polymorphism",
    "title": "What is a pure virtual function?",
    "explanation": "A pure virtual function is a virtual function in a base class that has absolutely no implementation. It is declared by appending `= 0` to the function declaration.\n\nIts sole purpose is to force derived classes to provide their own implementation. It acts as a strict contract.",
    "code": "class Shape {\npublic:\n    // Pure Virtual Function\n    virtual void draw() = 0; \n};",
    "example": "",
    "tip": "Pure virtual functions are how C++ implements Interfaces.",
    "summary": "Understanding what is a pure virtual function"
  },
  {
    "id": 57,
    "category": "Inheritance & Polymorphism",
    "title": "What is an abstract class?",
    "explanation": "An abstract class is any class that contains at least one pure virtual function.\n\nBecause it has an incomplete function (`= 0`), it is impossible to instantiate an object of an abstract class. You can only use it as a base class to derive other classes. The derived classes MUST override and implement all pure virtual functions, or they will also become abstract classes.",
    "code": "class Animal { // Abstract Class\npublic:\n    virtual void speak() = 0; \n};\n\n// Animal a; // ERROR: Cannot instantiate abstract class",
    "example": "",
    "tip": "",
    "summary": "Understanding what is an abstract class"
  },
  {
    "id": 58,
    "category": "Inheritance & Polymorphism",
    "title": "Can an abstract class have a constructor?",
    "explanation": "Yes, an abstract class CAN and usually does have a constructor.\n\nEven though you cannot directly instantiate an abstract class (`Animal a;` is illegal), when you instantiate a derived class (`Dog d;`), the derived class's constructor must call its base class's constructor to initialize the base parts of the object. Therefore, abstract classes have constructors to initialize their own member variables.",
    "code": "class Animal {\nprotected:\n    int age;\npublic:\n    Animal(int a) : age(a) {} // Constructor for abstract class\n    virtual void speak() = 0;\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding can an abstract class have a constructor"
  },
  {
    "id": 59,
    "category": "Inheritance & Polymorphism",
    "title": "What is a virtual table (vtable)?",
    "explanation": "A Virtual Table (vtable) is a static, hidden array created by the compiler for any class that contains virtual functions.\n\nIt contains function pointers to the most-derived virtual functions for that specific class. There is exactly one vtable per class (not per object). It acts as a lookup table for dynamic dispatch.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a virtual table (vtable)"
  },
  {
    "id": 60,
    "category": "Inheritance & Polymorphism",
    "title": "What is a virtual pointer (vptr)?",
    "explanation": "A Virtual Pointer (vptr) is a hidden member pointer injected by the compiler into every instance (object) of a class that has virtual functions.\n\nWhen an object is created, its constructor automatically initializes the `vptr` to point to the correct Virtual Table (vtable) for its class. This increases the memory footprint of the object by exactly one pointer size (usually 8 bytes on a 64-bit system).",
    "code": "",
    "example": "",
    "tip": "Interviewers love asking 'How much memory does an empty class with one virtual function take?'. The answer is not 0 or 1 byte, it's the size of the vptr (usually 8 bytes).",
    "summary": "Understanding what is a virtual pointer (vptr)"
  },
  {
    "id": 61,
    "category": "Memory Management & Pointers",
    "title": "What is a pointer?",
    "explanation": "A pointer is a variable that stores the memory address of another variable, rather than storing a direct data value.\n\nPointers allow for dynamic memory allocation, efficient passing of massive data structures (without copying), and building complex data structures like linked lists and trees.",
    "code": "int num = 10;\nint* ptr = &num; // ptr stores the memory address of num\n\ncout << *ptr; // Dereferencing the pointer prints 10",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a pointer"
  },
  {
    "id": 62,
    "category": "Memory Management & Pointers",
    "title": "What is a reference?",
    "explanation": "A reference is an alias, or an alternative name, for an already existing variable. Once a reference is initialized to a variable, it cannot be changed to refer to another variable.\n\nReferences are safer and easier to use than pointers because they cannot be null, they don't require dereferencing syntax, and they guarantee they are pointing to valid memory.",
    "code": "int a = 5;\nint& ref = a; // ref is now an alias for a\n\nref = 10; // Changes 'a' to 10",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a reference"
  },
  {
    "id": 63,
    "category": "Memory Management & Pointers",
    "title": "Pointer vs reference?",
    "explanation": "Pointers and References both provide indirect access to memory, but they have major mechanical differences:\n\n1. **Reassignment**: Pointers can be reassigned to point to different memory. References are permanently bound upon initialization.\n2. **Nullability**: Pointers can be `nullptr`. References MUST be initialized immediately and cannot be null.\n3. **Syntax**: Pointers require `*` to dereference and `&` to take addresses. References are used exactly like normal variables.\n4. **Memory**: A pointer has its own memory address and size. A reference shares the exact same memory address as the variable it aliases.",
    "code": "",
    "example": "",
    "tip": "Rule of thumb: Always use References when you can, and use Pointers only when you must (like for dynamic memory or when null is a valid state).",
    "summary": "Understanding pointer vs reference"
  },
  {
    "id": 64,
    "category": "Memory Management & Pointers",
    "title": "What is a null pointer?",
    "explanation": "A null pointer is a pointer that is intentionally set to point to nothing (memory address 0).\n\nIt is used to indicate that the pointer is uninitialized, empty, or currently not pointing to any valid memory. In modern C++, this is represented by the `nullptr` keyword.",
    "code": "int* ptr = nullptr;\n// Accessing *ptr will cause a segmentation fault / crash!",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a null pointer"
  },
  {
    "id": 65,
    "category": "Memory Management & Pointers",
    "title": "What is a dangling pointer?",
    "explanation": "A dangling pointer is a pointer that points to a memory location that has already been deleted, freed, or has gone out of scope.\n\nDereferencing a dangling pointer leads to Undefined Behavior (usually a crash or silent memory corruption). It is one of the most dangerous bugs in C++.",
    "code": "int* ptr = new int(10);\ndelete ptr; // Memory is freed\n// ptr is now a DANGLING POINTER.\n\n*ptr = 20; // UNDEFINED BEHAVIOR! Memory corruption.",
    "example": "",
    "tip": "To prevent dangling pointers, always set a pointer to `nullptr` immediately after calling `delete`.",
    "summary": "Understanding what is a dangling pointer"
  },
  {
    "id": 66,
    "category": "Memory Management & Pointers",
    "title": "What is a wild pointer?",
    "explanation": "A wild pointer is a pointer that has been declared but has not been initialized to anything (not even `nullptr`).\n\nIt points to a completely random garbage memory address. Dereferencing it is incredibly dangerous and leads to immediate crashes.",
    "code": "int* ptr; // Wild pointer! Points to garbage memory.\n*ptr = 50; // CRITICAL CRASH!",
    "example": "",
    "tip": "Always initialize pointers, either to a valid address or to `nullptr`.",
    "summary": "Understanding what is a wild pointer"
  },
  {
    "id": 67,
    "category": "Memory Management & Pointers",
    "title": "What is a smart pointer?",
    "explanation": "A smart pointer is an object (acting as a wrapper around a raw pointer) that ensures automatic memory management. \n\nIntroduced in C++11 (`<memory>`), smart pointers utilize the RAII idiom to automatically call `delete` and free the memory they own when they go out of scope. This completely eliminates manual memory management and prevents memory leaks.",
    "code": "#include <memory>\n\nvoid func() {\n    // Automatically deleted when func() ends!\n    std::unique_ptr<int> ptr = std::make_unique<int>(100); \n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a smart pointer"
  },
  {
    "id": 68,
    "category": "Memory Management & Pointers",
    "title": "Why should smart pointers be preferred over raw pointers?",
    "explanation": "Raw pointers require manual memory management (`new` and `delete`). If a developer forgets to call `delete`, or if an exception is thrown before `delete` is reached, a memory leak occurs.\n\nSmart pointers handle memory automatically. When the smart pointer object is destroyed (goes out of scope), its destructor automatically frees the memory it manages. They provide exception safety and prevent dangling pointers, memory leaks, and double-free bugs.",
    "code": "",
    "example": "",
    "tip": "In modern C++ (C++11 and up), you should almost NEVER use raw `new` and `delete` in business logic.",
    "summary": "Understanding why should smart pointers be preferred over raw pointers"
  },
  {
    "id": 69,
    "category": "Memory Management & Pointers",
    "title": "What is unique_ptr?",
    "explanation": "`std::unique_ptr` is an exclusive-ownership smart pointer. \n\nIt guarantees that exactly one `unique_ptr` owns the memory at any given time. Because of this strict ownership, it **cannot be copied**. It can only be **moved** (using `std::move()`) to transfer ownership. It is extremely lightweight and has zero performance overhead compared to a raw pointer.",
    "code": "std::unique_ptr<int> p1 = std::make_unique<int>(10);\n// std::unique_ptr<int> p2 = p1; // ERROR: Cannot copy!\n\nstd::unique_ptr<int> p3 = std::move(p1); // Allowed! p1 is now null, p3 owns the data.",
    "example": "",
    "tip": "Always default to `unique_ptr`. Only use `shared_ptr` if you absolutely need shared ownership.",
    "summary": "Understanding what is unique_ptr"
  },
  {
    "id": 70,
    "category": "Memory Management & Pointers",
    "title": "What is shared_ptr?",
    "explanation": "`std::shared_ptr` is a shared-ownership smart pointer.\n\nMultiple `shared_ptr` instances can point to the exact same object in memory. It uses **Reference Counting** under the hood. Every time a new `shared_ptr` is created for the object, the count goes up. When a `shared_ptr` goes out of scope, the count goes down. When the count hits exactly 0, the memory is automatically deleted.",
    "code": "std::shared_ptr<int> p1 = std::make_shared<int>(100);\n{\n    std::shared_ptr<int> p2 = p1; // Count is now 2\n} // p2 goes out of scope. Count drops to 1.\n\n// When p1 goes out of scope, count drops to 0. Memory deleted!",
    "example": "",
    "tip": "Creating a `shared_ptr` using `std::make_shared` is highly recommended because it allocates the object and the reference counter block together, saving a memory allocation.",
    "summary": "Understanding what is shared_ptr"
  },
  {
    "id": 71,
    "category": "Memory Management & Pointers",
    "title": "What is weak_ptr?",
    "explanation": "`std::weak_ptr` is a non-owning smart pointer that observes an object managed by a `shared_ptr`. \n\nCrucially, it **does not increase the reference count**. It allows you to check if the memory still exists and access it if it does, but it will not prevent the `shared_ptr` from deleting the memory if the reference count drops to 0. It is primarily used to break circular references.",
    "code": "std::shared_ptr<int> sp = std::make_shared<int>(50);\nstd::weak_ptr<int> wp = sp; // Does not increase ref count\n\nif (std::shared_ptr<int> locked = wp.lock()) {\n    // Memory is still alive, safe to use 'locked'\n}",
    "example": "",
    "tip": "You cannot dereference a `weak_ptr` directly. You must promote it to a `shared_ptr` using `.lock()` first.",
    "summary": "Understanding what is weak_ptr"
  },
  {
    "id": 72,
    "category": "Memory Management & Pointers",
    "title": "unique_ptr vs shared_ptr?",
    "explanation": "- **unique_ptr**: Exclusive ownership. Cannot be copied, only moved. No performance overhead. Use when only one entity is responsible for the resource.\n- **shared_ptr**: Shared ownership. Can be copied freely. Has slight performance overhead due to managing the thread-safe Reference Control Block. Use when multiple entities need to keep an object alive.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding unique_ptr vs shared_ptr"
  },
  {
    "id": 73,
    "category": "Memory Management & Pointers",
    "title": "shared_ptr vs weak_ptr?",
    "explanation": "- **shared_ptr**: Owns the data. Increases the reference count. Keeps the memory alive.\n- **weak_ptr**: Observes the data. Does NOT increase the reference count. Does not keep the memory alive. Used specifically alongside `shared_ptr` to monitor it safely without causing memory leaks.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding shared_ptr vs weak_ptr"
  },
  {
    "id": 74,
    "category": "Memory Management & Pointers",
    "title": "What is reference counting?",
    "explanation": "Reference counting is a technique used by `std::shared_ptr` to manage memory. \n\nWhen memory is allocated, a hidden 'Control Block' is also allocated, containing an integer counter. Every time a `shared_ptr` copies that pointer, the counter increments. Every time a `shared_ptr` is destroyed, the counter decrements. If the counter reaches zero, it means no objects are using the memory anymore, and the memory is safely deleted.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is reference counting"
  },
  {
    "id": 75,
    "category": "Memory Management & Pointers",
    "title": "What is a circular reference?",
    "explanation": "A circular reference is a severe memory leak flaw that occurs when two `std::shared_ptr` objects point to each other.\n\nImagine Class A has a `shared_ptr` to Class B, and Class B has a `shared_ptr` to Class A. Because they both hold a reference to each other, their reference counts will never drop below 1, even if all external pointers are destroyed. Because the count never hits 0, the memory is permanently locked and leaks.",
    "code": "class Node {\npublic:\n    std::shared_ptr<Node> next;\n};\n\nauto nodeA = std::make_shared<Node>();\nauto nodeB = std::make_shared<Node>();\nnodeA->next = nodeB;\nnodeB->next = nodeA; // Circular reference! Memory leak!",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a circular reference"
  },
  {
    "id": 76,
    "category": "Memory Management & Pointers",
    "title": "How does weak_ptr help prevent circular references?",
    "explanation": "A `std::weak_ptr` solves circular references because it does not increment the reference count.\n\nIn the Class A and Class B scenario, you make one of the pointers a `weak_ptr`. Now, Class A strongly owns Class B, but Class B only weakly observes Class A. The reference count can now safely drop to 0, breaking the loop and allowing both objects to be correctly deleted.",
    "code": "class Node {\npublic:\n    std::weak_ptr<Node> next; // Changed to weak_ptr!\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding how does weak_ptr help prevent circular references"
  },
  {
    "id": 77,
    "category": "Memory Management & Pointers",
    "title": "What is dynamic memory allocation?",
    "explanation": "Dynamic memory allocation is the process of allocating memory at runtime on the **Heap**.\n\nUnlike local variables which are allocated on the Stack and deleted automatically, dynamic memory persists until the programmer explicitly deletes it. It is used when the amount of memory needed isn't known until runtime (like a user-defined array size), or when an object needs to outlive the function it was created in.",
    "code": "int* arr = new int[100]; // Allocated on the heap\ndelete[] arr; // Programmer is responsible for freeing it",
    "example": "",
    "tip": "",
    "summary": "Understanding what is dynamic memory allocation"
  },
  {
    "id": 78,
    "category": "Memory Management & Pointers",
    "title": "What is the difference between new and malloc()?",
    "explanation": "Both allocate memory on the heap, but `new` is a C++ operator while `malloc()` is a C library function.\n\n1. **Object Construction**: `new` allocates memory AND calls the class Constructor. `malloc()` only allocates raw bytes of memory; it does not call constructors.\n2. **Type Safety**: `new` returns a properly typed pointer (`int*`). `malloc()` returns a raw `void*` which must be manually cast.\n3. **Failure**: If memory is full, `new` throws an exception (`std::bad_alloc`). `malloc()` returns `NULL`.",
    "code": "// C++\nCar* c1 = new Car(); // Allocates memory AND calls Car()\n\n// C\nCar* c2 = (Car*)malloc(sizeof(Car)); // Allocates bytes ONLY.",
    "example": "",
    "tip": "Never use `malloc()` in C++ unless interfacing with legacy C APIs.",
    "summary": "Understanding what is the difference between new and malloc()"
  },
  {
    "id": 79,
    "category": "Memory Management & Pointers",
    "title": "What is the difference between delete and free()?",
    "explanation": "Just like `new` and `malloc()`, they are from different eras.\n\n- **`delete`**: A C++ operator. It automatically calls the object's Destructor to clean up resources, and then frees the memory.\n- **`free()`**: A C function. It blindly frees the memory block without calling any destructors.\n\nYou must never mix them. If you used `new`, you must use `delete`. If you used `malloc()`, you must use `free()`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is the difference between delete and free()"
  },
  {
    "id": 80,
    "category": "Memory Management & Pointers",
    "title": "What are memory leaks and how do you detect/prevent them?",
    "explanation": "A memory leak occurs when a program dynamically allocates memory on the heap but fails to free it back to the operating system before losing the pointer to that memory. The memory becomes permanently locked and inaccessible until the program closes.\n\n**Detection**: Use external tools like Valgrind or AddressSanitizer. In Visual Studio, use the CRT Debug Heap functions.\n**Prevention**: Always pair `new` with `delete`. Even better, exclusively use Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) which guarantee memory is freed automatically.",
    "code": "void badFunc() {\n    int* ptr = new int(10);\n    // Function ends, ptr goes out of scope, but memory isn't deleted.\n    // LEAK!\n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what are memory leaks and how do you detect/prevent them"
  },
  {
    "id": 81,
    "category": "Copy, Move & Resource Management",
    "title": "What is shallow copy?",
    "explanation": "A shallow copy duplicates an object's exact memory bit-by-bit. If the object contains pointers to dynamically allocated memory, the shallow copy only duplicates the pointer (the memory address), not the actual data it points to.\n\nAs a result, both the original object and the copied object will point to the exact same block of memory on the heap. If one object modifies the memory, it affects both. If one object is destroyed and deletes the memory, the other object is left with a Dangling Pointer, leading to a crash.",
    "code": "struct Shallow {\n    int* data;\n    Shallow(int d) { data = new int(d); }\n    // Default copy constructor does a shallow copy\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is shallow copy"
  },
  {
    "id": 82,
    "category": "Copy, Move & Resource Management",
    "title": "What is deep copy?",
    "explanation": "A deep copy duplicates both the object AND the dynamically allocated memory it points to. \n\nInstead of copying the pointer address, a deep copy allocates a brand new block of memory on the heap and copies the actual values into it. Therefore, the original object and the copied object possess their own independent memory blocks. Modifying or destroying one has no effect on the other.",
    "code": "struct Deep {\n    int* data;\n    Deep(int d) { data = new int(d); }\n    // Custom Copy Constructor\n    Deep(const Deep& other) {\n        data = new int(*other.data); // Allocates new memory!\n    }\n};",
    "example": "",
    "tip": "",
    "summary": "Understanding what is deep copy"
  },
  {
    "id": 83,
    "category": "Copy, Move & Resource Management",
    "title": "Shallow copy vs deep copy?",
    "explanation": "The core difference lies in how they handle pointers.\n- **Shallow Copy**: Copies the pointer. Both objects share the same memory. Faster, but dangerous if the memory is dynamically managed.\n- **Deep Copy**: Copies the data. Each object gets its own separate memory. Slower (due to allocation), but completely safe.",
    "code": "",
    "example": "",
    "tip": "If a class has raw pointers pointing to the heap, you MUST perform a deep copy.",
    "summary": "Understanding shallow copy vs deep copy"
  },
  {
    "id": 84,
    "category": "Copy, Move & Resource Management",
    "title": "What is the Rule of Three?",
    "explanation": "The Rule of Three is a famous C++ idiom. It states that if a class manages a resource (like dynamic memory, file handles, or network sockets) and requires a custom **Destructor** to clean it up, it almost certainly needs a custom **Copy Constructor** and a custom **Copy Assignment Operator** as well.\n\nIf you don't define all three, the compiler-generated shallow copies will lead to double-free bugs and memory leaks.",
    "code": "class Resource {\npublic:\n    ~Resource();                 // 1. Destructor\n    Resource(const Resource&);   // 2. Copy Constructor\n    Resource& operator=(const Resource&); // 3. Copy Assignment\n};",
    "example": "",
    "tip": "If you remember nothing else about C++ memory management, remember the Rule of Three.",
    "summary": "Understanding what is the rule of three"
  },
  {
    "id": 85,
    "category": "Copy, Move & Resource Management",
    "title": "What is the Rule of Five?",
    "explanation": "The Rule of Five is the C++11 extension of the Rule of Three. \n\nWith the introduction of Move Semantics in C++11, if your class manages resources, you should define all five special member functions to ensure your class is both safe (via copying) and highly optimized (via moving).\n1. Destructor\n2. Copy Constructor\n3. Copy Assignment Operator\n4. **Move Constructor**\n5. **Move Assignment Operator**",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is the rule of five"
  },
  {
    "id": 86,
    "category": "Copy, Move & Resource Management",
    "title": "What is the Rule of Zero?",
    "explanation": "The Rule of Zero is a modern C++ best practice. It states that you should design your classes so that they do not need any custom resource management functions at all.\n\nHow? By delegating resource management to classes that already follow the Rule of Five, such as `std::unique_ptr`, `std::vector`, or `std::string`. If your class only contains smart pointers and standard containers, the compiler-generated default copy/move/destructor functions will work perfectly and safely automatically.",
    "code": "// Follows the Rule of Zero!\nclass SafeClass {\nprivate:\n    std::vector<int> numbers;\n    std::unique_ptr<int> value;\n    // No custom ~destructor or copy constructors needed!\n};",
    "example": "",
    "tip": "Interviewers love the Rule of Zero because it shows you understand Modern C++ (C++11+) paradigms.",
    "summary": "Understanding what is the rule of zero"
  },
  {
    "id": 87,
    "category": "Copy, Move & Resource Management",
    "title": "What is move semantics?",
    "explanation": "Move semantics, introduced in C++11, is a technique to optimize performance by eliminating unnecessary deep copies.\n\nWhen passing or returning temporary objects (rvalues) that are about to be destroyed anyway, it is a massive waste of CPU cycles to perform a deep copy. Move semantics allows the new object to simply \"steal\" or \"hijack\" the internal pointers/resources from the temporary object, leaving the temporary object in an empty but valid state.",
    "code": "",
    "example": "Deep copying an array of 1,000,000 integers takes time. Moving the array takes O(1) time because you just copy the pointer and zero out the old one.",
    "tip": "",
    "summary": "Understanding what is move semantics"
  },
  {
    "id": 88,
    "category": "Copy, Move & Resource Management",
    "title": "What is a move constructor?",
    "explanation": "A move constructor is a constructor that takes an **rvalue reference** (`&&`) to another object of the same class. \n\nInstead of copying the data, it takes ownership of the other object's resources (like pointers), and then nullifies the other object's pointers so its destructor doesn't accidentally free the memory that was just stolen.",
    "code": "class Buffer {\n    int* data;\npublic:\n    // Move Constructor\n    Buffer(Buffer&& other) noexcept {\n        data = other.data;  // Steal the pointer\n        other.data = nullptr; // Nullify the source to prevent deletion\n    }\n};",
    "example": "",
    "tip": "Always mark move constructors as `noexcept`.",
    "summary": "Understanding what is a move constructor"
  },
  {
    "id": 89,
    "category": "Copy, Move & Resource Management",
    "title": "What is a move assignment operator?",
    "explanation": "A move assignment operator (overloaded `=`) works identically to a move constructor, but it is called when assigning an rvalue to an *already existing* object.\n\nIt must first clean up its own existing resources, then steal the resources from the rvalue, and finally nullify the rvalue's resources.",
    "code": "Buffer& operator=(Buffer&& other) noexcept {\n    if (this != &other) {\n        delete data;        // Free existing resource\n        data = other.data;  // Steal new resource\n        other.data = nullptr; // Nullify source\n    }\n    return *this;\n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a move assignment operator"
  },
  {
    "id": 90,
    "category": "Copy, Move & Resource Management",
    "title": "What is std::move()?",
    "explanation": "`std::move()` is a standard library function that casts an object into an **rvalue reference**.\n\nCrucially, `std::move()` does NOT actually move anything itself. It simply tells the compiler: \"Treat this object as a temporary, I am done with it. You are allowed to steal its resources.\" This cast forces the compiler to invoke the Move Constructor or Move Assignment Operator instead of the copy versions.",
    "code": "std::vector<int> v1 = {1, 2, 3};\n\n// v1 is an lvalue. This triggers a deep copy.\nstd::vector<int> v2 = v1; \n\n// std::move casts v1 to an rvalue. This triggers a fast move!\nstd::vector<int> v3 = std::move(v1); \n// v1 is now empty.",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::move()"
  },
  {
    "id": 91,
    "category": "Copy, Move & Resource Management",
    "title": "Copy semantics vs move semantics?",
    "explanation": "- **Copy Semantics**: Creates a brand new, identical clone of an object. Leaves the original object completely intact and usable. Slow (O(N) for containers).\n- **Move Semantics**: Transfers ownership of resources from an old object to a new object. Leaves the old object in a \"valid but unspecified state\" (usually empty). Extremely fast (O(1)).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding copy semantics vs move semantics"
  },
  {
    "id": 92,
    "category": "Copy, Move & Resource Management",
    "title": "What is RAII?",
    "explanation": "RAII (Resource Acquisition Is Initialization) is arguably the most important programming idiom in C++.\n\nIt states that the lifecycle of a resource (heap memory, open files, network connections, mutex locks) should be strictly bound to the lifespan of a local object on the stack.\n- **Acquisition**: The resource is acquired in the object's constructor.\n- **Release**: The resource is freed in the object's destructor.\n\nBecause C++ guarantees that destructors are called automatically when an object goes out of scope (even if an exception is thrown!), RAII guarantees that resources are never leaked.",
    "code": "void processFile() {\n    // std::ifstream constructor opens the file.\n    std::ifstream file(\"data.txt\"); \n\n    // If an exception is thrown here, the function exits...\n    // But file's destructor is automatically called, closing the file!\n}",
    "example": "",
    "tip": "Smart pointers (`unique_ptr`) and `std::lock_guard` are perfect examples of RAII.",
    "summary": "Understanding what is raii"
  },
  {
    "id": 93,
    "category": "STL",
    "title": "What is STL?",
    "explanation": "STL stands for the Standard Template Library. It is a massive, highly optimized software library built into C++ that provides generic classes and functions for common programming tasks.\n\nBecause it heavily utilizes C++ Templates, it allows developers to create data structures and algorithms that work efficiently with any data type, without rewriting code.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is stl"
  },
  {
    "id": 94,
    "category": "STL",
    "title": "What are the major components of STL?",
    "explanation": "The STL is divided into four major components:\n1. **Containers**: Data structures that store collections of objects (e.g., `vector`, `list`, `map`, `set`).\n2. **Iterators**: Objects that act like pointers, allowing you to traverse the elements inside containers safely.\n3. **Algorithms**: Global functions that perform operations on containers (e.g., `sort()`, `find()`, `reverse()`).\n4. **Functors (Function Objects)**: Classes that overload the `()` operator, allowing them to be passed as arguments to algorithms to customize behavior.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what are the major components of stl"
  },
  {
    "id": 95,
    "category": "STL",
    "title": "What is a container?",
    "explanation": "A container is a generic template class that manages the storage of a collection of elements and provides member functions to access and manipulate them.\n\nContainers manage memory allocation automatically. They are categorized into:\n- **Sequence Containers**: Store data linearly (`vector`, `list`, `deque`).\n- **Associative Containers**: Store data in non-linear sorted structures like Red-Black Trees (`map`, `set`).\n- **Unordered Associative Containers**: Store data using Hash Tables (`unordered_map`, `unordered_set`).\n- **Container Adaptors**: Restrict interfaces of other containers (`stack`, `queue`).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a container"
  },
  {
    "id": 96,
    "category": "STL",
    "title": "What is an iterator?",
    "explanation": "An iterator is an object that points to an element inside an STL container, providing a standardized, pointer-like interface to traverse the container's contents regardless of its underlying internal structure (whether it's an array, a linked list, or a tree).\n\nIterators bridge the gap between Containers and Algorithms. Algorithms don't know what a `vector` or a `list` is; they only know how to process iterators.",
    "code": "std::vector<int> vec = {1, 2, 3};\n\n// Traverse using an iterator\nfor (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {\n    cout << *it;\n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what is an iterator"
  },
  {
    "id": 97,
    "category": "STL",
    "title": "What are algorithms in STL?",
    "explanation": "Algorithms in the STL are standalone, global template functions (found in the `<algorithm>` header) that operate on containers.\n\nInstead of being member functions of the containers themselves, they are designed to accept Iterators. This decoupled design means a single `std::sort()` algorithm can sort a `vector`, a `deque`, or a raw C-array, minimizing code duplication.",
    "code": "std::vector<int> vec = {5, 2, 9, 1};\nstd::sort(vec.begin(), vec.end()); // Sorts the vector",
    "example": "",
    "tip": "",
    "summary": "Understanding what are algorithms in stl"
  },
  {
    "id": 98,
    "category": "STL",
    "title": "What is std::vector?",
    "explanation": "`std::vector` is a sequence container that encapsulates dynamic size arrays. \n\nIt stores elements in contiguous memory locations, meaning elements can be accessed instantly (O(1)) via an index. When the vector runs out of capacity, it automatically allocates a larger block of memory, copies the elements over, and deletes the old block.",
    "code": "std::vector<int> v;\nv.push_back(10); // Adds 10 to the end\ncout << v[0];    // O(1) random access",
    "example": "",
    "tip": "Vector should be your default container in C++ 99% of the time due to Cache Locality (it is highly CPU cache-friendly).",
    "summary": "Understanding what is std::vector"
  },
  {
    "id": 99,
    "category": "STL",
    "title": "Vector vs array?",
    "explanation": "- **C-Style Array**: Fixed size (cannot grow or shrink). No bounds checking. Does not know its own size. Extremely fast.\n- **`std::vector`**: Dynamic size (grows automatically). Knows its own size (`.size()`). Provides bounds checking via `.at()`. Manages its own memory.",
    "code": "int arr[5]; // Fixed size\nstd::vector<int> vec; // Dynamic size",
    "example": "",
    "tip": "There is also `std::array`, which is a safe, modern wrapper around C-style fixed arrays.",
    "summary": "Understanding vector vs array"
  },
  {
    "id": 100,
    "category": "STL",
    "title": "Vector vs list?",
    "explanation": "- **`std::vector`**: Uses a single contiguous block of memory. Fast random access O(1). Slow insertion/deletion in the middle O(N) because elements must be shifted. Excellent CPU cache locality.\n- **`std::list`**: Uses a Doubly-Linked List. Memory is scattered across the heap. No random access (must traverse O(N)). Fast insertion/deletion anywhere O(1) (if you have the iterator). Poor CPU cache locality.",
    "code": "",
    "example": "",
    "tip": "In the real world, `vector` outperforms `list` even for middle insertions due to CPU caching, unless the elements being moved are massive.",
    "summary": "Understanding vector vs list"
  },
  {
    "id": 101,
    "category": "STL",
    "title": "What is std::list?",
    "explanation": "`std::list` is a sequence container that implements a Doubly-Linked List.\n\nEvery element is stored in a separate node in memory, containing a pointer to the next node and the previous node. It allows constant time O(1) insertion and erasure operations anywhere within the sequence, provided you already have an iterator pointing to the location.",
    "code": "std::list<int> myList;\nmyList.push_back(10);\nmyList.push_front(20); // Extremely fast",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::list"
  },
  {
    "id": 102,
    "category": "STL",
    "title": "What is std::deque?",
    "explanation": "`std::deque` (Double-Ended Queue) is a sequence container that allows fast insertion and deletion at BOTH the front and the back.\n\nUnlike `vector`, it does not store elements in a single continuous block of memory. Instead, it uses a sequence of individually allocated fixed-size arrays. It provides O(1) random access and O(1) insertion at both ends.",
    "code": "std::deque<int> dq;\ndq.push_back(10);\ndq.push_front(20); // O(1) operation",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::deque"
  },
  {
    "id": 103,
    "category": "STL",
    "title": "Vector vs deque?",
    "explanation": "- **`vector`**: Contiguous memory. Fast insertion only at the back. Reallocates memory entirely when capacity is reached.\n- **`deque`**: Segmented memory (array of arrays). Fast insertion at the front AND back. Does not reallocate everything when expanding, it just allocates a new chunk.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding vector vs deque"
  },
  {
    "id": 104,
    "category": "STL",
    "title": "What is std::stack?",
    "explanation": "`std::stack` is a Container Adaptor. It provides a restricted LIFO (Last-In, First-Out) interface.\n\nYou cannot iterate through a stack, nor can you access elements randomly. You can only `push()` to the top, `pop()` from the top, and view the `top()` element.",
    "code": "std::stack<int> s;\ns.push(1);\ns.push(2);\ncout << s.top(); // 2\ns.pop();",
    "example": "",
    "tip": "By default, `std::stack` wraps around a `std::deque` under the hood.",
    "summary": "Understanding what is std::stack"
  },
  {
    "id": 105,
    "category": "STL",
    "title": "What is std::queue?",
    "explanation": "`std::queue` is a Container Adaptor providing a restricted FIFO (First-In, First-Out) interface.\n\nYou can only `push()` to the back, and `pop()` from the front, mimicking a real-world waiting line.",
    "code": "std::queue<int> q;\nq.push(1);\nq.push(2);\ncout << q.front(); // 1\nq.pop();",
    "example": "",
    "tip": "By default, `std::queue` also wraps around a `std::deque` under the hood.",
    "summary": "Understanding what is std::queue"
  },
  {
    "id": 106,
    "category": "STL",
    "title": "What is std::priority_queue?",
    "explanation": "`std::priority_queue` is a Container Adaptor that ensures the \"largest\" (or highest priority) element is always at the top.\n\nUnder the hood, it implements a Max-Heap data structure (usually wrapped around a `std::vector`). It guarantees O(1) lookup of the highest element, and O(log N) insertion and deletion.",
    "code": "std::priority_queue<int> pq;\npq.push(10);\npq.push(100);\npq.push(5);\ncout << pq.top(); // Always 100",
    "example": "",
    "tip": "You can provide a custom comparator to make it a Min-Heap (smallest element at the top).",
    "summary": "Understanding what is std::priority_queue"
  },
  {
    "id": 107,
    "category": "STL",
    "title": "What is std::set?",
    "explanation": "`std::set` is an Associative Container that stores unique elements in a specifically sorted order.\n\nUnder the hood, it is implemented as a self-balancing binary search tree (usually a Red-Black Tree). Because it is a tree, insertion, deletion, and searching all take O(log N) time. Duplicate elements are automatically rejected.",
    "code": "std::set<int> s;\ns.insert(10);\ns.insert(5);\ns.insert(10); // Ignored\n// Elements are stored as: 5, 10",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::set"
  },
  {
    "id": 108,
    "category": "STL",
    "title": "What is std::unordered_set?",
    "explanation": "`std::unordered_set` is an Unordered Associative Container that stores unique elements in absolutely no particular order.\n\nUnder the hood, it is implemented as a Hash Table. Because it uses hashing, average-case insertion, deletion, and searching all take blazing fast O(1) constant time. (Worst case is O(N) if hash collisions are severe).",
    "code": "std::unordered_set<int> us;\nus.insert(10);\nus.insert(5);",
    "example": "",
    "tip": "Unless you specifically need your data to be sorted, always use `unordered_set` instead of `set` for massive performance gains.",
    "summary": "Understanding what is std::unordered_set"
  },
  {
    "id": 109,
    "category": "STL",
    "title": "What is std::map?",
    "explanation": "`std::map` is an Associative Container that stores Key-Value pairs, sorted by the Keys.\n\nLike `set`, it is implemented as a Red-Black Tree. Keys must be unique. Operations take O(log N) time. It provides a dictionary-like interface.",
    "code": "std::map<std::string, int> ages;\nages[\"Alice\"] = 25;\nages[\"Bob\"] = 30;",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::map"
  },
  {
    "id": 110,
    "category": "STL",
    "title": "What is std::unordered_map?",
    "explanation": "`std::unordered_map` is an Unordered Associative Container that stores Key-Value pairs in no particular order.\n\nLike `unordered_set`, it is implemented as a Hash Table. It provides O(1) average time complexity for lookups, insertions, and deletions, making it one of the most powerful and frequently used containers in C++.",
    "code": "std::unordered_map<std::string, int> dict;\ndict[\"Speed\"] = 100;",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::unordered_map"
  },
  {
    "id": 111,
    "category": "STL",
    "title": "Map vs unordered_map?",
    "explanation": "- **`map`**: Implemented as a Red-Black Tree. Keys are always sorted. Operations are O(log N).\n- **`unordered_map`**: Implemented as a Hash Table. Keys are unsorted. Operations are O(1) average time.\n\nUse `map` when you need to iterate over data in alphabetical/numerical order. Use `unordered_map` for pure lookup speed.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding map vs unordered_map"
  },
  {
    "id": 112,
    "category": "STL",
    "title": "Set vs unordered_set?",
    "explanation": "- **`set`**: Implemented as a Red-Black Tree. Elements are always sorted. Operations are O(log N).\n- **`unordered_set`**: Implemented as a Hash Table. Elements are unsorted. Operations are O(1) average time.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding set vs unordered_set"
  },
  {
    "id": 113,
    "category": "STL",
    "title": "What is std::multimap?",
    "explanation": "`std::multimap` is exactly like `std::map` (sorted tree structure), EXCEPT it allows multiple identical keys.\n\nBecause keys are not unique, you cannot use the `[]` operator (as the compiler wouldn't know which value to return). You must use `.insert()` and `.equal_range()`.",
    "code": "std::multimap<string, int> grades;\ngrades.insert({\"Math\", 90});\ngrades.insert({\"Math\", 100}); // Allowed!",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::multimap"
  },
  {
    "id": 114,
    "category": "STL",
    "title": "What is std::multiset?",
    "explanation": "`std::multiset` is exactly like `std::set` (sorted tree structure), EXCEPT it allows duplicate elements.",
    "code": "std::multiset<int> ms;\nms.insert(10);\nms.insert(10); // Allowed, contains two 10s.",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::multiset"
  },
  {
    "id": 115,
    "category": "STL",
    "title": "What is an STL iterator and what are its categories?",
    "explanation": "Iterators bridge algorithms and containers. They fall into 5 distinct categories, dictating what they can do:\n\n1. **Input Iterators**: Can read values moving forward (e.g., reading from a keyboard stream).\n2. **Output Iterators**: Can write values moving forward (e.g., writing to a screen stream).\n3. **Forward Iterators**: Can read/write values moving forward one step at a time (e.g., `forward_list`).\n4. **Bidirectional Iterators**: Can read/write moving forward AND backward (e.g., `list`, `map`, `set`).\n5. **Random Access Iterators**: Can instantly jump to any element using arithmetic like `it + 5` (e.g., `vector`, `deque`).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is an stl iterator and what are its categories"
  },
  {
    "id": 116,
    "category": "STL Algorithms & Functional Features",
    "title": "What is the difference between find() and find_if()?",
    "explanation": "- **`std::find()`**: Searches for the first element in a range that exactly matches a specific value you provide.\n- **`std::find_if()`**: Searches for the first element in a range that satisfies a specific condition (a predicate). You provide a function, functor, or lambda expression that returns `true` or `false`.",
    "code": "std::vector<int> v = {10, 20, 30};\n\nauto it1 = std::find(v.begin(), v.end(), 20); // Looks for exactly 20\n\n// Looks for first number greater than 15\nauto it2 = std::find_if(v.begin(), v.end(), [](int x) { return x > 15; });",
    "example": "",
    "tip": "",
    "summary": "Understanding what is the difference between find() and find_if()"
  },
  {
    "id": 117,
    "category": "STL Algorithms & Functional Features",
    "title": "What is sort()?",
    "explanation": "`std::sort()` is an incredibly highly-optimized sorting algorithm provided by the STL (usually implemented as Introsort, a hybrid of Quicksort, Heapsort, and Insertion Sort).\n\nIt takes two iterators (start and end) and sorts the elements in ascending order by default. It requires Random Access Iterators, so it works on `vector`, `deque`, and arrays, but NOT on `list`.",
    "code": "std::vector<int> v = {5, 2, 9, 1};\nstd::sort(v.begin(), v.end()); // 1, 2, 5, 9\n\n// Sort descending using a lambda comparator\nstd::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });",
    "example": "",
    "tip": "",
    "summary": "Understanding what is sort()"
  },
  {
    "id": 118,
    "category": "STL Algorithms & Functional Features",
    "title": "What is the difference between sort() and stable_sort()?",
    "explanation": "- **`std::sort()`**: Extremely fast (O(N log N)), but it is NOT stable. If two elements are considered equal, their relative order might be swapped during the sort.\n- **`std::stable_sort()`**: Slightly slower, but guarantees that the relative order of equal elements is preserved. It is typically implemented as a Merge Sort.",
    "code": "",
    "example": "If you sort a list of Employees by age, and multiple employees are 30 years old, `stable_sort()` ensures they remain in the exact same alphabetical order they were in before the sort.",
    "tip": "",
    "summary": "Understanding what is the difference between sort() and stable_sort()"
  },
  {
    "id": 119,
    "category": "STL Algorithms & Functional Features",
    "title": "What is binary_search()?",
    "explanation": "`std::binary_search()` is an STL algorithm that searches for a value in a **sorted** range. \n\nIt returns `true` if the value exists, and `false` if it doesn't. Because it uses the binary search algorithm, it is incredibly fast (O(log N)). It requires the container to be sorted beforehand; if it isn't, the behavior is undefined.",
    "code": "std::vector<int> v = {1, 2, 5, 9}; // Sorted!\nbool exists = std::binary_search(v.begin(), v.end(), 5); // returns true",
    "example": "",
    "tip": "Note that it only returns a boolean. If you actually want the iterator pointing to the element, you must use `std::lower_bound()` instead.",
    "summary": "Understanding what is binary_search()"
  },
  {
    "id": 120,
    "category": "STL Algorithms & Functional Features",
    "title": "What is lower_bound()?",
    "explanation": "`std::lower_bound()` is an algorithm used on a sorted range. It returns an iterator pointing to the **first element that is NOT less than** (i.e., greater than or equal to) the given value.\n\nIt runs in O(log N) time using a binary search. It is highly useful for inserting elements into a sorted array while maintaining the sorted order.",
    "code": "std::vector<int> v = {10, 20, 30, 40, 50};\nauto it = std::lower_bound(v.begin(), v.end(), 30);\n// 'it' points to 30",
    "example": "",
    "tip": "",
    "summary": "Understanding what is lower_bound()"
  },
  {
    "id": 121,
    "category": "STL Algorithms & Functional Features",
    "title": "What is upper_bound()?",
    "explanation": "`std::upper_bound()` is an algorithm used on a sorted range. It returns an iterator pointing to the **first element that is STRICTLY GREATER** than the given value.",
    "code": "std::vector<int> v = {10, 20, 30, 30, 40};\nauto it = std::upper_bound(v.begin(), v.end(), 30);\n// 'it' points to 40",
    "example": "",
    "tip": "Together, `lower_bound` and `upper_bound` can be used to find the exact range of all duplicate elements in a sorted array.",
    "summary": "Understanding what is upper_bound()"
  },
  {
    "id": 122,
    "category": "STL Algorithms & Functional Features",
    "title": "What is remove() vs erase()?",
    "explanation": "This is a massive trap in C++.\n\n- **`std::remove()`**: An algorithm that shifts all non-removed elements to the front of the container. It does NOT actually delete elements or reduce the container size (because algorithms cannot change container sizes, they only move data around). It returns an iterator to the new 'logical' end of the container.\n- **`.erase()`**: A member function of the container itself that physically destroys elements and shrinks the container's memory footprint.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is remove() vs erase()"
  },
  {
    "id": 123,
    "category": "STL Algorithms & Functional Features",
    "title": "What is the erase-remove idiom?",
    "explanation": "The Erase-Remove Idiom is the standard C++ technique used to completely delete elements from a sequence container (like `vector` or `string`) based on a specific value or condition.\n\nBecause `std::remove()` only shifts elements and doesn't resize the container, you must immediately pass the iterator returned by `remove()` directly into the container's `.erase()` method to physically chop off the garbage elements at the end.",
    "code": "std::vector<int> v = {1, 99, 2, 99, 3};\n\n// 1. remove() shifts elements to {1, 2, 3, 99, 99} and returns iterator to first 99.\n// 2. erase() physically deletes from that iterator to the end.\nv.erase(std::remove(v.begin(), v.end(), 99), v.end());",
    "example": "",
    "tip": "In C++20, this idiom was finally replaced by the much simpler `std::erase()` and `std::erase_if()` global functions.",
    "summary": "Understanding what is the erase-remove idiom"
  },
  {
    "id": 124,
    "category": "STL Algorithms & Functional Features",
    "title": "What are lambda expressions?",
    "explanation": "Introduced in C++11, a lambda expression is a convenient way to define an anonymous, inline function object right at the location where it is invoked or passed as an argument.\n\nLambdas make code drastically cleaner because you no longer have to define bulky struct Functors elsewhere in the file just to pass a simple comparator or predicate to an algorithm.",
    "code": "auto add = [](int a, int b) { return a + b; };\ncout << add(5, 3); // 8",
    "example": "",
    "tip": "The syntax is `[capture](parameters) -> return_type { body };`",
    "summary": "Understanding what are lambda expressions"
  },
  {
    "id": 125,
    "category": "STL Algorithms & Functional Features",
    "title": "How are lambda expressions used with STL algorithms?",
    "explanation": "Lambdas are most frequently used as custom predicates or comparators for STL algorithms like `std::sort`, `std::find_if`, or `std::count_if`.\n\nThe `[capture]` clause is especially powerful because it allows the lambda to access local variables from the surrounding scope, which standard function pointers cannot do.",
    "code": "std::vector<int> v = {1, 2, 3, 4, 5};\nint threshold = 3;\n\n// The lambda captures 'threshold' by value [=]\nint count = std::count_if(v.begin(), v.end(), [=](int x) { \n    return x > threshold; \n});",
    "example": "",
    "tip": "",
    "summary": "Understanding how are lambda expressions used with stl algorithms"
  },
  {
    "id": 126,
    "category": "Templates & Generic Programming",
    "title": "What are templates in C++?",
    "explanation": "Templates are the foundation of Generic Programming in C++. They allow you to write a function or a class once, and have it work seamlessly with any data type.\n\nInstead of writing separate `add()` functions for `int`, `float`, and `double`, you write a single template `add(T a, T b)`. The compiler then analyzes your code and automatically generates the exact type-specific versions of the function during compilation.",
    "code": "template <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what are templates in c++"
  },
  {
    "id": 127,
    "category": "Templates & Generic Programming",
    "title": "Why are templates used?",
    "explanation": "Templates are used to maximize code reusability, maintainability, and type safety while maintaining zero runtime overhead.\n\nBefore templates, programmers either had to duplicate code for every data type, or use raw `void*` pointers (which disabled all compiler type-safety checks) or preprocessor macros (which are incredibly unsafe and hard to debug).",
    "code": "",
    "example": "The entire Standard Template Library (STL) is built on this. `std::vector<int>` and `std::vector<string>` use the exact same underlying template code.",
    "tip": "",
    "summary": "Understanding why are templates used"
  },
  {
    "id": 128,
    "category": "Templates & Generic Programming",
    "title": "What is a function template?",
    "explanation": "A function template defines a blueprint for generating a family of functions that can operate on different data types.\n\nWhen you call the function, the compiler deduces the type of the arguments and instantiates a specific version of the function for that type.",
    "code": "template <typename T>\nvoid swapValues(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint x = 1, y = 2;\nswapValues(x, y); // Compiler generates swapValues<int>",
    "example": "",
    "tip": "",
    "summary": "Understanding what is a function template"
  },
  {
    "id": 129,
    "category": "Templates & Generic Programming",
    "title": "What is a class template?",
    "explanation": "A class template defines a blueprint for creating classes that can handle any generic data type. It is widely used for creating generic data structures like linked lists, stacks, and queues.\n\nUnlike function templates, the compiler usually cannot deduce the type for a class template, so you must explicitly specify the type in angle brackets `< >` when creating an object.",
    "code": "template <typename T>\nclass Box {\npublic:\n    T item;\n    Box(T i) : item(i) {}\n};\n\nBox<int> intBox(10);       // T is int\nBox<string> strBox(\"A\");   // T is string",
    "example": "",
    "tip": "C++17 introduced CTAD (Class Template Argument Deduction), which allows omitting the `<int>` if the compiler can guess it from the constructor.",
    "summary": "Understanding what is a class template"
  },
  {
    "id": 130,
    "category": "Templates & Generic Programming",
    "title": "What is template specialization?",
    "explanation": "Template specialization allows you to override the generic template code and provide a custom, specific implementation for a particular data type.\n\nFor example, if you have a generic sorting template, you might want to write a highly optimized, specialized version that is specifically triggered only when sorting `bool` arrays.",
    "code": "// Generic Template\ntemplate <typename T>\nvoid print(T data) { cout << data; }\n\n// Explicit Specialization for 'char*'\ntemplate <>\nvoid print<char*>(char* data) { \n    cout << \"String: \" << data; \n}",
    "example": "",
    "tip": "",
    "summary": "Understanding what is template specialization"
  },
  {
    "id": 131,
    "category": "Templates & Generic Programming",
    "title": "What is partial template specialization?",
    "explanation": "Partial template specialization allows you to specialize a class template for a *family* of types, rather than a single specific type.\n\nFor example, you can write a generic `Box<T>` template, and then write a partial specialization `Box<T*>` that provides unique behavior only when the type is a pointer.",
    "code": "// Generic Class\ntemplate <typename T, typename U>\nclass Pair {};\n\n// Partial Specialization (U is fixed to int, T remains generic)\ntemplate <typename T>\nclass Pair<T, int> {};",
    "example": "",
    "tip": "Function templates CANNOT be partially specialized in C++, only Class templates can be.",
    "summary": "Understanding what is partial template specialization"
  },
  {
    "id": 132,
    "category": "Templates & Generic Programming",
    "title": "What are non-type template parameters?",
    "explanation": "Normally, template parameters represent Types (like `int` or `string`). However, templates can also accept non-type parameters, which are constant expressions evaluated at compile time (like integers or pointers).\n\nThis is widely used to create fixed-size data structures where the size is known at compile time, eliminating the need for dynamic heap allocation.",
    "code": "// 'N' is a non-type template parameter\ntemplate <typename T, int N>\nclass FixedArray {\n    T data[N]; // Array size determined at compile time\n};\n\nFixedArray<int, 5> arr; // Creates an array of 5 ints",
    "example": "",
    "tip": "`std::array<int, 10>` uses a non-type template parameter for its size.",
    "summary": "Understanding what are non-type template parameters"
  },
  {
    "id": 133,
    "category": "Templates & Generic Programming",
    "title": "What is template argument deduction?",
    "explanation": "Template argument deduction is the compiler's ability to automatically figure out the correct data type for a template parameter based on the arguments you pass to the function.\n\nBecause of this, you usually don't have to explicitly type `add<int>(5, 3)`; you can just write `add(5, 3)` and the compiler deduces that `T` must be `int`.",
    "code": "template <typename T>\nvoid print(T val) {}\n\nprint(10);     // Deduces T = int\nprint(5.5);    // Deduces T = double",
    "example": "",
    "tip": "",
    "summary": "Understanding what is template argument deduction"
  },
  {
    "id": 134,
    "category": "Templates & Generic Programming",
    "title": "What is typename in templates?",
    "explanation": "The `typename` keyword has two uses in templates:\n1. It is used interchangeably with `class` when declaring template parameters (`template <typename T>`).\n2. **(Crucial)**: It is used inside the template to tell the compiler that a nested identifier is a *type* and not a *static variable*.\n\nBecause templates are parsed before instantiation, if you write `T::iterator`, the compiler assumes `iterator` is a static variable inside `T`. You must write `typename T::iterator` to explicitly tell the compiler it is a nested type.",
    "code": "template <typename T>\nvoid printFirst(const T& container) {\n    // 'typename' is REQUIRED here!\n    typename T::const_iterator it = container.begin();\n    cout << *it;\n}",
    "example": "",
    "tip": "If you get bizarre compilation errors inside templates regarding nested types, you probably forgot `typename`.",
    "summary": "Understanding what is typename in templates"
  },
  {
    "id": 135,
    "category": "Templates & Generic Programming",
    "title": "What is SFINAE?",
    "explanation": "SFINAE stands for \"Substitution Failure Is Not An Error\". It is a deeply advanced, highly powerful feature of C++ template metaprogramming.\n\nWhen the compiler tries to instantiate a template, it substitutes the data types. If this substitution results in invalid code (e.g., trying to call a non-existent function on the type), the compiler **does not throw an error**. Instead, it silently ignores that template and looks for a different overloaded template that works. If it finds none, then it throws an error.",
    "code": "",
    "example": "",
    "tip": "SFINAE is used to enable or disable function templates based on type traits (like `std::enable_if`). It has largely been superseded by C++20 Concepts.",
    "summary": "Understanding what is sfinae"
  },
  {
    "id": 136,
    "category": "Templates & Generic Programming",
    "title": "What are concepts in modern C++?",
    "explanation": "Introduced in C++20, Concepts are a massive upgrade to template metaprogramming. They allow developers to easily place constraints on template parameters in a highly readable way, effectively replacing SFINAE.\n\nInstead of writing cryptic `std::enable_if` code, you can use Concepts to declare \"This template only accepts types that are Integrals\" or \"This template only accepts types that can be added together\". If a user passes an invalid type, the compiler provides a clean, human-readable error message instead of 100 pages of template errors.",
    "code": "template <typename T>\nconcept Integral = std::is_integral_v<T>;\n\n// Template constrained by the 'Integral' concept\nvoid process(Integral auto val) {\n    // ...\n}",
    "example": "",
    "tip": "Concepts are designed to solve the infamous \"massive unreadable compiler error\" problem associated with C++ templates.",
    "summary": "Understanding what are concepts in modern c++"
  },
  {
    "id": 137,
    "category": "Templates & Generic Programming",
    "title": "What is the difference between templates and macros?",
    "explanation": "- **Macros (`#define`)**: Processed by the preprocessor before compilation via blind text replacement. They have zero type checking, no scope, cannot be debugged, and are prone to severe logic errors (like `x++` being evaluated twice).\n- **Templates**: Processed by the compiler. They are strongly type-checked, respect scope/namespaces, can be debugged, and provide significantly safer and cleaner code generation.",
    "code": "",
    "example": "",
    "tip": "Never use Macros for generic programming. Always use Templates.",
    "summary": "Understanding what is the difference between templates and macros"
  },
  {
    "id": 138,
    "category": "Exception Handling",
    "title": "What is exception handling in C++?",
    "explanation": "Exception handling is a mechanism that separates error-handling code from normal business logic code.\n\nInstead of checking return codes (`if (result == -1)`) after every single function call, exception handling allows a program to 'throw' an error object from deep within a call stack, and immediately halt execution until it hits a 'catch' block designed to handle that specific error. This guarantees errors cannot be silently ignored.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is exception handling in c++"
  },
  {
    "id": 139,
    "category": "Exception Handling",
    "title": "What are try, catch, and throw?",
    "explanation": "- **`try`**: A block of code where you expect an exception might occur. If an exception occurs, execution instantly jumps out of the block.\n- **`throw`**: The keyword used to signal that an error has occurred. It halts execution and tosses an exception object up the call stack.\n- **`catch`**: A block of code that intercepts and handles a specific type of exception thrown by a `try` block.",
    "code": "try {\n    int den = 0;\n    if (den == 0) throw std::runtime_error(\"Div by zero!\");\n    int res = 10 / den;\n} \ncatch (const std::exception& e) {\n    cout << \"Error: \" << e.what();\n}",
    "example": "",
    "tip": "Always catch exceptions by const reference (`catch (const std::exception& e)`) to prevent object slicing and unnecessary copying.",
    "summary": "Understanding what are try, catch, and throw"
  },
  {
    "id": 140,
    "category": "Exception Handling",
    "title": "How do you create a custom exception?",
    "explanation": "You can create a custom exception by defining a new class that inherits from `std::exception` (or one of its derived classes like `std::runtime_error`).\n\nYou must override the virtual `what()` method to return a custom C-string error message.",
    "code": "class NetworkError : public std::exception {\npublic:\n    const char* what() const noexcept override {\n        return \"Network connection timed out!\";\n    }\n};\n\n// Usage: throw NetworkError();",
    "example": "",
    "tip": "",
    "summary": "Understanding how do you create a custom exception"
  },
  {
    "id": 141,
    "category": "Exception Handling",
    "title": "What is exception propagation?",
    "explanation": "Exception propagation is the process by which an unhandled exception moves up the function call stack.\n\nIf Function A calls Function B, and Function B calls Function C. If Function C throws an exception but doesn't catch it, the exception instantly exits C and propagates up to B. If B doesn't catch it, it propagates up to A. If A doesn't catch it, it propagates to `main()`. If `main()` doesn't catch it, the operating system forcefully terminates the program.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is exception propagation"
  },
  {
    "id": 142,
    "category": "Exception Handling",
    "title": "What is stack unwinding?",
    "explanation": "Stack unwinding is the automatic cleanup process that occurs during Exception Propagation.\n\nAs an exception propagates up the call stack and forcefully exits functions, the C++ runtime strictly guarantees that the **destructors of all local objects** in those exited functions are executed. This ensures that memory, file locks, and resources are safely released, preventing massive memory leaks during a crash (This ties heavily into RAII).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is stack unwinding"
  },
  {
    "id": 143,
    "category": "Exception Handling",
    "title": "What is the difference between throw and noexcept?",
    "explanation": "- **`throw`**: Tosses an exception object into the air, triggering stack unwinding.\n- **`noexcept`**: A specifier applied to a function signature indicating that the function guarantees it will NEVER throw an exception.\n\nIf a `noexcept` function accidentally throws an exception, the program is immediately aborted (`std::terminate()` is called) without unwinding the stack. `noexcept` is highly useful for move constructors to allow standard containers to optimize memory operations safely.",
    "code": "void safeFunction() noexcept {\n    // Compiler can optimize this aggressively\n}",
    "example": "",
    "tip": "Move constructors and Destructors should almost always be marked `noexcept`.",
    "summary": "Understanding what is the difference between throw and noexcept"
  },
  {
    "id": 144,
    "category": "Exception Handling",
    "title": "What is std::exception?",
    "explanation": "`std::exception` is the base class for all standard C++ exceptions (defined in `<exception>`).\n\nIt provides a virtual function `what()` that returns a null-terminated character sequence explaining the error. By catching `std::exception`, you can polymorphically catch any standard error (like `out_of_range`, `bad_alloc`, `runtime_error`) in a single catch block.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what is std::exception"
  },
  {
    "id": 145,
    "category": "Exception Handling",
    "title": "Why should destructors generally not throw exceptions?",
    "explanation": "If a destructor throws an exception, it is incredibly dangerous. \n\nRemember Stack Unwinding? If an exception is currently propagating, the runtime is destroying local objects. If one of those objects' destructors throws a *second* exception while the first is still active, C++ has no idea how to handle two simultaneous exceptions. The program will immediately call `std::terminate()` and hard-crash.\n\nTherefore, destructors should catch and absorb all internal errors and never let an exception escape.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding why should destructors generally not throw exceptions"
  },
  {
    "id": 146,
    "category": "Modern C++ & Advanced Concepts",
    "title": "What are the major features introduced in C++11, C++14, C++17, and C++20?",
    "explanation": "- **C++11**: The modern revolution. Added `auto`, Smart Pointers, Lambdas, Move Semantics, Multithreading, `constexpr`, and range-based for loops.\n- **C++14**: Incremental upgrades. Added generic lambdas (`auto` parameters) and `std::make_unique`.\n- **C++17**: Quality of life. Added `std::optional`, `std::variant`, `std::any`, `std::filesystem`, structured binding, and `if constexpr`.\n- **C++20**: Massive architecture changes. Added Concepts, Ranges, Coroutines, and Modules.",
    "code": "",
    "example": "",
    "tip": "C++11 and C++20 are the biggest milestone updates.",
    "summary": "Understanding what are the major features introduced in c++11, c++14, c++17, and c++20"
  },
  {
    "id": 147,
    "category": "Modern C++ & Advanced Concepts",
    "title": "What is auto and when should you use it?",
    "explanation": "`auto` is a keyword that tells the compiler to automatically deduce the data type of a variable at compile time based on its initialization value.\n\nIt does NOT make C++ a dynamically typed language (like Python). The type is strictly locked in at compilation. It is heavily used to simplify code, especially when dealing with massive, unreadable STL iterator types.",
    "code": "auto x = 5; // Deduces int\nauto y = 5.5; // Deduces double\n\n// Saves massive amounts of typing:\nauto it = myMap.find(\"Key\"); \n// Instead of: std::map<std::string, int>::iterator it = ...",
    "example": "",
    "tip": "Use \"Almost Always Auto\" (AAA) principle: Use `auto` everywhere unless you explicitly need a specific conversion.",
    "summary": "Understanding what is auto and when should you use it"
  },
  {
    "id": 148,
    "category": "Modern C++ & Advanced Concepts",
    "title": "What is constexpr?",
    "explanation": "`constexpr` (Constant Expression) is a keyword that specifies that the value of a variable or the return value of a function can and MUST be evaluated at compile-time.\n\nThis is a massive performance optimization. If you do complex math in a `constexpr` function, the compiler will compute the answer during compilation and simply hardcode the final result into the executable, resulting in zero runtime cost.",
    "code": "constexpr int getArraySize() {\n    return 10 * 5;\n}\n\n// Evaluated at compile time. Array size is hardcoded as 50.\nint arr[getArraySize()];",
    "example": "",
    "tip": "",
    "summary": "Understanding what is constexpr"
  },
  {
    "id": 149,
    "category": "Modern C++ & Advanced Concepts",
    "title": "What are smart pointers and RAII in modern C++?",
    "explanation": "Modern C++ heavily enforces RAII (Resource Acquisition Is Initialization) to completely eliminate manual memory management and memory leaks.\n\nInstead of raw pointers and manual `delete` calls, modern C++ mandates the use of Smart Pointers (`std::unique_ptr` and `std::shared_ptr`). Because smart pointers are stack-allocated objects, their destructors are guaranteed to fire when they go out of scope, automatically cleaning up the heap memory they manage in a perfectly safe RAII manner.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Understanding what are smart pointers and raii in modern c++"
  },
  {
    "id": 150,
    "category": "Modern C++ & Advanced Concepts",
    "title": "What is multithreading in C++ and how do std::thread, mutexes, and synchronization work?",
    "explanation": "C++11 introduced a native, cross-platform multithreading library (`<thread>`, `<mutex>`).\n\n- **`std::thread`**: Spawns a new operating system thread to execute a function concurrently.\n- **`std::mutex`**: Provides mutual exclusion. Prevents multiple threads from accessing the same shared data simultaneously (preventing race conditions).\n- **`std::lock_guard`**: An RAII wrapper for a mutex. It automatically locks the mutex when created and unlocks it when destroyed, ensuring threads never accidentally leave a mutex locked forever.",
    "code": "#include <thread>\n#include <mutex>\n\nstd::mutex mtx;\n\nvoid printTask() {\n    std::lock_guard<std::mutex> lock(mtx); // Locks safely\n    cout << \"Thread executing!\";\n} // Automatically unlocks here\n\nint main() {\n    std::thread t1(printTask);\n    t1.join(); // Wait for thread to finish\n}",
    "example": "",
    "tip": "Always use `std::lock_guard` instead of manual `mtx.lock()` and `mtx.unlock()` to guarantee the lock is released even if an exception occurs.",
    "summary": "Understanding what is multithreading in c++ and how do std::thread, mutexes, and synchronization work"
  },
  {
    "category": "Coding: String Problems",
    "title": "Reverse a string.",
    "explanation": "Reversing a string is a common interview question. In C++, the most efficient way to reverse a string in-place is by using the two-pointer approach (swapping the first and last characters, moving inward). \nAlternatively, you can use the standard library's `std::reverse()` which does exactly this under the hood in O(N) time.",
    "code": "#include <iostream>\n#include <string>\n#include <algorithm>\n\n// Approach 1: Two Pointers (Manual)\nvoid reverseStringManual(std::string& str) {\n    int left = 0;\n    int right = str.length() - 1;\n    while (left < right) {\n        std::swap(str[left], str[right]);\n        left++;\n        right--;\n    }\n}\n\n// Approach 2: STL (Preferred)\nvoid reverseStringSTL(std::string& str) {\n    std::reverse(str.begin(), str.end());\n}",
    "example": "Input: \"hello\" -> Output: \"olleh\"",
    "tip": "Always mention `std::reverse()` first to show you know the STL, but be prepared to write the two-pointer manual version if the interviewer asks 'how would you do it without the standard library?'",
    "summary": "Reverse a string in-place using two pointers or std::reverse",
    "id": 151
  },
  {
    "category": "Coding: String Problems",
    "title": "Check whether a string is a palindrome.",
    "explanation": "A palindrome is a string that reads the same forwards and backwards. The optimal approach is to use two pointers (one at the beginning, one at the end) and compare the characters as they move towards the center. This takes O(N) time and O(1) space.",
    "code": "#include <iostream>\n#include <string>\n\nbool isPalindrome(const std::string& str) {\n    int left = 0;\n    int right = str.length() - 1;\n    \n    while (left < right) {\n        if (str[left] != str[right]) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}",
    "example": "Input: \"racecar\" -> Output: true\nInput: \"hello\" -> Output: false",
    "tip": "If the string contains spaces or punctuation (like \"A man, a plan, a canal: Panama\"), you must advance the pointers past non-alphanumeric characters using `std::isalnum` and compare using `std::tolower`.",
    "summary": "Check for palindrome using two pointers moving inwards",
    "id": 152
  },
  {
    "category": "Coding: String Problems",
    "title": "Find duplicate characters.",
    "explanation": "To find duplicate characters in a string efficiently, use a Hash Map or a frequency array to count the occurrences of each character. \nIterate through the string to populate the counts (O(N)), then iterate through the map to print characters with a count > 1.",
    "code": "#include <iostream>\n#include <string>\n#include <unordered_map>\n\nvoid printDuplicates(const std::string& str) {\n    std::unordered_map<char, int> counts;\n    \n    for (char c : str) {\n        counts[c]++;\n    }\n    \n    for (auto const& [character, count] : counts) {\n        if (count > 1) {\n            std::cout << character << \" appears \" << count << \" times.\\n\";\n        }\n    }\n}",
    "example": "Input: \"programming\" -> Output: 'r' (2), 'g' (2), 'm' (2)",
    "tip": "If you know the string is strictly ASCII (only 256 possible characters), using a simple array `int counts[256] = {0};` is significantly faster and uses less memory than `std::unordered_map`.",
    "summary": "Find duplicate characters using a hash map or frequency array",
    "id": 153
  },
  {
    "category": "Coding: String Problems",
    "title": "Find the first non-repeating character.",
    "explanation": "To find the first character that does not repeat, you need to count the frequencies of all characters first. Then, iterate through the string a second time from left to right, and return the first character that has a frequency of 1. This requires two passes, resulting in O(N) time complexity.",
    "code": "#include <iostream>\n#include <string>\n#include <unordered_map>\n\nchar firstNonRepeatingChar(const std::string& str) {\n    std::unordered_map<char, int> counts;\n    \n    // Pass 1: Count frequencies\n    for (char c : str) {\n        counts[c]++;\n    }\n    \n    // Pass 2: Find the first one with count == 1\n    for (char c : str) {\n        if (counts[c] == 1) {\n            return c;\n        }\n    }\n    \n    return '\\0'; // Return null char if none found\n}",
    "example": "Input: \"swiss\" -> Output: 'w' (s appears 3 times, i appears 1 time but is later)",
    "tip": "Order matters! You must iterate over the original string during the second pass, NOT the hash map, because `unordered_map` does not preserve insertion order.",
    "summary": "Find first non-repeating char using a frequency map and two passes",
    "id": 154
  },
  {
    "category": "Coding: String Problems",
    "title": "Check whether two strings are anagrams.",
    "explanation": "Two strings are anagrams if they contain the exact same characters with the exact same frequencies, just arranged differently. \nThere are two main approaches:\n1. **Sort both strings** and compare them. O(N log N) time.\n2. **Use a frequency array (or Hash Map)**. Increment counts for the first string, decrement for the second. If all counts are 0 at the end, they are anagrams. O(N) time.",
    "code": "#include <string>\n#include <vector>\n\nbool areAnagrams(const std::string& s1, const std::string& s2) {\n    if (s1.length() != s2.length()) return false;\n    \n    std::vector<int> counts(256, 0); // Assuming ASCII\n    \n    for (size_t i = 0; i < s1.length(); i++) {\n        counts[s1[i]]++;\n        counts[s2[i]]--;\n    }\n    \n    for (int count : counts) {\n        if (count != 0) return false;\n    }\n    \n    return true;\n}",
    "example": "Input: \"listen\", \"silent\" -> Output: true",
    "tip": "The frequency array approach is much faster than sorting and is the expected optimal answer.",
    "summary": "Check anagrams using character frequency counting",
    "id": 155
  },
  {
    "category": "Coding: String Problems",
    "title": "Count character frequency.",
    "explanation": "Counting the frequency of each character in a string is a foundational operation for many string algorithms. It is best done using an array (for ASCII) or an `unordered_map` (for Unicode).",
    "code": "#include <iostream>\n#include <string>\n#include <unordered_map>\n\nvoid countFrequencies(const std::string& str) {\n    std::unordered_map<char, int> freqMap;\n    for (char c : str) {\n        freqMap[c]++;\n    }\n    \n    for (const auto& pair : freqMap) {\n        std::cout << pair.first << \": \" << pair.second << \"\\n\";\n    }\n}",
    "example": "Input: \"hello\" -> Output: h:1, e:1, l:2, o:1",
    "tip": "Remember that `unordered_map` iteration does not guarantee alphabetical order. Use `std::map` if you need the output sorted by character.",
    "summary": "Count character frequencies using an unordered_map or array",
    "id": 156
  },
  {
    "category": "Coding: String Problems",
    "title": "Remove duplicate characters.",
    "explanation": "To remove duplicate characters while maintaining the original order, use a boolean array or a Hash Set to track characters you have already seen. Iterate through the string, and if a character hasn't been seen, append it to a result string and mark it as seen.",
    "code": "#include <string>\n#include <unordered_set>\n\nstd::string removeDuplicates(const std::string& str) {\n    std::unordered_set<char> seen;\n    std::string result = \"\";\n    \n    for (char c : str) {\n        if (seen.find(c) == seen.end()) {\n            seen.insert(c);\n            result += c;\n        }\n    }\n    return result;\n}",
    "example": "Input: \"programming\" -> Output: \"progamin\"",
    "tip": "Appending to a `std::string` using `+=` is highly efficient in C++.",
    "summary": "Remove duplicate characters using a hash set to track seen characters",
    "id": 157
  },
  {
    "category": "Coding: String Problems",
    "title": "Find the longest substring without repeating characters.",
    "explanation": "This is a classic Sliding Window problem. Use two pointers (`left` and `right`) to represent a window. Use a Hash Set (or array) to keep track of characters currently in the window. \nIf the character at `right` is not in the set, add it and expand the window. If it IS in the set, remove the character at `left` and shrink the window until the duplicate is gone. Keep track of the maximum window size.",
    "code": "#include <string>\n#include <unordered_set>\n#include <algorithm>\n\nint lengthOfLongestSubstring(const std::string& s) {\n    std::unordered_set<char> window;\n    int left = 0, right = 0, maxLength = 0;\n    \n    while (right < s.length()) {\n        if (window.find(s[right]) == window.end()) {\n            window.insert(s[right]);\n            maxLength = std::max(maxLength, right - left + 1);\n            right++;\n        } else {\n            window.erase(s[left]);\n            left++;\n        }\n    }\n    return maxLength;\n}",
    "example": "Input: \"abcabcbb\" -> Output: 3 (\"abc\")",
    "tip": "This is an extremely common FAANG question (LeetCode #3). Mentioning 'Sliding Window' immediately shows you know the optimal O(N) pattern.",
    "summary": "Find longest unique substring using the Sliding Window technique",
    "id": 158
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find the largest and smallest element.",
    "explanation": "You can find the min and max by iterating through the array once (O(N) time). C++ STL provides `std::min_element` and `std::max_element` to do this elegantly. There is also `std::minmax_element` which finds both in a single pass.",
    "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nvoid findMinMax(const std::vector<int>& arr) {\n    if (arr.empty()) return;\n    \n    auto result = std::minmax_element(arr.begin(), arr.end());\n    \n    std::cout << \"Smallest: \" << *result.first << \"\\n\";\n    std::cout << \"Largest: \" << *result.second << \"\\n\";\n}",
    "example": "Input: [5, 2, 9, 1, 7] -> Smallest: 1, Largest: 9",
    "tip": "STL functions return iterators, so you must dereference them using `*` to get the actual value.",
    "summary": "Find min and max using std::minmax_element in O(N) time",
    "id": 159
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find the second-largest element.",
    "explanation": "To find the second largest element in a single O(N) pass, maintain two variables: `largest` and `second_largest`. Iterate through the array. \nIf the current element is greater than `largest`, update both. If it is less than `largest` but greater than `second_largest`, update only `second_largest`.",
    "code": "#include <vector>\n#include <climits>\n#include <iostream>\n\nint findSecondLargest(const std::vector<int>& arr) {\n    int largest = INT_MIN;\n    int second_largest = INT_MIN;\n    \n    for (int num : arr) {\n        if (num > largest) {\n            second_largest = largest;\n            largest = num;\n        } else if (num > second_largest && num != largest) {\n            second_largest = num;\n        }\n    }\n    return second_largest;\n}",
    "example": "Input: [10, 5, 20, 20, 8] -> Output: 10 (Notice 20 is the largest, 10 is second)",
    "tip": "Be careful with duplicates. If the array is `[10, 10]`, there is no second largest. The `num != largest` check handles this.",
    "summary": "Find second largest by tracking two max variables in one pass",
    "id": 160
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Remove duplicates from a vector.",
    "explanation": "There are two main ways to remove duplicates from a `std::vector` in C++:\n1. **Sort and Erase-Unique**: Sort the vector, use `std::unique()` to shift duplicates to the end, then call `.erase()` to physically remove them. O(N log N) time.\n2. **Use a Set**: Push all elements into a `std::unordered_set` which automatically rejects duplicates. O(N) time, but O(N) extra space.",
    "code": "#include <vector>\n#include <algorithm>\n\nvoid removeDuplicates(std::vector<int>& vec) {\n    // 1. Sort the vector so duplicates are adjacent\n    std::sort(vec.begin(), vec.end());\n    \n    // 2. unique() shifts duplicates to the end and returns an iterator to the new end\n    auto newEnd = std::unique(vec.begin(), vec.end());\n    \n    // 3. erase() physically deletes the garbage elements\n    vec.erase(newEnd, vec.end());\n}",
    "example": "Input: [1, 2, 2, 3, 1] -> Sort: [1, 1, 2, 2, 3] -> Unique: [1, 2, 3]",
    "tip": "The \"Erase-Unique idiom\" is one of the most famous patterns in C++. Memorize it.",
    "summary": "Remove vector duplicates using the Erase-Unique idiom",
    "id": 161
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find duplicate elements.",
    "explanation": "To find all elements that appear more than once in an array, the most robust O(N) approach is to use a Hash Map (`std::unordered_map`) to count occurrences, then print those with a count > 1.",
    "code": "#include <vector>\n#include <unordered_map>\n#include <iostream>\n\nvoid printDuplicates(const std::vector<int>& arr) {\n    std::unordered_map<int, int> counts;\n    for (int num : arr) {\n        counts[num]++;\n    }\n    \n    for (const auto& pair : counts) {\n        if (pair.second > 1) {\n            std::cout << pair.first << \" \";\n        }\n    }\n}",
    "example": "Input: [4, 3, 2, 7, 8, 2, 3, 1] -> Output: 2, 3",
    "tip": "If the problem specifies that the array contains elements exactly in the range 1 to N, you can achieve O(1) space by negating the value at the index `abs(num) - 1`. If it's already negative, it's a duplicate!",
    "summary": "Find duplicate elements using a frequency hash map",
    "id": 162
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find missing numbers.",
    "explanation": "If you are given an array of size `N-1` containing distinct integers in the range `[1, N]`, you can find the single missing number using the mathematical sum formula.\nCalculate the expected sum `N * (N + 1) / 2`, then calculate the actual sum of the array. The difference is the missing number! This is an elegant O(N) time, O(1) space solution.",
    "code": "#include <vector>\n#include <numeric>\n\nint findMissingNumber(const std::vector<int>& arr, int n) {\n    // Expected sum of 1 to N\n    int expectedSum = n * (n + 1) / 2;\n    \n    // Actual sum using STL accumulate\n    int actualSum = std::accumulate(arr.begin(), arr.end(), 0);\n    \n    return expectedSum - actualSum;\n}",
    "example": "Input: [1, 2, 4, 5, 6], N = 6 -> Expected: 21, Actual: 18 -> Missing: 3",
    "tip": "For extremely large N, `N * (N + 1)` might cause integer overflow. An alternative O(1) space approach uses XOR operations.",
    "summary": "Find missing number using the N*(N+1)/2 mathematical sum formula",
    "id": 163
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Merge two sorted arrays.",
    "explanation": "To merge two sorted arrays into a single sorted array optimally, use the Two-Pointer approach. Place one pointer at the start of array A, and another at the start of array B. Compare the elements, copy the smaller one to the result array, and advance the corresponding pointer. This takes O(N+M) time.",
    "code": "#include <vector>\n\nstd::vector<int> mergeSorted(const std::vector<int>& a, const std::vector<int>& b) {\n    std::vector<int> result;\n    int i = 0, j = 0;\n    \n    while (i < a.size() && j < b.size()) {\n        if (a[i] < b[j]) {\n            result.push_back(a[i++]);\n        } else {\n            result.push_back(b[j++]);\n        }\n    }\n    \n    // Add remaining elements\n    while (i < a.size()) result.push_back(a[i++]);\n    while (j < b.size()) result.push_back(b[j++]);\n    \n    return result;\n}",
    "example": "Input: [1, 3, 5], [2, 4, 6] -> Output: [1, 2, 3, 4, 5, 6]",
    "tip": "C++ STL has a built in `std::merge(a.begin(), a.end(), b.begin(), b.end(), std::back_inserter(result))` which does exactly this.",
    "summary": "Merge two sorted arrays using the two-pointer technique",
    "id": 164
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find common elements between two vectors.",
    "explanation": "If the vectors are unsorted, you can load one vector into a `std::unordered_set`, then iterate through the second vector checking if each element exists in the set. This takes O(N+M) time and O(N) space.\n\nIf the vectors are sorted, you can use the Two-Pointer technique (like merging) to find intersections in O(N+M) time and O(1) space.",
    "code": "#include <vector>\n#include <unordered_set>\n\nstd::vector<int> findCommon(const std::vector<int>& v1, const std::vector<int>& v2) {\n    std::unordered_set<int> set1(v1.begin(), v1.end());\n    std::vector<int> result;\n    \n    for (int num : v2) {\n        if (set1.count(num)) {\n            result.push_back(num);\n            set1.erase(num); // Prevent duplicates in result\n        }\n    }\n    return result;\n}",
    "example": "Input: [1, 2, 3], [2, 3, 4] -> Output: [2, 3]",
    "tip": "For sorted arrays, the STL provides `std::set_intersection` which writes the common elements to an output iterator.",
    "summary": "Find common elements using an unordered_set for O(N) lookup",
    "id": 165
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find two numbers whose sum equals a target.",
    "explanation": "This is the legendary 'Two Sum' problem (LeetCode #1). The optimal approach is to use a Hash Map (`std::unordered_map`). As you iterate through the array, calculate the `complement` (Target - Current Number). Check if the `complement` exists in the map. If it does, you found your pair! If it doesn't, add the current number to the map and continue. This achieves O(N) time complexity.",
    "code": "#include <vector>\n#include <unordered_map>\n\nstd::vector<int> twoSum(const std::vector<int>& nums, int target) {\n    std::unordered_map<int, int> map; // Value -> Index\n    \n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        \n        if (map.find(complement) != map.end()) {\n            return {map[complement], i};\n        }\n        map[nums[i]] = i;\n    }\n    return {};\n}",
    "example": "Input: [2, 7, 11, 15], Target 9 -> Output: [0, 1] (because 2 + 7 = 9)",
    "tip": "Always clarify if the array is sorted. If it is already sorted, you can use a Two-Pointer approach (one at start, one at end) to solve it in O(N) time with O(1) space!",
    "summary": "Solve Two Sum in O(N) time using a complement Hash Map",
    "id": 166
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Sort a vector without using sort().",
    "explanation": "If asked not to use `std::sort()`, the interviewer wants you to implement a sorting algorithm manually. Depending on the context, you might write Bubble Sort (easy but O(N^2)), Quick Sort (fast O(N log N)), or Merge Sort (stable O(N log N)). Below is the implementation of the highly efficient Quick Sort partition logic.",
    "code": "#include <vector>\n#include <algorithm>\n\nint partition(std::vector<int>& arr, int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n    \n    for (int j = low; j <= high - 1; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            std::swap(arr[i], arr[j]);\n        }\n    }\n    std::swap(arr[i + 1], arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(std::vector<int>& arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}",
    "example": "",
    "tip": "Quicksort is practically the default sorting algorithm for interview whiteboard coding. Memorize the partition function.",
    "summary": "Implement manual sorting (like Quick Sort) without std::sort",
    "id": 167
  },
  {
    "category": "Coding: Array / STL Problems",
    "title": "Find the kth largest element.",
    "explanation": "The naive approach is to sort the array and pick the `K`th element from the back (O(N log N)). However, the optimal approach is to use a Min-Heap (`std::priority_queue` in C++). Maintain a heap of size K. Iterate through the array; if an element is larger than the top of the heap, pop the top and push the new element. At the end, the top of the heap is the Kth largest element. This takes O(N log K) time.",
    "code": "#include <vector>\n#include <queue>\n\nint findKthLargest(const std::vector<int>& nums, int k) {\n    // Min-Heap of size K\n    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;\n    \n    for (int num : nums) {\n        minHeap.push(num);\n        if (minHeap.size() > k) {\n            minHeap.pop(); // Remove the smallest element so far\n        }\n    }\n    return minHeap.top();\n}",
    "example": "Input: [3, 2, 1, 5, 6, 4], k = 2 -> Output: 5",
    "tip": "C++ STL has a magical function called `std::nth_element` which solves this exactly in O(N) average time using QuickSelect algorithm!",
    "summary": "Find Kth largest element efficiently using a Min-Heap of size K",
    "id": 168
  },
  {
    "category": "Coding: Linked List",
    "title": "Reverse a linked list.",
    "explanation": "To reverse a singly linked list in-place, you need three pointers: `prev`, `curr`, and `next`. \nIterate through the list. Temporarily store the `next` node, change the `curr->next` to point to `prev`, then advance `prev` and `curr` one step forward. At the end, `prev` will be the new head. This takes O(N) time and O(1) space.",
    "code": "struct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* reverseList(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    \n    while (curr != nullptr) {\n        ListNode* nextTemp = curr->next; // Store next\n        curr->next = prev;               // Reverse pointer\n        prev = curr;                     // Move prev forward\n        curr = nextTemp;                 // Move curr forward\n    }\n    return prev; // New head\n}",
    "example": "Input: 1->2->3->4->NULL  Output: 4->3->2->1->NULL",
    "tip": "Be extremely comfortable writing this on a whiteboard. It is one of the most frequently asked basic data structure questions.",
    "summary": "Reverse a linked list iteratively using 3 pointers",
    "id": 169
  },
  {
    "category": "Coding: Linked List",
    "title": "Detect a cycle.",
    "explanation": "The optimal way to detect a cycle in a linked list is Floyd's Cycle-Finding Algorithm (also known as the Tortoise and Hare algorithm). \nUse two pointers. `slow` moves 1 step at a time, `fast` moves 2 steps. If there is a cycle, the `fast` pointer will eventually lap the `slow` pointer and they will point to the exact same node. If `fast` reaches `NULL`, there is no cycle. O(N) time, O(1) space.",
    "code": "bool hasCycle(ListNode *head) {\n    if (head == nullptr) return false;\n    \n    ListNode* slow = head;\n    ListNode* fast = head;\n    \n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;       // 1 step\n        fast = fast->next->next; // 2 steps\n        \n        if (slow == fast) {      // They met!\n            return true;\n        }\n    }\n    return false;\n}",
    "example": "",
    "tip": "If asked 'How do you find the *start* of the cycle?', mention that once they meet, reset `slow` to the head, and move both pointers 1 step at a time. The node where they meet again is the start of the cycle.",
    "summary": "Detect cycle using Floyd's Tortoise and Hare algorithm",
    "id": 170
  },
  {
    "category": "Coding: Linked List",
    "title": "Find the middle node.",
    "explanation": "You can find the middle node in a single pass using the Fast and Slow Pointer technique. \nInitialize both pointers to the head. `slow` moves 1 step, `fast` moves 2 steps. When `fast` reaches the end of the list, `slow` will be pointing exactly at the middle node.",
    "code": "ListNode* middleNode(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    \n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    "example": "Input: 1->2->3->4->5  Output: Node 3",
    "tip": "",
    "summary": "Find the middle node using fast and slow pointers",
    "id": 171
  },
  {
    "category": "Coding: Linked List",
    "title": "Remove duplicates.",
    "explanation": "If the Linked List is sorted, you can remove duplicates in O(N) time and O(1) space. Iterate through the list. If the current node's value is the same as the next node's value, adjust the current node's `next` pointer to skip the duplicate node (and delete the duplicate from memory).",
    "code": "ListNode* deleteDuplicates(ListNode* head) {\n    ListNode* curr = head;\n    \n    while (curr != nullptr && curr->next != nullptr) {\n        if (curr->val == curr->next->val) {\n            ListNode* duplicate = curr->next;\n            curr->next = curr->next->next; // Skip the node\n            delete duplicate;              // Prevent memory leak\n        } else {\n            curr = curr->next;\n        }\n    }\n    return head;\n}",
    "example": "Input: 1->1->2->3->3  Output: 1->2->3",
    "tip": "In C++, always remember to `delete` the duplicate nodes to prevent memory leaks! This differentiates a good C++ dev from a Java dev.",
    "summary": "Remove duplicates by skipping nodes and freeing memory",
    "id": 172
  },
  {
    "category": "Coding: Linked List",
    "title": "Merge two sorted linked lists.",
    "explanation": "To merge two sorted linked lists, create a dummy head node to simplify edge cases. Use a pointer `tail` to build the new list. Compare the heads of the two lists, attach the smaller node to `tail->next`, and advance that list's pointer. Repeat until one list is exhausted, then attach the remainder of the other list.",
    "code": "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0); // Stack allocated dummy node\n    ListNode* tail = &dummy;\n    \n    while (l1 != nullptr && l2 != nullptr) {\n        if (l1->val < l2->val) {\n            tail->next = l1;\n            l1 = l1->next;\n        } else {\n            tail->next = l2;\n            l2 = l2->next;\n        }\n        tail = tail->next;\n    }\n    \n    // Attach whatever is left\n    tail->next = (l1 != nullptr) ? l1 : l2;\n    \n    return dummy.next;\n}",
    "example": "Input: 1->2->4, 1->3->4  Output: 1->1->2->3->4->4",
    "tip": "Using a stack-allocated `dummy` node prevents needing to write messy `if (head == nullptr)` logic.",
    "summary": "Merge two sorted lists using a dummy head and tail pointer",
    "id": 173
  },
  {
    "category": "Coding: Linked List",
    "title": "Find the nth node from the end.",
    "explanation": "To find the Nth node from the end in a single pass, use two pointers. \nAdvance the `fast` pointer `N` steps ahead of the `slow` pointer. Then, move both pointers one step at a time. When `fast` reaches the end of the list, `slow` will be exactly N steps behind it—pointing to the Nth node from the end.",
    "code": "ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode* slow = &dummy;\n    ListNode* fast = &dummy;\n    \n    // Move fast pointer n+1 steps ahead\n    for (int i = 0; i <= n; i++) {\n        fast = fast->next;\n    }\n    \n    // Move both until fast reaches the end\n    while (fast != nullptr) {\n        slow = slow->next;\n        fast = fast->next;\n    }\n    \n    // Skip the nth node (if we were removing it)\n    ListNode* toDelete = slow->next;\n    slow->next = slow->next->next;\n    delete toDelete;\n    \n    return dummy.next;\n}",
    "example": "",
    "tip": "",
    "summary": "Find Nth from end by staggering two pointers by N steps",
    "id": 174
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a Singleton class.",
    "explanation": "A Singleton ensures that a class has only one single instance globally, and provides a global point of access to it. \nIn C++11 and later, the \"Meyers Singleton\" is the standard. It relies on the guarantee that local static variables are initialized in a thread-safe manner.",
    "code": "class Singleton {\nprivate:\n    // 1. Make constructor private\n    Singleton() {}\n    \n    // 2. Delete copy constructor and assignment operator\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n\npublic:\n    // 3. Static method returning a reference to a local static instance\n    static Singleton& getInstance() {\n        static Singleton instance; // Guaranteed thread-safe in C++11\n        return instance;\n    }\n    \n    void doSomething() { /* ... */ }\n};",
    "example": "Usage: `Singleton::getInstance().doSomething();`",
    "tip": "Meyers Singleton is elegant, completely thread-safe in modern C++, and prevents memory leaks (since it's a local static object, its destructor is automatically called at program exit).",
    "summary": "Implement Meyers Singleton using a static local variable",
    "id": 175
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a custom smart pointer.",
    "explanation": "A custom `unique_ptr` implementation tests your understanding of RAII, templates, constructors, destructors, and move semantics. \nIt must own a raw pointer, delete it in the destructor, block copying, and allow moving.",
    "code": "template <typename T>\nclass MyUniquePtr {\nprivate:\n    T* ptr;\npublic:\n    // Constructor\n    explicit MyUniquePtr(T* p = nullptr) : ptr(p) {}\n    \n    // Destructor\n    ~MyUniquePtr() { delete ptr; }\n    \n    // Delete Copy Constructor and Copy Assignment\n    MyUniquePtr(const MyUniquePtr&) = delete;\n    MyUniquePtr& operator=(const MyUniquePtr&) = delete;\n    \n    // Move Constructor\n    MyUniquePtr(MyUniquePtr&& other) noexcept : ptr(other.ptr) {\n        other.ptr = nullptr;\n    }\n    \n    // Move Assignment\n    MyUniquePtr& operator=(MyUniquePtr&& other) noexcept {\n        if (this != &other) {\n            delete ptr;\n            ptr = other.ptr;\n            other.ptr = nullptr;\n        }\n        return *this;\n    }\n    \n    // Operators\n    T& operator*() const { return *ptr; }\n    T* operator->() const { return ptr; }\n};",
    "example": "",
    "tip": "Notice how the Move operations take the pointer and immediately set `other.ptr = nullptr` to prevent double-free bugs.",
    "summary": "Implement RAII unique_ptr blocking copy and enabling move",
    "id": 176
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a custom vector-like container.",
    "explanation": "Implementing a basic `std::vector` tests your knowledge of dynamic memory allocation, templates, and capacity management. \nWhen `push_back` hits capacity, you must allocate a new array (usually double the size), copy the old elements, and delete the old array.",
    "code": "template <typename T>\nclass MyVector {\nprivate:\n    T* data;\n    size_t cap;\n    size_t sz;\n    \n    void reallocate() {\n        cap = (cap == 0) ? 1 : cap * 2;\n        T* newData = new T[cap];\n        for (size_t i = 0; i < sz; ++i) newData[i] = data[i];\n        delete[] data;\n        data = newData;\n    }\npublic:\n    MyVector() : data(nullptr), cap(0), sz(0) {}\n    ~MyVector() { delete[] data; }\n    \n    void push_back(const T& val) {\n        if (sz == cap) reallocate();\n        data[sz++] = val;\n    }\n    \n    size_t size() const { return sz; }\n    size_t capacity() const { return cap; }\n    T& operator[](size_t index) { return data[index]; }\n};",
    "example": "",
    "tip": "Explain that doubling the capacity provides \"amortized O(1)\" time complexity for insertions.",
    "summary": "Implement dynamic array that doubles capacity when full",
    "id": 177
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a simple stack using an array.",
    "explanation": "A stack is a LIFO (Last-In-First-Out) data structure. Using a fixed-size array, you just need to maintain an integer `top` that represents the index of the highest element. `top` starts at -1 (empty).",
    "code": "class Stack {\nprivate:\n    int* arr;\n    int top;\n    int capacity;\npublic:\n    Stack(int size) {\n        capacity = size;\n        arr = new int[capacity];\n        top = -1;\n    }\n    ~Stack() { delete[] arr; }\n    \n    void push(int x) {\n        if (top == capacity - 1) return; // Overflow\n        arr[++top] = x;\n    }\n    \n    int pop() {\n        if (top == -1) return -1; // Underflow\n        return arr[top--];\n    }\n    \n    int peek() {\n        if (top == -1) return -1;\n        return arr[top];\n    }\n};",
    "example": "",
    "tip": "",
    "summary": "Implement a LIFO stack using an array and a 'top' index pointer",
    "id": 178
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a queue using an array.",
    "explanation": "A queue is a FIFO (First-In-First-Out) data structure. A standard array queue requires a `front` and `rear` pointer. To prevent wasted space when items are popped, it's best to implement a Circular Queue using modulo arithmetic (`%`).",
    "code": "class Queue {\nprivate:\n    int* arr;\n    int front, rear, count, capacity;\npublic:\n    Queue(int size) : capacity(size), front(0), rear(-1), count(0) {\n        arr = new int[capacity];\n    }\n    ~Queue() { delete[] arr; }\n    \n    void push(int x) {\n        if (count == capacity) return; // Full\n        rear = (rear + 1) % capacity;  // Circular wrap-around\n        arr[rear] = x;\n        count++;\n    }\n    \n    void pop() {\n        if (count == 0) return; // Empty\n        front = (front + 1) % capacity;\n        count--;\n    }\n    \n    int peek() {\n        if (count == 0) return -1;\n        return arr[front];\n    }\n};",
    "example": "",
    "tip": "Modulo arithmetic `(index + 1) % capacity` is the secret to a circular array.",
    "summary": "Implement a FIFO circular queue using front/rear pointers and modulo",
    "id": 179
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a custom string class.",
    "explanation": "A custom String class requires deep understanding of dynamic char arrays and the Rule of Three. You must safely allocate memory for characters, ensure it is null-terminated, and safely clean it up.",
    "code": "#include <cstring>\n#include <iostream>\n\nclass MyString {\nprivate:\n    char* str;\npublic:\n    // Constructor\n    MyString(const char* val = \"\") {\n        str = new char[strlen(val) + 1];\n        strcpy(str, val);\n    }\n    \n    // Copy Constructor (Deep Copy)\n    MyString(const MyString& source) {\n        str = new char[strlen(source.str) + 1];\n        strcpy(str, source.str);\n    }\n    \n    // Destructor\n    ~MyString() {\n        delete[] str;\n    }\n    \n    // Print\n    void print() const {\n        std::cout << str << \"\\n\";\n    }\n};",
    "example": "",
    "tip": "Don't forget the `+ 1` when allocating `strlen(val) + 1`. This is for the `\\0` null terminator character!",
    "summary": "Implement basic string class managing a dynamic char array",
    "id": 180
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Demonstrate deep copy.",
    "explanation": "When an object contains a pointer to dynamically allocated memory on the heap, the default C++ copy constructor will perform a Shallow Copy (copying the address). \nTo prevent a double-free crash, you MUST write a custom Copy Constructor that performs a Deep Copy—allocating new memory and copying the values.",
    "code": "class Box {\npublic:\n    int* data;\n    \n    // Constructor\n    Box(int val) { data = new int(val); }\n    \n    // DEEP COPY CONSTRUCTOR\n    Box(const Box& other) {\n        data = new int(*other.data); // Allocate NEW memory, copy value\n    }\n    \n    ~Box() { delete data; }\n};\n\n// Usage:\n// Box b1(10);\n// Box b2 = b1; // Triggers deep copy. b1 and b2 have separate memory.",
    "example": "",
    "tip": "",
    "summary": "Write a custom copy constructor to allocate separate heap memory",
    "id": 181
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Demonstrate move semantics.",
    "explanation": "Move semantics optimize performance by \"stealing\" memory from temporary (rvalue) objects rather than performing an expensive deep copy. \nIt is implemented by writing a Move Constructor taking an `&&` rvalue reference. You copy the pointer, and then nullify the original pointer so the temporary object's destructor doesn't delete the memory.",
    "code": "class Buffer {\npublic:\n    int* data;\n    \n    Buffer(int val) { data = new int(val); }\n    \n    // MOVE CONSTRUCTOR\n    Buffer(Buffer&& other) noexcept {\n        data = other.data;    // 1. Steal the memory address\n        other.data = nullptr; // 2. Nullify the source pointer\n    }\n    \n    ~Buffer() { delete data; }\n};\n\n// Usage:\n// Buffer b = Buffer(10); // Triggers Move Constructor!",
    "example": "",
    "tip": "",
    "summary": "Write a move constructor to steal pointers from rvalues",
    "id": 182
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a class following the Rule of Five.",
    "explanation": "The Rule of Five dictates that if a class requires a Destructor, it should implement all 5 special member functions to be safe (copying) and optimized (moving).",
    "code": "class Resource {\nprivate:\n    int* data;\npublic:\n    Resource() : data(new int(0)) {} // Default\n    ~Resource() { delete data; }     // 1. Destructor\n\n    // 2. Copy Constructor\n    Resource(const Resource& other) { data = new int(*other.data); }\n    \n    // 3. Copy Assignment Operator\n    Resource& operator=(const Resource& other) {\n        if (this != &other) {\n            delete data;\n            data = new int(*other.data);\n        }\n        return *this;\n    }\n\n    // 4. Move Constructor\n    Resource(Resource&& other) noexcept : data(other.data) {\n        other.data = nullptr;\n    }\n    \n    // 5. Move Assignment Operator\n    Resource& operator=(Resource&& other) noexcept {\n        if (this != &other) {\n            delete data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n};",
    "example": "",
    "tip": "Checking `if (this != &other)` is critical in assignment operators to prevent an object from deleting its own memory during self-assignment (`a = a;`).",
    "summary": "Implement Destructor, Copy/Move Constructors, and Assignments",
    "id": 183
  },
  {
    "category": "Coding: OOP / C++ Specific",
    "title": "Implement a thread-safe Singleton.",
    "explanation": "If the interviewer asks for an older (pre-C++11) Thread-Safe Singleton or wants to see explicit mutex locking, you can implement the Double-Checked Locking pattern. \nIt ensures that the expensive mutex lock only happens the very first time the instance is created.",
    "code": "#include <mutex>\n\nclass SafeSingleton {\nprivate:\n    static SafeSingleton* instance;\n    static std::mutex mtx;\n    SafeSingleton() {}\n\npublic:\n    static SafeSingleton* getInstance() {\n        if (instance == nullptr) {                  // 1st Check (No Lock)\n            std::lock_guard<std::mutex> lock(mtx);  // Lock\n            if (instance == nullptr) {              // 2nd Check (Locked)\n                instance = new SafeSingleton();\n            }\n        }\n        return instance;\n    }\n};\n\n// Initialize static members in the .cpp file\nSafeSingleton* SafeSingleton::instance = nullptr;\nstd::mutex SafeSingleton::mtx;",
    "example": "",
    "tip": "Again, mention that in C++11 and higher, simply using a local static variable (Meyers Singleton) is automatically thread-safe and much cleaner than Double-Checked Locking.",
    "summary": "Implement thread-safe Singleton using double-checked locking",
    "id": 184
  }
];