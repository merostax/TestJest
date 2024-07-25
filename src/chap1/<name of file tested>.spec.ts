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
