const getLocalStorage = (key: string) => {
  const itemJson = localStorage.getItem(key) || '{}';
  const item = JSON.parse(itemJson);
  return item;
};

export default getLocalStorage;
