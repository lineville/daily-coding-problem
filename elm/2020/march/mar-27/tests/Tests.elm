module Tests exposing (..)

import Expect
import Main exposing (smallerElementsAfter)
import Test exposing (..)



-- Check out https://package.elm-lang.org/packages/elm-explorations/test/latest to learn more about testing in Elm!


all : Test
all =
    describe "Testing Suite"
        [ test "Maps every Element to the count of smaller elements that come after it" <|
            \_ ->
                Expect.equal (smallerElementsAfter [ 3, 4, 9, 6, 1 ]) [ 1, 1, 2, 1, 0 ]
        ]
