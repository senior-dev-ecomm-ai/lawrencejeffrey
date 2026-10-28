for (var shop = "", customeremail = "", customerid = "", scripts = document.getElementsByTagName("script"), i = 0, l = scripts.length; i < l; i++) null != scripts[i].getAttribute("data-shop-id") && (shop = scripts[i].getAttribute("data-shop-id")), null != scripts[i].getAttribute("data-customer-id") && (customerid = scripts[i].getAttribute("data-customer-id")), null != scripts[i].getAttribute("data-customer-email") && (customeremail = scripts[i].getAttribute("data-customer-email"));

function ZooomyDataFun(J, B, M) {
    console.log("...1...."), J.ajax({
        url: "https://zooomyapps.com/wishlist/ListWishlist.php",
        data: {
            shop: B,
            customerid: M
        },
        dataType: "jsonp",
        jsonp: "ZooomyGetDataPage",
        async: "true",
        success: function(n) {
            console.log(n,"N");
            var t = n.custom_css,
                o = n.user_added_css,
                e = n.id,
                r = n.product_id,
                a = (n.product_price, n.product_handle),
                i = n.product_name,
                d = n.product_img,
                p = n.wishlist_page_product_text,
                s = n.wishlist_page_product_text_bg,
                l = n.wishlist_page_product_text_f_color,
                c = n.wishlist_page_add_cart_text,
                m = n.wishlist_page_add_cart_text_f_color,
                h = n.wishlist_page_add_cart_text_bg,
                y = n.remove_from_wishlist,
                g = n.remove_from_wishlist_f_color,
                u = n.remove_from_wishlist_bg,
                f = n.layout,
                b = n.shop_currency,
                z = n.shop_name,
                w = n.sold_out_text,
                _ = n.directdelete,
                x = n.cus_email,
                v = n.zemail_e_btn,
                Z = n.zemail_textarea,
                P = n.zemail_s_btn,
                W = n.frnd_name,
                j = n.frnd_email,
                k = n.frnd_name_bg,
                T = n.frnd_name_f_color,
                G = n.variant_name,
                S = n.empty_text,
                I = n.plan,
                a = n.product_handle,
                C = "qyghbced" + M + "azhu607h",
                E = n.savdatawp;
            n.savdatawp;
            c = (c = (c = (c = (c = (c = c.replace("&Oslash;", "Ã˜")).replace("&Aring;", "Ã…")).replace("&AElig;", "Ã†")).replace("&oslash;", "Ã¸")).replace("&aring;", "Ã¥")).replace("&aElig;", "Ã¦"), p = (p = (p = (p = (p = (p = p.replace("&Oslash;", "Ã˜")).replace("&Aring;", "Ã…")).replace("&AElig;", "Ã†")).replace("&oslash;", "Ã¸")).replace("&aring;", "Ã¥")).replace("&aElig;", "Ã¦"), y = (y = (y = (y = (y = (y = y.replace("&Oslash;", "Ã˜")).replace("&Aring;", "Ã…")).replace("&AElig;", "Ã†")).replace("&oslash;", "Ã¸")).replace("&aring;", "Ã¥")).replace("&aElig;", "Ã¦");
            var q, A, F, O, D, N, Q, L = [];
            "" == M && ("yes" == n.w_login ? (J("#ZoomyWishlistPage").append("<a href='https://" + z + "/account/login' target='_blank' class='zmsg'>" + n.login_save + "</a>"), q = [], A = [], F = [], O = [], D = [], N = [], null == localStorage.getItem("myzooomy__wishlist") || (Q = "", y = localStorage.getItem("myzooomy__wishlist"), L = JSON.parse(y), J.each(L, function(t, o) {
                q.push(o.product_id), A.push(o.product_handle), O.push(o.proprice), F.push(o.protitle), D.push(o.proimage), N.push(o.vname)
            })), r = e = q, a = A, i = F, d = D, G = N) : J("#ZoomyWishlistPage").append("<a href='https://" + z + "/account/login' target='_blank' class='zmsg'>" + n.login_text + "</a>")), J('<link rel="stylesheet" type="text/css" href="https://zooomyapps.com/wishlist/WishlistStyle.css">').appendTo("body"), J("<style>" + t + "</style>").appendTo("body"), "yes" == n.hide_cart_btn && J("<style>span#wishlist_page_product_text { width: 100%; }</style>").appendTo("body"), J("<style>span#opencart a { float: right; position: absolute; top: -64px; right: 50px; }span#opencart { float: right; width: 100%; position: relative; }</style>").appendTo("body"), J("<style>.ZoomyWishlistPagecol li.zbodyaction { width: 42%; }.ZoomyWishlistPagecol li.zbodytitle { width: 31%; }.ZoomyWishlistPagecol li.zbodypimg { width: 20%; }.ZoomyWishlistPagecol li.zbodysno { width: 7%; } .ZoomyWishlistPagecol li.zheadaction { width: 42%; }.ZoomyWishlistPagecol li.zheadtitle { width: 31%; }.ZoomyWishlistPagecol li.zheadpimg { width: 20%; }.ZoomyWishlistPagecol li.zheadsno { width: 5%; }.ZoomyWishlistPagecol a, .rte .ZoomyWishlistPagecol a{border:none; outline:none;}.ZoomyWishlistPagecol button{padding: 10px 20px; margin: 2px 3px;border:none;}#wishlist_page_product_text{background:" + s + "; color:" + l + "; }#wishlist_page_product_text a{color:" + l + "; }</style>").appendTo("body"), J("<style>.zopencartlink{background:" + h + "; color:" + m + ";border: none; padding: 1px 10px; }</style>").appendTo("body"), J("<style>.zremovefromwish{background:" + u + "; color:" + g + "; }</style>").appendTo("body"), "false" != x && "" != M || J("<style>#zooomyemailfbtn{display:none;}</style>").appendTo("body"), J("<style>.ZoomyWishlistPagecol li{float:left; width:25%; box-sizing:border:box; padding:10px; }.ZoomyWishlistPagecol{float: left; width: 100%;margin-bottom:10px; border-bottom:1px solid #ededed;}</style>").appendTo("body"), 0 != r && "0" != r && null != r && "null" != r || ("no" == n.w_login ? "" != M && (0 == J(".zmsg").length ? J("#ZoomyWishlistPage").append("<p class='zmsg'>" + S + "</p>") : J("#ZoomyWishlistPage .zmsg").replaceWith("<p class='zmsg'>" + S + "</p>")) : J("#ZoomyWishlistPage").append("<p class='zmsg'>" + S + "</p>"), J("<style>.ZoomyWishlistPagecol{display:none;}</style>").appendTo("body")), J("#ZoomyWishlistPage").before("<span class='zooomyaddtowishlistmsg' style='float:left;width:100%;'></span>"), "nfree" == I && "free" == I || (J("#ZoomyWishlistPage").before("<span class='zooomybtn' id='zooomyemailfbtn' style='cursor:pointer;border: none;float:left; width:100%;'><a id='emailzwishlist' class='' style='background:" + k + "; color:" + T + ";'>" + v + "</a></span>"), J("#ZoomyWishlistPage").before("<div id='zemaildata' style='display:none;'><form><input type='text' id='zemailname'  placeholder='" + W + "' required/><input type='email' id='zemailid'   placeholder='" + j + "'  required/><textarea id='zemailmsg' required> " + Z + " </textarea><a id='zsendemail'>" + P + "</a></form></div>"), 1 != x && "true" != x || J(".zooomybtn").append('<div class="z_social_share_wishlist"><a class="zooomylink_fa"><i class = "fa fa-link"></i></a><a class="zsocial_icon" href="https://www.facebook.com/sharer/sharer.php?u=https://' + z + "/pages/share-wish-list?" + C + '&t=Wishlist" onclick="javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");return false;" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><a class="ztwitter_link" href="https://twitter.com/share?url=https://' + z + "/pages/share-wish-list?" + C + '&text=Share Wishlist" onclick="javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");return false;" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i></a><a class="zpin_link" href="http://pinterest.com/pin/create/button/?url=https://' + z + "/pages/share-wish-list?" + C + '&media=" onClick="javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");return false;" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i></a><a class="zwhatsapp" href="whatsapp://send?text=https://' + z + "/pages/share-wish-list?" + C + '" data-action="share/whatsapp/share" onClick="javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");return false;" target="_blank" title="Share on whatsapp"><i class="fa fa-whatsapp"></i></a><a class="z_mail_link" href="mailto:?subject=' + W + "&body=" + Z + ": https://" + z + "/pages/share-wish-list?" + C + '" onClick="javascript:window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");return false;" target="_blank" title="Share on Mail"><i class="fa fa-envelope"></i></a></div>'), J("<style> .z_social_share_wishlist .fa{background:" + k + "; color:" + T + ";border:none;}</style>").appendTo("body"), J("#ZoomyWishlistPage").before("<textarea id='zooomycopytxtarea'  style='display:none;margin:10px 0;float: left; width: 100%; text-align: center; padding: 10px; height: 58px; min-height: 20px; border: 1px solid #eee; font-size: 18px; color: #888;'>https://" + z + "/pages/share-wish-list?" + C + "</textarea>")), J("<style> #zsendemail{background:" + k + "; color:" + T + ";border:none;}</style>").appendTo("body"), "list" == f ? J("#ZoomyWishlistPage").addClass("zooomywishlistlistclass") : J("#ZoomyWishlistPage").addClass("zooomywishlistgridclass"), J("<style>.zooomybtn.removefromwishlist.zremovefromwish{ cursor: pointer; border: none; padding: 0; margin: 0; box-sizing: border-box; line-height: 25px; height: 25px; width: 25px;}.ZoomyWishlistPageGrid span.zooomybtn { cursor:pointer;border: none; margin: 2px; padding: 4px 10px; margin-top: 20px; box-sizing: border-box; }.ZoomyWishlistPageGrid{float: left; width: 31.3%; box-sizing: border-box; position: relative; text-align: center; margin: 10px 1%; border: 1px solid #efefef; padding: 20px;}</style>").appendTo("body"), J("<style>.ZoomyWishlistPageGrid .removefromwishlist {position: absolute; right: 0px; top:0;border: 0; background: " + u + ";color:" + g + "; padding: 0; margin: 0; line-height: 20px; height: 24px; width: 23px; text-align: center; }</style>").appendTo("body"), J.each(e, function(s, t) {
                J("#ZoomyWishlistPage").append("<div 123 class='ZoomyWishlistPageGrid' id='ZoomyWishlistPageGrid-" + r[s] + "'> <li class='zbodypimg'><a target='_blank' href='https://" + n.shop_name + "/products/" + a[s] + "'><img src='" + d[s] + "' width='100'></a></li><li class='zbodytitle'><a href='https://" + n.shop_name + "/products/" + a[s] + "'>" + i[s] + "</a></li><li class='zbodyaction'><span class='zooomybtn'  id='wishlist_page_product_text'><a href='https://" + n.shop_name + "/products/" + a[s] + "'>" + p + "</a></span></li></div>"), "yes" != n.hide_cart_btn && J("#ZoomyWishlistPage #ZoomyWishlistPageGrid-" + r[s] + " .zbodyaction").append("<button id='" + r[s] + "' class='zbtn zooomybtn addcartbtn zopencartlink' value='" + a[s] + "' data-pro-id='" + r[s] + "'>" + c + "</button>"), J("#ZoomyWishlistPage #ZoomyWishlistPageGrid-" + r[s] + " .zbodypimg").prepend("<button id='rmvfrmwish" + r[s] + "' class='zooomybtn removefromwishlist zremovefromwish' value='" + r[s] + "'>x</button>"), J("#ZoomyWishlistPage #ZoomyWishlistPageGrid-" + r[s] + " .zbodytitle").after("<li class='zbodyinfo'><div class='zoptionbox' style='float:left;width:100%;margin:10px 0px;'><select class='zooomyshopvariant' id='zooomyshopvariant-" + r[s] + "'></select></div><div class='zqty'><select id='zqtyn-" + r[s] + "'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option></select></div></li>");
                var l = "https://" + n.shop_name + "/cart";
                J("#ZoomyWishlistPageGrid-" + r[s]).each(function() {
                    J('#ZoomyWishlistPage > [id="' + this.id + '"]:gt(0)').remove()
                }), J.ajax({
                    url: "/products/" + a[s] + ".js",
                    dataType: "json",
                    success: function(t) {
                      console.log(t,"t");
                        var o, e = t.price,
                            a = t.variants.available;
                        console.log(a), null == a && (a = t.available), 0 == a ? (J("button#" + r[s]).text(w), J("button#" + r[s]).addClass("z_w_soldout")) : (J("button#" + r[s]).text(c), J("button#" + r[s]).removeClass("z_w_soldout")), e = (e /= 100).toFixed(2), "jens-gullsmidur.myshopify.com" == z && (e *= 100), "hello-sasha.myshopify.com" == z ? e += b : e = b + e, J("#ZoomyWishlistPageGrid-" + r[s] + " .zbodytitle").after("<span class='zprice' style='float:left; width:100%;'>" + e + "</span>"), J("#ZoomyWishlistPageGrid-" + r[s] + " .zbodytitle").after("<span class='sku'>#" + t.variants[0].sku + "</span>"), J(t.variants).each(function(t, o) {
                            var e = o.title;
                            vimg = null == o.featured_image ? "" : o.featured_image.src, J("#zooomyshopvariant-" + r[s]).append(`<option data-sku="${o.sku}" id="${o.id}" data-id="${o.id}" value="${o.title}" data-image="${vimg}" data-price="${o.price}" data-available="${o.available}">${o.title}</option>`), "Default Title" == e && J("#ZoomyWishlistPage #ZoomyWishlistPageGrid-" + r[s] + " .zoptionbox").hide();
                            e = J("#zooomyshopvariant-" + r[s]), e.find("option:selected").text();
                            "false" == e.find("option:selected").attr("data-available") ? (J("button#" + r[s]).text(w), J("button#" + r[s]).addClass("z_w_soldout")) : (J("button#" + r[s]).text(c), J("button#" + r[s]).removeClass("z_w_soldout"))
                        }), G[s] = G[s].trim(), "" != G[s] && (J("#zooomyshopvariant-" + r[s]).val(G[s]), (o = J("#zooomyshopvariant-" + r[s])).find("option:selected").text(), a = o.find("option:selected").attr("data-image"), e = o.find("option:selected").attr("data-price"), "false" == (o = o.find("option:selected").attr("data-available")) ? (J("button#" + r[s]).text(w), J("button#" + r[s]).addClass("z_w_soldout")) : (J("button#" + r[s]).text(c), J("button#" + r[s]).removeClass("z_w_soldout")), "" != a && J("#ZoomyWishlistPageGrid-" + r[s] + " .zbodypimg img").attr("src", a), e = (e /= 100).toFixed(2), "hello-sasha.myshopify.com" == z ? e += b : e = b + e, null == e || "$NaN" == e || J("#ZoomyWishlistPageGrid-" + r[s] + " .zprice").replaceWith("<span class='zprice'>" + e + "</span>"), o || J("#ZoomyWishlistPageGrid-" + r[s] + " .zavailable").replaceWith("<span class='zavailable' style='float: left; width: 100%;'>" + o + "</span>")), "" == G[s] && J("#zooomyshopvariant-" + r[s]).val(t.variants[0].title), J("#zooomyshopvariant-" + r[s] + "  option").each(function() {
                            "Default Title" == this.value && J("#zooomyshopvariant-" + r[s]).val("Default Title")
                        }), J("#ZoomyWishlistPageGrid-" + r[s]).change(function() {
                            var t = J("#zooomyshopvariant-" + r[s]),
                                o = t.find("option:selected").text(),
                                e = t.find("option:selected").attr("data-image"),
                                a = t.find("option:selected").attr("data-price"),
                                i = t.find("option:selected").attr("data-available"),
                                sku = t.find("option:selected").attr("data-sku"),
                                t = t.find("option:selected").attr("data-id");
                            "false" == i ? (J("button#" + r[s]).text(w), J("button#" + r[s]).addClass("z_w_soldout")) : (J("button#" + r[s]).text(c), J("button#" + r[s]).removeClass("z_w_soldout")), a = (a /= 100).toFixed(2), "hello-sasha.myshopify.com" == z ? a += b : a = b + a, "" != e && J("#ZoomyWishlistPageGrid-" + r[s] + " .zbodypimg img").attr("src", e), J("#ZoomyWishlistPageGrid-" + r[s] + " .zprice").replaceWith("<span class='zprice'>" + a + "</span>"), console.log(r[s]), J("#ZoomyWishlistPageGrid-" + r[s] + " .skue").innerHTML=`<span class="zsku">${sku}</span>`, J("#ZoomyWishlistPageGrid-" + r[s] + " .zavailable").replaceWith("<span class='zavailable' style='float: left; width: 100%;'>" + i + "</span>"), "yes" == E && J.ajax({
                                url: "https://zooomyapps.com/wishlist/ZooomySaveDataWishlist.php",
                                data: {
                                    shop: B,
                                    productid: r[s],
                                    customerid: M,
                                    vid: t,
                                    vname: o,
                                    vprice: a
                                },
                                dataType: "jsonp",
                                jsonp: "savemydata",
                                async: "true",
                                success: function(t) {
                                    J("#ZoomyWishlistPageGrid-" + r[s] + " .zoptionbox").append("<p class='zsavdatamsg' style='font-size: 12px;  position: absolute; text-align: center; width: 100%; margin: 0; padding: 0; box-sizing: border-box; left: 4px;'>" + t.datasaved + "</p>"), setTimeout(function() {
                                        J(".zsavdatamsg").fadeOut("slow")
                                    }, 350)
                                }
                            })
                        }), J("#ZoomyWishlistPageGrid-" + r[s] + " .addcartbtn").click(function() {
                            var t = J("#zooomyshopvariant-" + r[s]);
                            "" == t.find("option:selected").text() && alert("Please select value from dropdown");
                            t.find("option:selected").attr("data-image"), J(this).attr("data-pro-id");
                            var o, e = t.find("option:selected").attr("data-id"),
                                a = J("#zqtyn-" + r[s]),
                                i = (a.find("option:selected").text(), a.val());
                            null == e && (e = r[s]), o = r[s], t = customeremail, a = M, null == localStorage.getItem("ZwishlistPageEmail") || "" == localStorage.getItem("ZwishlistPageEmail") || localStorage.getItem("ZwishlistPageEmail"), localStorage.setItem("ZwishlistPageEmail", t), null == localStorage.getItem("ZwishlistPageid") || "" == localStorage.getItem("ZwishlistPageid") || localStorage.getItem("ZwishlistPageId"), localStorage.setItem("ZwishlistPageId", a), o = null == localStorage.getItem("ZwishlistpageproIds") ? o : -1 < (a = localStorage.getItem("ZwishlistpageproIds")).indexOf(o) ? o : a + "," + o, localStorage.setItem("ZwishlistpageproIds", o), J.ajax({
                                type: "POST",
                                url: "/cart/add.js",
                                dataType: "json",
                                data: {
                                    quantity: i,
                                    id: e
                                },
                                success: function(t) {
                                    J.getJSON("/cart.js", function(t) {
                                        var o;
                                        "true" == _ ? (o = r[s], L = L.filter(t => t.product_id != o), J(".zooomyaddtowishlistmsg").append('<span id="zooomyitemadded"><a href=' + l + ">" + n.open_cart_text + "</a></span>"), J("#zooomyitemadded").each(function() {
                                            J('[id="' + this.id + '"]:gt(0)').remove()
                                        }), J.ajax({
                                            url: "https://zooomyapps.com/wishlist/RemoveFromWishlist.php",
                                            data: {
                                                shop: B,
                                                productid: o,
                                                customerid: M,
                                                addtocart: "yes"
                                            },
                                            dataType: "jsonp",
                                            jsonp: "mylinkprocode",
                                            async: "true",
                                            success: function(t) {
                                                pid = t.productid, J("#ZoomyWishlistPageGrid-" + pid).remove(), J("#ZoomyWishlistPagecol-" + pid).remove()
                                            }
                                        }), Q = JSON.stringify(L), "yes" == n.refresh_cart && location.reload(), localStorage.setItem("myzooomy__wishlist", Q), J("#zooomy-wishlist-counter").length && (document.getElementById("zooomy-wishlist-counter").innerHTML = J(".ZoomyWishlistPageGrid").length - 1)) : (J("button#" + r[s]).replaceWith('<button id="' + r[s] + '" class="zooomybtn addcartbtn zopencartlink" value=""><a href="' + l + '" style="color:' + m + '">' + n.open_cart_text + "</a></button>"), "yes" == n.refresh_cart && location.reload())
                                    })
                                }
                            })
                        })
                    },
                    error: function(t) {
                        J("#ZoomyWishlistPage #ZoomyWishlistPageGrid-" + r[s]).hide()
                    }
                })
            }), J(".removefromwishlist").click(function() {
                var o = J(this).val();
                L = L.filter(t => t.product_id != o), J.ajax({
                    url: "https://zooomyapps.com/wishlist/RemoveFromWishlist.php",
                    data: {
                        shop: B,
                        productid: o,
                        customerid: M
                    },
                    dataType: "jsonp",
                    jsonp: "mylinkprocode",
                    async: "true",
                    success: function(t) {
                        pid = t.productid, J("#ZoomyWishlistPageGrid-" + pid).remove(), J("#ZoomyWishlistPagecol-" + pid).remove()
                    }
                }), Q = JSON.stringify(L), localStorage.setItem("myzooomy__wishlist", Q), J("#zooomy-wishlist-counter").length && (document.getElementById("zooomy-wishlist-counter").innerHTML = J(".ZoomyWishlistPageGrid").length - 1)
            }), J("#emailzwishlist").click(function() {
                J("#zemaildata").slideToggle("100")
            }), J("#zsendemail").click(function() {
                var t = J("#zemailid").val(),
                    o = J("#zemailname").val(),
                    e = J("#zemailmsg").val();
                "" == o && J("#zemaildata form").prepend("<span style='float:left;width:100%;padding:2px 0px;' class='zaddwsubject'>Add Subject.</span>"), "" == t && J("#zemaildata form").prepend("<span style='float:left;width:100%;padding:2px 0px;' class='zaddwemail'>Add Email address.</span>"), "" != t && "" != o && (J.ajax({
                    url: "https://zooomyapps.com/wishlist/ZooomyEmailList.php?shop=" + B + "&getcusid=" + M + "&zemailid=" + t,
                    data: {
                        shop: B,
                        getcusid: M,
                        zemailid: t,
                        zemailname: o,
                        zemailmsg: e
                    },
                    dataType: "jsonp",
                    jsonp: "jsonDataCode",
                    async: "true",
                    success: function(t) {
                        t.emailed
                    }
                }), J("#zemaildata").slideToggle("100"), J("#emailzwishlist").before("<span class='emailsentz'>Email has been sent</span>"))
            }), J(".zooomylink_fa").click(function() {
                J("#zooomycopytxtarea").fadeIn(1e3), setTimeout(function() {
                    J("#zooomycopytxtarea").fadeOut(400)
                }, 15e3)
            }), "false" != x && "" != M || J("#zooomyemailfbtn").on("mouseover", function() {}), 25236 < n.shop_id && (J("<style>.zooomywishlistgridclass img { width: 100%; }a#emailzwishlist { display: none; }.zooomywishlistgridclass  .ZoomyWishlistPageGrid span.zooomybtn, .zopencartlink {border-radius:0px; margin: 10px auto;  float: left;width: 100%;}.ZoomyWishlistPageGrid span.zooomybtn { margin: 2px 0 0!important; }.ZoomyWishlistPageGrid span.zooomybtn { margin: 2px 0 0!important; text-align: center; cursor: pointer; font-family: inherit; font-weight: normal; font-style: normal; font-size: 15px; padding: 10px; text-transform: uppercase; letter-spacing: 3px;} .Product__QuickNav{clear: both;}.z_social_share_wishlist { float: none; width: 212px; margin: 0 auto; }a#emailzwishlist { display: none; }.zooomy__hhrt{display:none;}.zooomybtn.removefromwishlist.zremovefromwish{min-width:0;}.z_social_share_wishlist a, #ZoomyWishlistPage a { font-size: 15px; }.zbodyaction .zopencartlink { padding: 10px 10px; font-family: inherit; font-size: 15px; font-weight: normal; height: auto; }.ZoomyWishlistPageGrid span.zooomybtn, .zopencartlink { padding: 9px 20px; font-family: inherit; letter-spacing: 0; text-transform: inherit;}.zooomyshopvariant{width:100%;}#ZoomyWishlistPage a.zmsg { color: #000; margin-bottom: 40px; }.template-page .rte.reading-width { max-width: 100%; }.zooomywishlistgridclass .ZoomyWishlistPageGrid .zbodyaction span.zooomybtn { padding: 10px 10px; width: 100%; float: left; }div#shopify-section-framework--footer { clear: both; }.zooomywishlistlistclass .zbodyaction .zopencartlink { width: auto; }</style>").appendTo("body"), "list" == f && J("<style>.zooomywishlistgridclass .ZoomyWishlistPageGrid span.zooomybtn, .zopencartlink { width: auto; margin: 0 10px; float: none; padding-top:9px;}</style>").appendTo("body")), J("<style>" + o + "</style>").appendTo("body"), numItems = J(".ZoomyWishlistPageGrid").length, J(".zooomyIconval").length && 0 < numItems && J(".zooomyIconval i.fa").addClass("fa-heart").removeClass("fa-heart-o"), J("#zooomy-wishlist-counter").length && setTimeout(function() {
                $("#zooomy-wishlist-counter").is(":empty") && (document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>" + numItems + "</span>")
            }, 200)
        }
    })
}

function reqJqueryList() {
    var t, o;
    console.log("..2..."), "undefined" == typeof jQuery || !jQuery || 1 === parseInt(jQuery.fn.jquery) && parseFloat(jQuery.fn.jquery.replace(/^1\./, "")) < 10 ? (t = document.getElementsByTagName("head")[0], (o = document.createElement("script")).src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", o.type = "text/javascript", o.onload = o.onreadystatechange = function() {
        o.readyState ? "complete" !== o.readyState && "loaded" !== o.readyState || (o.onreadystatechange = null, ZooomyDataFun(jQuery.noConflict(!0), shop, customerid)) : ZooomyDataFun(jQuery.noConflict(!0), shop, customerid)
    }, t.appendChild(o)) : ZooomyDataFun(jQuery, shop, customerid)
}
reqJqueryList(), console.log("...3...");