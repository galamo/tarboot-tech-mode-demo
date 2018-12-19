console.log("starting script");

const listOfProducts = [
  { productName: "milk", price: 12 },
  { productName: "tuna", price: 24 }
];

const getProducts = () => {
  setTimeout(() => {
      console.log(listOfProducts);
    return listOfProducts;
  }, 4);
};

console.log(getProducts());

console.log("end of script");
