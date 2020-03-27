module Tests exposing (..)

import Expect
import Main exposing (..)
import Test exposing (..)


evaluateSimpleExpressionTests : Test
evaluateSimpleExpressionTests =
    describe "Evaluate Simple Expression"
        [ test "evaluateSimpleExpression 3 + 5" <|
            \_ ->
                Expect.equal (evaluateSimpleExpression 3 Add 5) (Operand 8)
        , test "evaluateSimpleExpression 2 - 5" <|
            \_ ->
                Expect.equal (evaluateSimpleExpression 2 Subtract 5) (Operand -3)
        , test "evaluateSimpleExpression 2 * 5" <|
            \_ ->
                Expect.equal (evaluateSimpleExpression 2 Multiply 5) (Operand 10)
        , test "evaluateSimpleExpression 15 // 5" <|
            \_ ->
                Expect.equal (evaluateSimpleExpression 15 Divide 5) (Operand 3)
        ]


postFixHelperTests : Test
postFixHelperTests =
    describe "PostFix Helper"
        [ test "postfixHelper [3, 5, Add]" <|
            \_ ->
                Expect.equal (postFixHelper [ Operand 3, Operand 5, Operator Add ] []) (Operand 8)
        ]


postFixCalculatorTests : Test
postFixCalculatorTests =
    describe "PostFix Calculator"
        [ test "postFixCalculator [5, 3, Add]" <|
            \_ ->
                Expect.equal (postFixCalculate [ Operand 5, Operand 3, Operator Add ]) 8
        , test "postFixCalculator [15, 3, Divide]" <|
            \_ ->
                Expect.equal (postFixCalculate [ Operand 15, Operand 3, Operator Divide ]) 5
        , test "postFixCalculator [7, 2, Subtract]" <|
            \_ ->
                Expect.equal (postFixCalculate [ Operand 7, Operand 2, Operator Subtract ]) 5
        , test "postFixCalculator [7, 1, 1, Add, Subtract]" <|
            \_ ->
                Expect.equal (postFixCalculate [ Operand 7, Operand 1, Operand 1, Operator Add, Operator Subtract ]) 5
        , test "postFixCalculator [15, 7, 1, 1, Add, Subtract, Divide, 3, Multiply, 2, 1, 1, Add, Add, Subtract]" <|
            \_ ->
                Expect.equal (postFixCalculate [ Operand 15, Operand 7, Operand 1, Operand 1, Operator Add, Operator Subtract, Operator Divide, Operand 3, Operator Multiply, Operand 2, Operand 1, Operand 1, Operator Add, Operator Add, Operator Subtract ]) 5
        ]
