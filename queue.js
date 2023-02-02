let queue = [];
// let backIndex = 0;

const enqueue = (item) => {
	queue.push(item);
	// backIndex++;
	return item + ' inserted';
};

const dequeue = () => {
	// const item = queue[0];
	// queue = queue.slice(1, backIndex);
	// return item;
	const item = queue.splice(0, 1);
	return item[0];
};

const peek = () => {
	return queue[0];
};

const printQueue = () => {
	return queue;
};

console.log(enqueue(7));
console.log(enqueue(2));
console.log(enqueue(6));
console.log(enqueue(4));
console.log(dequeue());
console.log(peek());
console.log(dequeue());
console.log(peek());
var str = printQueue();
console.log(str);
