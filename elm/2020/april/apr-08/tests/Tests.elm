module Tests exposing (..)

import Expect
import Main exposing (rotateList)
import Test exposing (..)



-- Check out https://package.elm-lang.org/packages/elm-explorations/test/latest to learn more about testing in Elm!


all : Test
all =
    describe "LinkedList rotate"
        [ test "should rotate the list by 2" <|
            \_ ->
                Expect.equalLists (rotateList [ 7, 7, 3, 5 ] 2) [ 3, 5, 7, 7 ]
        , test "should rotate the list by 3" <|
            \_ ->
                Expect.equalLists (rotateList [ 1, 2, 3, 4, 5 ] 3) [ 3, 4, 5, 1, 2 ]
        , test "should rotate the list by 5" <|
            \_ ->
                Expect.equalLists (rotateList [ 1, 2, 3, 4, 5 ] 5) [ 1, 2, 3, 4, 5 ]
        ]
