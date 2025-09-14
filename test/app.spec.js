
describe("Sample Test", () => {
  test("should pass", () => {
    expect(true).toBe(true);
  });

  test("should fail", () => {
    expect(false).toBe(true);
  });
});


test("this test is skipped", () => {
  expect(true).toBe(false);
});

test.skip("this test is skipped", () => {
  expect(true).toBe(false);
});

describe("My killer feature", () => {
  
    test("this test is also skipped", () => {
        const x = 2+2;
    
        expect(x).toEqual(4);
        expect(x).toBeGreaterThan(3);
        expect(x).toBeLessThan(5);
        expect(x).not.toBe(null);
        expect(x).not.toBeUndefined();
        expect(x).toBeDefined();
        expect(x).not.toBeNaN();
        expect(x).toEqual(expect.any(Number));
        expect(x).toEqual(expect.not.stringContaining("hello"));
        expect(x).toBeInstanceOf(Number);
    })

});