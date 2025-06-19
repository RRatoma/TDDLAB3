describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("Quality and sell_in reduced by 1", function() {
    items = [new Item("Elixir of the Mongoose", 5, 7)];
    update_quality();
    expect(items[0].sell_in).toBe(4);
    expect(items[0].quality).toBe(6);
  });

  it("Quality degrades twice as fast after sell_in date (by -2)", function() {
    items = [new Item("Elixir of the Mongoose", 0, 6)];
    update_quality();
    expect(items[0].quality).toBe(4);
  });

  it("Quality is never negative", function() {
    items = [new Item("Elixir of the Mongoose", 0, 0)];
    update_quality();
    expect(items[0].quality).toBe(0);
  });
});



