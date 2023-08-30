function sequence_blsc(n: number): number {
    let term: number = 1;
    let limit: number = 2;
    while (limit <= n) {
        term = term * 2;
        limit = limit + 1;
    }
    return term;
}

console.log(sequence_blsc(100000));

export { }