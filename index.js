import {user} from './user.js'
import {product} from './product.js'
import {nanoid} from 'nanoid'

const mySecret = process.env['DB_URI']

console.log(mySecret)

const ryan = new user('Ryan', 'Yan', nanoid())
console.log(ryan)

console.log(new product('laptop', 3000))
