module Main exposing (smallerElementsAfter, smallerElementsAfterHelper)

--- Daily Coding Problem March 27th 2020
--- [Medium] -- Google
--- * Given an array of integers, return a new array where each element in the new array
--- * is the number of smaller elements to the right of that element in the original input array.


smallerElementsAfter : List Int -> List Int
smallerElementsAfter nums =
    case nums of
        x :: xs ->
            smallerElementsAfterHelper xs x :: smallerElementsAfter xs

        _ ->
            []


smallerElementsAfterHelper : List Int -> Int -> Int
smallerElementsAfterHelper numsAfter target =
    case numsAfter of
        [] ->
            0

        x :: xs ->
            if x < target then
                smallerElementsAfterHelper xs target + 1

            else
                smallerElementsAfterHelper xs target
