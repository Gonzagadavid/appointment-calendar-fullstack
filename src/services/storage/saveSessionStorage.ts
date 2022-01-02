const saveLocalStorage = (key: string, item: object) => {
  const itemJson = JSON.stringify(item);
  sessionStorage.setItem(key, itemJson);
};

export default saveLocalStorage;
