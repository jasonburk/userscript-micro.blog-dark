// ==UserScript==
// @name          Micro.blog 2.0 (Dark Mode)
// @namespace     https://burk.io
// @description	  A new color scheme for use at night (or all day!).
// @author        grepjason
// @homepage      https://burk.io/files/userscript-mb.js
// @include       http://micro.blog/*
// @include       https://micro.blog/*
// @run-at        document-start
// @version       2021.04.08.01
// @grant         GM_addStyle
// ==/UserScript==

GM_addStyle(`

.post_username {
	color: #fd9926;
}

.post_username a {
	color: #fd9926;
	font-weight: 600;
}

body {
	color: #f8f8f2;
	background-color: #282a36;
}

a {
	color: #bbe1fa;
}

a:hover {
	color: #fff;
}

img {
	border-radius: 5px;
}

.nav_spacer {
	display: inline-block;
	color: #1b262c;
}

.alert-info {
	border-color: #bce8f1;
	color: white;
	background-color: #282a36;
	-webkit-box-shadow: 5px 5px 10px 0px #000000;
	-moz-box-shadow: 5px 5px 10px 0px #000000;
	box-shadow: 5px 5px 10px 0px #000000;
}

.post_time a {
	color: #d9d9d9;
}

h1.header_logo {
	background-image: url(\'https://burk-io-blog.s3.wasabisys.com/image/microblog-icon.png\');
	background-size: 30px 30px;
	padding-left: 35px
}

.mentions_bar {
	background-color: #282a36;
}

.site_link {
	color: #f8f8f2;
}

.site_link a {
	color: #f8f8f2;
}

.markdown_link {
	color: #f8f8f2;
}

.markdown_link a {
	color: #f8f8f2;
}

.CodeMirror {
	background-color: #131313;
	color: white;
}

.posting_chars_twitter {
	color: #bbe1fa;
}

.posting_chars_normal {
	color: white;
}

.posting_chars_error {
	color: #fd9926;
}

.highlight {
	background-color: #ffa41b;
	color: #111;
	padding-left: 3px;
	padding-right: 3px;
}

.table-striped > tbody > tr:nth-of-type(2n+1) {
	background-color: #282a36;
}

.table-striped {
	background-color: #282a36;
}

.account_posts_header {
	background-color: #282a36;
}

.account_bar_hostname {
	color: #fd9926;
}

.popover {
	background-color: #202020;
}

.CodeMirror-cursor {
	border-left: 2px solid #fd9926; !important
}

.post_selected {
	background-color: #202020;
}

.menu_publish_alert {
	background-color: #282a36;
}

.popover.bottom > .arrow::after {
	border-bottom-color: #202020;
}

.subscriptions_card_form {
	background-color: #282a36;
}

.btn-primary .btn-default {
	color: #ffffff;
	background-color: #337ab7;
	border-color: #2e6da4;
}

.post_avatar img {
	border-radius: 30px;
	width: 60px;
	height: 60px;
}

.post_avatar {
	padding-right: 15px;
}

.mentions_new {
	font-weight: 700;
	color: #fd9926;
}

.sidebar .social a {
	filter: brightness(0) invert(1);
}

.sidebar .manage a {
	filter: brightness(0) invert(1);
}

.sidebar .extras a {
	filter: invert(1);
}

.sidebar .manage  {
	border-bottom: 1px solid #f8f8f2
}

.sidebar .social  {
	border-bottom: 1px solid #f8f8f2
}

.row {
	padding-top: 50px;
}

.content_container {
	border-left: 2px solid #f8f8f2;
}

.curator_alt {
	color: #ffffff;
}

.curator_bio {
	color: #ffffff;
}

`);