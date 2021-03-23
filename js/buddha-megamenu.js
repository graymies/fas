var mmThemeFixesBeforeInit = function() {
    mobileMenuMilliseconds = 500;
};
var mmThemeFixesBefore = function() {
    if (selectedMenu == "force-mega-menu" && tempMenuObject.ul.attr("id") == "MobileNav") {
        tempMenuObject.forceMenu = true;
        tempMenuObject.skipCheck = true;
        tempMenuObject.liClasses = "mobile-nav__item border-bottom";
        tempMenuObject.aClasses = "mobile-nav__link";
        tempMenuObject.liItems = [];
        tempMenuObject.ul.find(">li").each(function() {
            if (jQueryBuddha(this).find(".currency-selector").length == 0) tempMenuObject.liItems[tempMenuObject.liItems.length] = jQueryBuddha(this);
        });
    } else if (selectedMenu == "force-mega-menu" && tempMenuObject.ul.attr("id") == "SiteNav") {
        tempMenuObject.forceMenu = true;
        tempMenuObject.skipCheck = true;
        tempMenuObject.liClasses = "";
        tempMenuObject.aClasses = "site-nav__link site-nav__link--main";
        tempMenuObject.liItems = [];
        tempMenuObject.ul.find(">li").each(function() {
            tempMenuObject.liItems[tempMenuObject.liItems.length] = jQueryBuddha(this);
        });
    }
};
var mmThemeFixesAfter = function() {
    jQueryBuddha("head").append("<style id=\"themeScript\"> .mobile-nav-wrapper { overflow:visible; z-index:1; opacity: 1; } .site-header { z-index:3; } </style>");
};
var schemaDesignJSON = [{
        "action": "menu-select",
        "value": "force-mega-menu"
    }, {
        "action": "design",
        "setting": "vertical_font_size",
        "value": "13px"
    }, {
        "action": "design",
        "setting": "vertical_link_hover_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "vertical_link_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "vertical_text_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "text_color",
        "value": "#222222"
    }, {
        "action": "design",
        "setting": "font_size",
        "value": "13px"
    }, {
        "action": "design",
        "setting": "button_text_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "button_text_hover_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "background_color",
        "value": "#ffffff"
    }, {
        "action": "design",
        "setting": "background_hover_color",
        "value": "#f9f9f9"
    }, {
        "action": "design",
        "setting": "link_color",
        "value": "#4e4e4e"
    }, {
        "action": "design",
        "setting": "button_background_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "link_hover_color",
        "value": "#0da19a"
    }, {
        "action": "design",
        "setting": "button_background_hover_color",
        "value": "#0d8781"
    }, {
        "action": "design",
        "setting": "tree_sub_direction",
        "value": "set_tree_auto"
    }, {
        "action": "design",
        "setting": "font_family",
        "value": "Default"
    }],
    mmAppUrl = "megamenu.buddhaapps.com",
    mmDomChangeSkipUl = ",.slick-dots,.grid.grid--uniform.grid--view-items";

function loadBuddhaMegaMenu() {
    readyStateCheckInterval = setInterval(initBuddhaMegaMenu, 100), setTimeout(function() {
        clearInterval(readyStateCheckInterval)
    }, 25e3), window.self !== window.top && (jQueryBuddha(window).on("load", initSchema), setTimeout(function() {
        initSchema()
    }, 5e3)), initBuddhaMegaMenu()
}

function initBuddhaMegaMenu() {
    if (mmWireSlices.length != mmWireSlices[0] + 1 || !(window.self !== window.top || window.self === window.top && jQueryBuddha.isReady)) return !1;
    mmWireSlices.shift(), newMenu = mmWireSlices.join(""), newMenu = newMenu.replace(new RegExp('<div id="bsWidget">', "g"), bestSellersHTML), newMenu = newMenu.replace(new RegExp('<div id="npWidget">', "g"), newestProductsHTML), clearInterval(readyStateCheckInterval);
    var e = !1;
    if (jQueryBuddha("script").each(function() {
            -1 != jQueryBuddha(this).text().indexOf("mm-init.js?") && -1 == jQueryBuddha(this).text().indexOf("initSchema") && (e = !0)
        }), e) {
        var t = 0,
            n = setInterval(function() {
                t++, "undefined" != typeof mutationExceptions && (mutationExceptions[mutationExceptions.length] = ".buddha-menu-item", clearInterval(n)), t > 10 && clearInterval(n)
            }, 1e3);
        "undefined" != typeof mmCustomerFixesBeforeInit && mmCustomerFixesBeforeInit(), "undefined" != typeof mmThemeFixesBeforeInit && 0 == disableThemeScript && mmThemeFixesBeforeInit(), initSchema(), window.self !== window.top && (jQueryBuddha("#admin_bar_iframe").remove(), jQueryBuddha("html").css("padding-top", "0px"), setInterval(function() {
            jQueryBuddha("*").each(function() {
                "40px" == jQueryBuddha(this).css("top") && "fixed" == jQueryBuddha(this).css("position") && jQueryBuddha(this).css("top", "0")
            })
        }, 1e3));
        var u, a = jQueryBuddha(window).width();
        if (jQueryBuddha(window).resize(function() {
                a != jQueryBuddha(window).width() && (jQueryBuddha(".mm-hovering").removeClass("mm-hovering"), jQueryBuddha(".submenu-opened").hide().removeClass("submenu-opened"), jQueryBuddha(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle"), clearTimeout(u), u = setTimeout(function() {
                    jQueryBuddha(document).trigger("mmWindowResize"), applyMegaMenu(), applyOnClick(), a = jQueryBuddha(window).width()
                }, 300))
            }), !disableOnScroll) {
            setInterval(function() {
                jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function() {
                    if (parseInt(jQueryBuddha(this).css("top")) > 0) {
                        var e = jQueryBuddha(this).parent();
                        if (e.find(">ul.mm-submenu.simple").length > 0 || e.find(">ul.mm-submenu.tabbed").length > 0) {
                            var t = !1;
                            if (e.parent().parents().each(function() {
                                    "fixed" != jQueryBuddha(this).css("position") && "sticky" != jQueryBuddha(this).css("position") || (t = !0)
                                }), e.find(">ul.mm-submenu.simple").length > 0) var n = e.find(">ul.mm-submenu.simple");
                            else var n = e.find(">ul.mm-submenu.tabbed");
                            if (t) {
                                var u = parseInt(n.offset().top - jQueryBuddha(window).scrollTop()),
                                    a = jQueryBuddha(window).height() - u;
                                n.height() > a && n.css({
                                    "max-height": a + "px",
                                    overflow: "scroll",
                                    "overflow-x": "hidden"
                                })
                            } else if (jQueryBuddha(document).height() - 200 <= jQueryBuddha(window).height()) {
                                var a = jQueryBuddha(document).height() - 250;
                                n.css({
                                    "max-height": a + "px",
                                    overflow: "scroll",
                                    "overflow-x": "hidden"
                                })
                            } else n.css({
                                "max-height": "none",
                                overflow: "hidden"
                            })
                        }
                    }
                })
            }, 1e3)
        }
        var i = "ul:not(.buddha-menu-item ul " + mmDomChangeSkipUl + ")";
        void 0 === customMenuUls && (i += ":has(a[href])");
        var d = 1;
        storeUlCount == jQueryBuddha(i).length && storeNavCount == jQueryBuddha("nav").length || (storeUlCount = jQueryBuddha(i).length, storeNavCount = jQueryBuddha("nav").length, applyMegaMenu(), applyOnClick()), clearInterval(r);
        var r = setInterval(function() {
            if (d++, d > loadMegaMenuTries && clearInterval(r), storeUlCount != jQueryBuddha(i).length || storeNavCount != jQueryBuddha("nav").length) {
                if (storeUlCount = jQueryBuddha(i).length, storeNavCount = jQueryBuddha("nav").length, void 0 !== customMenuUls) {
                    var e = 0,
                        t = customMenuUls.split(",");
                    if (jQueryBuddha.each(t, function(t, n) {
                            jQueryBuddha(n).length > 0 && jQueryBuddha(n).is(".vertical-mega-menu,.horizontal-mega-menu") && e++
                        }), e == t.length) return void clearInterval(r)
                }
                applyMegaMenu(), applyOnClick()
            }
        }, 100)
    } else "undefined" != typeof hideOriginalMenuInterval ? (jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu"), jQueryBuddha("link[href]").each(function() {
        -1 !== jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") && jQueryBuddha(this).remove()
    }), clearInterval(hideOriginalMenuInterval)) : (jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu"), jQueryBuddha("link[href]").each(function() {
        -1 !== jQueryBuddha(this).attr("href").indexOf("buddha-megamenu.css") && jQueryBuddha(this).remove()
    }));
    jQueryBuddha(window).on("beforeunload", function() {
        if (window.self !== window.top && (undo.length > 0 || changedMenu) && !saving) return "You might have unsaved changes."
    })
}

