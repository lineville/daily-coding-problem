// * Daily Coding Problem July 6 2020

// * [Easy] -- Atlassian

// * MegaCorp wants to give bonuses to its employees based on how many lines of
// * codes they have written. They would like to give the smallest positive amount
// * to each worker consistent with the constraint that if a developer has written
// * more lines of code than their neighbor, they should receive more money.

// * Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

// ! Ex : given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].
fn bonuses(lines_of_code: Vec<u32>) -> Vec<u32> {
    if lines_of_code.len() == 0 {
        return vec![];
    }

    if lines_of_code.len() == 1 {
        return vec![1];
    }

    let mut result = vec![];
    let segs = segments(lines_of_code);
    for seg in segs.iter() {
        let mut seg_bonuses: Vec<u32> = vec![];
        for i in 0..seg.run {
            seg_bonuses.push(i);
        }

        let bonus_lengths = seg_bonuses.len();
        if !seg.ascending {
            for i in 0..bonus_lengths / 2 {
                seg_bonuses.swap(i, bonus_lengths - 1 - i);
            }
        }
        result.append(&mut seg_bonuses);
    }

    return result.into_iter().map(|x| x + 1).collect();
}

struct Segment {
    ascending: bool,
    run: u32,
}

fn segments(lines_of_code: Vec<u32>) -> Vec<Segment> {
    let mut asc = lines_of_code[0] > lines_of_code[1];
    let mut prev = &lines_of_code[0];
    let mut start = 0;
    let mut segments: Vec<Segment> = vec![];

    for (i, num) in lines_of_code.iter().enumerate() {
        if i == 0 {
            continue;
        }

        if (asc && num < prev) || (!asc && num > prev) {
            let seg = Segment {
                ascending: asc,
                run: (i as u32) - start + 1,
            };
            segments.push(seg);
            start += 1;
            asc = !asc;
        }
        prev = num;
    }
    segments.push(Segment {
        ascending: asc,
        run: lines_of_code.len() as u32 - start,
    });
    return segments;
}

#[test]
fn test_bonuses_1() {
    assert_eq!(
        bonuses(vec![10, 40, 200, 1000, 60, 30]),
        vec![1, 2, 3, 4, 2, 1]
    );
}

#[test]
fn test_bonuses_2() {
    assert_eq!(
        bonuses(vec![10, 40, 200, 1000, 900, 800, 30]),
        vec![1, 2, 3, 4, 3, 2, 1]
    );
}

fn main() {
    println!("Bonuses based on lines of code!");
    let lines_of_code = vec![10, 40, 200, 1000, 60, 30];
    println!("{:?}", lines_of_code);
    println!("{:?}", bonuses(lines_of_code));
}
