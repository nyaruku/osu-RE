// ==UserScript==
// @name         osu! RE
// @version      1.0
// @description  osu! Page Design Alter
// @author       _Railgun_
// @match        https://osu.ppy.sh/*
// @icon         https://media.discordapp.net/attachments/1127347767866568785/1191559228633128990/ebb12f283c9930d5ab4c1d5e5b7dc2fb.png
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @run-at document-start
// @noframes
// ==/UserScript==

GM_addStyle ( `

.page-extra {
border-radius: 0px;
}

.header-v4__bg-container {
    background-color: transparent;
    height: 0%;
}

.nav2-header__transition-overlay {
    background-color: transparent;
    height: 0%;
}
.nav2-header__triangles {
    background-image: none;
    background-color: black;
}
.avatar--nav2 {
    border-radius: 0%;
}
.avatar {
    border-radius: 0px;
}

.nav2__notification-container {
     border: 1px solid hsl(var(--hsl-c1));
     border-radius: 0px;
     padding: 0px;
}

body {
    font-family: monospace;
}

.nav2__logo--bg {
    background-image: none;
    opacity: 0;
}
.nav2__logo {

   
    background-repeat: no-repeat;
    background-size: contain;
    height: 80%;
    left: 0;
    position: absolute;
    top: 10%;
    transition: all 0.2s ease-in-out;
    width: 80%;
    will-change: opacity,transform;
}

.simple-menu {
    --border-radius: 0px;
    --item-colour: inherit;
    --item-hover-bg: hsl(var(--hsl-b5));
    --item-hover-colour: var(--item-colour);
    --stripe-bg: none;
    background-color: black;
    border-radius: var(--border-radius);
    box-shadow: inset 0 0 0px 2px rgb(255 255 255);
    color: hsl(var(--hsl-c1));
    display: flex;
    flex: none;
    flex-direction: column;
    font-size: 14px;
    min-width: 150px;
    padding: 10px 5px;
    position: relative;
    transform: translateZ(0);
    z-index: 101;
}


.header-v4__bg-container {
    background-color: hsl(var(--hsl-d5));
    /* height: 100%; */
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.simple-menu__header:before {
    background-color: rgba(0,0,0,1);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.simple-menu__header {
    align-items: center;
    background-position: 50%;
    background-size: cover;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 0px;
    overflow: hidden;
    padding: 20px;
    padding-top: 0px;
    position: relative;
}
.simple-menu__header simple-menu__header--link js-current-user-cover{
background-image: none;
}
.simple-menu__item {
    border-radius: 0px;
    color: white !important;
    --item-hover-bg: rgb(0 161 255);

}

.profile-info__avatar {
    align-self: flex-end;
    border-radius: 0%;
    box-shadow: 0 0px 0px rgba(0,0,0,0);
    flex: none;
    height: 74%;
    margin-bottom: var(--vertical-padding);
    overflow: hidden;
    transform: translateZ(0);
    width: 7%;
}
.profile-info__bg {
    height: 0%;
}

.u-section-community--before-bg-normal:before{
    background-color: rgba(0,0,0,0) !important;
}
.u-section-rankings--before-bg-normal:before {
    background-color: rgba(0,0,0,0) !important;
}
.u-section-beatmaps--before-bg-normal:before{
    background-color: rgba(0,0,0,0) !important;
}
.u-section-home--before-bg-normal:before {
    background-color: rgba(0,0,0,0) !important;
}
.u-section-store--before-bg-normal:before {
    background-color: rgba(0,0,0,0) !important;
}
.u-section-help--before-bg-normal:before {
    background-color: rgba(0,0,0,0) !important;
}
.simple-menu__header-icon {
    padding: 10px 0px;
    position: relative;
    width: 0px;
}
.u-relative {
color: white;
}
.osu-layout--body, .osu-layout--body-landing {
   background-color: rgba(10,20,30,1);
}
.nav-button {
    border-radius: 0px;
}
.header-v4__row--title {
   background-color: rgba(15,15,15,1);
}
.header-v4__container--main {
    min-height: 142px;
    padding-top: 0px;
}
.header-v4__row--bar {
    background-color: rgba(20,20,20,1);
}
.profile-info {
    background-color: rgba(15,15,15,1);
}

.header-nav-v4__link:before {
    background-color: white;
    border-radius: 0px;
    bottom: 0px;
    display: block;
    height: 5px;
    position: absolute;
    transition: inherit;
    width: 100%;
    z-index: 1;
}
.profile-info+.profile-detail {
    box-shadow: inset 0px 1px 0px 0px rgba(255,255,255,1);
}
.profile-detail {
    background-color: rgba(10,10,10,1);
}
.user-action-button--profile-page {
    border-radius: 0;
}
.user-action-button {
    background: cornflowerblue;
}
.profile-detail-bar__level-bar {
    width: 450px;
}
.bar--user-profile {
    border-radius: 0px;
}
.bar--user-profile {
    background-color: #373737;
    border-radius: 0px;
}
.bar--user-profile .bar__fill {
    background-color: dodgerblue;
    border-radius: 0px;
}
.bar__fill {
    background-color: dodgerblue;
    border-radius: 0px;
}
user-level__icon {
    background: linear-gradient(45deg, #00ceff, #00adff);
    background-image: linear-gradient(45deg, rgb(0, 206, 255), rgb(0, 173, 255));
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.user-level--tier-rhodium {
    --bg: #00bdff,#ff008d;
}
.profile-detail-bar {
    background-color: rgba(15,15,15,1);
}
.profile-links {
    background-color: rgba(20,20,20,1);
}
.page-mode {
    background-color: rgba(10,10,10,1);
}
.osu-page--generic-compact {
    background-color: rgba(10,10,10,1);
}
.page-extra {
    background-color: rgba(20,20,25,1);
}
btn-circle {
   border-radius: 15%;
    border-top-left-radius: 15%;
    border-top-right-radius: 15%;
    border-bottom-right-radius: 15%;
}
.show-more-link {
    /* background: black; */
    background-color: rgba(0,0,0,0.3);
    border: none;
    border-radius: 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
.play-detail__group--top {
    border-radius: 0%;
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    border-bottom-left-radius: 0%;
}
.play-detail__pp {
    border-radius: 0%;
    border-top-left-radius: 0%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    border-bottom-left-radius: 0%;
    background: rgb(0 54 85);
    color: white;
}
.play-detail__pp-unit {
    color: deepskyblue;
    font-size: 12px;
}
.play-detail__group--top {
    background-color: hsl(202.15deg 65.01% 16.31%);
}
.play-detail__score-detail {
     background-color: hsl(202.15deg 65.01% 16.31%);
}
.play-detail__pp:before {
    background-color: hsl(0deg 0% 100%);
}
.line-chart--profile-page .line-chart__line {
    stroke: #fff;
    stroke-width: 1px;
}
.beatmap-playcount__detail {
    background-color: hsl(202.15deg 65.01% 16.31%);
    border-radius: 0px;
    color: white;
}
.beatmap-playcount {
    --border-radius: 0px;
    background-color: #000;
    border-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
}
.play-detail__pp:before {
    background-color: white;
    -webkit-clip-path: none;
    clip-path: none;
    width: 2px;
}
.page-extra__recent-medals-box {
    background-color: rgb(15,15,20);
}
.profile-info__icon--supporter {
    align-items: center;
    background-color: rgb(0 184 255);
    border-radius: 4px;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    padding: 10px 10px;
    text-decoration: none;
}
.btn-circle--page-toggle {
    --bg: rgb(0 166 255);
    --bg-hover: rgb(255 0 118);
    align-items: center;
    box-shadow: none;
    color: #fff;
    display: inline-flex;
    font-size: 12px;
    justify-content: center;
    position: relative;
    text-decoration: none;
}
.btn-circle {
    border-radius: 8px;

}
.nav-button--notifications {
    background-color: rgb(3 61 95);
}
.line-chart--profile-page .line-chart__hover-line {
    background-color: #0095ff;
}
.line-chart--profile-page .line-chart__hover-circle {
    background-color: transparent;
    border-color: #0095ff;
}
` );
(function() {
    'use strict';

    // Select the element you want to remove
    var selector = '.profile-info__cover-toggle';

    // Create a new MutationObserver instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes) {
                var element = document.querySelector(selector);
                if (element) {
                    element.parentNode.removeChild(element);
                }
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
})();