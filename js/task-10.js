/*reduce, filter, sort
Получи массив всех умений всех пользователей 
(поле skills), при этом не должно быть повторяющихся 
умений и они должны быть отсортированы в алфавитном порядке.

Слияние массивов:

const odd = [1, 3, 5];
const even = [2, 4, 6];

// 1
[...odd, ...even];
//  [1, 3, 5, 2, 4, 6]

// 2
odd.concat(even)
//  [1, 3, 5, 2, 4, 6]
Используй только перебирающие методы 
массива которые не изменяют (не мутируют)
 исходный массив. 
Т.е. нельзя использовать for, splice, push 
и т.п. мутирующие методы.*/

// Write code under this line
const getSortedUniqueSkills = (array) => array.reduce((acc, {skills}) => [...acc , ...skills], []).filter((value, index, arr) => arr.indexOf(value) === index).sort();
   // const getSortedUniqueSkills = (array) => array.map (({ skills })=> skills).reduce((allSkills, skills) => allSkills.concat(...skills), []).filter((e,i,a)=>a.indexOf(e)==i).sort();
   /*const getSortedUniqueSkills = (array) => array.map(function ({ skills }, i) {
  return skills
}).reduce(function (allSkills, skills) {
    return allSkills.concat(...skills)
}, []).filter((e,i,a)=>a.indexOf(e)==i).sort()*/
//вариант2
/*const getSortedUniqueSkills = (array) => array.reduce(function (acc, obj) {
  return [...acc, ...obj.skills.filter(skill => !acc.includes(skill))];
}, []).sort();*/
//вариант3
/*const getSortedUniqueSkills = (array) => 
array.reduce((previousValue, {skills})=> 
 previousValue.concat(skills.filter(key=> !previousValue.includes(key))),[]
).sort();*/
//вариант4
/*const getSortedUniqueSkills = (array) => array.reduce(
    (allSkills, user) => [...allSkills, ...user.skills], [])
    .sort()
    .filter((skill, index, array) => 
      array.indexOf(skill) === index);*/ 
 console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */