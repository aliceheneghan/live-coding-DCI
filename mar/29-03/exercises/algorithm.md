Watch this video: https://www.youtube.com/watch?v=Ct-lOOUqmyY

----

You work in a library and your task is to find the book with the largest number of pages.

You are given a long list of book titles printed on paper, with the number of pages next to it, on a single column, like this:

- Lord of the Flies, 226
- The Fire Next Time, 128
- The Left Hand of Darkness, 286
...

There are 10 pages like this, with 100 books on each page, for a total of 1000 books.

The only tools you have are a pen and some extra paper.

Write the step-by-step instructions to solve this task going in as much detail as possible.

Use regular language and don't think about JavaScript. Imagine you have to give these instructions to someone else


------

Example task:

To give you an example of how you can describe your approach, let's see an example.

We have a long list of numbers printed on paper, one number per line, and our task is to get the sum of all the even numbers in this list.

For example, given the list:
2
12
13
4
7

The sum of the even numbers is: 18

Step-by-step instructions:

1. take an empty piece of paper and write SUM at the top and then the number 0
2. read the first number from the list of numbers
3. check if the number is an even number
   1. if the last digit of the number is one of the following numbers: 0, 2, 4, 6, 8, the number is even
   2. otherwise, it's an odd number
4. if the number is even, I add it to the current number written on the SUM piece of paper 
    1. I read the current value written on it
    2. sum it to the latest even number I've just found on my list
    3. write the result on my piece of paper
    4. I cross the previous value for the sum
5. I move to the next number in the list and repet from step 3 until I reach the last number