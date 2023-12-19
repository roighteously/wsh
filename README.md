# wsh | an interpreter

"WillySoft: HARD" (abbreviated as wsh) is a joke programming language.  

This is a Node "transpiler" (if you can call that).  

Files are taken as "(file).ws" and mods are "(file).mod.ws"  
> if you disable a file, it must be named "(file).wsd"  

Syntax *testing\* is in [test.wsd](./ws/test.wsd)  

## The way it works
the file is a lie!  

Each line is interpreted seperately and then just string replaced. The ws::syntax is a lie, but we shush about that.  
> This means that you are able to write JS in a .ws file, and it will just copy that over as JS. Lol.

## SYNTAX! | wsh

Very willy. very soft. very Hard.  

WsH has "modules" that are ran at "compile time" to "transpile" your code to runnable JS.

Every command is usually structured as following

Variables: `@set ws::var varName = type::str("im a string")`  

Wait what is a @ and a ws:: and a :: and a type  

## Introducing Macros and Methods

Modules have defined namespaces. To use a method from, use "namespace::method".  
Here at willy soft, we dont like use parenthesis. That's why all native Node code is what uses parenthesis (but only beacuse that's required.)  

So here's what that looks like. (Example is `modone.mod.ws`)
```ws
mod::init modone starts
ws::print(type::str("HELLO WILLY WORLD"))
ends
mod::pkg modone
```  

This can be called like so:
```ws
@set ws::var mod = mod::locreq(modone)::get
mod::run
```  

And honestly, don't even ask me why this works because I don't know.  

Ok tahts it, time for the test:  

Write a turing-complete macine in wilyl soft (ONLY WILLYSOFT. DO NOT USE NATIVE NODE UNLESS YOU MUST)