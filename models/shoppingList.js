var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema({
    name: String,
    list: [{
            productName: String,
            isChecked : Boolean
        }]
    });

mongoose.model('ShoppingList', ShoppingListSchema);