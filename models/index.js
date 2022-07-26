// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 
});
// Categories have many Products
Category.hasMany(Product, {

});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag).thru(ProductTag), {

});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product).thru(ProductTag), {

});

module.exports = {Product, Category, Tag, ProductTag,
};
