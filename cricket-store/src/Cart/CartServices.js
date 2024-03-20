"use client";

export const getTotalAmount = (products) => {
  let totalAmount = 0;
  products.forEach((element) => {
    totalAmount += element.Price * element.Quantity;
  });
  return totalAmount;
};
