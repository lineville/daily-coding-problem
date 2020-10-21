// * Daily Coding Problem October 19 2020

// * [Medium] -- Postmates

// * The “active time” of a courier is the time between the pickup and dropoff
// * of a delivery. Given a set of data formatted like the following:

// * (delivery id, timestamp, pickup/dropoff)

// * Calculate the total active time in seconds. A courier can pick up multiple
// * orders before dropping them off. The timestamp is in unix epoch seconds.

use std::collections::HashMap;

#[derive(Debug)]
enum PickUpDropOff {
    PickUp,
    DropOff,
}

#[derive(Debug)]
struct Delivery {
    delivery_id: u64,
    timestamp: u64,
    pickup: PickUpDropOff,
}

fn active_time(deliveries: Vec<Delivery>) -> u64 {
    let mut total_time = 0;
    let mut open_deliveries = HashMap::<u64, u64>::new();

    for delivery in deliveries.iter() {
        match open_deliveries.get(&delivery.delivery_id) {
            Some(d) => {
                total_time += delivery.timestamp - d;
                open_deliveries.remove(&delivery.delivery_id);
            }
            None => {
                open_deliveries.insert(delivery.delivery_id, delivery.timestamp);
            }
        }
    }

    return total_time;
}

fn main() {
    println!("Postmates active time!");

    let data = vec![
        Delivery {
            delivery_id: 1,
            timestamp: 0,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 1,
            timestamp: 100,
            pickup: PickUpDropOff::DropOff,
        },
        Delivery {
            delivery_id: 2,
            timestamp: 120,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 3,
            timestamp: 150,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 3,
            timestamp: 220,
            pickup: PickUpDropOff::DropOff,
        },
        Delivery {
            delivery_id: 2,
            timestamp: 1570323012,
            pickup: PickUpDropOff::DropOff,
        },
    ];

    println!("{:?}", data);
    let result = active_time(data);
    println!("{}", result);
}

// * ________________________TESTS___________________________

#[test]
fn test_active_time() {
    let data = vec![
        Delivery {
            delivery_id: 1,
            timestamp: 1573280047,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 1,
            timestamp: 1570320725,
            pickup: PickUpDropOff::DropOff,
        },
        Delivery {
            delivery_id: 2,
            timestamp: 1570321092,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 3,
            timestamp: 1570321212,
            pickup: PickUpDropOff::PickUp,
        },
        Delivery {
            delivery_id: 3,
            timestamp: 1570322352,
            pickup: PickUpDropOff::DropOff,
        },
        Delivery {
            delivery_id: 2,
            timestamp: 1570323012,
            pickup: PickUpDropOff::DropOff,
        },
    ];
    assert_eq!(active_time(data), 1260);
}
