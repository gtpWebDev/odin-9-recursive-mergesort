Pseudo code for merge sort

3 stage process:
Sort the left hand side
Sort the right hand side
Merge

Example: 3,2,1,7,6,5,4

          _____
        FULL SORT PROCESS - SORT LHS, SORT RHS, MERGE
        1. SORT LHS [3,2,1]


                _____
                FULL SORT PROCESS - SORT LHS, SORT RHS, MERGE
                1. SORT LHS [3]
                  BASE CASE. Single element is sorted. Return[3]
                  Sort complete
                2. SORT RHS [2,1]


                        _____
                        FULL SORT PROCESS - SORT LHS, SORT RHS, MERGE
                        1. SORT LHS [2]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          RETURN[2]
                        2. SORT RHS [1]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          RETURN[1]
                        3. MERGE [2] and [1]
                          Select [1], current [1], remaining [2] and []
                          Select [2], current [1,2], remaining [] and []
                          Both arrays empty. Merge complete
                          Sort complete
                          RETURN[1,2]
                        _____


                3. MERGE [3] and [1,2]
                  Select [1], current [1], remaining [3] and [2]
                  Select [2], current [1,2], remaining [3] and []
                  Select [3], current [1,2,3], remaining [] and []
                  Both arrays empty. Merge complete
                  Sort complete
                  RETURN [1,2,3]
                _____




        2. SORT RHS [7,6,5,4]


                _____
                FULL PROCESS - SORT LHS, SORT RHS, MERGE
                1. SORT LHS [7,6]


                        _____
                        FULL PROCESS - SORT LHS, SORT RHS, MERGE
                        1. SORT LHS [7]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          Return[7]
                        2. SORT RHS [6]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          Return[6]
                        3. MERGE [7] and [6]
                          Select [6], current [6], remaining [7] and []
                          Select [7], current [6,7], remaining [] and []
                          Both arrays empty. Merge complete
                          Sort complete
                          RETURN[6,7]
                        _____


                2. SORT RHS [5,4]


                        _____
                        FULL PROCESS - SORT LHS, SORT RHS, MERGE
                        1. SORT LHS [5]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          Return[5]
                        2. SORT RHS [4]
                          BASE CASE. Single element is sorted.
                          Sort complete
                          Return[4]
                        3. MERGE [5] and [4]
                          Select [4], current [4], remaining [5] and []
                          Select [5], current [4,5], remaining [] and []
                          Both arrays empty. Merge complete
                          Sort complete
                          RETURN[4,5]
                        _____

                3. MERGE [6,7] and [4,5]
                  Select [4], current [4], remaining [6,7] and [5]
                  Select [5], current [4,5], remaining [6,7] and []
                  Select [6], current [4,5,6], remaining [7] and []
                  Select [7], current [4,5,6,7], remaining [] and []
                  Both arrays empty. Merge complete
                  Sort complete
                  RETURN [4,5,6]
                  _____

        3. MERGE [1,2,3] and [4,5,6]
          Select [1], current [1], remaining [2,3] and [4,5,6]
          Select [2], current [1,2], remaining [3] and [4,5,6]
          Select [3], current [1,2,3], remaining [] and [4,5,6]
          Select [4], current [1,2,3,4], remaining [] and [5,6]
          Select [5], current [1,2,3,4,5], remaining [] and [6]
          Select [6], current [1,2,3,4,5,6], remaining [] and []
          Both arrays empty. Merge complete
          Sort complete
          RETURN [1,2,3,4,5,6]
