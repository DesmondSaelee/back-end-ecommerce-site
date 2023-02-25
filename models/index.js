// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// add on delete. delete a category and the product disappears
Product.belongsTo(Category,{
  foreignKey: 'category_id',

})

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

Product.belongsToMany(Tag, {
  through: ProductTag,
},{
  foreignKey: 'product_id'
})

Tag.belongsToMany(Product, {
  through: ProductTag
},{
  foreignKey: 'tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
