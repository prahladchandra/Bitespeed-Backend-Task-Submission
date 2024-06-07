const Contact = require('../models/Contact');
const findPrimaryContact = async (contact) => {
  if (contact.linkedId) {
    return await Contact.findById(contact.linkedId);
  }
  return contact;
};

exports.identify = async ({ email, phoneNumber }) => {
  let contacts = await Contact.find({ 
    $or: [
      { email: email || null },
      { phoneNumber: phoneNumber || null }
    ]
  });

  if (contacts.length === 0) {
    const newContact = new Contact({
      email,
      phoneNumber,
      linkPrecedence: 'primary'
    });
    await newContact.save();
    return formatResponse(newContact);
  }
  contacts = await Promise.all(contacts.map(findPrimaryContact));
  const primaryContact = contacts.reduce((prev, current) => (prev.createdAt < current.createdAt ? prev : current));
  const secondaryContacts = contacts.filter(contact => contact._id.toString() !== primaryContact._id.toString());
  const emails = Array.from(new Set([primaryContact.email, ...secondaryContacts.map(c => c.email).filter(Boolean)]));
  const phoneNumbers = Array.from(new Set([primaryContact.phoneNumber, ...secondaryContacts.map(c => c.phoneNumber).filter(Boolean)]));

  if ((email && !emails.includes(email)) || (phoneNumber && !phoneNumbers.includes(phoneNumber))) {
    const newSecondaryContact = new Contact({
      email,
      phoneNumber,
      linkedId: primaryContact._id,
      linkPrecedence: 'secondary'
    });
    await newSecondaryContact.save();
    secondaryContacts.push(newSecondaryContact);
  }

  return formatResponse(primaryContact, secondaryContacts);
};

const formatResponse = (primaryContact, secondaryContacts = []) => {
  return {
    primaryContatctId: primaryContact._id,
    emails: [primaryContact.email, ...secondaryContacts.map(c => c.email).filter(Boolean)],
    phoneNumbers: [primaryContact.phoneNumber, ...secondaryContacts.map(c => c.phoneNumber).filter(Boolean)],
    secondaryContactIds: secondaryContacts.map(c => c._id)
  };
};
