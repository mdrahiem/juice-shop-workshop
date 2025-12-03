import Loki from 'lokijs'

const db = new Loki('reviews.db', { autoload: true, autosave: true })

const reviews = db.getCollection('posts') || db.addCollection('posts')
const orders = db.getCollection('orders') || db.addCollection('orders')

module.exports = { reviews, orders }
