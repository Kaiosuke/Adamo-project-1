const handleFormatMoney = (money: number): string => {
  return money.toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
};
export { handleFormatMoney };
