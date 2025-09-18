let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(firstName, lastName) {
    return `${firstName} ${lastname}`
}

const fullName = function (first, last) {
  return `${first} ${last}`;
}

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);