import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Projects = new Mongo.Collection('projects');

Projects.schema = new SimpleSchema({
  projectName: { type: String },
  location: { type: String },
  createdAt: { type: Date },
  clientId: { type: String },
});

export default Projects;