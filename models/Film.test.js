const Film = require('./Film');

describe('Film Model', () => {
  describe('brand', () => {
    it('requires a brand', () => {
      const film = new Film({
        iso: 400,
        exposures: 36
      });

      const { errors } = film.validateSync();
      expect(errors.brand.message).toEqual('Path `brand` is required.');
    });
  });

  describe('iso', () => {
    it('is required', () => {
      const film = new Film({
        brand: 'kodak portra',
        exposures: 36
      });

      const { errors } = film.validateSync();
      expect(errors.iso.message).toEqual('Path `iso` is required.');
    });
  });

  describe('exposures', () => {
    it('is below 37', () => {
      const film = new Film({
        brand: 'kodak portra',
        iso: 400,
        exposures: 40
      });
    
      const { errors } = film.validateSync();
      expect(errors.exposures.message).toEqual('Path `exposures` (40) is more than maximum allowed value (36).');
    });
  });
});
