// * Daily Coding Problem October 28 2020

// * [Medium] -- Coinbase

// * Write a function that takes in a number, string, list, or dictionary
// * and returns its JSON encoding.
// * It should also handle nulls.

use std::collections::HashMap;

#[derive(Debug)]
enum JSONValue {
    None,
    Number(i32),
    String(String),
    List(Vec<JSONValue>),
    Dictionary(HashMap<String, JSONValue>),
}

fn json_to_string(value: &JSONValue) -> String {
    match value {
        JSONValue::None => String::from("null"),
        JSONValue::Number(n) => n.to_string(),
        JSONValue::String(s) => String::from(format!(r#""{}""#, s)),
        JSONValue::List(l) => {
            let mut result = String::from("[");
            let json_values: Vec<String> = l.iter().map(|jv| json_to_string(jv)).collect();
            result.push_str(&json_values.join(", "));
            result.push_str("]");
            result
        }
        JSONValue::Dictionary(d) => {
            let mut result = String::from("{");
            let json_values: Vec<String> = d
                .iter()
                .map(|(key, value)| {
                    String::from(format!(r#""{}": {}"#, key, json_to_string(value)))
                })
                .collect();
            result.push_str(&json_values.join(", "));
            result.push_str("}");
            result
        }
    }
}

fn main() {
    let mut json_dictionary = HashMap::<String, JSONValue>::new();
    json_dictionary.insert(String::from("c"), JSONValue::String(String::from("d")));
    let json: JSONValue = JSONValue::List(vec![
        JSONValue::None,
        JSONValue::Number(123),
        JSONValue::String(String::from("hello")),
        JSONValue::List(vec![
            JSONValue::String(String::from("a")),
            JSONValue::String(String::from("b")),
        ]),
        JSONValue::Dictionary(json_dictionary),
    ]);

    let result = json_to_string(&json);
    println!("JSON encoder!\n-------------------\n");
    println!("JSON: {:?}", json);
    println!("Stringified: {}", result);
}

// * ________________________TESTS___________________________

#[test]
fn test_json_to_string() {
    let mut json_dictionary = HashMap::<String, JSONValue>::new();
    json_dictionary.insert(String::from("c"), JSONValue::String(String::from("d")));
    let json: JSONValue = JSONValue::List(vec![
        JSONValue::None,
        JSONValue::Number(123),
        JSONValue::String(String::from("hello")),
        JSONValue::List(vec![
            JSONValue::String(String::from("a")),
            JSONValue::String(String::from("b")),
        ]),
        JSONValue::Dictionary(json_dictionary),
    ]);
    assert_eq!(
        json_to_string(&json),
        String::from(r#"[null, 123, "hello", ["a", "b"], {"c": "d"}]"#)
    );
}
