const LocalStorageSet = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export default LocalStorageSet;
