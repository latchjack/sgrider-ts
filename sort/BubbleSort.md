# Bubble Sort Algorithm

| A   | B   | C   | D   |
| --- | --- | --- | --- |
| 0   | 10  | -1  | 5   |

BSA is doubled nested for loop that iterates through our entier collection several times.
For each iteration it considers each pair inside our collection

At every pair, BS asks itself one question "is the one on the left greater than the one on the right?".
If the one on the left is greater than the one on theright, then BS swaps them around

e.g.

Is 0 > 10? If so, swap them around
| A | B |
| --- | --- |
| 0 | 10 |

In this case, 0 is not greater than, so no swapping will occur
It then moves on to the next pair

| B   | C   |
| --- | --- |
| 10  | -1  |

Is 10 > -1? If so, swap them around

## Wikipedia definition

"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java"
