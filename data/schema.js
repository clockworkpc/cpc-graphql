import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        sex: Sex
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Alien {
      id: ID
      firstName: String
      lastName: String
      planet: String
    }

    type Contact {
      firstName: String
      lastName: String
    }

    enum Sex {
      MALE
      FEMALE
    }

    type Query {
        getOneFriend(id: ID): Friend
        getOneAlien(id: ID): Alien
        getFriends: Friend
        getAliens: Alien
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        sex: Sex
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
      firstName: String
      lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };