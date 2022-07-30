//Advanced Practice 1 : count the occurence of characters in the list
function practice_1(input) {
  let result = {};
  for (var i = 0; i < input.length; i++) {
    if (!(input[i] in result)) {
      result[input[i]] = 1;
    } else {
      result[input[i]] += 1;
    }
  }
  return result;
}
const input1 = ["a", "b", "c", "a", "c", "a"];
console.log(practice_1(input1)); // {'a':3, 'b':1, 'c':2}

//Advanced Practice 2 : mapping character to number
function practice_2(input, mapping) {
  let result = input.map((char) => {
    if (char in mapping) {
      return mapping[char];
    }
  });
  return result;
}
const arr = ["a", "b", "c", "a", "b"];
const mapping = { a: 1, b: 2, c: 3 };
console.log(practice_2(arr, mapping)); // [1, 2, 3, 1, 2]

//Advanced Practice 3: group by the same key and add the value to a list
function practice_3(input) {
  let result = {};
  for (i = 0; i < input.length; i++) {
    let char = input[i].key;
    if (!(char in result)) {
      result[char] = [];
      result[char].push(input[i].value);
    } else {
      result[char].push(input[i].value);
    }
  }
  return result;
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(practice_3(input3)); // {'a': [3,3], 'b': [1], 'c': [2,5]}

//Advanced Practice 4: group by the same key and sum up the value
function practice_4(input) {
  let result = {};
  for (i = 0; i < input.length; i++) {
    let char = input[i].key;
    if (!(char in result)) {
      result[char] = input[i].value;
    } else {
      result[char] += input[i].value;
    }
  }
  return result;
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(practice_4(input4)); // {'a': 6, 'b': 1, 'c': 7}

//Advanced Practice 5: assign objects to students
function practice_5(students, student_objects) {
  let result = [];
  for (i = 0; i < students.length; i++) {
    if (!(students[i] in result)) {
      result.push(students[i]);
      students[i].object = [];
    }

    for (j = 0; j < student_objects.length; j++) {
      if (result[i].student_id === student_objects[j].student_id) {
        result[i].object.push(student_objects[j].object);
      }
    }
  }
  return result;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, object: "pen" },
  { student_id: 2, object: "pen" },
  { student_id: 3, object: "book" },
  { student_id: 1, object: "book" },
  { student_id: 3, object: "phone" },
];

console.log(practice_5(students, student_objects));

/* expected output:
[
  { student_id: 1, name: 'Arthur', objects: [ 'pen', 'book' ] },
  { student_id: 2, name: 'Peter', objects: [ 'pen' ] },
  { student_id: 3, name: 'Molly', objects: [ 'book', 'phone' ] }
]
*/
