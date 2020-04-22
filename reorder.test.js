const { reorder } = require("./app.js");

const categories = [
  { id: 1, name: "Default" },
  { id: 2, name: "Accessories", parent: null },
  { id: 3, name: "Smartphones", parent: 1 },
  { id: 4, name: "Apple", parent: 3 },
  { id: 5, name: "Samsung", parent: 3 },
  { id: 6, name: "Some Category", parent: 1 },
  { id: 7, name: "Xiaomi", parent: 3 },
  { id: 8, name: "Headphones", parent: 2 },
];

const result = [
  {
    id: 1,
    name: "Default",
    children: [
      {
        id: 3,
        name: "Smartphones",
        children: [
          { id: 4, name: "Apple", children: [] },
          { id: 5, name: "Samsung", children: [] },
          { id: 7, name: "Xiaomi", children: [] },
        ],
      },
      { id: 6, name: "Some Category", children: [] },
    ],
  },
  {
    id: 2,
    name: "Accessories",
    children: [{ id: 8, name: "Headphones", children: [] }],
  },
];

describe("reorder function, show children in categories", () => {
  test("should exactly match result", () => {
    const reordered = reorder(categories);
    expect(result).toEqual(reordered);
  });
});
