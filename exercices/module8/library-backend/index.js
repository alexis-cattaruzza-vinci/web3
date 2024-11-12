const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// Sample data
const books = [
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
  { title: 'Jurassic Park', author: 'Michael Crichton' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'Moby Dick', author: 'Herman Melville' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' }
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
  type Query {
    bookCount: Int!
    authorCount: Int!
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => new Set(authors).size
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
