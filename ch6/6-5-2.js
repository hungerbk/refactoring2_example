export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // isPriorty = false 이런 플래그 변수를 만들면 이거에 따라 어떤 행동을 해야하는지 나눠줘야 해서 좋은 방법은 아님
  // 함수가 한가지 일만 해야 하는데 두가지 이상 일을 하기 때문에
  // class 우선 , class 일반 두개를 만든다
  // 두개를 만들어서 따로 관리하고 래핑해서 예약에 넣기?
  addReservation(customer, isPriorty = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id,
    );
  }
}

// 함수 선언 바꾸기 (책 6.5)
// 상황 : 예약을 추가하고 확인하는 함수를 만들었습니다.
// 기대 : 추가로 우선 순위가 높은 예약을 추가하는 함수를 만들어야 한다고 가정합니다
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

// 힌트 : boolean flag 인수, 함수는 한가지일만해야한다. 따로 빼내는 것도 나쁘지 않을 것
