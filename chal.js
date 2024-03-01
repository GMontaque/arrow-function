// let mixedLetters = ["b", "d", "a", "c", "f", "e"];

// let moreMixedLetters = [...mixedLetters, "h", "k", "g", "j", "i", "l"];
// console.log(moreMixedLetters);

// const updateSortReverse = (arr, letters) => {
// 	let add = [...arr, ...letters];
// 	return add.sort().reverse();
// };

// let reverseSort = updateSortReverse(moreMixedLetters, "n", "m", "o");
// console.log(reverseSort);
// console.log(mixedLetters);

// Destructing arrays
// let ages = [30, 26, 27];
// // let john = ages[0];
// // let mary = ages[1];
// // let joe = ages[2];
// // console.log(john, mary, joe);

// let [john, mary, joe] = ages;
// console.log(john, mary, joe);

// // Destructuring objects
// let jobs = {
// 	mike: "designer",
// 	jill: "developer",
// 	alicia: "accountant",
// };
// let { mike, jill, alicia } = jobs;
// console.log(mike, jill, alicia);

// // Destructuring subsets
// let languages = ["english", "french", "spanish", "german", "japanese"];
// let [johnNative, johnSecondary] = languages;
// console.log(johnNative, johnSecondary);

// let [, , maryNative, marySecondary] = languages;
// console.log(maryNative, marySecondary);

// let languages2 = {
// 	firstLanguage: "english",
// 	secondLanguage: "french",
// 	thirdLanguage: "german",
// 	fourthLanguage: "japaneset",
// };

// let { firstLanguage, thirdLanguage } = languages2;
// console.log(firstLanguage, thirdLanguage);

// // Using rest parameter syntax
// let fruits = ["apple", "orange", "banana", "peach", "cherry"];
// let [favorite, secondFavorite, ...others] = fruits;
// console.log(favorite);
// console.log(secondFavorite);
// console.log(others);
// let favoriteFoods = {
// 	brian: "pizza",
// 	anna: "pasta",
// 	sarah: "vegetarian",
// 	andrea: "steak",
// };

// let { brian, anna, ...rest } = favoriteFoods;
// console.log(brian);
// console.log(anna);
// console.log(rest);

// let students = [
// 	{
// 		name: "Emily",
// 		subjects: ["science", "english", "art"],
// 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// 		results: { science: 93, english: 80, art: 95 },
// 	},
// 	{
// 		name: "John",
// 		subjects: ["art", "cad", "english", "maths", "science"],
// 		teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
// 		results: { maths: 90, english: 75, cad: 87 },
// 	},
// 	{
// 		name: "Adam",
// 		subjects: ["science", "maths", "art"],
// 		teacher: { science: "Iris", maths: "Harry", art: "Simon" },
// 		results: { science: 93, maths: 77, art: 95 },
// 	},
// 	{
// 		name: "Fran",
// // 		subjects: ["science", "english", "art"],
// // 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// // 		results: { science: 93, english: 87, art: 95 },
// // 	},
// // ];

// // const makeList = (arr, student) => {
// // 	for (let i of arr) {
// // 		if (i.name == student) {
// // 			return i.subjects;
// // 		}
// // 	}
// // };

// // let [first, second, ...rest] = makeList(students, "John");
// // console.log(first, second, rest);

// let nums1 = [1, 2, 3, 4, 5];

// let newMap = nums1.map((num) => num * 2);
// console.log(newMap);

// // ***************************************

// // Using a for loop
// let nums = [1, 2, 3, 4, 5];
// let results = [];
// for (let num of nums) {
// 	results.push(num * 2);
// }
// console.log(results);

// // Using map()
// const multByTwo = function (num) {
// 	return num * 2;
// };

// const mapResults = nums.map(multByTwo);
// console.log(mapResults);

// // Simplified w/ map
// const simplified = nums.map(function (num) {
// 	return num * 2;
// });
// console.log(simplified);

// // Simplfied w/ map() + arrow function
// const arrow = nums.map((num) => num * 2);
// console.log(arrow);

// // with objects:
// const students = [
// 	{
// 		id: 1,
// 		name: "Mark",
// 		profession: "Developer",
// 		skill: "JavaScript",
// 	},
// 	{
// 		id: 2,
// 		name: "Ariel",
// 		profession: "Developer",
// 		skill: "HTML",
// 	},
// 	{
// 		id: 3,
// 		name: "Jason",
// 		profession: "Designer",
// 		skill: "CSS",
// 	},
// ];

