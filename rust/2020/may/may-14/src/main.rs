// * Daily Coding Problem May 14 2020

// * [Medium] -- Snapchat

// * Given a string of digits, generate all possible valid IP address combinations.

// * IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. 
// * Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

// ! Ex: "2542540123" --> ["254.25.40.123", "254.254.0.123"]


fn ip_addresses(ip: &str) -> Vec<String> {
    let mut addresses = vec![];

    for i in 1..ip.len() - 2 {
        for j in i + 1..ip.len() - 1 {
            for k in j + 1..ip.len() {

                let potential_ip =  insert_char_at('.', i, insert_char_at('.', j, insert_char_at('.', k, String::from(ip))));
                if is_valid_ip(&potential_ip) {
                    addresses.push(potential_ip);
                }
            }
        }
    }

    return addresses;
}

fn is_valid_ip(ip: &str) -> bool {
    let ip_sections = ip.split(".");

    for chunk in ip_sections {
        let numeric_value : i32 = chunk.parse().unwrap();
        if chunk.len() > 3 || numeric_value < 0  || numeric_value > 255 {
            return false;
        }

        if chunk.len() > 1 && numeric_value == 0 {
            return false;
        }

        if chunk.len() > 1 && numeric_value != 0 && chunk.chars().nth(0) == Some('0') {
            return false;
        }
    }
    return true;
}

fn insert_char_at(ch: char, idx: usize, ip: String) -> String {
    let mut result = String::new();

    for (i, c) in ip.chars().enumerate() {
        if i == idx {
            result.push(ch);
        }
        result.push(c);
    }
    
    return result;
}

#[test]
fn test_ip_addresses_1() {
    let result = ip_addresses("2542540123");
    assert_eq!(result, vec!["254.25.40.123", "254.254.0.123"]);   
}

#[test]
fn test_ip_addresses_2() {
    let result = ip_addresses("123123123");
    assert_eq!(result, vec!["1.23.123.123", "1.231.23.123", "1.231.231.23", "12.3.123.123", "12.31.23.123", "12.31.231.23", "123.1.23.123", "123.1.231.23", "123.12.3.123", "123.12.31.23", "123.123.1.23", "123.123.12.3"]);   
}

#[test]
fn test_is_valid_ip_1() {
    assert_eq!(is_valid_ip("254.25.40.123"), true);
}


#[test]
fn test_is_valid_ip_2() {
    assert_eq!(is_valid_ip("254.254.0.123"), true);
}


#[test]
fn test_is_valid_ip_3() {
    assert_eq!(is_valid_ip("2542.54.0.123"), false);
}

fn main() {
    println!("Potential IP addresses generated from {} --> {:#?}", "2542540123", ip_addresses("2542540123"));
}
