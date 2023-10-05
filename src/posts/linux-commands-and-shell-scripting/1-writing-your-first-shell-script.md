---
title: '1. Writing Your First Shell Script'
description: "Des."
author: 'Kian Yang Lee'
date: '2023-10-05'
published: true
---

## What is a Shell Script?

A shell script is a mini program that contains a set of commands to be executed sequentially from top to bottom.

Coming up with an usable shell script in production requires 3 steps (typically), which are:

1. Write your script
2. Store it somewhere
3. Make it executable

Let's follow through with these steps:

## 1. Write Your Script

Use any of your preferred editor and write the following:

```sh
#!/bin/bash
echo 'Hello stranger!'
echo 'This is your first script'
# and more to come!
```

`echo` is a command that sends whatever in the argument to stdout.
We can write comments by starting the statement with hash symbol.
The first line is a called a `shebang`, it tells the kernel the name of the interpreter to be used for script execution.

## 2. Store It Somewhere

Let's save the script. Usual naming convention of shell scripts are lowercase separated by underscores. I will name this file `first_script.sh` and store it in my home directory.

## 3. Make It Executable

Files have permissions to dictate who can do what with them.
To execute the file, we need to have execute permission.
Execute the command to allow for file execution.

```sh
chmod 755 first_script.sh
```

## Execution

To execute the script, I first move the the level where my script resides, and execute the following:

```sh
./first_script.sh
# STDOUT
# Hello stranger!
# This is your first script
```

You might notice the `./` in front of the file name. This means that we preceded the script with an explicit path (for example, if my home directory is `/home/kianyang`, this translates to `/home/kianyang/first_script.sh`)

The explicit path is needed because the system will search for a list of directories to execute programs if one is not provided. Specifically, the system checks for the `PATH` environment variable. You can check for it by:

```sh
echo $PATH
```

This will list out the directories that the system will search for. If we want to run the script without indicating its explicit path, we can add the directory that the script resides in (where you saved in Step 2) to the `PATH` environment variable:

```sh
export PATH=~:"$PATH"
```

This will take effect in the other new terminal sessions. To make it effective for the current shell, do the following:

```sh
. .bashrc
```

This is called *sourcing* the `bashrc` file, kinda like a refresh in browser. Now we can run the script without explicit path:

```sh
first_script.sh
# STDOUT
# Hello stranger!
# This is your first script
```