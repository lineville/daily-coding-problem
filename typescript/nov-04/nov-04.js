// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// find the minimum number of rooms required.
var roomNeeded = function (prevCourses, course) {
    var result = true;
    prevCourses.forEach(function (allocatedCourse) {
        if (course.start > allocatedCourse.end ||
            course.end < allocatedCourse.start) {
            result = false;
        }
    });
    return result;
};
var minRooms = function (schedule) {
    if (schedule.length == 0) {
        throw new Error("Empty schedule!");
    }
    var roomsNeeded = 0;
    var allocatedCourses = new Array();
    schedule.forEach(function (course, index) {
        if (roomNeeded(allocatedCourses, course)) {
            roomsNeeded++;
        }
        allocatedCourses.push(course);
    });
    return roomsNeeded;
};
var didPass = function (expected, actual) {
    console.log("Result: " + actual.toString() + " Expected: " + expected);
    console.log(actual === expected ? "Passed ✔️" : "Failed ❌");
};
var testMinRooms1 = function () {
    var testSchedule = new Array();
    var course1 = { start: 30, end: 75 };
    var course2 = { start: 0, end: 50 };
    var course3 = { start: 60, end: 150 };
    testSchedule.push(course1);
    testSchedule.push(course2);
    testSchedule.push(course3);
    var result = minRooms(testSchedule);
    didPass(2, result);
};
var testMinRooms2 = function () {
    var testSchedule = new Array();
    var course1 = { start: 30, end: 75 };
    var course2 = { start: 0, end: 50 };
    var course3 = { start: 60, end: 150 };
    var course4 = { start: 75, end: 200 };
    testSchedule.push(course1);
    testSchedule.push(course2);
    testSchedule.push(course3);
    testSchedule.push(course4);
    var result = minRooms(testSchedule);
    didPass(2, result);
};
var testMinRooms3 = function () {
    var testSchedule = new Array();
    var course1 = { start: 30, end: 75 };
    var course2 = { start: 0, end: 50 };
    var course3 = { start: 60, end: 150 };
    var course4 = { start: 75, end: 200 };
    var course5 = { start: 40, end: 210 };
    testSchedule.push(course1);
    testSchedule.push(course2);
    testSchedule.push(course3);
    testSchedule.push(course4);
    testSchedule.push(course5);
    var result = minRooms(testSchedule);
    didPass(3, result);
};
var testMinRooms = function () {
    testMinRooms1();
    testMinRooms2();
    testMinRooms3();
};
testMinRooms();
