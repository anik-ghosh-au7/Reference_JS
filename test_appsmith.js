const tree = {
	id: 'x',
	special: true,
	children: [
		{
			id: 'y',
		},
		{
			id: 'z',
			ordinary: false,
			special: 'special',
			children: [
				{
					id: 'm',
					children: [
						{
							id: 'n',
						},
					],
				},
			],
		},
	],
};

const flattenedTree = {
	y: { id: 'y', parentId: 'x' },
	z: {
		id: 'z',
		children: ['m'],
		parentId: 'x',
		ordinary: false,
		special: 'special',
	},
	m: { id: 'm', children: ['n'], parentId: 'z' },
	n: { id: 'n', parentId: 'm' },
	x: { id: 'x', special: true, children: ['y', 'z'] },
};

// Write a function which takes the flattenedTree and finds the nearest ancestor which has a given property
// return the id of the ancestor which has the given property
// or return undefined

function findPropertyInTree(startId, flattenedTree, propertyName) {
	let result = undefined;
	if (
		flattenedTree[flattenedTree[startId].parentId] &&
		flattenedTree[flattenedTree[startId].parentId].hasOwnProperty(propertyName)
	) {
		result = flattenedTree[startId].parentId;
	} else if (flattenedTree[flattenedTree[startId].parentId]) {
		//   return findPropertyInTree(flattenedTree[startId].parentId, flattenedTree, propertyName)
		// }
		let parentId = flattenedTree[startId].parentId;
		while (parentId) {
			if (flattenedTree[parentId].hasOwnProperty(propertyName)) {
				result = parentId;
				break;
			} else if (flattenedTree[parentId].parentId) {
				parentId = flattenedTree[parentId].parentId;
			} else {
				break;
			}
		}
	}
	return result;
}
console.log(findPropertyInTree('m', flattenedTree, 'anything')); // undefined
console.log(findPropertyInTree('y', flattenedTree, 'special')); // x
console.log(findPropertyInTree('n', flattenedTree, 'special')); // z
console.log(findPropertyInTree('n', flattenedTree, 'ordinary')); // z
console.log(findPropertyInTree('z', flattenedTree, 'special')); // x
console.log(findPropertyInTree('x', flattenedTree, 'special')); // undefined
