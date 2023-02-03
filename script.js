
const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
  ];

  //1- reverse()
  const reverseData = data.reverse()
  
  console.log(reverseData)

  //2 - find() (detalhe , tomar cuidado com esse detalhe ele não 
  //devolve o maior e sim o útimo encontrado)
  const highSallary = 2000

  const highestSallary = data.find((user) => user.sallary > highSallary)

  console.log(highestSallary)

  //3 = findIndex()encontrando o índice do usuário com o menor salário

  const lowestSallary = data.findIndex( 
    (user) => user.sallary > 0 && user.sallary < 2000
 )
  
  console.log(lowestSallary)

  // Modificando um item dentro do array do usário com o menor salário
  //Modificar o item e aumentar o salário do user específico

  data[lowestSallary].sallary += 510

  console.log(data)

  //4 - includes 
  const numbers = [1, 2 ,3, 4, 5]

  const hasFour = numbers.includes(4)

  console.log(hasFour)
  console.log(numbers.includes(100))

  //5 - map() Modifica algo no nosso array original. Em uma alteração utilimos o map.
  data.map((user) => (user.newsletter = false))

  console.log(data)

  //6 - filter() ex: vamos filtrar os users que tem licença para dirigir
  // Aqui não precisamos fazer === true, esse método já faz automaticamente
  const drivers = data.filter((user) => user.driverLicense)

  console.log(drivers)

  // 7 - reduce() Reduz todos os dados em um dado apenas,
  //Ex: quero saber a soma de salário de todos os users que trabalham na minha empresa
  // (totalSallary, user) => totalSallary += user.sallary, 0), assim não soma 
  //temos que definir um ponto inicial o número 0
  const sallariesSum = data.reduce(    
    (totalSallary, user) => totalSallary += user.sallary, 0   
)

console.log(sallariesSum)

// 8 - forEach() se assemelha a uma estruta de looping , tipo for e while 
const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}`)
    })
}

showUserNames(data)

// 9 - some() , verifica alguma coisa dentro do nosso array corresponde que estámos buscando
// EX: vai buscar alguém dentro do array que tenha newsletter 
let someoneWithNewsletter = data.some((user) => user.newsletter)
//como ninguém tenha me retorna false
console.log(someoneWithNewsletter)
//modificando um item pra true
data[1].newsletter = true

someoneWithNewsletter = data.some((user) => user.newsletter)
// agora me retorna como true , pois modificamos o item acima
console.log(someoneWithNewsletter)

//10 - every , ao contrário do some(), ele busca dentro do array , se user tem o item 
// que bsucamos ex: retorna o valor de true
//abaixo verificamos se todos os usuários tem nome
const everyHasName = data.every((user) => user.name)

console.log(everyHasName)

//abaixo verficamos se todos tem um bom salário
const everyUserHasGoodSallary = data.every((user) => user.sallary > 2000)

console.log(everyUserHasGoodSallary)


  
  

 
