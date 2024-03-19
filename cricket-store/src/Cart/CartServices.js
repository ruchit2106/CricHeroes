"use client";

export const getTotalAmount = (products) => {
  var totalAmount = 0;
  products.forEach((element) => {
    totalAmount += element.data.Price;
  });
  return totalAmount;
};
