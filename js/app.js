/**
 * Created by peter on 14-8-7.
 */
requirejs.config({
    // 默认从js/lib加载所有的module ID
    baseUrl: 'js/lib'
    // 注意，paths config是相对于baseUrl的，
    // 而且不要包含".js"的后缀，因为一个path
    // 有可能是个目录
});

require(["module1"],function(t){
    t.display();
});

require(["json"],function(t){
    console.log(t);
});

require(["module2"],function(t){
   t();
});

require(["common"]);

require(["url"]);

require(["jsonp"]);