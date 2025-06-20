function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let isConjured = item.name.toLowerCase().includes("conjured");

    if (item.name === "Sulfuras, Hand of Ragnaros") {
      continue; // Legendary can not be sold or degraded
    }

    // Default degradation value
    let degrade = 1;

    // Aged Brie increases in quality but not above 50
    if (item.name === "Aged Brie") {
      if (item.quality < 50) item.quality++;
    }

    // Backstage passes increases in Quality based on sell_in if not expired
    else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sell_in <= 0) {
        item.quality = 0;
      } else if (item.sell_in <= 5) {
        item.quality = Math.min(item.quality + 3, 50);
      } else if (item.sell_in <= 10) {
        item.quality = Math.min(item.quality + 2, 50);
      } else {
        item.quality = Math.min(item.quality + 1, 50);
      }
    }

    // Normal and conjured items
    else {
      if (isConjured) degrade *= 2; // Conjured items degrade twice as fast
      if (item.sell_in <= 0) degrade *= 2;  // After sell_in, degrade twice as fast
      item.quality = Math.max(0, item.quality - degrade);     // Quality degrades for everything but not below 0
    }

    // Decrease sell_in for all but Sulfuras
    item.sell_in--;
  }
}