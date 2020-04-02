module Tests exposing (..)

import Array exposing (fromList, toList)
import Expect
import Main exposing (findOffByOnes, isOffByOne, wordTransform)
import Test exposing (..)



-- Check out https://package.elm-lang.org/packages/elm-explorations/test/latest to learn more about testing in Elm!


all : Test
all =
    describe "Word Transform"
        [ test "checks if two words are off by one letter should be true" <|
            \_ ->
                Expect.equal (isOffByOne "dog" "dot") True
        , test "checks if two words are off by one letter should be false" <|
            \_ ->
                Expect.equal (isOffByOne "dog" "dat") False
        , test
            "should not be able find the ordered sequence of one letter transformations"
          <|
            \_ ->
                Expect.equalLists (toList (wordTransform "dog" "cat" (fromList [ "dot", "tod", "dat", "dar" ]))) []
        , test "should find all other words with one off" <|
            \_ ->
                Expect.equalLists (toList (findOffByOnes "dog" (fromList [ "dot", "tod", "dat", "dar", "dag" ]) (Array.initialize 0 (always "")))) [ "dot", "dag" ]
        , test "should find the ordered sequence of one letter transformations" <|
            \_ ->
                Expect.equalLists (toList (wordTransform "dog" "cat" (fromList [ "dog", "dot", "dop", "dat", "cat" ]))) [ "dog", "dot", "dat", "cat" ]
        ]
