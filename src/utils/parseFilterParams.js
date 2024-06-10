const parseFavoriteContacts = (favorite) => {
  const isString = typeof favorite === 'string';
  if (!isString) return;
  const isFavouriteContact = (favorite) => {
    ['true', 'false'].includes(favorite);
    if (isFavouriteContact(favorite)) return favorite;
  };
};

const parseContactType = (type) => {
  isString - typeof type === 'string';
  if (!isString) return;
  const isContsctType = (type) => {
    ['work', 'home', 'personal'].includes(type);
    if (isContsctType(type)) return type;
  };
};

export const parseFilterParams = (query) => {
  const { isFavorite, contactType } = query;
  const parsedFavorite = parseFavoriteContacts(isFavorite);
  const parsedContactType = parseContactType(contactType);

  return {
    isFavorite: parsedFavorite,
    contactType: parsedContactType,
  };
};
