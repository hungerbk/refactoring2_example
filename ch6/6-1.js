export function printOwing(invoice) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);

  printDetail(invoice, oustanding);
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );

  return invoice.dueDate;
}

function printDetail(invoice, oustanding, dueDate) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '사자',
};
printOwing(invoice);

// 함수 추출하기 (책 6.1)
// 상황 : 주문을하고 난 후, 고객에게 청구서를 보내야한다. 청구서에는 고객이름, 총액, 납기일이 포함된다.
// 기대 : printOwing함수가 하는 일을 파악하기 쉽게 만들고 싶다.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 여러분의 생각을 써보세요
