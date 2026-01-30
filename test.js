
import { statSync, createReadStream, promises as fs } from 'node:fs'

export class Bleh {
    a = 0
    constructor() {
    }
}


function bleh(options) {
}

globalThis.$__onAlloc = function(n) {
    console.log('alloc of type', n)
}

const a = new Bleh()
const b = [1, 2, 3]
const c = { a: 1, b: 2, l: 3 }
const d = bleh({ a: 1, b, c: {bleh} })

var stat;
({ stat } = fs)
var pp, tt
[pp, tt] = []
export const f = [stat, pp, tt]

const tst = [1, 2, 3, 4, 5]
console.log(tst.slice(2, 4))
console.log(tst.filter(a => a === 1))
console.log(tst.map(a => '' + a))
console.log(Object.entries(c))
console.log(Object.fromEntries([['a', 1], ['b', 2], ['c', 3]]))
console.log(Array.from([1, 2, 3]))