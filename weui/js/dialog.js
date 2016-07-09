/**
 * description
 * 基于WEUI样式下的提示框。
 *
 * author：刘晓堂
 * date：2016/7/9
 *
 * parameter：
 * String msg 提示信息
 * String title 标题 可为空
 * Function callback 回调函数 返回true/false 可为空
 *
 */
var msg = {
    /**
     * String msg 提示信息
     * String title 标题 可为空
     * Function callback 回调函数 返回true/false 可为空
     */
    alert: function (msg, title, callback) {
        if (typeof title == 'function') {
            callback = title;
            title = '';
        } else {
            title == null ? title = '' : title;
        }
        $('body').append('' +
            '<div class="weui_dialog_alert" id="dialog">' +
            '<div class="weui_mask"></div>' +
            '<div class="weui_dialog">' +
            '<div class="weui_dialog_hd"><strong class="weui_dialog_title">' + title + '</strong></div>' +
            '<div class="weui_dialog_bd">' + msg + '</div>' +
            '<div class="weui_dialog_ft">' +
            '<a href="#" class="weui_btn_dialog primary">确定</a>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('.weui_btn_dialog').click(function () {
            $('.weui_dialog_alert').remove();
            if (typeof callback == 'function') {
                callback(true);
            }
        });
    },
    /**
     * String msg 提示信息
     * String title 标题 可为空
     * Function callback 回调函数 返回true/false 可为空
     */
    confirm: function (msg, title, callback) {
        if (typeof title == 'function') {
            callback = title;
            title = '';
        } else {
            title == null ? title = '' : title;
        }
        $('body').append('<div class="weui_dialog_confirm">' +
            '<div class="weui_mask"></div>' +
            '<div class="weui_dialog">' +
            '<div class="weui_dialog_hd"><strong class="weui_dialog_title">' + title + '</strong></div>' +
            '<div class="weui_dialog_bd">' + msg + '</div>' +
            '<div class="weui_dialog_ft">' +
            '<a href="#" class="weui_btn_dialog default">取消</a>' +
            '<a href="#" class="weui_btn_dialog primary">确定</a>' +
            '</div>' +
            '</div>' +
            '</div>');


        $('.weui_btn_dialog.default').click(function () {
            $('.weui_dialog_confirm').remove();
            if (typeof callback == 'function') {
                callback(false);
            }
        });
        $('.weui_btn_dialog.primary').click(function () {
            $('.weui_dialog_confirm').remove();
            if (typeof callback == 'function') {
                callback(true);
            }
        });
    }
};