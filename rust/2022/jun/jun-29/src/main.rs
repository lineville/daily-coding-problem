// * Daily Coding Problem June 29 2022

// * [Easy] -- Twitter

// You run an e-commerce website and want to record the last N order ids in a log.
//  Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

// You should be as efficient with time and space as possible.

struct LogRecords {
    capacity: usize,
    circular_buffer: Vec<i32>,
    current_index: usize,
}

impl LogRecords {
    fn new(capacity: usize) -> Self {
        LogRecords {
            capacity,
            circular_buffer: vec![0; capacity],
            current_index: 0,
        }
    }

    fn record(&mut self, order_id: i32) {
        self.circular_buffer[self.current_index] = order_id;
        self.current_index = (self.current_index + 1) % self.capacity;
    }

    fn get_last(&self, i: usize) -> i32 {
        let index = (self.current_index + self.capacity - i) % self.capacity;
        self.circular_buffer[index]
    }
}

fn main() {
    println!("Record logger!");

    let mut log_records = LogRecords::new(5);
    log_records.record(1);
    log_records.record(2);
    log_records.record(3);
    log_records.record(4);
    log_records.record(5);

    println!("Last log: {}", log_records.get_last(1));

    log_records.record(6);

    println!("Last log: {}", log_records.get_last(1));
}
