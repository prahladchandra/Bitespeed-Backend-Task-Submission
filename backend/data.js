// const mongoose = require('mongoose');
// const Contact = require('./models/Contact');

// const seedData = [
//   {
//     phoneNumber: "123456",
//     email: "lorraine@hillvalley.edu",
//     linkedId: null,
//     linkPrecedence: "primary",
//     createdAt: new Date("2023-04-01T00:00:00.374Z"),
//     updatedAt: new Date("2023-04-01T00:00:00.374Z"),
//     deletedAt: null
//   },
//   {
//     phoneNumber: "123456",
//     email: "mcfly@hillvalley.edu",
//     linkedId: null, // This will be updated in the script
//     linkPrecedence: "secondary",
//     createdAt: new Date("2023-04-20T05:30:00.11Z"),
//     updatedAt: new Date("2023-04-20T05:30:00.11Z"),
//     deletedAt: null
//   },
//   {
//     phoneNumber: "919191",
//     email: "george@hillvalley.edu",
//     linkedId: null,
//     linkPrecedence: "primary",
//     createdAt: new Date("2023-04-11T00:00:00.374Z"),
//     updatedAt: new Date("2023-04-11T00:00:00.374Z"),
//     deletedAt: null
//   },
//   {
//     phoneNumber: "717171",
//     email: "biffsucks@hillvalley.edu",
//     linkedId: null,
//     linkPrecedence: "primary",
//     createdAt: new Date("2023-04-21T05:30:00.11Z"),
//     updatedAt: new Date("2023-04-21T05:30:00.11Z"),
//     deletedAt: null
//   }
// ];

// mongoose.connect('mongodb+srv://bitespeed_identity:Pc1020304050@cluster0.usgp0uq.mongodb.net/bitespeed_identity?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(async () => {
//   console.log('Connected to MongoDB');

//   // Clear existing data
//   await Contact.deleteMany({});

//   // Insert seed data
//   const contacts = await Contact.insertMany(seedData);
  
//   // Update linkedId for secondary contacts
//   const primaryContact = contacts.find(c => c.email === 'lorraine@hillvalley.edu');
//   const secondaryContact = contacts.find(c => c.email === 'mcfly@hillvalley.edu');
//   secondaryContact.linkedId = primaryContact._id;
//   await secondaryContact.save();

//   console.log('Database seeded successfully');
//   process.exit();
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
//   process.exit(1);
// });