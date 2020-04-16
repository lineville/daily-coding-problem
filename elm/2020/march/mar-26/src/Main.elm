module Main exposing (..)

import List exposing (..)



--- Daily Coding Problem March 26 2020
--- Calculate the result of an expression in reverse polish notation or postfix
--- ! Ex: 5 3 + ==> 8
-- ! Ex: 15, 7, 1, 1, +, -, /, 3, *, 2, 1, 1, +, +, - => 5


type Operator
    = Add
    | Subtract
    | Multiply
    | Divide


type Token
    = Operator Operator
    | Operand Int
    | Error


postFixCalculate : List Token -> Int
postFixCalculate tokens =
    case postFixHelper tokens [] of
        Operand val ->
            val

        --- This indicates an Error
        _ ->
            9999


postFixHelper : List Token -> List Token -> Token
postFixHelper tokens stack =
    case ( tokens, stack ) of
        --- Non Empty List, stack has at least two tokens ---
        ( top :: tks, first :: second :: rest ) ->
            case top of
                Operator op ->
                    postFixHelper tks <| (evaluateTokens second op first :: rest)

                Operand _ ->
                    postFixHelper tks <| (top :: stack)

                Error ->
                    Error

        --- Non Empty List, stack has less than two tokens ---
        ( top :: tks, _ ) ->
            case top of
                Operator _ ->
                    Error

                Operand _ ->
                    postFixHelper tks <| (top :: stack)

                Error ->
                    Error

        --- Empty List, Non Empty stack
        ( [], first :: _ ) ->
            first

        --- Empty List, Empty Stack
        ( [], _ ) ->
            Error


opToString : Operator -> String
opToString op =
    case op of
        Add ->
            "+"

        Subtract ->
            "-"

        Multiply ->
            "*"

        Divide ->
            "/"


evaluateTokens : Token -> Operator -> Token -> Token
evaluateTokens operand1 operator operand2 =
    case ( operand1, operator, operand2 ) of
        ( Operand op1, _, Operand op2 ) ->
            evaluateSimpleExpression op1 operator op2

        _ ->
            Error


evaluateSimpleExpression : Int -> Operator -> Int -> Token
evaluateSimpleExpression operand1 operator operand2 =
    case operator of
        Add ->
            Operand (operand1 + operand2)

        Subtract ->
            Operand (operand1 - operand2)

        Multiply ->
            Operand (operand1 * operand2)

        --- Simplifying things by assuming every division will workout well with int division
        Divide ->
            Operand (operand1 // operand2)
