---
title: 'Java Lambda Expressions'
description: 'Describes what is Java lambda expression, why we use it and how to use it.'
author: 'Kian Yang Lee'
published: false
datePublished: '2023-10-17'
lastUpdated: '2023-10-17'
categories: 'java'
tags: 'java'
category: 'java'
---

## What is Lambda Expressions

Lambda expressions, or _lambdas_ for short, are commonly used in functional programming. It was first introduced in Java 8.

It allows for Java user to create instances of functional interface for one-time usage in a concise-manner.

## Why Use Lambda Expressions

Lambdas cuts down the boilerplate needed to write more concise code that are easier to the eyes. Consider the following two snippet of code for sorting words by the length of each word:

Prior to Java 8 using anonymous class to create function object:

```java
    private static void sortUsingAnonymousClass(List<String> wordList) {
        Collections.sort(wordList, new Comparator<String>() {
            public int compare(String s1, String s2) {
                return Integer.compare(s1.length(), s2.length());
            }
        });
    }
```

Since Java 8 using lambda expression:

```java
    private static void sortUsingLambdas(List<String> wordList) {
        Collections.sort(wordList, (s1, s2) -> Integer.compare(s1.length(), s2.length()));
    }
```

Both code snippet achieves the same thing functionally, but the latter is obviously the better one in terms of readability.

## How to Use Lambda Expressions

Let's disect the lambda expression from the sample code below:

```java
(s1, s2) -> Integer.compare(s1.length(), s2.length())
```

There are three main parts, which are:

i. Parameter(s) separated by comma and enclosed in parentheses, in this case `(s1,s2)`. Parentheses can be omitted if there is just one parameter.

ii. Arrow token `->`

iii. Body that is either a single expression or a statement block, in this case `Integer.compared(s1.length(), s2.length())`. For single expression, Java runtime will return whatever value that is left after evaluation. For statement block, you need to explicitly return a value. The following are the equivalent of example using statement block as body:

```java
(s1, s2) -> {
  Integer result = Integer.compare(s1.length(), s2.length());
  return result;
}
```

You may noticed that there is no type information for the parameters. Java compiler is able to deduce the parameter types by context, and often users do not need to add type information to it unless it absolutely makes the code clearer. Generally, you do not need to specify type unless the compiler complains about it.

## References

The resources below are referenced when writing this article:

- [Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
- Effective Java 3rd Edition by Joshua Bloch
