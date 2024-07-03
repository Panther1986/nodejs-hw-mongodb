const parseFavoriteContacts = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  const lowerFavourite = isFavourite.toLowerCase();
  if (['true', 'false'].includes(lowerFavourite)) {
    return lowerFavourite === 'true';
  }
};

const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;

  const lowerType = contactType.toLowerCase();
  if (['work', 'home', 'personal'].includes(lowerType)) {
    return lowerType;
  }
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedFavorite = parseFavoriteContacts(isFavourite);
  const parsedContactType = parseContactType(contactType);

  const filterParams = {};
  if (parsedFavorite !== undefined) {
    filterParams.isFavourite = parsedFavorite;
  }
  if (parsedContactType !== undefined) {
    filterParams.contactType = parsedContactType;
  }

  return filterParams;
};
