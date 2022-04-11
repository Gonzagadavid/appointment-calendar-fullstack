const getSessionStorage = (key: string) => {
  const itemJson = sessionStorage.getItem(key) || '{}';
  const item = JSON.parse(itemJson);
  return item;
};

export default getSessionStorage;
