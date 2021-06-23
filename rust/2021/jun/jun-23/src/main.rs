
use std::collections::HashMap;

struct PrefixMapSum {
    map: HashMap<String, i32>
}

impl PrefixMapSum {

    fn new() -> PrefixMapSum {
        PrefixMapSum { map: HashMap::new() }
    }

    fn insert(&mut self, key: &str, value: i32) {
        self.map.insert(String::from(key), value);
    }

    fn sum(&self, prefix: &str) -> i32 {
        self.map
            .iter()
            .filter_map(|(k, v)| 
                if k.starts_with(prefix) {
                    Some(v) 
                } else { 
                    None
            })
            .sum()
    }

}

fn main() {
    let mut map = PrefixMapSum::new();
    map.insert("columnar", 3);
    println!("Sum(col) ==> {}", map.sum("col"));

    map.insert("column", 2);
    println!("Sum(col) ==> {}", map.sum("col"));
    println!("Sum(zol) ==> {}", map.sum("zol"));

    map.insert("zoloft", 100);
    println!("Sum(zol) ==> {}", map.sum("zol"));


}
