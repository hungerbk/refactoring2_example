export class Order {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
  // 할인, 배송
  get price() {
    return this.quantity * this.itemPrice - this.discount() + this.shipping();
  }
}

// 변수 추출하기 (책 6.3)
// 상황 :
// 기대 :
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요
