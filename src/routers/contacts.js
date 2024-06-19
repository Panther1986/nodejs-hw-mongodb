import { Router } from 'express';
import {
  getContactsController,
  getContactsByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsShema,
  updateContactsShema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ROLE } from '../constans/index.js';
import { checkRoles } from '../middlewares/checkRoles.js';

const router = Router();
router.use(authenticate);

router.get('/', checkRoles(ROLE.USER), ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  checkRoles(ROLE.USER),
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '',
  checkRoles(ROLE.USER),
  validateBody(createContactsShema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  checkRoles(ROLE.USER),
  validateBody(updateContactsShema),
  ctrlWrapper(patchContactController),
);

router.delete(
  '/:contactId',
  checkRoles(ROLE.USER),
  ctrlWrapper(deleteContactController),
);

export default router;
