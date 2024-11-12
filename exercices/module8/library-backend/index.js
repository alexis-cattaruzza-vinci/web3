const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// Sample data
const books = [
    { 
      title: 'Harry Potter and the Sorcerer\'s Stone', 
      author: 'J.K. Rowling', 
      published: 1997, 
      genres: ['Fantasy', 'Adventure']
    },
    { 
      title: 'Jurassic Park', 
      author: 'Michael Crichton', 
      published: 1990, 
      genres: ['Science Fiction', 'Thriller']
    },
    { 
      title: 'The Hobbit', 
      author: 'J.R.R. Tolkien', 
      published: 1937, 
      genres: ['Fantasy', 'Adventure']
    },
    { 
      title: '1984', 
      author: 'George Orwell', 
      published: 1949, 
      genres: ['Dystopian', 'Political Fiction']
    },
    { 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      published: 1925, 
      genres: ['Novel', 'Historical']
    },
    { 
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      published: 1851, 
      genres: ['Adventure', 'Classic']
    },
    { 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      published: 1813, 
      genres: ['Romance', 'Classic']
    }
  ];
  

const authors = [
  'J.K. Rowling',
  'Michael Crichton',
  'J.R.R. Tolkien',
  'George Orwell',
  'F. Scott Fitzgerald',
  'Herman Melville',
  'Jane Austen'
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
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks: [Book!]!
    allAuthors: [Author!]!
  }
`;


// Define the resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => new Set(authors).size,
    allBooks:() => books,
    allAuthors: () => {
        // Create an array of unique authors with book count
        const authors = [];
        
        // Group books by author and count them
        books.forEach(book => {
          const existingAuthor = authors.find(author => author.name === book.author);
          if (existingAuthor) {
            existingAuthor.bookCount++;
          } else {
            authors.push({ name: book.author, bookCount: 1 });
          }
        });
  
        return authors;
      }
  }
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Start the standalone server
startStandaloneServer(server, {
  listen: { port: 4000 }
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
