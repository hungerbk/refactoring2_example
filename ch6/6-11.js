export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;

  // 할인액 계산
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  // 케이스별 배송비 계산
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  // 수량에 따른 배송비 계산
  const shippingCost = quantity * shippingPerCase;

  // 최종 금액 계산
  const price = basePrice - discount + shippingCost;

  return price;
}

function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippingCost() {}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

// // 단계 쪼개기 (책 6.11)
// 상황 : priceOrder 함수는 상품 가격, 수량, 배송비를 받아서 주문에 대한 가격을 계산한다.
// 기대 : 함수가 하는 일을 단계별로 쪼개서 보고 싶어요.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요
