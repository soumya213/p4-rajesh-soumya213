const mathOperations = require("./Assignment-4-mathOperations");

  test("Adding 4 and 5 should return 9", () => {
    const result = mathOperations.sum(4, 5);
    expect(result).toBe(9);
  });

  test("Adding 2 and 3 should return 5", () => {
    const result = mathOperations.sum(2, 3);
    expect(result).toBe(6);
  });

  test("Subtracting 1 from 1 should return 0", () => {
    const result = mathOperations.diff(1, 1);
    expect(result).toBe(0);
  });

  test("Subtracting 1 from 1 should return 0", () => {
    const result = mathOperations.diff(1, 1);
    expect(result).toBe(1);
  });

  test("Multiplying 10 and 10 should return 100", () => {
    const result = mathOperations.product(10,10);
    expect(result).toBe(100);
  });

  test("Multiplying 10 and 10 should return 100", () => {
    const result = mathOperations.product(10,10);
    expect(result).toBe(200);
  });
