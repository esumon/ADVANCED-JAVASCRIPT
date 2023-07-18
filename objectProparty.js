// const output = [];
// const student = [
//     { id: 21, name: 'Ommar Sany' },
//     { id: 31, name: 'Mannaaa' },
//     { id: 41, name: 'Moyori' },
//     { id: 71, name: 'Deepjol' },
// ];
// for (let i = 0; i < student.length; i++) {
//     const elements = student[i];
//     output.push(elements.name);
// }
// console.log(output);


const student = [
    { id: 21, name: 'Ommar Sany' },
    { id: 31, name: 'Mannaaa' },
    { id: 41, name: 'Moyori' },
    { id: 71, name: 'Deepjol' },
];
const result = student.map(x => x.name);
const ids = student.map(x => x.id);
const bigger = student.filter(x => x.id > 40);
const bigger1 = student.find(x => x.id > 40);
console.log(bigger1);
