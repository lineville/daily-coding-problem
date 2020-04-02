module Main exposing (..)

import Array exposing (..)
import String exposing (fromList, toList)



-- * Daily Coding Problem April 1st 2020
-- * [Medium] -- Google
-- ****************************************************************
--  * Given a start word, an end word, and a dictionary of valid words,
-- * find the shortest transformation sequence from start to end such that
-- * only one letter is changed at each step of the sequence, and each transformed
-- * word exists in the dictionary. If there is no possible transformation, return null.
-- * Each word in the dictionary have the same length as start and end and is lowercase.
-- * Returning empty array for simplicity
-- * Returns the ordered sequence of single letter transformations needed to transform
-- * start into end using only words contained in dictionary


wordTransform : String -> String -> Array String -> Array String
wordTransform start end dictionary =
    wordTransformHelper start end dictionary (initialize 0 (always ""))


wordTransformHelper : String -> String -> Array String -> Array String -> Array String
wordTransformHelper current target dictionary sequence =
    if current == target then
        sequence

    else
        case get 0 (findOffByOnes current dictionary sequence) of
            Just val ->
                wordTransformHelper val target dictionary (push val sequence)

            Nothing ->
                Array.initialize 0 (always "")


findOffByOnes : String -> Array String -> Array String -> Array String
findOffByOnes word dictionary sequence =
    dictionary
        |> Array.filter (\w -> isOffByOne word w && not (arrayIncludes word sequence))


isOffByOne : String -> String -> Bool
isOffByOne word other =
    isOffByOneHelper word other 0


isOffByOneHelper : String -> String -> Int -> Bool
isOffByOneHelper word other mismatches =
    case ( String.toList word, String.toList other ) of
        ( [], [] ) ->
            mismatches == 1

        ( x :: xs, y :: ys ) ->
            if x == y then
                isOffByOneHelper (String.fromList xs) (String.fromList ys) mismatches

            else
                isOffByOneHelper (String.fromList xs) (String.fromList ys) (mismatches + 1)

        ( _, _ ) ->
            False


arrayIncludes : a -> Array a -> Bool
arrayIncludes item arr =
    case get 0 arr of
        Just val ->
            if val == item then
                True

            else
                arrayIncludes item (Array.slice 1 (length arr) arr)

        Nothing ->
            False
