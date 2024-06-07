const contactService = require('../services/contactService');
exports.identifyContact = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    const result = await contactService.identify({ email, phoneNumber });
    res.status(200).json({ contact: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
