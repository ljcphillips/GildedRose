class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.specialItems = ['Aged Brie','Backstage passes to a TAFKAL80ETC concert']
  }

  // isSpecialItem(item){
  //   var outcome = "unknown"
  //   var results = []
  //   this.specialItems.forEach(function(reference){
  //     if (item.name === reference){
  //       results.push(true)
  //       }
  //     else {
  //       results.push(false)
  //     }
  //   });
  //   if(results.includes(true) ){
  //     outcome = true
  //   }
  //   else{
  //     outcome = false
  //   }
  //   return outcome
  // }

  isNotAgedBrie(item){
    if (item.name === "Aged Brie"){
      return false
    }
    else{
      return true
    }
  }
  isNotBackstagePass(item){
    if (item.name === "Backstage passes to a TAFKAL80ETC concert"){
      return false
    }
    else{
      return true
    }
  }

  isNotSulfuras(item){
    if (item.name === 'Sulfuras, Hand of Ragnaros'){
      return false
    }
    else{
      return true
    }
  }

  decreaseQuality(item){
     item.quality--
  }
  increaseQuality(item){
    if(item.quality < 50){
       item.quality++
     }
  }

  decreaseSellIn(item){
     item.sellIn--
  }
  increaseSellIn(item){
     item.sellIn++
  }
  isQualityGreaterThanZero(item){
    if (item.quality > 0){
      return true
    }
    else{
      return false
    }
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.isNotAgedBrie(this.items[i]) && this.isNotBackstagePass(this.items[i])) {
        if (this.isQualityGreaterThanZero(this.items[i]) && this.isNotSulfuras(this.items[i])) {
            this.decreaseQuality(this.items[i]);
        }
      } else {
          this.increaseQuality(this.items[i]);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
                this.increaseQuality(this.items[i]);
            }
            if (this.items[i].sellIn < 6) {
                this.increaseQuality(this.items[i]);
            }
          }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.decreaseSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.decreaseQuality(this.items[i]);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQuality(this.items[i]);
          }
        }
      }
    }

    return this.items;
  }
}
