import React,{useEffect} from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import config from '../../../config'
import extractProductIdFromAmazonUrl from './getProductId'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'

const BookmarkFile = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('u')


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
        var BL_URL = "http://localhost:5173/js/add_reg_item.js?loc=" + encodeURIComponent(loc) + "&t=" + encodeURIComponent(doc.title);
        if(typeof scriptElem !== 'undefined') {
            scriptElem.remove();
        }
        var scriptElem = document.createElement("script");

        function redirect() {
            loc.href = BL_URL;
        }

        function init() {
            console.log("document", doc)
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
        console.log("script", typeof scriptElem)
        if (typeof scriptElem != "object") {
            redirect();
        } else {
            init();
        }
    }
    const mutation=useMutation((formdata)=>axios.post(`${config.apiUrl}/api/test/bookmark`,{productId:formdata?.productId}),{
        onSuccess:(data)=>{
            console.log("==>",data)
        },
        onError:(err)=>{
            conosle.log(err?.message)
        }
    })

    
    useEffect(() => {
        console.log("url",url)
      if(url){
        const productId=extractProductIdFromAmazonUrl(url)
        console.log("MY product id",productId,url)
        mutation.mutate({productId:productId})

      }
    
     
    }, [url])
    

  return (
    <div className='container d-flex justify-content-center align-items-center ' style={{ height: '100vh', width: "100%" }}>
            {window.location.origin.includes('localhost') ?
                <a href={`javascript:var loc=window.location,doc=window.document,BL_URL="http://localhost:5173/js/add_reg_item.js?loc="+encodeURIComponent(loc)+"&t="+encodeURIComponent(doc.title);void 0!==scriptElem&&scriptElem.remove();var scriptElem=document.createElement("script");function redirect(){loc.href=BL_URL}function init(){if(console.log("document",doc),doc.readyState&&"complete"!=doc.readyState&&"interactive"!=doc.readyState)return setTimeout(init,200);scriptElem.setAttribute("id","trybookmark"),scriptElem.setAttribute("type","text/javascript"),scriptElem.setAttribute("charset","UTF-8"),scriptElem.setAttribute("src",BL_URL),doc.body.appendChild(scriptElem),scriptElem.addEventListener("error",redirect),scriptElem.addEventListener("load",console.log)}console.log("script",typeof scriptElem),"object"!=typeof scriptElem?redirect():init();`}>
                    <button className='btn btn-danger'>Gyfties local </button>
                </a> :
                <a href={`javascript:var loc=window.location,doc=window.document,BL_URL="${window.location.origin}/js/add_reg_item_live.js?loc="+encodeURIComponent(loc)+"&t="+encodeURIComponent(doc.title);void 0!==scriptElem&&scriptElem.remove();var scriptElem=document.createElement("script");function redirect(){loc.href=BL_URL}function init(){if(console.log("document",doc),doc.readyState&&"complete"!=doc.readyState&&"interactive"!=doc.readyState)return setTimeout(init,200);scriptElem.setAttribute("id","trybookmark"),scriptElem.setAttribute("type","text/javascript"),scriptElem.setAttribute("charset","UTF-8"),scriptElem.setAttribute("src",BL_URL),doc.body.appendChild(scriptElem),scriptElem.addEventListener("error",redirect),scriptElem.addEventListener("load",console.log)}console.log("script",typeof scriptElem),"object"!=typeof scriptElem?redirect():init();`}>
                    <button className='btn btn-danger'>Gyfties</button>
                </a>
            }
        </div>
  )
}

export default BookmarkFile