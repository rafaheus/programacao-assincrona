const { getCityFromZipcode } = require('utils-playground')


//programaçao sincrona
// console.log('inicio');
// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// };
// console.log('fim')

// console.log('inicio');
// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
// });
//  console.log('fim')

const cidade = getCityFromZipcode('41256250');

console.log(cidade);