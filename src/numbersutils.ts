function totalWithVAT(amount: number, vat: number) {
  if (amount < 0) throw new Error("amount<0");
  return Math.round(amount * (1 + vat) * 10) / 100;
}
