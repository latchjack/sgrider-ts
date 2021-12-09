# Bubble Sort Algorithm

| A   | B   | C   | D   |
| --- | --- | --- | --- |
| 0   | 10  | -1  | 5   |

BSA is a doubled nested for loop that iterates through our entier collection several times.
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

Is 10 > -1? If so, swap them around
| B | C |
| --- | --- |
| 10 | -1 |

Results in...
| A | B | C | D |
| --- | --- | --- | --- |
| 0 | -1 | 10 | 5 |

Is 10 > 5?...
| C | D |
| --- | --- |
| 10 | 5 |

Results in...
| A | B | C | D |
| --- | --- | --- | --- |
| 0 | -1 | 5 | 10 |

This is 1 iteration through the array.
It then jumps back to the start of the array for another iteration until
we have the elements in order (lowest/left to highest/right).

The greatest element will be moved to the right on the first iteration. So we never have to evaluate it again, as it's in the correct position.

So on the next iteration we'd only have to look at A, B and C ignoring D.
| A | B | C | ~~D~~ |
| --- | --- | --- | --- |
| 0 | -1 | 5 | ~~10~~ |

A vs B, B vs C and so on, until they have been sorted into order.

Resulting in...
| A | B | C | D |
| --- | --- | --- | --- |
| -1 | 0 | 5 | 10 |

## Wikipedia definition

"Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.

This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java"
