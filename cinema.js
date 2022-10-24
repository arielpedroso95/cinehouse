const catalogo = require('./database/catalogo.json')

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)

const listarTodosOsFilmesEmCartaz = ()=> {
    catalogo.forEach((filme)=>console.log(`Nome do filme: ${filme.titulo}`))
}



// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo

const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)



// (alterarStatusEmCartaz) -> parametro: codigo
// alterar o status de emCartaz (true -> false e se tiver false -> true) 
const alterarStatusEmCartaz = (codigo, callback) => {
    let filme = callback(codigo)
    
    filme.emCartaz ==true ? filme.emCartaz = false : filme.emCartaz = true;

    return filme;
}

console.log(alterarStatusEmCartaz(2, buscarFilme))
listarTodosOsFilmesEmCartaz()

//adicionar um novo filme ao catalogo (adicionarFilme) 
// parametro filme ; {codigo, titulo, atores duracao, anoDeLancamento} 

const adicionarFilme = (filme)=> {
    const { codigo, titulo, atores, duracao, anoDeLancamento} = filme;

    const filmeParaAdicionar = {
        ...filme,
        emCartaz: true 
    }

    catalogo.push(filmeParaAdicionar);

    return filmeParaAdicionar;
}

console.log(
    adicionarFilme({
    codigo: 4, 
    titulo: "O poderoso chefão",
    atores: ["Marlon brando", "Al pacino"],
    duracao: 3.5, 
    anoDeLancamento: 1972 
})
)

console.log(catalogo)

// listar todos os filmes com duracai maior do que 2h (listarFilmesComLongaDuracao) => filter 


const listarFilmesComLongaDuracao = () => {

    return catalogo.filter((filme)=> filme.duracao > 2 )
}


// chamar a função de listar os filmes aqui depois de chama a função de adicionar 
console.log(listarFilmesComLongaDuracao())



// E - && 













