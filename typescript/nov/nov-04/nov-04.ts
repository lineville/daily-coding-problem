// Daily coding problem Nov 4 2019
// Liam Neville

// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

interface Interval {
  start: number;
  end: number;
}

const roomNeeded = (
  prevCourses: Array<Interval>,
  course: Interval
): boolean => {
  let result: boolean = true;
  prevCourses.forEach((allocatedCourse: Interval) => {
    if (
      course.start > allocatedCourse.end ||
      course.end < allocatedCourse.start
    ) {
      result = false;
    }
  });

  return result;
};

const minRooms = (schedule: Array<Interval>): number => {
  if (schedule.length == 0) {
    throw new Error("Empty schedule!");
  }

  let roomsNeeded: number = 0;
  let allocatedCourses: Array<Interval> = new Array<Interval>();

  schedule.forEach((course: Interval, index: number): void => {
    if (roomNeeded(allocatedCourses, course)) {
      roomsNeeded++;
    }

    allocatedCourses.push(course);
  });

  return roomsNeeded;
};

const didPass = (expected: number, actual: number) : void => {
  console.log("Result: " + actual.toString() + " Expected: " + expected);
  console.log(actual === expected ? "Passed ✔️" : "Failed ❌");
}

const testMinRooms1 = (): void => {
  const testSchedule: Array<Interval> = new Array<Interval>();
  const course1: Interval = { start: 30, end: 75 };
  const course2: Interval = { start: 0, end: 50 };
  const course3: Interval = { start: 60, end: 150 };
  testSchedule.push(course1);
  testSchedule.push(course2);
  testSchedule.push(course3);
  
  const result: number = minRooms(testSchedule);
  didPass(2, result)
};


const testMinRooms2 = (): void => {
  const testSchedule: Array<Interval> = new Array<Interval>();
  const course1: Interval = { start: 30, end: 75 };
  const course2: Interval = { start: 0, end: 50 };
  const course3: Interval = { start: 60, end: 150 };
  const course4: Interval = { start: 75, end: 200 };
  testSchedule.push(course1);
  testSchedule.push(course2);
  testSchedule.push(course3);
  testSchedule.push(course4);

  const result: number = minRooms(testSchedule);
  didPass(2, result)
};

const testMinRooms3 = (): void => {
  const testSchedule: Array<Interval> = new Array<Interval>();
  const course1: Interval = { start: 30, end: 75 };
  const course2: Interval = { start: 0, end: 50 };
  const course3: Interval = { start: 60, end: 150 };
  const course4: Interval = { start: 75, end: 200 };
  const course5: Interval = { start: 40, end: 210 };
  testSchedule.push(course1);
  testSchedule.push(course2);
  testSchedule.push(course3);
  testSchedule.push(course4);
  testSchedule.push(course5);

  const result: number = minRooms(testSchedule);
  didPass(3, result)
};


const testMinRooms = () : void => {
  testMinRooms1();
  testMinRooms2();
  testMinRooms3();
}

testMinRooms()
