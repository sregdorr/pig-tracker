import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Clients = new Mongo.Collection('clients');

if (Meteor.isServer) {
  Meteor.publish('clients', function clientsPublication() {
    return Clients.find();
  });
}

Clients.schema = new SimpleSchema({
  clientName: { type: String }
});

Clients.helpers({
  projects() {
    return Clients.find({ clientId: this._id }, { sort: { createdAt: -1 }});
  }
});
