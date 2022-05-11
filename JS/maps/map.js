import countries from '../DATA/countries.js';

let expndTeam = [
    {
        name: 'Damir',
        skills: 'full stack',
        role: 'founder',
    },
    {
        name: 'Alex',
        skills: 'front end',
        role: 'team lead',
    },
    {
        name: 'Sasha',
        skills: 'backend',
        role: 'coder',
    },
];

// function for accessing names in object
// later used in map() function
let getNames = (teamMember) => teamMember.name;

let roles = expndTeam.map(getNames);
console.log('names:', roles);

// list countri names
let countryNames = (countries.map(country => country.name));
console.log('countryNames:', countryNames);

// create new array with name + role with an upper letter

let teamWithNicknames = expndTeam.map((teamMember) => {
    return {
        fullName: teamMember.name + ' ' + teamMember.role[0].toUpperCase() + teamMember.role.slice(1),
    }
});

console.log('teamWithNicknames:', teamWithNicknames);


const technologies = expndTeam.map( (teamMember) =>
    `<h3>${ teamMember.skills }</h3>`
)

const htmlContainer = document.querySelector('#app');
htmlContainer.innerHTML = technologies.join('');

// Todo: создать список из имен и вывести их на странице (урок про вывод JS
//  в HTML файлах)


