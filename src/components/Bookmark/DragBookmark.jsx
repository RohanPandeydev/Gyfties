import React, { useEffect } from "react";
// import logo from '/assets/images/logo.png'
const DragBookmark = () => {
  function bookmark() {
    var au = "${window.location.origin}/bookmark",
      w = window,
      cu = w.location,
      cw = w.document,
      ws = w.screen,
      wi = ws.width / 2,
      h = ws.height / 2,
      o = "top=" + h / 2 + ",left=" + wi / 2 + ",width=" + wi + ",height=" + h;
    window.open(au + "?u=" + encodeURIComponent(cu.href), cw.title, o);
  }

  function trybookmark() {
    var loc = window.location;
    var doc = window.document;
    var BL_URL =
      "http://localhost:5173/js/add_reg_item.js?loc=" +
      encodeURIComponent(loc) +
      "&t=" +
      encodeURIComponent(doc.title);
    if (typeof scriptElem !== "undefined") {
      scriptElem.remove();
    }
    var scriptElem = document.createElement("script");

    function redirect() {
      loc.href = BL_URL;
    }

    function init() {
      console.log("document", doc);
      if (
        doc["readyState"] &&
        doc["readyState"] != "complete" &&
        doc["readyState"] != "interactive"
      ) {
        return setTimeout(init, 200);
      }
      scriptElem.setAttribute("id", "trybookmark");
      scriptElem.setAttribute("type", "text/javascript");
      scriptElem.setAttribute("charset", "UTF-8");
      scriptElem.setAttribute("src", BL_URL);
      doc.body.appendChild(scriptElem);
      scriptElem.addEventListener("error", redirect);
      scriptElem.addEventListener("load", console.log);
    }
    console.log("script", typeof scriptElem);
    if (typeof scriptElem != "object") {
      redirect();
    } else {
      init();
    }
  }

  return (
    <section className="bookomarks-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="BookMain-box">
              <div className="BookTitle-box">
                <h2 className="">the gyfties button lets you add items to your wishlist from any store!</h2>
                <p>Drag the button below to your Bookmarks bar to get started.</p>
              </div>
              <div className="">
                {window.location.origin.includes("localhost") ? (
                  <div className="position-relative">
                    <a
                      href={`javascript:var loc=window.location,doc=window.document,BL_URL="http://localhost:5173/js/add_reg_item.js?loc="+encodeURIComponent(loc)+"&t="+encodeURIComponent(doc.title);void 0!==scriptElem&&scriptElem.remove();var scriptElem=document.createElement("script");function redirect(){loc.href=BL_URL}function init(){if(console.log("document",doc),doc.readyState&&"complete"!=doc.readyState&&"interactive"!=doc.readyState)return setTimeout(init,200);scriptElem.setAttribute("id","trybookmark"),scriptElem.setAttribute("type","text/javascript"),scriptElem.setAttribute("charset","UTF-8"),scriptElem.setAttribute("src",BL_URL),doc.body.appendChild(scriptElem),scriptElem.addEventListener("error",redirect),scriptElem.addEventListener("load",console.log)}console.log("script",typeof scriptElem),"object"!=typeof scriptElem?redirect():init();`}
                    >
                      <button className="btn btn-danger"><i className="fa fa-heart"></i> Add to Gyfties Local  </button>
                    </a>
                    <div className="DragTxt">
                      <i class="fa-solid fa-turn-up"></i>
                      <span>Drag me up</span>
                    </div>
                  </div>
                ) : (
                  <div className="position-relative">
                    <a
                      href={`javascript:var loc=window.location,doc=window.document,BL_URL="${window.location.origin}/js/add_reg_item_live.js?loc="+encodeURIComponent(loc)+"&t="+encodeURIComponent(doc.title);void 0!==scriptElem&&scriptElem.remove();var scriptElem=document.createElement("script");function redirect(){loc.href=BL_URL}function init(){if(console.log("document",doc),doc.readyState&&"complete"!=doc.readyState&&"interactive"!=doc.readyState)return setTimeout(init,200);scriptElem.setAttribute("id","trybookmark"),scriptElem.setAttribute("type","text/javascript"),scriptElem.setAttribute("charset","UTF-8"),scriptElem.setAttribute("src",BL_URL),doc.body.appendChild(scriptElem),scriptElem.addEventListener("error",redirect),scriptElem.addEventListener("load",console.log)}console.log("script",typeof scriptElem),"object"!=typeof scriptElem?redirect():init();`}
                    >
                      <button className="btn btn-danger"><i className="fa fa-heart"></i> Add to Gyfties</button>
                    </a>
                    <div className="DragTxt">
                      <i class="fa-solid fa-turn-up"></i>
                      <span>Drag me up</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <ul className="BookMain-list">
              <li>Make sure your bookmarks bar is visible
                <div className="">
                  <p>Check that your browser's favorites bar is showing.</p>
                </div>
              </li>
              <li>Click and drag the Add to Gyfties button to your Bookmarks bar
                <div className="BookGif-box">
                  <img src="/assets/images/addtoBrowser.png" alt="" className="img-fluid" />
                </div>
              </li>
              <li>New try is Out
                <div className="">
                  <p>visit <a target="_sb" href="https://www.amazon.com/dp/B07BB5FDS2?ref=cm_sw_r_cso_wa_apin_dp_DR6682522YQN7B10DPEP&ref_=cm_sw_r_cso_wa_apin_dp_DR6682522YQN7B10DPEP&social_share=cm_sw_r_cso_wa_apin_dp_DR6682522YQN7B10DPEP&starsLeft=1&skipTwisterOG=1&th=1">KODAK Printomatic Full-Color Instant Print Digital Camera on Amazon and click your new Gyfties button.</a></p>
                  <h6>Need help? <a href="javascript:void(0)">Email us</a></h6>
                  <h6>other option:</h6>
                  <ul>
                    <li>Get the Gyfties Button for other browser :
                      <a href="javascript:void(0)">Chrome</a>, <a href="javascript:void(0)">Firefox</a>, <a href="javascript:void(0)">Safari</a>, <a href="javascript:void(0)">internet Explorer</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DragBookmark;
