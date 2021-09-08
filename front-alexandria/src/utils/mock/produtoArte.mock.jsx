// GET: /produto/arte?id={ idDoProduto }
// POST: /produto/arte

export const produtoArte = {
    id: 111,
    categoria: 'Arte',
    nome: 'Nome Arte',
    tipo: 'Escultura',
    autor: [
        'Nome autor 1',
        'Nome autor 2',
    ],
    material: [
        'Marmore',
    ],
    tecnica: [
        'entalhe',
    ],
    ano: '07/05/1690',
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