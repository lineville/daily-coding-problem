module Test.Generated.Main3122805848 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.all] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 66422056332023, processes = 8, paths = ["/Users/lineville/work/daily-challenge/elm/2020/march/mar-29/tests/Tests.elm"]}