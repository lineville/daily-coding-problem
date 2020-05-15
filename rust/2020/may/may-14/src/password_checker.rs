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
  
  let mut valid : bool = true;
  let mut contains_lower : bool = false;
  let mut contains_upper : bool = false;
  let mut contains_digit : bool = false;

  
  // * Too short
  if (password.len() as i32) < min_length {
    valid = false;
    changes_needed = min_length - password.len() as i32;
    return changes_needed;
  }

  // * Too long
  if (password.len() as i32) > max_length {
    valid = false;
    changes_needed = max_length - password.len() as i32;
    return changes_needed;
  }

  // * Need to find how many occurrences of some three streak of letters occurs XXX

  let mut streak_char : char = ' ';
  let mut streak_count : usize = 0;

  for (i, c) in password.chars().enumerate() {
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
      }
    } else {
      streak_count = 0;
    }

    streak_char = c;

  }

  if !contains_lower {
    changes_needed += 1;
  }

  if !contains_upper {
    changes_needed += 1;
  }

  if !contains_digit {
    changes_needed += 1;
  }

  valid = valid && contains_lower && contains_upper && contains_digit;


  if valid {
    return 0;
  }

  return changes_needed;
}


#[test]
fn test_strong_password_1() {
  assert_eq!(strong_password("password"), 2);
}


#[test]
fn test_strong_password_2() {
  assert_eq!(strong_password("Password"), 1);
}


#[test]
fn test_strong_password_3() {
  assert_eq!(strong_password("Password2"), 0);
}


#[test]
fn test_strong_password_4() {
  assert_eq!(strong_password("pass"), 2);
}


#[test]
fn test_strong_password_5() {
  assert_eq!(strong_password("Paaa2woood"), 2);
}



#[test]
fn test_strong_password_6() {
  assert_eq!(strong_password("Paaaaaa2woood"), 0);
}