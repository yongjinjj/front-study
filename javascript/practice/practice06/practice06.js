
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

function changeLink(url){

    //url 주소안에 :// 있는가?
    //console.log(url.includes('://'));  //true false
    //console.log(url.indexOf("://"));  // 있으면 index, 없으면 -1
    if(url.includes('://') == false){

    }
    if(url.indexOf("://") == -1){
        return "경로가 잘못되었습니다.";
    }

    //console.log(url.substring(url.indexOf("://") + 3));

    // https    url.includes('https')   htt://aosdijfoiasdf.https.dfijod
    // http     url.includes('http')

    // 첫 시작 5글자 : https    https://
    // 첫 시작 4글자 : http     http://
    // 첫 시작 5글자 : http:
    //console.log(url.substring(0, 5));
    
    /*
    if(url.substring(0, 5) == 'https'){
        return "https://" + "secure." + url.substring(url.indexOf("://") + 3);
    }
    if(url.substring(0, 5) == 'http:'){
        return "https://" + "open." + url.substring(url.indexOf("://") + 3);
    }
    */

    let splitUrl = url.split("://");  // https human.or.kr
    //console.log(splitUrl);
    if(splitUrl[0] == 'https'){
        return splitUrl[0] + "://secure." + splitUrl[1];
    } else {
        return splitUrl[0] + "s://open." + splitUrl[1];
        //      http://open.주소
        //      https://open.주소
    }
}

// https:// + scure. +  human.or.kr
// https:// + open. +  human.or.kr

//http 로 접속 -> 경로 https 수정 -> https://human.or.kr
//http://abc-mart.co.kr -> https://open.abc-mart.co.kr
// HTTP (Hyper Text Transfer Protocol)
// HTTPS (Hyper Text Transfer Protocol over Secure Socket Layer)
/*
    출력결과가 알맞게 나오도록 코드를 추가하세요.

    조건1. :// 형식이 없으면 경로가 잘못되었습니다.
    조건2. https로 접속시 secure가 추가됨
            https://secure.human.or.kr
    조건3. http 로 접속시 open이 추가됨
            https://open.human.or.kr
            http://open.human.or.kr
*/

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));