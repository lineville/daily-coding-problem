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

/*****
 * * A password is considered strong if below conditions are all met:
 * * It has at least 6 characters and at most 20 characters.
 * * It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
 * * It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
*/

fn strong_password(password: String) -> i32 {
  let min_length : i32 = 6;
  let max_length : i32 = 20;
  
  let mut changes_needed : i32 = 0;
  
  let mut contains_lower : bool = false;
  let mut contains_upper : bool = false;
  let mut contains_digit : bool = false;
  let mut contains_streak : bool = false;

  
  // * Too short
  if (password.len() as i32) < min_length {
    changes_needed = min_length - password.len() as i32;
    return changes_needed;
  }

  // * Too long
  if (password.len() as i32) > max_length {
    changes_needed = max_length - password.len() as i32;
    return changes_needed;
  }

  // * Need to find how many occurrences of some three streak of letters occurs XXX

  let mut streak_char : char = ' ';
  let mut streak_count : usize = 1;

  for c in password.chars() {
    if c.is_lowercase() {
      contains_lower = true;
    }

    if c.is_uppercase() {
      contains_upper = true;
    }

    if c.is_ascii_digit() {
      contains_digit = true;
    }
     
    
    if c == streak_char {
      streak_count += 1;
      if streak_count > 1 && streak_count % 3 == 0 {
        changes_needed += 1;
        contains_streak = true;
      }
    } else {
      streak_count = 1;
    }

    streak_char = c;

  }

  if !contains_lower && changes_needed == 0 {
    changes_needed += 1;
  }

  if !contains_upper && changes_needed == 0 {
    changes_needed += 1;
  }

  if !contains_digit && changes_needed == 0 {
    changes_needed += 1;
  }


  if contains_lower && contains_upper && contains_digit && !contains_streak {
    return 0;
  }

  return changes_needed;
}


#[test]
fn test_strong_password_1() {
  assert_eq!(strong_password(String::from("password")), 2);
}


#[test]
fn test_strong_password_2() {
  assert_eq!(strong_password(String::from("Password")), 1);
}


#[test]
fn test_strong_password_3() {
  assert_eq!(strong_password(String::from("Password2")), 0);
}


#[test]
fn test_strong_password_4() {
  assert_eq!(strong_password(String::from("pass")), 2);
}


#[test]
fn test_strong_password_5() {
  assert_eq!(strong_password(String::from("Paaa2woood")), 2);
}

#[test]
fn test_strong_password_6() {
  assert_eq!(strong_password(String::from("Paaaaaa2woood")), 3);
}

#[test]
fn test_strong_password_7() {
  assert_eq!(strong_password(String::from("aaa123")), 1);
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
