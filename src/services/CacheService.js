export default class CacheService {

  constructor(storage = window.sessionStorage) {
    this.storage = storage;
  }

  addItem(itemName, data) {
    let existing = this.storage.getItem(itemName);
    let updated;

    if (!existing) {
      updated = [data];
    } else {
      updated = JSON.parse(existing);
      updated.push(data);
    }

    this.storage.setItem(itemName, JSON.stringify(updated));
  }

  getItem(itemName) {
    const existing = this.storage.getItem(itemName);
    return existing ? JSON.parse(existing) : [];
  }

  resetItem(itemName, initialValue = null) {
    return this.storage.setItem(itemName, JSON.stringify(initialValue));
  }
}