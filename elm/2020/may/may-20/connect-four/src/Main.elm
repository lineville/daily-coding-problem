-- * Daily Coding Problem May 20 2020
-- * [Hard] -- Salesforce
-- * Connect 4 is a game where opponents take turns dropping red or black discs into a 7 x 6 vertically suspended grid.
-- * The game ends either when one player creates a line of four consecutive discs of their Piece (horizontally, vertically, or diagonally),
-- * or when there are no more spots left in the grid.


module Main exposing (..)

import Browser
import Html exposing (Html, div, h1, img, li, text, ul)
import Html.Attributes exposing (class, height, src, width)



---- MODEL ----


type Piece
    = Red
    | Black
    | Blank


type alias Model =
    { board : List (List Piece)
    , userWon : Bool
    }


init : ( Model, Cmd Msg )
init =
    ( { board = generateGrid 7 6, userWon = False }, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update _ model =
    ( model, Cmd.none )


generateGrid : Int -> Int -> List (List Piece)
generateGrid rows columns =
    generateGridHelper rows columns columns


generateGridHelper : Int -> Int -> Int -> List (List Piece)
generateGridHelper rows columns curr =
    case curr of
        0 ->
            []

        _ ->
            generateList rows :: generateGridHelper rows columns (curr - 1)


generateList : Int -> List Piece
generateList size =
    case size of
        0 ->
            []

        _ ->
            Blank :: generateList (size - 1)



---- VIEW ----


renderGrid : List (List Piece) -> Html msg
renderGrid grid =
    grid
        |> List.map (\l -> ul [ class "row" ] [ renderList l ])
        |> ul []


renderList : List Piece -> Html msg
renderList list =
    list
        |> List.map (\p -> li [] [ pieceImage p ])
        |> ul []


pieceImage : Piece -> Html msg
pieceImage piece =
    case piece of
        Red ->
            img [ src "red.png", width 30, height 30 ] []

        Black ->
            img [ src "black.png", width 30, height 30 ] []

        Blank ->
            img [ src "blank.png", width 30, height 30 ] []


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "Connect Four" ]
        , renderGrid model.board
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
