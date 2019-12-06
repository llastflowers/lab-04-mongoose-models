const Book = require('./Book');

describe('Book Model', () => {
  describe('title', () => {
    it('requires a title', () => {
      const book = new Book({
        read: true,
        pages: 468
      });

      const { errors } = book.validateSync();
      expect(errors.title.message).toEqual('Path `title` is required.');
    });
  });

  describe('read', () => {
    it('is required', () => {
      const book = new Book({
        title: 'Oryx and Crake',
        pages: 468
      });

      const { errors } = book.validateSync();
      expect(errors.read.message).toEqual('Path `read` is required.');
    });
  });

  describe('color', () => {
    it('is over 5', () => {
      const book = new Book({
        title: 'Oryx and Crake',
        read: true,
        pages: 3
      });
    
      const { errors } = book.validateSync();
      expect(errors.pages.message).toEqual('Path `pages` (3) is less than minimum allowed value (5).');
    });
  });
});
