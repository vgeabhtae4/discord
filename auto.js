// ==UserScript==
// @name         自动点击"显示信息"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动点击页面上具有特定类和文本的元素
// @author       ChatGPT
// @match        *discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义要查找的目标元素的类和文本
    const targetClass = 'blockedAction-2cPk2G';
    const targetText = '显示信息';

    // 定义触发点击事件的函数
    function clickTargetElement() {
        const elements = document.querySelectorAll(`.${targetClass}`);
        elements.forEach(element => {
            if (element.textContent.trim() === targetText) {
                element.click();
            }
        });
    }

    // 在页面加载完成后执行点击事件
    window.addEventListener('load', clickTargetElement);

    // 在页面DOM更新时继续执行点击事件
    const observer = new MutationObserver(clickTargetElement);
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
})();
