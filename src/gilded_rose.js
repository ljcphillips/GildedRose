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
  }

  isSpecialItem(item){
    return this.isAgedBrie(item) || this.isBackstagePass(item) || this.isSulfuras(item) || this.isConjured(item)
  }

  isAgedBrie(item){
    return item.name === "Aged Brie"
  }
  isBackstagePass(item){
    return item.name === "Backstage passes to a TAFKAL80ETC concert"
  }

  isSulfuras(item){
     return item.name === 'Sulfuras, Hand of Ragnaros'
  }

  isConjured(item){
     return item.name === 'Conjured Mana Cake'
  }

  isQualityGreaterThanZero(item){
    return item.quality > 0
  }

  decreaseQuality(item){
    if(this.isQualityGreaterThanZero(item))
     item.quality--
     if(item.sellIn <= 0){
       item.quality--
     }
  }
  increaseQuality(item){
    if(item.quality < 50){
       item.quality++
     }
  }
  updateQualityAgedBrie(item){
    if(this.isAgedBrie(item)){
      this.increaseQuality(item)
      this.decreaseSellIn(item)
    }
  }

  updateQualityConjured(item){
    if(this.isConjured(item)){
      this.decreaseQuality(item)
      this.decreaseQuality(item)
      this.decreaseSellIn(item)
    }
  }
  updateQualityBackStagePass(item){
    var days = [5,10,10000]
    if(this.isBackstagePass(item)){
      if(backstagePass.sellIn <=0){
        backstagePass.quality = 0
      }
      else {
        days.forEach(day => {
          if (backstagePass.sellIn <= day){
            this.increaseQuality(item)
          }
        });
      }
      this.decreaseSellIn(item);
    }
  }

  decreaseSellIn(item){
     item.sellIn--
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if(this.isSpecialItem(this.items[i])){
        this.updateQualityAgedBrie(this.items[i])
        this.updateQualityBackStagePass(this.items[i])
        this.updateQualityConjured(this.items[i])
      }
      else{
        this.decreaseQuality(this.items[i]);
        this.decreaseSellIn(this.items[i]);
      }
    }
    return this.items;
  }
}
