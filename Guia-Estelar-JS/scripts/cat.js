const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'O mundo dos ricos',
        author: 'Marcelo Rico'
      },
      {
        title: 'O pé de ouro',
        author: 'El Gato'
      },
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'O Guia Estelar da Inteligência Emocional',
        author: 'Maykão'
      },
      {
        title: 'O ser para o mundo',
        author: 'Mix Canvas'
      },
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(`${category.books.length} livros`)
}

function countAuthors() {
  let authors = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log(`Total de autores: ${authors.length}.`)
}

function booksOfAuthor(author) {
  let books = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      if(book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros de ${author} (${books.length}):\n- ${books.join('\n- ')}.`)
}

countAuthors()
booksOfAuthor('Augusto Cury')
booksOfAuthor('Maykão')