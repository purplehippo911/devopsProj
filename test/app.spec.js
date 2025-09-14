
describe("Sample Test", () => {
  test("should pass", () => {
    expect(true).toBe(true);
  });

  /*test("should fail", () => {
    expect(false).toBe(true);
  });*/
});


test.skip("this test is skipped", () => {
  expect(true).toBe(false);
});

test.skip("this test is skipped", () => {
  expect(true).toBe(false);
});

describe("My killer feature", () => {
  
    test("this test is also skipped", () => {
        const x = 2+2;
    
        expect(x).toEqual(4);
    })

});