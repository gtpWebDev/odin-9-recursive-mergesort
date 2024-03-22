Overall process:

1. split the array into halves, with LHS array being the smaller if an odd number
2. sort LHS
3. sort RHS
4. merge LHS and RHS - done above

5. Split process

declare input array
get length of array
if length is even (mod 2 is zero)
separate into two even
else if length is odd
separate into half rounded down and half rounded up

4. Merge process:
   declare the left side sorted array = lhsSorted
   declare the right side sorrted array = rhsSorted
   identify lowest of first elements of both arrays. take left if equal
   add that number to the output array
   remove that element from the lhsSorted or rhsSorted array
   repeat the process until both arrays are empty
