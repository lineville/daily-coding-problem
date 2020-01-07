// * Daily Coding Problem January 07 2020

// * [Medium] -- Facebook
/**
 * * Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0.
 * * Only allowed to use mathematical or bit operations. 
 * * You can assume b can only be 1 or 0.
 */

export const bitwiseTernary = (nums : Array<number>) : number => {
    const [x, y, b] : Array<number> = nums
    const mask : number = -b
    return (x & mask) | (y & ~mask)
}

