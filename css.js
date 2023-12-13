var css = 
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