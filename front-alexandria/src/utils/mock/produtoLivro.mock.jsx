// GET: /produto/livro?id={ idDoProduto }
// POST: /produto/livro

export const produtoLivro = {
    id: 111,
    categoria: 'Livro',
    nome: 'Nome livro',
    tipo: 'suspense',
    autor: [
        'Nome autor 1',
        'Nome autor 2',
    ],
    editora: 'nome editora',
    edicao: 1,
    ano: 2017,
    biografia: 'loren cacildis text xet aut let',
    descricao: 'loren cacildis text xet aut let',
    idItensRelacionados: [
        123,
        124,
    ],
    palavrasChave: [
        'palavra 1',
        'palavra 2',
    ],
    arquivoImg: [
        {
            link: 'https://media.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif',
            descricao: 'loren cacildis text xet aut let'
        },{
            link: 'https://media.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif',
            descricao: 'loren cacildis text xet aut let'
        }
    ],
    arquivodDoc: [],
    arquivodPdf: [],
}