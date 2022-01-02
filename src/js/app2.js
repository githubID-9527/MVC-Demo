import $ from "jquery"
import "../css/app2.css"

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

$tabBar.on("click", "li", (e)=>{
    const $li = $(e.currentTarget)
    $li.addClass("selected")
    .siblings()
    .removeClass("selected")
    const index = $li.index()
    $tabContent.children().eq(index)
    .toggleClass("action")
    .siblings()
    .removeClass("action")
})

$tabBar.children().eq(0).trigger("click")