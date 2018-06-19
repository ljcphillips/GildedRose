describe("Gilded Rose", function() {

  beforeEach(function(){
    items = [];
    gildedRose = new Shop(items);
  });

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should lower sellIn Value", function(){
    apple = new Item("Apple",5,5)
    gildedRose.items.push(apple)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(4);
  });

  it("should lower quality", function(){
    apple = new Item("Apple",5,5)
    gildedRose.items.push(apple)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(4);
  });

  it("should lower quality twice as fast after sell by date", function(){
    apple = new Item("Apple",0,5)
    gildedRose.items.push(apple)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(3);
  });

  it("quality should remain at 0", function(){
    apple = new Item("Apple",5,0)
    gildedRose.items.push(apple)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it("quality should increase if Aged Brie", function(){
    brie = new Item('Aged Brie',5,1)
    gildedRose.items.push(brie)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(2);
  });

  it("quality should not increase past 50", function(){
    brie = new Item("Aged Brie",5,50)
    gildedRose.items.push(brie)
    // console.log(gildedRose.isSpecialItem(brie))
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it("sulfuras should not decrease in value", function(){
    sulfuras = new Item("Sulfuras, Hand of Ragnaros",5,30)
    gildedRose.items.push(sulfuras)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(30);
  });

  it("sulfuras should not decrease in sellIn Value", function(){
    sulfuras = new Item("Sulfuras, Hand of Ragnaros",5,30)
    gildedRose.items.push(sulfuras)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(5);
  });

  it("quality should increase if Backstage Passes", function(){
    backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert',11,5)
    gildedRose.items.push(backstagePass)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(6);
  });

  it("quality should increase by 2 if Backstage Passes and less than 10", function(){
    backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert',9,5)
    gildedRose.items.push(backstagePass)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(7);
  });

  it("quality should increase by 3 if Backstage Passes and less than 5", function(){
    backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert',4,5)
    gildedRose.items.push(backstagePass)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(8);
  });

  it("quality should drop to 0 if Backstage Passes and less than 0", function(){
    backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert',0,5)
    gildedRose.items.push(backstagePass)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it("should lower quality twice as fast if Conjured item", function(){
    conjured = new Item('Conjured Mana Cake', 3, 6)
    gildedRose.items.push(conjured)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(4);
  });

  it("should lower quality twice as fast if Conjured item", function(){
    conjured = new Item('Conjured Mana Cake', 0, 6)
    gildedRose.items.push(conjured)
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toEqual(2);
  });

  // it("should return true if special item", function(){
  //   brie = new Item('Aged Brie', 0, 6)
  //   assertion = gildedRose.isSpecialItem(brie);
  //   expect(assertion).toEqual(true);
  // });

});
