/**
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(["jquery", "util", "pages/loading", "config", "ready"], function($, util, loading, config) {
    var index = {
        init: function() {
            //设置主框架
            var wrapper = '<section class="yuyue">hello yaotv!</section>';

            $(".wrapper").empty().append(wrapper);

            //载入首页数据
            loading.init();

            //全局预约按钮监听
            util.getReserve();
            $(".yuyue").on("click", function() {
                shaketv.reserve_v2({
                    tvid: config.tv.tvid,
                    reserveid: config.tv.reserveid,
                    date: config.tv.date
                },
                function(d) {
                    console.log(d.errorCode + ":" + d.errorMsg);
                });
            });

            require(['ready'], function(domReady) {
                domReady(function() {
                    setTimeout(function() {
                        loading.hide();
                    }, 1000);
                });
            });
        }
    };
    return index;
});