function applyOnClick() {
    disableOnClick || void 0 == selectedMenu || "none" == selectedMenu || (clicked = !1, 0 == jQueryBuddha(burgerIcon).length && (burgerIcon = ".js-mobile-nav-toggle,.js-drawer-open-left,.js-drawer-open-button-left", 0 == jQueryBuddha(burgerIcon).length && (burgerIcon = "*")), jQueryBuddha(burgerIcon).unbind("click.apply-mm"), jQueryBuddha(burgerIcon).bind("click.apply-mm", function() {
        var e = jQueryBuddha(this);
        clicked || touched || (clicked = !0, setTimeout(function() {
            changingPage || 0 != e.closest(".buddha-menu-item").length || 0 != e.closest(".horizontal-mega-menu").length && (0 == e.closest(".horizontal-mega-menu").length || jQueryBuddha(e.closest(".horizontal-mega-menu").find(".buddha-menu-item")).is(":visible")) || 0 != e.closest(".vertical-mega-menu").length && (0 == e.closest(".vertical-mega-menu").length || jQueryBuddha(e.closest(".vertical-mega-menu").find(".buddha-menu-item")).is(":visible")) || e.hasClass("stop-mega-menu-reinit") || (onClickOnlyReinit ? jQueryBuddha.each(ulPaths, function(e, t) {
                reinitMenus(t)
            }) : applyMegaMenu(), "undefined" != typeof DoublyGlobalCurrency && (jQueryBuddha(".currency-switcher-btn.selected").length > 0 ? DoublyGlobalCurrency.convertAll(jQueryBuddha(".currency-switcher-btn.selected").attr("doubly-currency")) : jQueryBuddha("[name=doubly-currencies]").length > 0 && DoublyGlobalCurrency.convertAll(jQueryBuddha("[name=doubly-currencies]").val())))
        }, mobileMenuMilliseconds)), setTimeout(function() {
            clicked = !1
        }, mobileMenuMilliseconds + 50)
    }))
}

function initSchema() {
    if (0 == initializedSchema && (initializedSchema = !0, "string" == typeof schemaDesignJSON && (schemaDesignJSON = JSON.parse(schemaDesignJSON)), recreateDesign(), action = "", window.self !== window.top)) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    }
}

