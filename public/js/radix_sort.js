getPosition = (num,place) => Math.floor(num / Math.pow(10,place)) % 10 // O(1)

getMax = array => {
	let max = 0
	for (let num of array) {
		max = (max < num.toString().length) ? num.toString().length : max
	}
	return max
}

radix_sort = array => {
	var max = getMax(array)
	for (let i = 0; i < max; i++) {
		let buckets = Array.from({length:10}, () => [])
		for (let j = 0; j < array.length; j++) {
			buckets[getPosition(array[j], i)].push(array[j])
		}
		array = [].concat(...buckets)
	}
	return array
}