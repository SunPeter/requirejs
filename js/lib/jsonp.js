/**
 * Created by peter on 14-8-7.
 */
require(["http://gc.ditu.aliyun.com/geocoding?a=苏州市?callback=define"],
    function (data) {
        //data将作为此条JSONP data调用的API响应
        console.log(data);
    }
);