function iframeReady() {
    previewPanelLoaded = !0, document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function reloadPreview() {
    location.reload()
}

function initCountdown(e) {
    var t = e.attr("countdown");
    if (0 == e.find(".buddha-menu-item-countdown").length && void 0 != t && !isNaN(Date.parse(t))) {
        var n = (new Date(t).getTime() - (new Date).getTime()) / 1e3 % 86400;
        n < 0 && (n += 86400), e.find(">a>i.fa-angle-down:last").length > 0 ? e.find(">a>i.fa-angle-down:last").before(' <i class="buddha-menu-item-countdown"> <div></div> </i>') : e.find(">a").append(' <i class="buddha-menu-item-countdown"> <div></div> </i>'), e.find(".buddha-menu-item-countdown>div").FlipClock(n, {
            clockFace: "DailyCounter",
            countdown: !0
        })
    }
}

function shadeColor(e, t) {
    var n = parseInt(e.slice(1), 16),
        u = t < 0 ? 0 : 255,
        a = t < 0 ? -1 * t : t,
        i = n >> 16,
        d = n >> 8 & 255,
        r = 255 & n;
    return "#" + (16777216 + 65536 * (Math.round((u - i) * a) + i) + 256 * (Math.round((u - d) * a) + d) + (Math.round((u - r) * a) + r)).toString(16).slice(1)
}

function customPropSettingsStyles(e, t) {
    var n = "";
    switch (e) {
        case "countdown_background_color":
            t = shadeColor(t, -.5), n += ".flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, " + t + ")) !important;background: linear, top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%," + t + " 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, " + t + ")) !important;background: linear, top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, " + t + " 100%) !important;background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, " + t + " 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {background: -moz-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, " + t + "), color-stop(100%, rgba(0, 0, 0, 0.1))) !important;background: linear, top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;background: -o-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -ms-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: linear, to bottom, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;}", n += ".flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {background: -moz-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, " + t + "), color-stop(100%, rgba(0, 0, 0, 0.1))) !important;background: linear, top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;background: -o-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: -ms-linear-gradient(top, " + t + " 0%, rgba(0, 0, 0, 0.1) 100%) !important;background: linear, to bottom, " + t + " 0%, rgba(0, 0, 0, 0.1) 100% !important;}"
    }
    return n
}

function applyMegaMenu(e) {
    if ("undefined" != typeof mutationExceptions && (mutationExceptions[mutationExceptions.length] = "ul"), "undefined" != typeof hideOriginalMenuInterval && clearInterval(hideOriginalMenuInterval), void 0 != e) {
        var t = [];
        selectedMenu = e, jQueryBuddha.each(schemaDesignJSON, function(e, n) {
            "menu-select" != n.action && t.push(n)
        }), schemaDesignJSON = t, changedMenu = !0
    } else jQueryBuddha.each(schemaDesignJSON, function(e, t) {
        "menu-select" == t.action && (selectedMenu = t.value)
    });
    0 == mmApplyOnce && (jQueryBuddha(".vertical-mega-menu").removeClass("vertical-mega-menu"), jQueryBuddha(".horizontal-mega-menu").removeClass("horizontal-mega-menu"), jQueryBuddha(".buddha-disabled").removeClass("buddha-disabled"), jQueryBuddha(".buddha-menu-item").remove(), jQueryBuddha("#themeScript").remove());
    var n = [];
    if (jQueryBuddha.each(linkLists, function(e, t) {
            if (selectedMenu == e) return n = t.items, !1
        }), window.self !== window.top && console.log(n), 0 == activateMegaMenu && (selectedMenu = "none"), void 0 != selectedMenu && "none" != selectedMenu && (n.length > 0 || void 0 != customMenuUls) && (jQueryBuddha(customMenuUls || "ul,nav").each(function() {
            if (tempMenuObject = {}, tempMenuObject.ul = jQueryBuddha(this), tempMenuObject.forceMenu = !1, tempMenuObject.skipCheck = !1, tempMenuObject.elementFits = 0, 1 == mmApplyOnce && tempMenuObject.ul.is(".vertical-mega-menu, .horizontal-mega-menu")) return !0;
            if (("undefined" == typeof mmThemeFixesBefore || 0 != disableThemeScript || -1 != mmThemeFixesBefore.call(this)) && (tempMenuObject.skipCheck || jQueryBuddha(this).children("li").each(function() {
                    var e = jQueryBuddha(this),
                        t = e.find("a").first(),
                        u = t.attr("href");
                    (void 0 == u || void 0 != u && ("#" == u.substr(0, 1) || "" == u)) && e.find("a:nth-child(2)").length > 0 ? (t = e.find("a:nth-child(2)"), u = t.attr("href")) : (void 0 == u || void 0 != u && ("#" == u.substr(0, 1) || "" == u)) && e.find("a>a").length > 0 && (t = e.find("a>a"), u = t.attr("href")), void 0 != n[tempMenuObject.elementFits] && u == n[tempMenuObject.elementFits] ? (void 0 == tempMenuObject.liClasses && (tempMenuObject.liClasses = ""), tempMenuObject.liClasses = concatClasses(e.attr("class"), tempMenuObject.liClasses), void 0 == tempMenuObject.aClasses && (tempMenuObject.aClasses = []), tempMenuObject.aClasses = concatClasses(t.attr("class"), tempMenuObject.aClasses), void 0 == tempMenuObject.liItems && (tempMenuObject.liItems = []), -1 == jQueryBuddha.inArray(e, tempMenuObject.liItems) && (tempMenuObject.liItems[tempMenuObject.liItems.length] = e), e.addClass("buddha-transparent"), tempMenuObject.elementFits++) : tempMenuObject.elementFits > 0 && tempMenuObject.elementFits != n.length && (tempMenuObject.elementFits = 0, tempMenuObject.liItems = [], jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent"), u == n[0] && (tempMenuObject.elementFits = 1, tempMenuObject.liItems[tempMenuObject.liItems.length] = e, e.addClass("buddha-transparent")))
                }), "undefined" == typeof mmCustomerFixesBefore || -1 != mmCustomerFixesBefore.call(this)))
                if (tempMenuObject.elementFits > 0 && tempMenuObject.elementFits == n.length || tempMenuObject.forceMenu) {
                    var e = getSpecificClasses(tempMenuObject.liClasses),
                        t = getSpecificClasses(tempMenuObject.aClasses);
                    if (jQueryBuddha.each(tempMenuObject.liItems, function(e, t) {
                            jQueryBuddha(t).removeClass("buddha-transparent").addClass("buddha-disabled")
                        }), newMenu && (jQueryBuddha(this).prepend(newMenu), jQueryBuddha(this).find(".buddha-menu-item").addClass(e.common), jQueryBuddha(this).find(".buddha-menu-item").find(">a").attr("class", t.common), jQueryBuddha(this).find(".buddha-menu-item[countdown]").each(function() {
                            initCountdown(jQueryBuddha(this))
                        }), jQueryBuddha(this).find(".get-collection-image").each(function() {
                            var e = jQueryBuddha(this),
                                t = e.data("id");
                            void 0 != collectionImages[t] && -1 == collectionImages[t].indexOf("no-image") && e.attr("data-src", collectionImages[t])
                        }), jQueryBuddha(this).find(".get-product-image").each(function() {
                            var e = jQueryBuddha(this),
                                t = e.data("id");
                            void 0 != productImages[t] && -1 == productImages[t].indexOf("no-image") && e.attr("data-src", productImages[t])
                        }), jQueryBuddha(this).find("img[data-src]").addClass("mmLazyload"), jQueryBuddha(this).find(".get-mega-menu-prices").each(function() {
                            var e = jQueryBuddha(this),
                                t = e.data("id");
                            void 0 != prices[t] ? e.html(prices[t]) : e.parent().find("br").attr("style", "display: none;")
                        })), (e.first || t.first || e.last || t.last) && (tempMenuObject.ul.find(".buddha-menu-item").first().addClass(e.first), tempMenuObject.ul.find(".buddha-menu-item").last().addClass(e.last), tempMenuObject.ul.find(".buddha-menu-item").first().find("a").first().addClass(t.first), tempMenuObject.ul.find(".buddha-menu-item").last().find("a").first().addClass(t.last)), (e.active || t.active) && tempMenuObject.ul.find(">.buddha-menu-item").each(function() {
                            var n = jQueryBuddha(this).find("a").first();
                            n.attr("data-href") == window.location.pathname && (n.addClass(t.active), jQueryBuddha(this).addClass(e.active))
                        }), "undefined" != typeof mmThemeFixesAfter && 0 == disableThemeScript && -1 == mmThemeFixesAfter.call(this)) return;
                    if ("undefined" != typeof mmCustomerFixesAfter && -1 == mmCustomerFixesAfter.call(this)) return;
                    tempMenuObject = {}, jQueryBuddha('input[type="search"],input[type="text"]').addClass("stop-mega-menu-reinit"), jQueryBuddha(".dl-menu").length > 0 && setTimeout(function() {
                        jQueryBuddha(".toggle-menu-btn").click(function() {
                            setTimeout(function() {
                                jQueryBuddha(".dl-menu").addClass("dl-menuopen")
                            }, 1)
                        })
                    }, 100), "undefined" != typeof timber && void 0 !== timber.alignMenu && (timber.alignMenu = function() {});
                    var u = getUlPath(jQueryBuddha(this)),
                        a = !1; - 1 == jQueryBuddha.inArray(u, ulPaths) && (jQueryBuddha.each(ulPaths, function(e, t) {
                        -1 !== u.indexOf(t) && (a = !0)
                    }), a || (ulPaths[ulPaths.length] = u))
                } else jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent")
        }), jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu"), jQueryBuddha.each(ulPaths, function(e, t) {
            reinitMenus(t)
        }), addTouch()), window.self !== window.top) {
        var u = parent;
        void 0 === parent.postMessage && (u = top), u.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com");
    setTimeout(function() {
        "undefined" != typeof mutationExceptions && mutationExceptions.pop()
    }, 100)
}

function reinitMenus(e) {
    jQueryBuddha(".submenu-opened").hide();
    var t, n = 1;
    if (jQueryBuddha(e + ">.buddha-menu-item>a").each(function() {
            var e = jQueryBuddha(this).offset().top;
            t = void 0 == t ? e : t, (e > t + 5 || e < t - 5) && n++, t = e
        }), (n != jQueryBuddha(e + ">.buddha-menu-item").length || 1 == n && jQueryBuddha("body").width() > verticalMenuMaxWidth) && 0 == forceMobile) jQueryBuddha(e).addClass("horizontal-mega-menu").removeClass("vertical-mega-menu"), jQueryBuddha(e + " ul.mm-submenu").removeAttr("style"), jQueryBuddha(e + " .fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle"), jQueryBuddha(e + " .submenu-opened").removeClass("submenu-opened"), jQueryBuddha(e + " .toggle-menu-btn").hide(), jQueryBuddha(".horizontal-mega-menu>li.buddha-menu-item").off(), setTimeout(function() {
        jQueryBuddha(e).find(".buddha-menu-item").each(function() {
            setSubmenuBoundries(jQueryBuddha(this)), setContactSubmenuBoundries(jQueryBuddha(this))
        })
    }, 1), jQueryBuddha(e).find(".buddha-menu-item").unbind("onmouseover.simpleContactSubmenuResize"), jQueryBuddha(e).find(".buddha-menu-item").bind("onmouseover.simpleContactSubmenuResize", function() {
        setSubmenuBoundries(jQueryBuddha(this)), setContactSubmenuBoundries(jQueryBuddha(this))
    }), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").each(function() {
        0 == jQueryBuddha(this).parent().find(".tab-opened").length ? (jQueryBuddha(this).addClass("tab-opened"), setTabbedSubmenuBoundries(jQueryBuddha(this))) : jQueryBuddha(this).hasClass("tab-opened") && setTabbedSubmenuBoundries(jQueryBuddha(this))
    }), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").unbind(), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").hover(function() {
        jQueryBuddha(this).parent().find(".tab-opened").removeClass("tab-opened"), jQueryBuddha(this).addClass("tab-opened"), setTabbedSubmenuBoundries(jQueryBuddha(this))
    }), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li:first-child").each(function() {
        0 == jQueryBuddha(this).parent().find(".tab-opened").length && (jQueryBuddha(this).addClass("tab-opened"), setTabbedSubmenuBoundries(jQueryBuddha(this)))
    }), jQueryBuddha(e).find(".buddha-menu-item").unbind("mouseenter.resizeSubmenus"), jQueryBuddha(e).find(".buddha-menu-item").bind("mouseenter.resizeSubmenus", function() {
        setSubmenuBoundries(jQueryBuddha(this)), setContactSubmenuBoundries(jQueryBuddha(this)), jQueryBuddha(this).find(".tab-opened").length > 0 && setTabbedSubmenuBoundries(jQueryBuddha(this).find(".tab-opened"))
    });
    else if (activateMegaMenu) {
        jQueryBuddha(".mega-hover").removeClass("mega-hover"), jQueryBuddha(".buddha-menu-item.disabled").removeClass("disabled"), jQueryBuddha(e).addClass("vertical-mega-menu").removeClass("horizontal-mega-menu"), jQueryBuddha(e + " .toggle-menu-btn").show(), jQueryBuddha(e).find("li.buddha-menu-item").off(), jQueryBuddha(e).find("li.buddha-menu-item a").off();
        var u = (parseInt(jQueryBuddha(e + ">li>a").css("font-size")), parseInt(jQueryBuddha(e + ">li").css("padding-left")) + parseInt(jQueryBuddha(e + ">li>a").css("padding-left"))),
            a = u;
        u > 15 && (a = 15);
        parseInt(jQueryBuddha(e + ">li").css("padding-top")), parseInt(jQueryBuddha(e + ">li>a").css("padding-top"));
        jQueryBuddha("#verticalMenuSpacing").remove();
        var i = '<style id="verticalMenuSpacing" type="text/css">';
        i += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:" + u + "px !important;padding-right:" + u + "px !important;}", i += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:" + a + "px !important;padding-right:" + a + "px !important;}", i += e + ".vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:" + u + "px !important;padding-right:" + u + "px !important;}", i += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:" + u + "px !important;padding-right:" + u + "px !important;}", i += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:" + a + "px !important;padding-right:" + a + "px !important;}", i += e + ".vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:" + u + "px !important;padding-right:" + u + "px !important;}", i += "</style>", jQueryBuddha("head").append(i), jQueryBuddha(e).find(".tab-opened").removeClass("tab-opened"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").unbind("click.resizeSubmenus"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").bind("click.resizeSubmenus", function() {
            setSubmenuBoundries(jQueryBuddha(this).parent().parent()), setContactSubmenuBoundries(jQueryBuddha(this).parent().parent())
        }), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").unbind("click.resizeTabbedSubmenu"), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").bind("click.resizeTabbedSubmenu", function() {
            jQueryBuddha(this).parent().parent().hasClass("mm-hovering") && setTabbedSubmenuBoundries(jQueryBuddha(this).parent().parent())
        }), forceMobile = !1
    }
    jQueryBuddha(".submenu-opened").show(), panelOpened ? (jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").unbind("mouseenter.addMegaHoverClass"), jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").bind("mouseenter.addMegaHoverClass", function() {
        jQueryBuddha(".mega-hover").removeClass("mega-hover"), panelOpened && jQueryBuddha(this).addClass("mega-hover")
    })) : jQueryBuddha(".mega-hover").removeClass("mega-hover")
}

