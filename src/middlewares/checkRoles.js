import createHttpErrors from 'http-errors';
import { contactsCollection } from '../db/contacts.js';
import { ROLE } from '../constans/index.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;

    if (!user) {
      next(createHttpErrors(401));
      return;
    }

    const { role } = user;

    if (roles.includes(ROLE.USER)) {
      const { contactId } = req.params;
      if (!contactId) {
        next(createHttpErrors(403));
        return;
      }
      const contact = await contactsCollection.findOne({
        _id: contactId,
        userId: user._id,
      });

      if (contact) {
        next();
        return;
      }
    }
    next(createHttpErrors(403));
  };
