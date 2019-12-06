const Cat = require('./Cat');

describe('Cat Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const cat = new Cat({
        age: 3,
        color: 'black and white'
      });

      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('age', () => {
    it('is required', () => {
      const cat = new Cat({
        name: 'Willow',
        color: 'black and white'
      });

      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` is required.');
    });
  });

  it('is over 0', () => {
    const cat = new Cat({
      name: 'Willow',
      age: -1,
      color: 'black and white'
    });

    const { errors } = cat.validateSync();
    expect(errors.age.message).toEqual('Path `age` (-1) is less than minimum allowed value (0).');
  });

  describe('color', () => {
    it('is a string', () => {
      const cat = new Cat({
        name: 'Willow',
        age: 3,
        color: {}
      });

      const { errors } = cat.validateSync();
      // eslint-disable-next-line no-use-before-define
      expect(errors.color.message).toEqual('Cast to String failed for value \"{}\" at path \"color\"');
    });
  });
});
