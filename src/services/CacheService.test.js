import CacheService from './CacheService';
import 'jest';

describe('Cache Service', () => {
  let service;
  let mockSessionStorage;

  const itemName = 'test';
  const fixture = {id: '1'};

  beforeEach(() => {
    mockSessionStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
    };
    service = new CacheService(mockSessionStorage);
  });

  describe('Add Item', () => {
    it('should add item to empty cache', () => {
      // Arrange
      const mock = mockSessionStorage.setItem;

      // Act
      service.addItem(itemName, fixture);

      // Assert
      expect(mock).toHaveBeenCalledWith(itemName, JSON.stringify([fixture]));
    });

    it('should add item to existing cache', () => {
      // Arrange
      const itemName = 'test';
      const data = {id: '2'};
      const expected = JSON.stringify([fixture, data]);
      const mock = mockSessionStorage.setItem;

      mockSessionStorage.getItem.mockReturnValue(JSON.stringify([fixture]));

      // Act
      service.addItem(itemName, data);

      // Assert
      expect(mock).toHaveBeenCalledWith(itemName, expected);
    });
  });

  describe('Get Item', () => {
    it('should get item from cache', () => {
      // Arrange
      const expected = [{id: '1'}];
      const mock = mockSessionStorage.getItem;

      mockSessionStorage.getItem.mockReturnValue(JSON.stringify([fixture]));

      // Act
      const result = service.getItem(itemName, fixture);

      // Assert
      expect(mock).toHaveBeenCalledWith(itemName);
      expect(result).toEqual(expected);
    });

    it('should get item from empty cache', () => {
      // Arrange
      const mock = mockSessionStorage.getItem;
      mockSessionStorage.getItem.mockReturnValue(null);

      // Act
      const result = service.getItem(itemName, fixture);

      // Assert
      expect(mock).toHaveBeenCalledWith(itemName);
      expect(result).toEqual([]);
    });
  });

  describe('Reset Item', () => {
    it('should reset the cache item', () => {
      // Arrange
      const mock = mockSessionStorage.setItem;
      const expected = JSON.stringify([]);

      // Act
      service.resetItem(itemName, []);

      // Assert
      expect(mock).toHaveBeenCalledWith(itemName, expected);
    })
  });
});
