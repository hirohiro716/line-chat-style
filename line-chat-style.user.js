// ==UserScript==
// @name         LINE Chat Style
// @namespace    https://github.com/hirohiro716/
// @version      0.6
// @description  Fix LINE Chat styles.
// @author       hiro
// @match        https://account.line.biz/*
// @match        https://access.line.me/*
// @match        https://chat.line.biz/*
// @icon         https://vos.line-scdn.net/line-oa-crm-pc/img/favicon.ico
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @grant        none
// @updateURL    https://github.com/hirohiro716/line-chat-style/raw/main/line-chat-style.user.js
// @downloadURL  https://github.com/hirohiro716/line-chat-style/raw/main/line-chat-style.user.js
// ==/UserScript==

let fixTitle = function() {
    let unreadCount = "";
    let menu = document.querySelector("#menu");
    if (menu !== null) {
        let badge = menu.querySelector("div.badge-pill");
        if (badge !== null) {
            unreadCount = " (" + badge.textContent.trim() + ")";
        }
    }
    document.querySelector("title").textContent = "LINE" + unreadCount;
};
setInterval(fixTitle, 10);

let fixStyle = function() {
    let containers = document.querySelectorAll("#container, #header");
    containers.forEach((element) => {
        element.style.minWidth = "0";
    });
    let purchaseButton = document.querySelector("a[href*='purchase']");
    if (purchaseButton !== null) {
        purchaseButton.style.display = "none";
    }
    let helpButton = document.querySelector("#header-menu-help");
    if (helpButton !== null) {
        helpButton.style.display = "none";
    }
    let list = document.querySelector("#content-primary");
    if (list !== null) {
        list.style.minWidth = "300px";
    }
    let userDescriptions = document.querySelectorAll(".hide-on-collapse");
    userDescriptions.forEach((element) => {
        element.classList.remove("hide-on-collapse");
    });
    let editor = document.querySelector("#editor");
    if (editor !== null) {
        editor.shadowRoot.querySelector("textarea").style.width = "100%";
        editor.shadowRoot.querySelector("textarea").style.height = "100%";
    }
};
setInterval(fixStyle, 1000);

