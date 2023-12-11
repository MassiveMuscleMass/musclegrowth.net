// ==UserScript==
// @name         musclegrowth.net - Quote collapser
// @namespace    https://github.com/MassiveMuscleMass
// @version      1.0
// @author       MassiveMuscleMass
// @description  Collapses quoted content to save space on screen and save you unnecessary scrolling and your scroll wheel.
// @homepage     https://musclegrowth.net/profile/35643-massivemusclemass/
// @downloadUrl  https://github.com/MassiveMuscleMass/musclegrowth.net/raw/main/QuoteCollapser.user.js
// @updateUrl    https://github.com/MassiveMuscleMass/musclegrowth.net/raw/main/QuoteCollapser.user.js
// @match        https://musclegrowth.net/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==
/* global $ */



// ----- Settings -----
var quoteContentMaxHeight = 100; // Maximum allowed height for quotes before they get collapsed and added Collapse/Expand button (in pixels).
var quoteCollapserButtonBackground = "#242424"; // Collapse/Expand button background color (in hexadecimal).
var quoteCollapserButtonPadding = 10; // Collapse/Expand button padding (in pixels).
var quoteCollapserButtonFontSize = 17; // Collapse/Expand button text font size (in pixels).
var quoteCollapserButtonCollapsedText = "↓ Expand ↓"; // Collapse/Expand button text when the quote is collapsed.
var quoteCollapserButtonExpandedText = "↑ Collapse ↑"; // Collapse/Expand button text when the quote is expanded.
var removeSidebar = true; // If you want to remove sidebar, set this to true, otherwise set it to false;
// --------------------



// ----- IDs -----
const sidebarId = "ipsLayout_sidebar";
// ---------------



// ----- Classes -----
const quoteClass = "ipsQuote";
const quoteContentClass = "ipsQuote_contents";
const replyComposeAreaClass = "ipsComposeArea";
const quoteCitationClass = "ipsQuote_citation";

const quoteContentCollapsedClass = "quoteCollapserCollapsed";
const quoteCollapserClass = "quoteCollapser";
const quoteCollapserButtonClass = "quoteCollapserButton";
// ---------------------


// ----- HTML -----
const quoteCollapserButtonHTML = `<div class="${quoteCollapserButtonClass}">Toggle collapse button (if you see this, something went wrong)</div>`;
// ---------------


// ----- CSS -----
const quoteContentCollapsedCss =
      `
      <style>
          .ipsQuote_contents
          {
              overflow: hidden;
          }

          .quoteCollapserCollapsed
          {
              overflow: hidden;
              max-height: ${quoteContentMaxHeight}px;
          }
      </style>
      `;

const quoteCollapserButtonCss =
      `
      <style>
          .quoteCollapserButton
          {
              background: ${quoteCollapserButtonBackground};
              padding: ${quoteCollapserButtonPadding}px;
              font-size: ${quoteCollapserButtonFontSize}px;

              width: 100%;
              height: 100%;
              line-height: 100%;
              text-align: center;
              vertical-align: middle;
              cursor: pointer;
          }
      </style>
      `;
// ---------------



// ----- Global variables -----
var observer;
var observerSettings = {attributes: false, childList: true, characterData: false, subtree:true};
// ----------------------------



// ----- Code -----
main();
// ---------------



// ----- Functions -----
function main()
{
    $().ready(
        function()
        {
            consoleWriteLine("Ready.");
            initializeScript();
            if(removeSidebar) $(`#${sidebarId}`).remove();
        }
    );
}

function initializeScript()
{
    consoleWriteLine("initialize() called.");
    initializeCss()
    initializeEvents();
    initilizeObserver();
    initializeButtons();
}

function initilizeObserver()
{
    observer = new MutationObserver(
            function(mutations)
            {
                initializeButtons();
            }
    );

    observer.observe(document, observerSettings);
}

function initializeCss()
{
    $("head").append(quoteContentCollapsedCss);
    $("head").append(quoteCollapserButtonCss);
}

function initializeEvents()
{
    $("body").on("click",`div.${quoteCollapserButtonClass}`, function() { toggleCollapse($(this).siblings(`.${quoteContentClass}`)[0]); });
    $("body").on("dblclick",`.${quoteCollapserClass}`, function() { toggleCollapse($(this).siblings(`.${quoteContentClass}`)[0]); });
}

function initializeButtons()
{
    observer.disconnect();

    $(`.${quoteClass}`).each(
        function()
        {
            var height = $(this).height();
            var replyParents = $(this).parents(`.${replyComposeAreaClass}`);
            var quoteCollapserButtons = $(this).has(`.${quoteCollapserButtonClass}`);

            var isQuoteLongerThanAllowedMaxHeight = height > quoteContentMaxHeight;
            var isQuoteInReply = replyParents.length > 0;
            var doesQuoteAlreadyHaveButton = quoteCollapserButtons.length > 0;

            var shouldAppendButton = isQuoteLongerThanAllowedMaxHeight && !doesQuoteAlreadyHaveButton && !isQuoteInReply;
            
            if(shouldAppendButton)
            {
                var button = $(quoteCollapserButtonHTML);
                var quoteContent = $(this).children(`.${quoteContentClass}`)[0];

                button.appendTo($(this));

                const buttonObserverConfig = { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] }; //https://stackoverflow.com/a/53768716
                const buttonObserverCallback = (mutationsList) => 
                {
                    for (let mutation of mutationsList)
                    {
                        if (mutation.attributeName === "class")
                        {
                            updateQuoteCollapserButtonText(button, quoteContent);
                        }
                    }
                };
                const buttonObserver = new MutationObserver(buttonObserverCallback);
                buttonObserver.observe(quoteContent, buttonObserverConfig);

                toggleCollapse(quoteContent);
            }

            if(isQuoteInReply)
            {
                var quoteCitation = $(this).children(`.${quoteCitationClass}`);
                var quoteContent = quoteCitation.siblings(`.${quoteContentClass}`)[0];

                if(!quoteCitation.hasClass(quoteCollapserClass))
                {
                    quoteCitation.addClass(quoteCollapserClass);
                    toggleCollapse(quoteContent);
                }
            }
        }
    );

    observer.observe(document, observerSettings);
}

function toggleCollapse(element)
{
    consoleWriteLine("toggleCollapse() called.");

    $(element).toggleClass(quoteContentCollapsedClass);
}

function updateQuoteCollapserButtonText(button, element)
{
    if($(element).hasClass(quoteContentCollapsedClass))
    {
        $(button).html(quoteCollapserButtonCollapsedText);
    }
    else
    {
        $(button).html(quoteCollapserButtonExpandedText);
    }
}

function consoleWriteLine(object)
{
    console.log(`[Quote collapser]`, object);
}
// ---------------------
