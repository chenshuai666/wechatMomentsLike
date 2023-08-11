function randomNums(start, end, total) {
    const range = end - start
    const set = new Set()
    while (set.size < total) {
        set.add(Math.floor(Math.random()*(range + 1)) + start)
    }
    return [...set]
}

export default randomNums