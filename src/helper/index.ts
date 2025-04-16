const handleFormatMoney = (money: number): string => {
  return money.toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
};

const handleSeparateWord = (word: string): string[] => {
  return word.split("@");
};

const handleSetParam = (k: string, v: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(k, v);
  const url = `?${params.toString()}`;
  history.pushState({}, "", url);
};

const handleGetParam = (k: string) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(k);
};

export {
  handleFormatMoney,
  handleSeparateWord,
  handleSetParam,
  handleGetParam,
};