function renderMobileMenuForce(e) {
    jQueryBuddha(".mega-hover").removeClass("mega-hover"), jQueryBuddha(".buddha-menu-item.disabled").removeClass("disabled"), jQueryBuddha(e).addClass("vertical-mega-menu").removeClass("horizontal-mega-menu"), jQueryBuddha(e + " .toggle-menu-btn").show(), jQueryBuddha(e).find("li.buddha-menu-item").off(), jQueryBuddha(e).find("li.buddha-menu-item a").off();
    var t = (parseInt(jQueryBuddha(e + ">li>a").css("font-size")), parseInt(jQueryBuddha(e + ">li").css("padding-left")) + parseInt(jQueryBuddha(e + ">li>a").css("padding-left"))),
        n = t;
    t > 15 && (n = 15);
    parseInt(jQueryBuddha(e + ">li").css("padding-top")), parseInt(jQueryBuddha(e + ">li>a").css("padding-top"));
    jQueryBuddha("#verticalMenuSpacing").remove();
    var u = '<style id="verticalMenuSpacing" type="text/css">';
    u += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", u += e + ".vertical-mega-menu>li>ul.mm-submenu.tree>li ul.mm-submenu li {padding-left:" + n + "px !important;padding-right:" + n + "px !important;}", u += e + ".vertical-mega-menu>li ul.mm-submenu.simple>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", u += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", u += e + ".vertical-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu>li {padding-left:" + n + "px !important;padding-right:" + n + "px !important;}", u += e + ".vertical-mega-menu>li ul.mm-submenu.mm-contact>li{padding-left:" + t + "px !important;padding-right:" + t + "px !important;}", u += "</style>", jQueryBuddha("head").append(u), jQueryBuddha(e).find(".tab-opened").removeClass("tab-opened"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").unbind("click.resizeSubmenus"), jQueryBuddha(e).find(".buddha-menu-item>a>.toggle-menu-btn").bind("click.resizeSubmenus", function() {
        setSubmenuBoundries(jQueryBuddha(this).parent().parent()), setContactSubmenuBoundries(jQueryBuddha(this).parent().parent())
    }), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").unbind("click.resizeTabbedSubmenu"), jQueryBuddha(e).find(".buddha-menu-item>.mm-submenu>li>a>.toggle-menu-btn").bind("click.resizeTabbedSubmenu", function() {
        jQueryBuddha(this).parent().parent().hasClass("mm-hovering") && setTabbedSubmenuBoundries(jQueryBuddha(this).parent().parent())
    })
}

function concatClasses(e, t) {
    return classes = "" != t ? t.split(" ") : [], void 0 != e && "" != e && (e = e.split(" "), jQueryBuddha.each(e, function(e, t) {
        -1 == jQueryBuddha.inArray(t, classes) && (classes[classes.length] = t)
    })), classes.join(" ")
}

function getSpecificClasses(e) {
    var t = [];
    if (void 0 != e) {
        e = e.split(" ");
        var n = "";
        jQueryBuddha.each(e, function(e, u) {
            -1 != u.indexOf("active") || -1 != u.indexOf("selected") || -1 != u.indexOf("current") ? t.active = u : -1 != u.indexOf("focus") ? t.focus = u : -1 != u.indexOf("first") ? t.first = u : -1 != u.indexOf("last") ? t.last = u : -1 == u.indexOf("buddha") && -1 == u.indexOf("dropdown") && -1 == u.indexOf("mm-subopen") && -1 == u.indexOf("hidden") && -1 == u.indexOf("hide") && (n += " " + u)
        }), t.common = n.trim()
    }
    return t
}

