var product = {
	name: "Iphone"

};
// Object.freeze(product);

product.name = "samsung";
// delete product.name;
console.log(product.name);



console.log(Object.isExtensible(product));
console.log(Object.isSealed(product));
console.log(Object.isFrozen(product));

Object.seal(product);

product.name = "Mac Book Air";
console.log(product.name)


var descriptor = Object.getOwnPropertyDescriptor(product,"name");
console.log(descriptor.configurable);
console.log(descriptor.writable);

Object.freeze(product);

// console.log(Object.isExtensible(product));
// console.log(Object.isSealed(product));
// console.log(Object.isFrozen(product));

product.name = "Mac Book Pro";
console.log(product.name)


var descriptor = Object.getOwnPropertyDescriptor(product,"name");
console.log(descriptor.configurable);
console.log(descriptor.writable);