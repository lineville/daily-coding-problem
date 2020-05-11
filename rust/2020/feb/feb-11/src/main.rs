// * Daily Coding Problem Feb 11th 2020

// * [Medium] -- Microsoft

// ********************************

// * Implement the singleton pattern with a twist. First, instead of storing one instance, 
// * store two instances. And in every even call of getInstance(), return the first instance 
// * and in every odd call of getInstance(), return the second instance.


// * Like a singleton but really has two instances --> DoubleTon 😁
struct DoubleTon {
    calls: usize,
    first: &'static str,
    second: &'static str,
}

const FIRST_INSTANCE: &str = "A";
const SECOND_INSTANCE: &str = "B";


impl DoubleTon {
    
    fn get_instance(mut self) -> &'static str {
        if self.calls % 2 == 0 {
            self.calls = self.calls + 1;
            return self.first;
        } else {
            self.calls = self.calls + 1;
            return self.second;
        }
    }
}


fn main() {
    const SINGLETON: DoubleTon = DoubleTon { calls: 0, first: FIRST_INSTANCE, second: SECOND_INSTANCE };
    println!("instance:  {}", SINGLETON.get_instance());
    println!("instance:  {}", SINGLETON.get_instance());
    println!("instance:  {}", SINGLETON.get_instance());
    println!("instance:  {}", SINGLETON.get_instance());
    println!("instance:  {}", SINGLETON.get_instance());
}

#[test]
fn test_get_instance() {
    const SINGLETON: DoubleTon = DoubleTon { calls: 0, first: FIRST_INSTANCE, second: SECOND_INSTANCE };
    // * These are actually all failing
    assert_eq!(SINGLETON.get_instance(), "A");
    assert_eq!(SINGLETON.get_instance(), "A"); // ! Should be "B"
    assert_eq!(SINGLETON.get_instance(), "A");
    assert_eq!(SINGLETON.get_instance(), "A"); // ! Should be "B"
    assert_eq!(SINGLETON.get_instance(), "A");
    assert_eq!(SINGLETON.get_instance(), "A"); // ! Should be "B"
}

