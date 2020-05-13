// ==UserScript==
// @name          Micro.blog (Night Mode)
// @namespace     https://burk.io
// @description	  A new color scheme for use at night (or all day!).
// @author        grepjason
// @homepage      https://burk.io/files/userscript-mb.js
// @include       http://micro.blog/*
// @include       https://micro.blog/*
// @include       http://*.micro.blog/*
// @include       https://*.micro.blog/*
// @run-at        document-start
// @version       2020.5.13.13
// ==/UserScript==
(function() {var css = [
	".post_username {",
	"color: #fd9926;",
	"}",
	"",
	".post_username a {",
	"color: #fd9926;",
	"font-weight: 600;",
	"}",
	"",
	"body {",
	"color: #f8f8f2;",
	"background-color: #282a36;",
	"}",
	"",
	"a {",
	"color: #bbe1fa;",
	"}",
	"",
	"a:hover {",
	"color: #fff;",
	"}",
	"",
	"img {",
	"    border-radius: 5px;",
	"}",
	"",
	".nav_spacer {",
	"    display: inline-block;",
	"    color: #1b262c;",
	"}",
	"",
	".alert-info {",
	"    border-color: #bce8f1;",
	"    color: white;",
	"    background-color: #282a36;",
	"}",
	"",
	".post_time a {",
	"    color: #d9d9d9;",
	"}",
	"",
	".container > h1 {",
	"    background-image: url(\'https://burk-io-blog.s3.wasabisys.com/image/microblog-icon.png\');",
	"    background-size: 64px 64px;",
	"    height: 64px;",
	"}",
	"",
	".mentions_bar {",
	"    background-color: #282a36;",
	"}",
	"",
	".site_link {",
	"    color: #f8f8f2;",
	"}",
	"",
	".site_link a {",
	"    color: #f8f8f2;",
	"}",
	"",
	".markdown_link {",
	"    color: #f8f8f2;",
	"}",
	"",
	".markdown_link a {",
	"    color: #f8f8f2;",
	"}",
	"",
	".CodeMirror {",
	"    background-color: #131313;",
	"    color: white;",
	"}",
	"",
	".posting_chars_twitter {",
	"    color: #bbe1fa;",
	"}",
	"",
    ".posting_chars_normal {",
	"    color: white;",
	"}",
	"",
    ".posting_chars_error {",
	"    color: #fd9926;",
	"}",
	"",
	".highlight {",
	"    background-color: #ffa41b;",
	"    color: #111;",
	"    padding-left: 3px;",
	"    padding-right: 3px;",
	"}",
	"",
	".table-striped > tbody > tr:nth-of-type(2n+1) {",
	"    background-color: #282a36;",
	"}",
	"",
	".table-striped {",
	"    background-color: #282a36;",
	"}",
	"",
	".account_posts_header {",
	"    background-color: #282a36;",
	"}",
	"",
	".account_bar_hostname {",,
	"    color: #fd9926;",
	"}",
    "",
	".popover {",,
	"    background-color: #202020;",
	"}",
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
