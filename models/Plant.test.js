const Plant = require('./Plant');

describe('Plant Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const plant = new Plant({
        succulent: true,
        location: 'hallway'
      });

      const { errors } = plant.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('succulent', () => {
    it('is required', () => {
      const plant = new Plant({
        name: 'Sansevieria',
        location: 'hallway'
      });

      const { errors } = plant.validateSync();
      expect(errors.succulent.message).toEqual('Path `succulent` is required.');
    });
  });

  describe('location', () => {
    it('is a string', () => {
      const plant = new Plant({
        name: 'Sansevieria',
        succulent: true,
        location: []
      });

      const { errors } = plant.validateSync();
      // eslint-disable-next-line no-use-before-define
      expect(errors.location.message).toEqual('Cast to String failed for value \"[]\" at path \"location\"');
    });
  });
});