function undoAction() {
    if (currentUndo = undo[undo.length - 1], "design" == currentUndo.action && (redo.unshift(currentUndo), schemaDesignJSON.splice(-1, 1), undo.splice(-1, 1), recreateDesign()), reinitMenus(), 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function redoAction() {
    if (tempMenuObject = {}, jQueryBuddha(".buddha-transparent").removeClass("buddha-transparent"), action = redo[0].action, "design" == action && (schemaDesignJSON.push(redo[0]), undo.push(redo[0]), recreateDesign()), redo.splice(0, 1), reinitMenus(), 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function clearAction() {
    if (jQueryBuddha.each(undo, function(e, t) {
            undoAction()
        }), redo = [], 0 == jQueryBuddha(".buddha-menu-item").length && jQueryBuddha("#themeScript").remove(), window.self !== window.top) {
        var e = parent;
        void 0 === parent.postMessage && (e = top), e.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function liveDesign(e, t) {
    jQueryBuddha("#tempStyle").remove();
    var n = '<style id="tempStyle" type="text/css">';
    n += propSettings[e].element + "{" + propSettings[e].attribute + ":" + t + " !important; }", n += customPropSettingsStyles(e, t), n += "</style>", jQueryBuddha("head").append(n)
}

function updateDesign(e, t) {
    if (jQueryBuddha("#tempStyle").remove(), item = {}, item.action = "design", item.setting = e, item.value = t, defaultFontSelected = !1, "font_family" == item.setting && "Default" == item.value && (defaultFontSelected = !0), schemaDesignJSON.push(item), undo.push(item), recreateDesign(), "font_size" != e && "font_family" != e || jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu").each(function() {
            parseInt(jQueryBuddha(this).css("top")) > 0 && (setSubmenuBoundries(jQueryBuddha(this).parent()), setContactSubmenuBoundries(jQueryBuddha(this).parent()), jQueryBuddha(this).hasClass("tabbed") && setTabbedSubmenuBoundries(jQueryBuddha(this).find(">li.tab-opened")))
        }), clearTimeout(reinitAfterDesignTimeout), reinitAfterDesignTimeout = setTimeout(function() {
            reinitMenus()
        }, 100), redo = [], window.self !== window.top) {
        var n = parent;
        void 0 === parent.postMessage && (n = top), n.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "*")
    } else previewPanelLoaded && document.getElementById("mega-menu-iframe").contentWindow.postMessage(["updateToolbar", JSON.stringify(schemaDesignJSON), JSON.stringify(linkLists), JSON.stringify(undo), JSON.stringify(redo), changedMenu], "https://buddhaapps.com")
}

function recreateDesign() {
    jQueryBuddha("#previewStyle").remove();
    var e = '<style id="previewStyle" type="text/css">';
    jQueryBuddha.each(schemaDesignJSON, function(t, n) {
        if ("design" == n.action && void 0 != propSettings[n.setting]) {
            if ("font_size" == n.setting) fontSize = parseInt(n.value);
            else if ("font_family" == n.setting && (jQueryBuddha("#googleFontDesign").remove(), "Default" != n.value && "Arial" != n.value && "Georgia" != n.value && "Tahoma" != n.value && "Trebuchet MS" != n.value && "Times New Roman" != n.value && "Verdana" != n.value)) {
                var u = '<link href="//fonts.googleapis.com/css?family=' + n.value + '" id="googleFontDesign" rel="stylesheet" type="text/css">';
                jQueryBuddha("head").append(u)
            }("font_family" != n.setting || "font_family" == n.setting && !defaultFontSelected && "Default" != n.value) && (e += propSettings[n.setting].element + "{" + propSettings[n.setting].attribute + ":" + n.value + " !important; }"), e += customPropSettingsStyles(n.setting, n.value)
        } else "design" == n.action && "tree_sub_direction" == n.setting && (setTreeDirection = n.value, jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item>.mm-submenu.tree").each(function() {
            setSubmenuBoundries(jQueryBuddha(this).parent())
        }))
    }), e += "</style>", jQueryBuddha("head").append(e)
}

function designPanelOpened() {
    panelOpened = !0, jQueryBuddha("ul.mm-submenu.tabbed").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tabbed").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.simple").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.simple").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.contact").length > 0 ? jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.contact").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }) : jQueryBuddha("ul.mm-submenu.tree").length > 0 && jQueryBuddha(".horizontal-mega-menu:visible>.buddha-menu-item>ul.mm-submenu.tree").each(function() {
        return jQueryBuddha(this).closest(".buddha-menu-item").addClass("mega-hover"), !1
    }), setSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover")), setContactSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover")), jQueryBuddha("ul.mm-submenu.tabbed").length > 0 && setTabbedSubmenuBoundries(jQueryBuddha(".buddha-menu-item.mega-hover>ul.mm-submenu.tabbed>li:first-child")), jQueryBuddha(".horizontal-mega-menu>.buddha-menu-item").hover(function() {
        jQueryBuddha(".mega-hover").removeClass("mega-hover"), panelOpened && jQueryBuddha(this).addClass("mega-hover")
    })
}

function designPanelClosed() {
    panelOpened = !1, jQueryBuddha(".mega-hover").removeClass("mega-hover")
}

function initSaving() {
    jQueryBuddha(".buddha-loader-wrapper").show(), jQueryBuddha(".buddha-loader-text").show(), saving = !0
}

function toggleSubmenu(e) {
    if (!submenuToggled) {
        submenuToggled = !0;
        var t = jQueryBuddha(e).closest("li").find("ul.mm-submenu").first();
        t.hasClass("submenu-opened") ? (jQueryBuddha(e).closest("li").removeClass("mm-hovering"), jQueryBuddha(e).find(">.fa").removeClass("fa-minus-circle").addClass("fa-plus-circle"), t.removeClass("submenu-opened")) : (jQueryBuddha(e).closest("li").addClass("mm-hovering"), jQueryBuddha(e).find(">.fa").removeClass("fa-plus-circle").addClass("fa-minus-circle"), t.addClass("submenu-opened")), setTimeout(function() {
            submenuToggled = !1
        }, 400), jQueryBuddha(document).trigger("toggleSubmenu", [e])
    }
    return !1
}

function mmGoToPage(e, t) {
    if (!changingPage && !submenuToggled) {
        var n = window.location.hostname.replace("www.", ""),
            u = n.substr(0, n.indexOf(".")) + ".";
        if ("no-link" != jQueryBuddha(e).attr("data-href"))
            if (-1 !== jQueryBuddha(e).attr("data-href").indexOf("http") && -1 === jQueryBuddha(e).attr("data-href").indexOf(u) && -1 === jQueryBuddha(e).attr("data-href").indexOf("myshopify.com")) {
                changingPage = !0;
                var a = window.open(jQueryBuddha(e).attr("data-href"), "_blank");
                a.focus(), setTimeout(function() {
                    changingPage = !1
                }, 300)
            } else changingPage = !0, window.location = jQueryBuddha(e).attr("data-href"), setTimeout(function() {
                changingPage = !1
            }, 1e3);
        else t.stopPropagation()
    }
    return !1
}

