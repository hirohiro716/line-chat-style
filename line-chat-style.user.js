// ==UserScript==
// @name         LINE Chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://account.line.biz/*
// @match        https://access.line.me/*
// @match        https://chat.line.biz/*
// @icon         https://vos.line-scdn.net/line-oa-crm-pc/img/favicon.ico
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @grant        none
// ==/UserScript==

let sleep = ms => new Promise(res => setTimeout(res, ms))
let $ = window.jQuery;

let fixTitle = function() {
    let unreadCount;
    if ($('div.badge-pill').length == 1) {
        unreadCount = $('div.badge-pill').text();
    }
    let title = 'LINE';
    if (unreadCount) {
        title = title + ' (' + unreadCount.trim() + ')';
    }
    $('title').text(title);
};
setInterval(fixTitle, 10);

let fixStyle = function() {
    $('#page').css('min-width', '600px');
    $('#header').css('min-width', '0');
    $('#container').css('min-width', '0');
    $('.btn-collapse-panel').css('opacity', '0.7');
    $('div[role="alert"]').css('display', 'none');
    $('#content-wrapper').css('overflow', 'hidden');
    $('#editable-unit').css('min-height', '200px');
    $('#editable-unit').find('> div').css('height', '100%');
    $('.editable-unit-top').css('display', 'none');
};
setInterval(fixStyle, 1000);
