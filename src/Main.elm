port module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as D
import String
import Maybe



-- MAIN

main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- PORTS

port messageReceiver : (Int -> msg) -> Sub msg

port requestResult : { a: Int, b: Int } -> Cmd msg



-- MODEL

type alias Model =
    {  a: Int
    ,  b: Int
    , result: Int
    }

init : () -> ( Model, Cmd Msg )
init flags =
    (   { a = 0
        , b = 0
        , result = 0
        }
    , Cmd.none
    )



-- UPDATE

type Msg
    = Recv Int
    | RequestResult Int Int
    | ChangeAValue String
    | ChangeBValue String

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeAValue aValue ->
            ( { model | a = Maybe.withDefault 0 (String.toInt aValue) }
            , Cmd.none
            )

        ChangeBValue bValue ->
            ( { model | b = Maybe.withDefault 0 (String.toInt bValue) }
            , Cmd.none
            )

        RequestResult a b ->
            ( model
            , requestResult ({a = a, b = b})
            )

        Recv result ->
            ( {model | result = result}
            , Cmd.none
            )



-- SUBSCRIPTIONS

subscriptions : Model -> Sub Msg
subscriptions _ =
    messageReceiver Recv



-- VIEW

view : Model -> Html Msg
view model =
    div [class "root"]
        [ div [class "root"]
            [ input
                [ type_ "number"
                , class "form-control mr-2"
                , onInput ChangeAValue
                , value (String.fromInt model.a)
                ]
                []
            , button
                [ onClick (RequestResult model.a model.b)
                , class "btn btn-light mr-2"
                , disabled True
                ]
                [ text "/" ]
            , input
                [ type_ "number"
                , class "form-control mr-2"
                , onInput ChangeBValue
                , value (String.fromInt model.b)
                ]
                []
            , button
                [ onClick (RequestResult model.a model.b)
                , class "btn btn-light mr-2"
                ]
                [ text "=" ]
            , button
                [ onClick (RequestResult model.a model.b)
                , class "btn btn-light"
                , disabled True
                ]
                [ text (String.fromInt model.result) ]
            ]
        ]
  