function setSubmenuBoundries(e) {
    var t = jQueryBuddha("body"),
        n = t.width(),
        u = t.length ? t.offset().left : 0,
        a = 1e3;
    if (jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0 || jQueryBuddha(e).find(">ul.mm-submenu.tabbed").length > 0)
        if (jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
            if (jQueryBuddha(e).parent().parents().each(function() {
                    var e = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left")) - u;
                    e < a && e > 0 && (a = e)
                }), (1e3 == a || n <= 768) && (a = 0), customHeaderOffset && (a = customHeaderOffset < n ? (n - customHeaderOffset) / 2 : 0), jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0) var i = jQueryBuddha(e).find(">ul.mm-submenu.simple");
            else var i = jQueryBuddha(e).find(">ul.mm-submenu.tabbed");
            i.css({
                width: "auto",
                left: "auto",
                right: "auto"
            }), 2 * a > n && (a = 0);
            var d = n - 2 * a,
                r = 5;
            if (d >= 1020) {
                var m = i.attr("columns", 5).attr("style");
                m += "width:" + d + "px !important;", i.attr("style", m), r = 5
            } else if (d >= 816) {
                var m = i.attr("columns", 4).attr("style");
                m += "width:" + d + "px !important;", i.attr("style", m), r = 4
            } else if (d >= 612) {
                var m = i.attr("columns", 3).attr("style");
                m += "width:" + d + "px !important;", i.attr("style", m), r = 3
            } else {
                var m = i.attr("columns", 2).attr("style");
                m += "width:" + d + "px !important;", i.attr("style", m), r = 2
            }
            jQueryBuddha(e).find(">ul.mm-submenu.tabbed").length > 0 && --r;
            var s = jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2 - u;
            if (s < n / 2) {
                var o = n - (n - (jQueryBuddha(e).offset().left - u)) - a;
                i.css("left", -o + "px")
            } else {
                var l = n - (jQueryBuddha(e).offset().left - u) - jQueryBuddha(e).outerWidth() - a;
                i.css("right", -l + "px")
            }
            if (jQueryBuddha(e).find("ul.mm-submenu.simple>li").removeAttr("style"), jQueryBuddha(e).find(".mm-list-name").removeAttr("style"), jQueryBuddha(e).find(">ul.mm-submenu.simple").length > 0) {
                var h = 0,
                    c = 0;
                fontSize <= 14 ? fontSize = 8 : fontSize > 14 && fontSize <= 18 ? fontSize += 6 : fontSize > 18 && fontSize <= 20 && (fontSize += 10), jQueryBuddha(e).find("ul.mm-submenu.simple>li").each(function(t, n) {
                    if (t % r == 0 && (h = 0, c = 0), jQueryBuddha(this).find(".mm-list-name").length > 0)
                        if (jQueryBuddha(this).find(".mm-list-name").height() > c) {
                            c = jQueryBuddha(this).find(".mm-list-name").height(), jQueryBuddha(this).find(".mm-list-name").css("height", c);
                            var u = t;
                            if (u % r != 0)
                                for (; u % r != 0;) jQueryBuddha(e).find("ul.mm-submenu.simple").find(">li:nth-child(" + u + ")").find(".mm-list-name").css("height", c), u--
                        } else jQueryBuddha(this).find(".mm-list-name").css("height", c);
                    if (jQueryBuddha(this).outerHeight() > h) {
                        h = jQueryBuddha(this).outerHeight(), jQueryBuddha(this).css("min-height", h + fontSize);
                        var u = t;
                        if (u % r != 0)
                            for (; u % r != 0;) jQueryBuddha(e).find("ul.mm-submenu.simple").find(">li:nth-child(" + u + ")").css("min-height", h + fontSize), u--
                    } else jQueryBuddha(this).css("min-height", h + fontSize)
                })
            } else jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").each(function(e, t) {
                var n = 0,
                    u = 0;
                fontSize <= 14 ? fontSize = 6 : fontSize > 14 && fontSize <= 18 ? fontSize += 2 : fontSize > 18 && fontSize <= 20 && (fontSize += 6), jQueryBuddha(t).find("ul.mm-submenu.simple>li").each(function(e, a) {
                    if (e % r == 0 && (n = 0, u = 0), jQueryBuddha(this).find(".mm-list-name").length > 0)
                        if (jQueryBuddha(this).find(".mm-list-name").height() > u) {
                            u = jQueryBuddha(this).find(".mm-list-name").height(), jQueryBuddha(this).find(".mm-list-name").css("height", u);
                            var i = e;
                            if (i % r != 0)
                                for (; i % r != 0;) jQueryBuddha(this).parent().find(">li:nth-child(" + i + ")").find(".mm-list-name").css("height", u), i--
                        } else jQueryBuddha(this).find(".mm-list-name").css("height", u);
                    if (jQueryBuddha(this).outerHeight() > n) {
                        n = jQueryBuddha(this).outerHeight(), jQueryBuddha(this).css("min-height", n + fontSize);
                        var i = e;
                        if (i % r != 0)
                            for (; i % r != 0;) jQueryBuddha(t).find(">ul.mm-submenu.simple").find(">li:nth-child(" + i + ")").css("min-height", n + fontSize), i--
                    } else jQueryBuddha(this).css("min-height", n + fontSize)
                })
            }), jQueryBuddha(e).find("ul.mm-submenu.tabbed>li").addClass("fa fa-angle-right")
        } else {
            jQueryBuddha(e).find("ul.mm-submenu.tabbed").css({
                left: "auto",
                right: "auto"
            });
            var g = jQueryBuddha(e).find("ul.mm-submenu.tabbed").attr("style"),
                f = "";
            f += void 0 != g ? g + ";height:auto !important;width:auto !important" : "height:auto !important;width:auto !important", jQueryBuddha(e).find("ul.mm-submenu.tabbed").attr("style", f), jQueryBuddha(e).find("ul.mm-submenu.simple").css({
                left: "auto",
                right: "auto"
            });
            var g = jQueryBuddha(e).find("ul.mm-submenu.simple").attr("style"),
                f = "";
            f += void 0 != g ? g + ";width:auto !important" : ";width:auto !important", jQueryBuddha(e).find("ul.mm-submenu.simple").attr("style", f), jQueryBuddha(e).find("ul.mm-submenu.simple>li").removeAttr("style"), jQueryBuddha(e).width() >= 700 ? (jQueryBuddha(e).find("ul.mm-submenu.simple").attr("columns", 3), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2)) : jQueryBuddha(e).width() >= 500 ? (jQueryBuddha(e).find("ul.mm-submenu.simple").attr("columns", 2), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").attr("columns", 2)) : (jQueryBuddha(e).find("ul.mm-submenu.simple").removeAttr("columns"), jQueryBuddha(".vertical-mega-menu ul.mm-submenu.mm-contact").removeAttr("columns"))
        }
    else if (jQueryBuddha(e).find("ul.mm-submenu.tree").length > 0 && (jQueryBuddha(e).find("ul.mm-submenu").removeAttr("style"), 0 == jQueryBuddha(e).parents(".buddha-menu-item.mega-hover").length)) {
        var s = jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2;
        s < n / 2 && ("set_tree_auto" == setTreeDirection || void 0 == setTreeDirection) || "set_tree_right" == setTreeDirection ? (jQueryBuddha(e).find("ul.mm-submenu").removeClass("tree-open-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").each(function() {
            jQueryBuddha(this).find("ul.mm-submenu").length > 0 && jQueryBuddha(this).addClass("fa fa-angle-right")
        })) : (jQueryBuddha(e).find("ul.mm-submenu").addClass("tree-open-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").removeClass("fa fa-angle-right fa-angle-left"), jQueryBuddha(e).find("ul.mm-submenu.tree li").each(function() {
            jQueryBuddha(this).find("ul.mm-submenu").length > 0 && jQueryBuddha(this).addClass("fa fa-angle-left")
        }))
    }
}

function setTabbedSubmenuBoundries(e) {
    if (jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
        allowMainMenuRecalibration && setSubmenuBoundries(jQueryBuddha(e).closest(".buddha-menu-item"));
        var t = jQueryBuddha(e).parent().find(">li").index(jQueryBuddha(e));
        if (jQueryBuddha(e).find(">ul.mm-submenu").length > 0) {
            jQueryBuddha(e).find(">ul.mm-submenu").removeAttr("style");
            var n = jQueryBuddha(e).find(">ul.mm-submenu").outerHeight(),
                u = 0;
            if (jQueryBuddha(e).parent().find(">li").each(function() {
                    u += jQueryBuddha(this).outerHeight()
                }), u > n) {
                var a = jQueryBuddha(e).parent().attr("style"),
                    i = "";
                i += void 0 != a ? a + ";height:" + u + "px !important" : "height:" + u + "px !important", jQueryBuddha(e).parent().attr("style", i);
                var a = jQueryBuddha(e).find(">ul.mm-submenu").attr("style"),
                    i = "";
                i += void 0 != a ? a + ";height:" + u + "px !important" : "height:" + u + "px !important", jQueryBuddha(e).find(">ul.mm-submenu").attr("style", i)
            } else {
                var a = jQueryBuddha(e).parent().attr("style"),
                    i = "";
                i += void 0 != a ? a + ";height:" + n + "px !important" : "height:" + n + "px !important", jQueryBuddha(e).parent().attr("style", i)
            }
        } else jQueryBuddha(e).parent().css("height", "auto");
        var d = jQueryBuddha(e).parent().find(">li:nth-child(" + (t + 1) + ")").position().top,
            a = jQueryBuddha(e).find(">ul.mm-submenu").attr("style"),
            i = "";
        i += void 0 != a ? a + ";top:-" + d + "px !important" : "top:-" + d + "px !important", jQueryBuddha(e).find(">ul.mm-submenu").attr("style", i)
    } else jQueryBuddha(e).closest(".vertical-mega-menu").find(".tab-opened").removeClass("tab-opened")
}

