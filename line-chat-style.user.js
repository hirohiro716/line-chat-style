// ==UserScript==
// @name         LINE Chat Style
// @namespace    https://github.com/hirohiro716/
// @version      1.1.0
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
    const unreadCount = "";
    const menu = document.querySelector("#menu");
    if (menu !== null) {
        const badge = menu.querySelector("div.badge-pill");
        if (badge !== null) {
            unreadCount = " (" + badge.textContent.trim() + ")";
        }
    }
    document.querySelector("title").textContent = "LINE" + unreadCount;
};
setInterval(fixTitle, 10);

let fixStyle = function() {
    const containers = document.querySelectorAll("#container, #header");
    containers.forEach((element) => {
        element.style.minWidth = "0";
    });
    const purchaseButton = document.querySelector("a[href*='purchase']");
    if (purchaseButton !== null) {
        purchaseButton.style.display = "none";
    }
    const headerADs = document.querySelectorAll("a.badge");
    for (const headerAD of headerADs) {
        if (headerAD.textContent.includes("アップグレード")) {
            headerAD.style.display = "none";
        }
    }
    const helpButton = document.querySelector("#header-menu-help");
    if (helpButton !== null) {
        helpButton.style.display = "none";
    }
    const outlineInfoButtons = document.querySelectorAll("a.btn-outline-info");
    outlineInfoButtons.forEach((element) => {
        if (element.textContent === "要対応" || element.textContent === "対応済み") {
            element.style.display = "none";
        }
    });
    const list = document.querySelector("#content-primary");
    if (list !== null) {
        list.style.minWidth = "300px";
    }
    const userDescriptions = document.querySelectorAll(".hide-on-collapse");
    userDescriptions.forEach((element) => {
        element.classList.remove("hide-on-collapse");
    });
    const editor = document.querySelector("#editor");
    if (editor !== null) {
        editor.shadowRoot.querySelector("textarea").style.width = "100%";
        editor.shadowRoot.querySelector("textarea").style.height = "100%";
    }
};
setInterval(fixStyle, 1000);
