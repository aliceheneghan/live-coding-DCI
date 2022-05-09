const product = {
  type: "t-shirt",
  price: 9.99,
  color: "green",
  isAvailable: true,
  availableSizes: ["S", "M", "XL"],
  pictures: {
    mainPicture: "mainPicture.jpg",
    brandLogo: "brandLogo.jpg",
    extraPictures: [
      "extraPicture1.jpg",
      "extraPicture2.jpg",
      "extraPicture3.jpg",
    ],
  },
};

// get the color of our product

console.log(product.color);

// using bracket notation
console.log(product["color"]);

// add a new property to our product called "brand"
product.brand = "nike";

console.log(product);
console.log(product.availableSizes);

console.log(product.availableSizes[0]);
console.log(product.availableSizes[1]);
console.log(product.availableSizes[2]);

// print all the available sizes, 1 per line
console.log("\nThe product is available in these sizes:\n");
for (let i = 0; i < product.availableSizes.length; i++) {
  console.log("- " + product.availableSizes[i]);
}

// print all the extraPictures to the console
for (let i = 0; i < product.pictures.extraPictures.length; i++) {
  console.log("- " + product.pictures.extraPictures[i]);
}
