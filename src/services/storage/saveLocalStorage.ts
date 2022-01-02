const saveLocalStorage = (key: string, item: object) => {
  const itemJson = JSON.stringify(item);
  localStorage.setItem(key, itemJson);
};

export default saveLocalStorage;
