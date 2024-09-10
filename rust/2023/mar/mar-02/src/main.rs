// Daily Coding Problem March 2nd 2023

// [Hard] -- Dropbox

// A Boolean formula can be said to be satisfiable if there is a way to assign
// truth values to each variable such that the entire formula evaluates to true.

// For example, suppose we have the following formula, where the symbol ¬ is used to denote negation:

// (¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)

// One way to satisfy this formula would be to let a = False, b = True, and c = True.

// This type of formula, with AND statements joining tuples containing exactly one OR, is known as 2-CNF.

// Given a 2-CNF formula, find a way to assign truth values to satisfy it, or return False if this is impossible.

struct TwoCNF {
    variables: Vec<char>,
    expressions: Vec<((bool, char), (bool, char))>,
}

fn parse_formula(formula: &str) -> TwoCNF {
    let mut variables = Vec::new();
    let mut expressions = Vec::new();


    for expression in formula.split("AND") {
        let mut expression = expression.split("OR");
        let first : Vec<char> = expression.next().unwrap().trim().trim_start_matches("(").chars().collect();
        let second : Vec<char> = expression.next().unwrap().trim().trim_end_matches(")").chars().collect();

        let first_bool = first[0] == '¬';
        let second_bool = second[0] == '¬';

        let first_var = if first_bool { first[1] } else { first[0] };
        let second_var = if second_bool { second[1] } else { second[0] };

        expressions.push(((first_bool, first_var), (second_bool, second_var)));
    }

    for expression in &expressions {
        if !variables.contains(&expression.0.1) {
            variables.push(expression.0.1);
        }

        if !variables.contains(&expression.1.1) {
            variables.push(expression.1.1);
        }
    }

    TwoCNF {
        variables,
        expressions,
    }
}

fn is_satisfiable(formula: &TwoCNF) -> bool {
    let mut satisfiable = false;

    for i in 0..2usize.pow(formula.variables.len() as u32) {
        let mut truth_values = Vec::new();
        let mut j = i;

        for _ in 0..formula.variables.len() {
            truth_values.push(j % 2 == 1);
            j /= 2;
        }

        let mut is_satisfiable = true;

        for expression in &formula.expressions {
            let first = expression.0;
            let second = expression.1;

            let first_truth = if first.0 { !truth_values[formula.variables.iter().position(|&x| x == first.1).unwrap()] } else { truth_values[formula.variables.iter().position(|&x| x == first.1).unwrap()] };
            let second_truth = if second.0 { !truth_values[formula.variables.iter().position(|&x| x == second.1).unwrap()] } else { truth_values[formula.variables.iter().position(|&x| x == second.1).unwrap()] };

            if !(first_truth || second_truth) {
                is_satisfiable = false;
                break;
            }
        }

        if is_satisfiable {
            satisfiable = true;
            break;
        }
    }

    satisfiable
}

fn main() {
    let formula = "(¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)";
    // let formula = "(¬c OR b) AND (¬b OR c)";
    let parsed = parse_formula(formula);

    let satisfiable = is_satisfiable(&parsed);

    println!("{:?}", satisfiable);
    
}