function setContactSubmenuBoundries(e) {
    var t = jQueryBuddha("body").width(),
        n = 1e3;
    if (jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").length > 0 && jQueryBuddha(e).closest(".horizontal-mega-menu").length > 0) {
        jQueryBuddha(e).parent().parents().each(function() {
            var e = jQueryBuddha(this).offset().left + parseInt(jQueryBuddha(this).css("padding-left"));
            e < n && e > 0 && (n = e)
        }), 1e3 == n && (n = 0), 2 * n > t && (n = 0), customHeaderOffset && (n = customHeaderOffset < t ? (t - customHeaderOffset) / 2 : 0);
        var u = jQueryBuddha(e).find(">ul.mm-submenu.mm-contact"),
            a = t - 2 * n;
        u.css({
            width: a + "px",
            left: "auto",
            right: "auto"
        });
        if (jQueryBuddha(e).offset().left + jQueryBuddha(e).outerWidth() / 2 < t / 2) {
            var i = t - (t - jQueryBuddha(e).offset().left) - n;
            u.css("left", -i + "px")
        } else {
            var d = t - jQueryBuddha(e).offset().left - jQueryBuddha(e).outerWidth() - n;
            u.css("right", -d + "px")
        }
    } else jQueryBuddha(e).find("ul.mm-submenu.mm-contact").css({
        left: "auto",
        right: "auto",
        width: "auto",
        height: "auto"
    }), jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").width() <= 480 && jQueryBuddha(e).find(">ul.mm-submenu.mm-contact").addClass("one-column")
}

function addTouch() {
    var e = !1;
    jQueryBuddha(document).on("touchstart.mm-li", function(t) {
        e = !1
    }), jQueryBuddha(document).on("touchmove.mm-li", function(t) {
        e = !0
    }), jQueryBuddha(document).off("touchend.mm-li"), jQueryBuddha(document).on("touchend.mm-li", function(t) {
        if (globalTouch && 0 == jQueryBuddha(t.target).closest(".buddha-menu-item").length && jQueryBuddha(".mega-hover").removeClass("mega-hover"), 0 == e) {
            if (e = !0, setTimeout(function() {
                    e = !1
                }, 300), jQueryBuddha(t.target).closest(".vertical-mega-menu li").length > 0) {
                var n = jQueryBuddha(t.target).closest("li");
                return n.find("ul.mm-submenu").length > 0 ? !!n.hasClass("mm-hovering") || (t.preventDefault(), n.find(">a>.toggle-menu-btn").length > 0 ? n.find(">a>.toggle-menu-btn").click() : n.find(">a>span>.toggle-menu-btn").length > 0 && n.find(">a>span>.toggle-menu-btn").click(), !1) : (n.parents(".buddha-menu-item-countdown").length > 0 ? t.preventDefault() : setTimeout(function() {
                    changingPage || n.find("a").first().click()
                }, 200), !0)
            }
            if (jQueryBuddha(t.target).closest(".horizontal-mega-menu li").length > 0) {
                var n = jQueryBuddha(t.target).closest("li");
                return n.is(".buddha-menu-item") ? !(n.find("ul.mm-submenu").length > 0) || (n.hasClass("mega-hover") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), jQueryBuddha(".mega-hover").removeClass("mega-hover"), n.addClass("mega-hover"), setSubmenuBoundries(n), setContactSubmenuBoundries(n), n.find(".tab-opened").length > 0 && setTabbedSubmenuBoundries(n.find(".tab-opened")), !1)) : n.parent().is(".mm-submenu.tabbed") ? !(n.find("ul.mm-submenu").length > 0) || (n.hasClass("tab-opened") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), n.parent().find(">li").removeClass("tab-opened"), n.addClass("tab-opened"), setTabbedSubmenuBoundries(n), setSubmenuBoundries(n.parent().parent()), !1)) : n.parents(".mm-submenu.tree").length > 0 && n.find("ul.mm-submenu").length > 0 ? n.hasClass("mega-hover") ? (mmGoToPage(n.find("a").first(), t), !0) : (t.preventDefault(), n.parent().find(">li").removeClass("mega-hover"), n.addClass("mega-hover"), n.find(".mega-hover").removeClass("mega-hover"), jQueryBuddha.each(n.parents(), function() {
                    "li" == jQueryBuddha(this).prop("tagName").toLowerCase() && jQueryBuddha(this).addClass("mega-hover")
                }), setSubmenuBoundries(n), !1) : n.parents(".buddha-menu-item-countdown").length > 0 ? (t.preventDefault(), !0) : n.parents(".mm-contact").length > 0 ? (t.stopPropagation(), !0) : (mmGoToPage(n.find("a").first(), t), !0)
            }
        }
    })
}

