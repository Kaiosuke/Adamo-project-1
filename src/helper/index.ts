const handleFormatMoney = (money: number): string => {
  return money.toLocaleString('es-US', {
    style: 'currency',
    currency: 'USD'
  })
}

const handleSeparateWord = (word: string): string[] => {
  return word.split('@')
}

export { handleFormatMoney, handleSeparateWord }
