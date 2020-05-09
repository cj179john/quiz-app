export default class CacheService {
  addItem(itemName, data) {
    let existing = localStorage.getItem(itemName);
    let updated;

    if (!existing) {
      updated = [data];
    } else {
      updated = JSON.parse(existing);
      updated.push(data);
    }

    localStorage.setItem(itemName, JSON.stringify(updated));
  }

  getItem(itemName) {
    const existing = localStorage.getItem(itemName);
    return existing ? JSON.parse(existing) : [];
  }

  resetItem(itemName, initialValue = null) {
    return localStorage.setItem(itemName, JSON.stringify(initialValue));
  }
}