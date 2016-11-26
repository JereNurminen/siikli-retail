module.exports = function(app){
    var musicians = require('./controllers/shoppingLists');
    app.get('/shoppingLists', musicians.findAll);
    app.get('/shoppingLists/:id', musicians.findById);
    app.post('/shoppingLists', musicians.add);
    app.put('/shoppingLists/:id', musicians.update);
    app.delete('/shoppingLists/:id', musicians.delete);
}