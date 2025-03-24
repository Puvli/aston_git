const deliveryData = {
  1: "Delivered in 3 days",
  3: "Delivered in 5 days",
};

const orders = [
  { id: 1, item: "Laptop", paid: true },
  { id: 2, item: "Phone", paid: false },
  { id: 3, item: "Tablet", paid: true },
];

function fetchDeliveryInfo(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
    }, 1000);
  });
}

function processOrder() {
  console.log("Получение заказов...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orders) {
        reject("Не удалось получить заказы");
        return;
      }
      resolve(orders);
    }, 2000);
  })
    .then((orders) => {
      console.log("Заказы получены:", orders);
      const paidOrders = orders.filter((order) => order.paid);
      console.log("Оплаченные заказы:", paidOrders);
      return Promise.all(
        paidOrders.map((order) => fetchDeliveryInfo(order.id))
      );
    })
    .then((finalOrders) => {
      console.log("Финальные заказы с информацией о доставке:", finalOrders);
    })
    .catch((error) => {
      console.error("Ошибка при обработке заказов:", error);
    });
}

processOrder();
