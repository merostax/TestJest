describe('all chapters', () => {
    describe('Chapter 1 tests', () => {
  it('Our first jest test', () => {
    expect(true).toBe(true);
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
      expect(true&&false).toBe(false);
    });
  });
})