// const studentsWithid = students.map((rec) => [rec.name, rec.id]);
// console.log(studentsWithid);

// const result1 = students.map(({ id, name }) => ({ id, name }));
// console.log(result1);

// const result2 = students.map((rec) => {
// 	rec["age"] = 33;
// 	return rec;
// });
// console.log(result2);

// let students = [
// 	{
// 		name: "John",
// 		subjects: ["maths", "english", "cad"],
// 		teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
// 		results: { maths: 90, english: 75, cad: 87 },
// 	},
// 	{
// 		name: "Emily",
// 		subjects: ["science", "english", "art"],
// 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// 		results: { science: 93, english: 80, art: 95 },
// 	},
// 	{
// 		name: "Adam",
// 		subjects: ["science", "maths", "art"],
// 		teacher: { science: "Iris", maths: "Harry", art: "Simon" },
// 		results: { science: 93, maths: 77, art: 95 },
// 	},
// 	{
// 		name: "Fran",
// 		subjects: ["science", "english", "art"],
// 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// 		results: { science: 93, english: 87, art: 95 },
// 	},
// ];

// let [john, ...rest] = students.map((student) => [
// 	student.name,
// 	student.results,
// ]);

// console.log(john);
// console.log(rest);
// console.log("\n");

// // Or create function first and use in map
// const mapper = (itm) => [itm.name, itm.results];
// let [johns, ...rests] = students.map(mapper);
// console.log(johns);
// console.log(rests);

// Simple Filtering
// const people = [
// 	{
// 		name: "Michael",
// 		age: 23,
// 	},
// 	{
// 		name: "Lianna",
// 		age: 16,
// 	},
// 	{
// 		name: "Paul",
// 		age: 18,
// 	},
// ];
// const oldEnough = people.filter((person) => person.age >= 21);
// console.log(oldEnough);

// const paul = people.filter((p) => p.name == "Paul");
// console.log(paul);

// const pauls = people.filter((p) => p.name == "Paul")[0];
// console.log(pauls);

// // Complex Filtering
// const students = [
// 	{
// 		id: 1,
// 		name: "Mark",
// 		profession: "Developer",
// 		skills: [
// 			{ name: "javascript", yrsExperience: 1 },
// 			{ name: "html", yrsExperience: 5 },
// 			{ name: "css", yrsExperience: 3 },
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Ariel",
// 		profession: "Developer",
// 		skills: [
// 			{ name: "javascript", yrsExperience: 0 },
// 			{ name: "html", yrsExperience: 4 },
// 			{ name: "css", yrsExperience: 2 },
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: "Jason",
// 		profession: "Designer",
// 		skills: [
// 			{ name: "javascript", yrsExperience: 1 },
// 			{ name: "html", yrsExperience: 1 },
// 			{ name: "css", yrsExperience: 5 },
// 		],
// 	},
// ];

// const has5yearsExp = (skill) => skill.yrsExperience >= 5;
// const hasStrongSkills = (student) =>
// 	student.skills.filter(has5yearsExp).length > 0;
// const candidates = students.filter(hasStrongSkills);
// console.log(candidates);

// let students = [
// 	{
// 		name: "John",
// 		subjects: ["maths", "english", "cad"],
// 		teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
// 		results: { maths: 90, english: 75, cad: 87 },
// 	},
// 	{
// 		name: "Emily",
// 		subjects: ["science", "english", "art"],
// 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// 		results: { science: 93, english: 80, art: 95 },
// 	},
// 	{
// 		name: "Adam",
// 		subjects: ["science", "maths", "art"],
// 		teacher: { science: "Iris", maths: "Harry", art: "Simon" },
// 		results: { science: 84, maths: 97, art: 95 },
// 	},
// 	{
// 		name: "Fran",
// 		subjects: ["science", "english", "art"],
// 		teacher: { science: "Iris", english: "Joan", art: "Simon" },
// 		results: { science: 67, english: 87, art: 95 },
// 	},
// ];

// const topMaths = students.filter((student) => student.results.maths >= 90);
// console.log(topMaths);

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
	console.log(
		"Accumulator:",
		acc,
		"Current Value:",
		curr,
		"Total:",
		acc + curr
	);
	return acc + curr;
}, 0);
console.log(sum);

// one line example
let sums = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sums);

