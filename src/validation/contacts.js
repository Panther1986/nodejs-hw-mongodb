import Joi from 'joi';

export const createContactsShema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().min(3).max(20).required(),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .default('personal'),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
}).options({
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    },
  },
  toObject: {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    },
  },
});

export const updateContactsShema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .default('personal'),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
}).options({
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    },
  },
  toObject: {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    },
  },
});