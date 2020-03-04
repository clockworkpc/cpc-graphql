import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        sex: String
        language: String
        emails: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`)

export default schema;
