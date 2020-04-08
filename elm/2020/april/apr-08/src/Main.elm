module Main exposing (..)

import List exposing (..)



-- * Daily Coding Problem April 8th 2020
-- * [Medium] -- Google
-- ****************************************************************
--  * Given a linked list and a positive integer k, rotate the list to the right by k places.
-- ! Ex: 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7
-- ! Ex: 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2


rotateList : List a -> Int -> List a
rotateList list k =
    case ( reverse list, k ) of
        ( _, 0 ) ->
            list

        ( x :: xs, _ ) ->
            rotateList (concat [ [ x ], reverse xs ]) (k - 1)

        ( _, _ ) ->
            list