function getUlPath(e) {
    for (var t, n = e, u = !0; n.length;) {
        var a = n[0],
            i = a.localName;
        if (!i) break;
        i = i.toLowerCase();
        var d, r = n.parent(),
            m = "";
        try {
            d = r.children(i)
        } catch (e) {
            t = "*" + (t ? ">" + t : ""), n = r;
            continue
        }
        if (d.length > 1) {
            allSiblings = r.children();
            var s = allSiblings.index(a) + 1;
            s > 0 && (m = ":nth-child(" + s + ")")
        }
        var o = "";
        ignoreClass = !1, "body" != i && "html" != i && (jQueryBuddha(a).prop("id").length > 0 ? o = "#" + a.id : jQueryBuddha(a).prop("class").length > 0 && !u && !ignoreClass && void 0 != jQueryBuddha(a).attr("class") && "" != jQueryBuddha(a).attr("class").trim() && (o = "." + jQueryBuddha(a).attr("class").trim().split(" ")[0])), -1 !== jQueryBuddha.inArray(i, ["li", "ul", "header"]) && (i += m), -1 !== jQueryBuddha.inArray(i, ["div"]) && "" == o && (i += m), u = !1, t = i + o + (t ? ">" + t : ""), n = r
    }
    return t
}
if (window.addEventListener && void 0 === mmLoaded) {
    var newMenu = !1,
        mmLoaded = !0,
        undo = [],
        redo = [],
        action = "",
        tempMenuObject = {},
        changedMenu = !1,
        submenuToggled = !1,
        changingPage = !1,
        saving = !1,
        panelOpened = !1,
        verticalMenuMaxWidth = 1e4,
        selectedMenu, clicked, touched, burgerIcon, disableOnClick = !1,
        globalTouch = !0,
        onClickOnlyReinit = !1,
        disableOnScroll = !1,
        mobileMenuMilliseconds = 350,
        ulPaths = [],
        customHeaderOffset = !1,
        fontSize = 0,
        storeUlCount = 0,
        storeNavCount = 0,
        loadMegaMenuTries = 100,
        customMenuUls, setTreeDirection, defaultFontSelected = !1,
        forceMobile = !1,
        activateMegaMenu = !0,
        previewPanelLoaded = !1,
        allowMainMenuRecalibration = !0,
        readyStateCheckInterval, addTouchNew = !0,
        disableThemeScript = !1,
        mmApplyOnce = !1,
        initializedSchema = !1,
        propSettings = {
            background_color: {
                element: ".horizontal-mega-menu ul.mm-submenu, .horizontal-mega-menu>li>ul.mm-submenu.tabbed>li>ul.mm-submenu li,.horizontal-mega-menu li.buddha-menu-item:hover ul.mm-submenu.simple li:hover, .horizontal-mega-menu li.buddha-menu-item.mega-hover ul.mm-submenu.simple li:hover",
                attribute: "background"
            },
            background_hover_color: {
                element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened",
                attribute: "background"
            },
            text_color: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li,.horizontal-mega-menu ul.mm-submenu h3",
                attribute: "color"
            },
            link_color: {
                element: '.horizontal-mega-menu ul.mm-submenu li a,.horizontal-mega-menu ul.mm-submenu li.fa, .horizontal-mega-menu ul.mm-submenu.tree li:hover>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a[data-href="no-link"], .horizontal-mega-menu ul.mm-submenu li a[data-href="no-link"]:hover',
                attribute: "color"
            },
            link_hover_color: {
                element: ".horizontal-mega-menu ul.mm-submenu.tree li:hover>a, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover>a, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .horizontal-mega-menu ul.mm-submenu li a:hover, .horizontal-mega-menu ul.mm-submenu.tree li.fa:hover:before, .horizontal-mega-menu ul.mm-submenu.tree li.mega-hover.fa:before, .horizontal-mega-menu ul.mm-submenu.tabbed>li.tab-opened.fa:before",
                attribute: "color"
            },
            font_size: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu a",
                attribute: "font-size"
            },
            button_background_color: {
                element: "ul.mm-submenu li.mm-contact-column button",
                attribute: "background"
            },
            button_background_hover_color: {
                element: "ul.mm-submenu li.mm-contact-column button:hover",
                attribute: "background"
            },
            button_text_color: {
                element: "ul.mm-submenu li.mm-contact-column button",
                attribute: "color"
            },
            button_text_hover_color: {
                element: "ul.mm-submenu li.mm-contact-column button:hover",
                attribute: "color"
            },
            vertical_text_color: {
                element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu h3",
                attribute: "color"
            },
            vertical_link_color: {
                element: ".vertical-mega-menu ul.mm-submenu li a, .vertical-mega-menu ul.mm-submenu>li>a>.toggle-menu-btn>.fa",
                attribute: "color"
            },
            vertical_link_hover_color: {
                element: ".vertical-mega-menu ul.mm-submenu>li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li:hover>a, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a, .vertical-mega-menu ul.mm-submenu.tabbed>li.tab-opened>a, .vertical-mega-menu ul.mm-submenu li a:hover, .vertical-mega-menu ul.mm-submenu.tree li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tree li.mega-hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li.mm-hovering>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu.tabbed>li:hover>a>.toggle-menu-btn>.fa:before, .vertical-mega-menu ul.mm-submenu li.mm-hovering>a",
                attribute: "color"
            },
            vertical_font_size: {
                element: ".vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu.simple>li ul.mm-product-list>li .mm-list-info",
                attribute: "font-size"
            },
            font_family: {
                element: ".horizontal-mega-menu ul.mm-submenu,.horizontal-mega-menu ul.mm-submenu li a,ul.mm-submenu a,.vertical-mega-menu ul.mm-submenu,.vertical-mega-menu ul.mm-submenu li a,ul.mm-submenu li.mm-contact-column h3",
                attribute: "font-family"
            },
            countdown_color: {
                element: ".buddha-menu-item-countdown .inn",
                attribute: "color"
            },
            countdown_background_color: {
                element: ".buddha-menu-item-countdown .inn,.buddha-menu-item-countdown .up::after,.buddha-menu-item-countdown .flip-clock-dot",
                attribute: "background"
            },
            countdown_menu_color: {
                element: ".buddha-menu-item[countdown] > a",
                attribute: "color"
            }
        },
        reinitAfterDesignTimeout;
    window.addEventListener("message", function(e) {
        ~e.origin.indexOf(mmAppUrl) && ("object" == typeof e.data ? "applyMegaMenu" == e.data[0] ? window[e.data[0]](e.data[1]) : -1 !== jQueryBuddha.inArray(e.data[0], ["undoAction", "redoAction", "clearAction", "initSaving", "designPanelOpened", "designPanelClosed"]) ? window[e.data[0]]() : -1 !== jQueryBuddha.inArray(e.data[0], ["liveDesign", "updateDesign"]) && window[e.data[0]](e.data[1], e.data[2]) : window[e.data]())
    })
}
if (typeof mmBeforeLoaded == "undefined") {
    var buddhaMegaMenuShop = "baremarket.myshopify.com";
    var mmBeforeLoaded = true;
    if (typeof InstantClick !== "undefined") {
        InstantClick.on("change", function(isInitialLoad) {
            if (!isInitialLoad) {
                ulPaths = [];
                storeUlCount = 0;
                storeNavCount = 0;
                if (typeof loadFlipClockBuddha !== "undefined") {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== "undefined") {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        });
    }
    var hideOriginalMenuInterval;

    function hideOriginalMenu() {
        hideOriginalMenuInterval = setInterval(function() {
            menu = "force-mega-menu";
            var links = [];
            jQueryBuddha.each(linkLists, function(key, item) {
                if (menu == key) {
                    links = item.items;
                    return false;
                }
            });
            if (menu != "none" && links.length > 0) {
                jQueryBuddha("ul,nav").each(function() {
                    var elementFits = 0;
                    jQueryBuddha(this).find(">li").each(function() {
                        var href = jQueryBuddha(this).find("a").first().attr("href"); /*if (typeof href !== "undefined") { href = href.replace("http://"+buddhaMegaMenuShop,"").replace("https://"+buddhaMegaMenuShop,""); }*/
                        if (links[elementFits] != undefined && href == links[elementFits]) {
                            elementFits++;
                        } else if (elementFits > 0 && elementFits != links.length) {
                            elementFits = 0;
                            if (href == links[0]) {
                                elementFits = 1;
                            }
                        }
                    });
                    if (elementFits > 0 && elementFits == links.length) {
                        jQueryBuddha(this).addClass("buddha-disabled-menu");
                    }
                    jQueryBuddha("#MobileNav").addClass("buddha-disabled-menu");
                    jQueryBuddha("#SiteNav").addClass("buddha-disabled-menu");
                });
            }
        }, 50);
        setTimeout(function() {
            jQueryBuddha(".buddha-disabled-menu").removeClass("buddha-disabled-menu");
            clearInterval(hideOriginalMenuInterval);
        }, 3000);
    }

    function loadJqueryBuddha() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var data = xhr.responseText;
                jQueryBuddha = data.replace(/jQuery/g, 'jQueryBuddha');
                eval(jQueryBuddha);
                if (typeof jQuery !== 'undefined') {
                    $ = jQuery.noConflict();
                }
                if (typeof hideOriginalMenu != 'undefined') {
                    hideOriginalMenu();
                }
                if (typeof loadFlipClockBuddha !== 'undefined') {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== 'undefined') {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            }
        };
        xhr.open('GET', 'https://code.jquery.com/jquery-3.5.1.slim.min.js', true);
        xhr.send(null);
    }
    var jQueryBuddha;

    function BuddhaMegaMenuMain() {
        if (typeof jQuery == 'undefined') {
            loadJqueryBuddha();
        } else {
            var vernums = jQuery.fn.jquery.split('.');
            if ((parseInt(vernums[0]) == 1 && parseInt(vernums[1]) >= 7) || parseInt(vernums[0]) > 1) {
                jQueryBuddha = jQuery;
                if (typeof hideOriginalMenu != 'undefined') {
                    hideOriginalMenu();
                }
                if (typeof loadFlipClockBuddha !== 'undefined') {
                    loadFlipClockBuddha(jQueryBuddha);
                }
                if (typeof loadBuddhaMegaMenu !== 'undefined') {
                    loadBuddhaMegaMenu();
                } else {
                    setTimeout(function() {
                        loadBuddhaMegaMenu();
                    }, 1000);
                }
            } else {
                loadJqueryBuddha();
            }
        }
    }
    if (window.self !== window.top || false) {
        /* in preview or if customMenuUls is defined, start loading immediately */
        BuddhaMegaMenuMain();
    } else {
        /* on frontend load after dom content loaded event to emulate deferred exec */
        if (document.readyState !== "loading") {
            BuddhaMegaMenuMain();
        } else {
            document.addEventListener("DOMContentLoaded", BuddhaMegaMenuMain);
        }
    }
}