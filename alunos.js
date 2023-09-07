const alunos = [
    {
        nome: 'Robert',
        nota: 6
    },
    {
        nome: 'Paulo',
        nota: 5
    },
    {
        nome: 'Nycolle',
        nota: 9
    },
    {
        nome: 'Marcelo',
        nota: 2
    },
];

const alunosNotaMaiorIgualSeis = alunos.filter((aluno) => {
    return aluno.nota >= 6;
});

console.log(alunosNotaMaiorIgualSeis);