const parseFavoriteContacts = (favourite) => {
  if (typeof favourite !== 'string') return;

  const lowerFavourite = favourite.toLowerCase();
  if (['true', 'false'].includes(lowerFavourite)) {
    return lowerFavourite === 'true';
  }
};

const parseContactType = (type) => {
  if (typeof type !== 'string') return;

  const lowerType = type.toLowerCase();
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
