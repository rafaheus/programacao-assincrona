const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')

// const cidade = getCityFromZipcode('41256250')

// cidade.then(cidade => {
//     console.log(cidade);
// })

// cidade.catch((erro) => {
//     console.log(erro);
// })

// console.log(cidade)

//ordem aleatoria 
//  getCityFromZipcode('41256250').then(cidade => {
//      console.log(cidade);
//  }).catch((erro) => {
//      console.log(erro);
//  });
//  getStateFromZipcode('41256250').then(uf => {
//     console.log(uf);
// });

//seguindo ordem identaçao ruim
// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
//     getStateFromZipcode('41256250').then(uf => {
//        console.log(uf);
//    });
// }).catch((erro) => {
//     console.log(erro);
// });
 
//assync / await
// (async function () {
//     const cidade = await getCityFromZipcode('41256250')
//     console.log(cidade);
    

//     const estado = await getStateFromZipcode('41256250')
//     console.log(estado);

//     })
// ();

//padrao
// async function teste() {
//     return '123'
// }

//arrow function
const teste = async () => {
    return '123'
}

console.log(teste());