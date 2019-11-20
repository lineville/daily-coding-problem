// Daily Coding Problem October 20
// Given a mapping of the alphabet [{ letter: 'a', value: 1}, {letter: 'b', value: 2} ... {letter: 'z', value: 26}]
// and a message of number values ex: 111 then return the number of different encodings that can exist.
// Ex: 111 could have been 'aaa' (1 + 1 + 1), or 'ak' (1 + 11), or 'ka' (11 + 1)





const numberOfEncodings = (message: string): number => {
    enum Letters { a = 1, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z };
    let result = 0
    // * Parse string into its possible components, get all the pairs, then do all combos of nonpairs
    // * 111 => 1 + 1 + 1, 1 + 11, 11 + 1 => 'aaa', 'ak', 'ka' => 3
    // * 1111 => 1 + 1 + 1 + 1, 1 + 1 + 11, 1 + 11 + 1, 11 + 1 + 1, 11 + 11 => 'aaaa', 'aak', 'aka', 'kaa', 'kk' => 4
    // * 11111 => 'aaaaa', 'aaak', 'akk', 'kak', 'aaka', 'kka', 'kaaa', 'akaa' => 8



    return result
}


const main = (): void => {
    const input1: string = '111'
    const expectedOutput1: number = 3
    const result: number = numberOfEncodings(input1)
    const passFailMessage: string = expectedOutput1 == result ? "passed" : "failed"
    console.log("Number of Encodings for " + input1 + " is " + result + ". Test " + passFailMessage)
}

main()