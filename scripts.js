const student = {
  name: "Lucas Souza",
  age: 24,
  couse: "Linguagem de Programação",
  inSubscribed: true
};

const teacher = {
  name: "Juvenal Timotin",
  enrollment: 1141141,
  matter: "Banco de Dados"
};

console.log(`
O estudante ${student.name} de ${student.age} anos
esta inscrito(${student.inSubscribed}) no curso de ${student.

couse} do professor ${teacher.name}
`);

//array vazio
let peoples = [];

//inserindo um object no array
peoples = [student, teacher];

console.log(peoples[1]);
console.log(peoples[0])