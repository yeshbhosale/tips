/**
* Tip.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: { 
      type: 'string'
    },
    description: {
      type: 'string' 
    },
    created_by: { 
      type: 'string', 
      required: true ,
    },
    category_id: {
      required: true ,
      type: 'string' , 
      in: ['54abb291a62768a4118239dd', '54abb2b0a62768a4118239df', '54abca3993f08ea21c50f61b']
    }
  },
  
  category_add: function (opts, cb) {
    // sails.log.debug(opts);
  	Category.create(opts).exec(function(err, category){
  	    if(err)
          cb(err);
      else
        cb(null, category);
    });
  },

  category_edit: function(id, opts, cb) {
    Category.update({id: id}, opts, function(err, category){
      if (err)
        cb(err);
      else 
        cb(null, category);
    })
  },

  category_delete: function(id, cb) {
    Category.destroy({id: id}).exec(function(err, category){
      if(err)
        cb(err);
      else
        cb(null, category);
    });
  },

  add: function(opts, cb) {
    Tip.create(opts).exec(function(err, tip){
      if(!err && tip){
        return cb(null, tip); 
      }
      else{
        return cb(err);
      }
    })
  },

  edit: function(id, opts, cb) {
    Tip.update({id: id}, opts, function(err, category){
      if (err)
        cb(err);
      else 
        cb(null, category);
    })
  },

  delete: function(id, cb) {
    Tip.destroy({id: id}).exec(function(err, category){
      if(err)
        cb(err);
      else
        cb(null, category);
    });
  },


  list: function(opts, cb){
    Tip.find(opts).exec(function(err, tip){
      if(err)
        cb (err);
      else
        cb(null, tip);
    });
  },

};