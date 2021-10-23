// Percorrendo arrays multidimensionais

const quadroFuncionarios = [["Financeiro", "Kilma", "Daniel"], ["Marketing", "Sarah", "Leticia"]]

quadroFuncionarios.forEach((departamento, indiceDep) => 
    departamento.forEach((funcionario, indiceDep) => {
        console.log(`${indiceDep + 1} - ${funcionario}`)
    })
)
