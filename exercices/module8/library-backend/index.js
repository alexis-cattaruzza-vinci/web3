// Sample data for books and authors (initial state)
let books = [
    { title: 'Clean Code', author: 'Robert Martin', published: 2008, genres: ['Programming', 'Software Engineering', 'Refactoring'] },
    { title: 'Refactoring, edition 2', author: 'Martin Fowler', published: 2018, genres: ['Programming', 'Refactoring'] },
    { title: 'Refactoring to Patterns', author: 'Joshua Kerievsky', published: 2004, genres: ['Programming', 'Refactoring'] },
    { title: 'Practical Object-Oriented Design', author: 'Sandi Metz', published: 2012, genres: ['Programming', 'Refactoring'] },
    { title: 'Harry Potter', author: 'J.K. Rowling', published: 1997, genres: ['Fantasy', 'Adventure'] }
  ];
  
  // Initial authors data (only storing names and book counts)
  let authors = [
    { name: 'Robert Martin', bookCount: 2, born: null },
    { name: 'Martin Fowler', bookCount: 1, born: null },
    { name: 'Joshua Kerievsky', bookCount: 1, born: null },
    { name: 'Sandi Metz', bookCount: 1, born: null },
    { name: 'J.K. Rowling', bookCount: 1, born: null },
    { name: 'Reijo Mäki', bookCount: 1, born: null }
  ];
  
  // Define the GraphQL schema
  const typeDefs = `
    type Book {
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    }
  
    type Author {
      name: String!
      bookCount: Int!
      born: Int
    }
  
    type Query {
      allBooks(author: String, genre: String): [Book!]!
      allAuthors: [Author!]!
    }
  
    type Mutation {
      addBook(
        title: String!,
        author: String!,
        published: Int!,
        genres: [String!]!
      ): Book!
      editAuthor(
        name: String!,
        setBornTo: Int!
      ): Author
    }
  `;
  
  // Resolvers
  const resolvers = {
    Query: {
      allBooks: (root, args) => {
        let filteredBooks = books;
        
        if (args.author) {
          filteredBooks = filteredBooks.filter(book => book.author === args.author);
        }
  
        if (args.genre) {
          filteredBooks = filteredBooks.filter(book => book.genres.includes(args.genre));
        }
  
        return filteredBooks;
      },
      allAuthors: () => authors
    },
    Mutation: {
      addBook: (root, args) => {
        const { title, author, published, genres } = args;
  
        // Check if the author already exists
        const existingAuthor = authors.find(a => a.name === author);
        
        if (existingAuthor) {
          // Increment book count for the existing author
          existingAuthor.bookCount++;
        } else {
          // If the author doesn't exist, add them to authors array
          authors.push({ name: author, bookCount: 1 });
        }
  
        // Add the new book to the list
        const newBook = { title, author, published, genres };
        books.push(newBook);
        
        return newBook;
      },
      editAuthor: (root, args) => {
        const { name, setBornTo } = args;
  
        // Find the author by name
        const author = authors.find(a => a.name === name);
  
        if (!author) {
          // If author is not found, return null
          return null;
        }
  
        // Update the author's birth year
        author.born = setBornTo;
        
        // Return the updated author
        return author;
      }
    }
  };
  
  // Create an ApolloServer instance
  const { ApolloServer } = require('@apollo/server');
  const { startStandaloneServer } = require('@apollo/server/standalone');
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  // Start the server
  startStandaloneServer(server, {
    listen: { port: 4000 }
  }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
  