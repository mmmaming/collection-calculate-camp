'use strict';

function choose_common_elements(collection_a, collection_b) {
    var _ = require('../mylodash/array.js');
    var result = [];
    _.each(collection_a,function(n) {
        if(_.exist(n,collection_b)){
            result.push(n);
        }
    })
    return result;

  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.intersection(collection_a,collection_b)
  //
    // var array = [];
    // for(var i = 0;i < collection_a.length;i++) {
    //     for(var j = 0;j < collection_b.length;j++) {
    //         if(collection_a[i] == collection_b[j]) {
    //             array.push(collection_a[i]);
    //         }
    //     }
    // }
    // return array;
}

module.exports = choose_common_elements;
