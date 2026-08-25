why javascript is called the interpreted language?

JavaScript is an interpreted language. To understand this better, let's look at interpreters, compilers, and JIT (Just-In-Time) compilers:
1. Interpreter: An interpreter runs instructions directly from the programming language without changing them into machine code first.
2. Compiler: A compiler changes the entire program into object code (or binary code) and saves it. This code can then be run by the machine.
3. JIT Compiler: A JIT compiler converts code into byte code first. Then, at runtime,
    it changes the byte code into machine-readable code, which makes the program run faster.

How Code is Executed (The Compilation Phase) ?

While many call JavaScript an interpreted language,
modern engines use Just-In-Time (JIT) Compilation to make it incredibly fast. 
When you feed code to the engine, it goes through three major steps:

1.Parsing: The engine reads your code and parses it into a tree data structure called an Abstract Syntax Tree (AST).

2.Compilation: The engine takes that tree and translates it into intermediate Bytecode.

3.Execution & Optimization: The engine starts running the bytecode while simultaneously monitoring it. 
  If a piece of code runs frequently, the JIT compiler compiles it directly into Machine Code 
  on the fly so it executes at lightning speed.