const teamMembers = [
	{
		name: "Andrew",
		profession: "Developer",
		yrsExperience: 5,
	},
	{
		name: "Ariel",
		profession: "Developer",
		yrsExperience: 7,
	},
	{
		name: "Michael",
		profession: "Designer",
		yrsExperience: 1,
	},
	{
		name: "Kelly",
		profession: "Designer",
		yrsExperience: 3,
	},
	{
		name: "thomas",
		profession: "painter",
		yrsExperience: 29,
	},
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce(
	(acc, curr) => acc + curr.yrsExperience,
	0
);

console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
	let key = curr.profession;
	if (!acc[key]) {
		acc[key] = curr.yrsExperience;
	} else {
		acc[key] += curr.yrsExperience;
	}
	return acc;
}, {});
console.log(experienceByProfession);

let students = [
	{
		name: "John",
		subjects: ["maths", "english", "cad"],
		teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
		results: { maths: 90, english: 75, cad: 87 },
	},
	{
		name: "Emily",
		subjects: ["science", "english", "art"],
		teacher: { science: "Iris", english: "Joan", art: "Simon" },
		results: { science: 93, english: 73, art: 95 },
	},
	{
		name: "Adam",
		subjects: ["science", "maths", "art"],
		teacher: { science: "Iris", maths: "Harry", art: "Simon" },
		results: { science: 93, english: 88, maths: 97, art: 95 },
	},
	{
		name: "Fran",
		subjects: ["science", "english", "art"],
		teacher: { science: "Iris", english: "Joan", art: "Simon" },
		results: { science: 93, english: 87, art: 95 },
	},
];

const biggest = students.reduce(
	(acc, student) => {
		const max = student.results.english;

		if (max > acc.max) {
			return {
				name: student.name,
				max,
			};
		}

		return acc;
	},
	{
		name: "",
		max: -1,
	}
);

console.log(biggest);

// teacher answers
const biggests = students.reduce(
	(acc, cur) => {
		acc =
			acc.max > cur.results.english
				? acc
				: { name: cur.name, max: cur.results.english };
		return acc;
	},
	{ name: "", max: 0 }
);
console.log(biggests);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/

// // const steve = students.filter(student => student.results.maths > 1);
// // console.log(steve)

// const biggest = students.reduce((acc,curr)=>{
//     // acc.max = acc.max < curr.results.english;
//     // acc = 0;
//     // if(acc.max < curr.results.english){
//     //     acc.max = curr.results.english;
//     // }
//     // console.log(acc.max);
//     // console.log(acc.max);
//     // console.log(acc.max < curr.results.english);
//     // console.log(curr.results.english);

//     // if (acc.max < curr.results.english) {
//     //     acc.max += curr.yrsExperience;
//     // }

//     // acc.max;
//     // if(curr.results.english > test){
//     //     acc.max = curr.results.english;
//     // }
//     // acc.max = curr.filter(st => st.results.english > acc.max);
//     // console.log(acc.max);
//     // acc.max = curr.results.english
//     // console.log(curr.results.english);
//     // console.log("acc"+acc.max);

//     // acc.name = curr.name;
//     // for(let i in acc.results){
//     //     if(i == "english"){
//     //         acc.max += acc.results[i];
//     //         console.log(acc.results[i]);
//     //     }
//     // }
//     // acc.max = curr.results.english;
//     // console.log(curr.results.english);
//     // let score = curr.results.english;
//     // console.log(score + "d");
//     acc.name = curr.name;
//     acc.max = curr.results.english;
//     let newword = curr.results.english;
//     if(acc.max < newword){
//         acc.max = newword;
//     }
//     return acc;
// },{});

// console.log(biggest);

const people = [
	{ name: "Dom Perry", age: 35 },
	{ name: "Andrew Wilksons", age: 47 },
	{ name: "Brian Walker", age: 27 },
];

const oldestAge = people.reduce((total, age) => {
	if (total < age.age) {
		total = age.age;
	}
	console.log(age.age);
	return total;
}, 0);

console.log(`oldest age is: ${oldestAge}`);
// answer  47

const output = people.reduce((p, c, i, a) => {
	const split = c.name.split(" ");
	console.log(split);
	let part = `${split[0][0]}${split[1][0]}`;
	if (i === a.length - 1) {
		part += ".";
	} else {
		part += ", ";
	}
	return p + part;
}, "");

console.log(output);
// answer DP, AW, BW.
