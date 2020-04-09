module Test.Generated.Main263311073 exposing (main)

import Tests

import Test.Reporter.Reporter exposing (Report(..))
import Console.Text exposing (UseColor(..))
import Test.Runner.Node
import Test

main : Test.Runner.Node.TestProgram
main =
    [     Test.describe "Tests" [Tests.all] ]
        |> Test.concat
        |> Test.Runner.Node.run { runs = Nothing, report = (ConsoleReport UseColor), seed = 383884791620566, processes = 8, paths = ["/Users/lineville/work/daily-challenge/elm/2020/march/mar-29/tests/Tests.elm"]}