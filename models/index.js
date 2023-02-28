// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



Product.belongsTo(Category,{
  foreignKey: 'category_id',

})
// add on delete. delete a category and the product disappears
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'Cascade'
  
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
