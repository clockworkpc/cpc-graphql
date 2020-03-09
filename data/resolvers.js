import mongoose from 'mongoose';
import { Friends, Aliens } from './dbConnectors';

// resolver map
export const resolvers = {
  Query: {
    getOneFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.findById(id, (err, friend) => {
          err ? reject(err) : resolve(friend)
        });
      });
    },

    getFriends: (root, {}) => {
      return new Promise((resolve, object) => {
        Friends.find({}, (err, friends) => {
          err ? reject(err) : resolve(friends)
        });
      });
    },

    getOneAlien: (root, { id }) => {
      return Aliens.findOne({ where: { id: id } });
    },

    getAliens: () => {
      return Aliens.findAll();
    }
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        sex: input.sex,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err)
          else resolve(newFriend)
        })
      })
    },
    updateFriend: (root, { input }) => {
      return new Promise((resolve, object) => {
        Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
          if (err) reject(err)
          else resolve(friend)
        })
      })
    },
    deleteFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.remove({ _id: id }, (err) => {
          err ? reject(err) : resolve(`Successfully deleted friend with ID: ${id}`)
        })
      })
    }
  }
};