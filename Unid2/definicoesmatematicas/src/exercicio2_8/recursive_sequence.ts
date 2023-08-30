function sequence_blsc(n: number): number {
    if (n == 1) {
        return 1
    } else {
        return 2 * sequence_blsc(n - 1)
    }
}

console.log(sequence_blsc(100000));

export { }