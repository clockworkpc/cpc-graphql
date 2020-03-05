class Friend {
    constructor(id, { firstName, lastName, sex, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.language = language;
        this.email = email; 
    }
}

const friendDatabase = {};

const resolvers = { 
    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;