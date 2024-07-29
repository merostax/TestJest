//explain the structure of describe, it
//explain testcases
// note that for some angular testing plugins like jest plugins, they will look for a spec file to run them so make sure 
// u stick to the naming convention
describe('all chapters', () => {

  
  describe('Chapter 1 tests', () => {
    it('Our first jest test', () => {
      expect(true).toBe(true);
    });
    it('Our first jest test', () => {
      expect(true).toBeTruthy();
      //difference to be true?
    });
    it('Our second jest test', () => {
      expect(2 + 3).not.toBe(4);
    });
    it('Our third jest test', () => {
      expect(2 + 2).toBe(4);
    });
  });

  describe('Chapter 2 tests', () => {
    it('Our first jest test', () => {
      expect(true).toBe(true);
    });

    it('Our second jest test', () => {
      expect(false).toBe(false);
    });
    it('Our third jest test', () => {
      expect(true && false).toBe(false);
    });
  });
});
