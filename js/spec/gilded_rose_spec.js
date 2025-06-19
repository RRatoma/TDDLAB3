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

  it("Aged brie increases in quality", function() {
    items = [new Item("Aged Brie", 2, 0)];
    update_quality();
    expect(items[0].quality).toBe(1);
  });

  it("Quality of an item is never more than 50", function() {
    items = [new Item("Aged Brie", 2, 50)];
    update_quality();
    expect(items[0].quality).toBe(50);
  });

  it("Sulfuras Quality does not change", function() {
    items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
    update_quality();
    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it("Passes Increase quality by 1 when more than 10 days away (+1)", function() {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)];
    update_quality();
    expect(items[0].quality).toBe(21);
  });

  it("Passes Increase quality by 2 when 10 days or less away (+2)", function() {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)];
    update_quality();
    expect(items[0].quality).toBe(22);
  });

  it("Passes Increase quality by 3 when 5 days or less away (+3)", function() {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)];
    update_quality();
    expect(items[0].quality).toBe(23);
  });

  it("Passes Reduce quality to 0 after the concert", function() {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)];
    update_quality();
    expect(items[0].quality).toBe(0);
  });

  it("Conjured Items decrease in quality twice as fast", function() {
    items = [new Item("Conjured Mana Cake", 3, 6)];
    update_quality();
    expect(items[0].quality).toBe(4);
  });

  it("Conjured Items decrease in quality by 4 after sell_in date", function() {
    items = [new Item("Conjured Mana Cake", 0, 6)];
    update_quality();
    expect(items[0].quality).toBe(2);
  });

});





