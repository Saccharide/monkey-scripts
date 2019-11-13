// ==UserScript==
// @name         Udacity video auto play
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       saccharide
// @match        https://classroom.udacity.com/courses/ud279/*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

/* global $ */
$(document).ready(function()
{
    $(document).on("mousemove", document,function()
    //$("#main-layout-content > div > div._main--content-container--ILkoI > div > div > div > div").on("mouseenter", document,function()
    {
        if (typeof document.getElementsByClassName("_auto-advance-overlay--button--3yFIl") === "object" ){
            if (typeof document.getElementsByClassName("_auto-advance-overlay--button--3yFIl")[0] === "object") {
                document.getElementsByClassName("_auto-advance-overlay--button--3yFIl")[0].click();
            }

        }
    });
});


