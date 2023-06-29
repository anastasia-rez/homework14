
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';


let rates = await fetch(url);
    rates = await rates.json();

    console.log(rates);

    const dkkRate = rates[4].rate;
    const usdRate = rates[24].rate;
    const sekRate = rates[20].rate;
    const eurRate = rates[31].rate;
    const hufRate = rates[6].rate;
    const mxnRate = rates[13].rate;
    const chfRate = rates[21].rate;




    let dkkTag = document.getElementsByClassName('dkk');

    for(let tag of dkkTag){
        let dkkPrice = tag.innerHTML;
        let dkkNum = parseInt(dkkPrice.match(/\d+/));

        dkkPrice = Math.floor(dkkNum * dkkRate);
        tag.innerHTML = `₴ ${dkkPrice}`;

        console.log(dkkNum);
    }



    let usdTag = document.getElementsByClassName('usd');

    for(let tag of usdTag){
        let usdPrice = tag.innerHTML;
        let usdNum = parseInt(usdPrice.match(/\d+/));

        usdPrice = Math.floor(usdNum * usdRate);
        tag.innerHTML = `₴ ${usdPrice}`;

        console.log(usdNum);
    }



    let sekTag = document.getElementsByClassName('sek');

    for(let tag of sekTag){
        let sekPrice = tag.innerHTML;
        let sekNum = parseInt(sekPrice.match(/\d+/));

        sekPrice = Math.floor(sekNum * sekRate);
        tag.innerHTML = `₴ ${sekPrice}`;

        console.log(sekNum);
    }




    let eurTag = document.getElementsByClassName('eur');

    for(let tag of eurTag){
        let eurPrice = tag.innerHTML;
        let eurNum = parseInt(eurPrice.match(/\d+/));

        eurPrice = Math.floor(eurNum * eurRate);
        tag.innerHTML = `₴ ${eurPrice}`;

        console.log(eurNum);
    }


    let hufTag = document.getElementsByClassName('huf');

    for(let tag of hufTag){
        let hufPrice = tag.innerHTML;
        let hufNum = parseInt(hufPrice.match(/\d+/));

        hufPrice = Math.floor(hufNum * hufRate);
        tag.innerHTML = `₴ ${hufPrice}`;

        console.log(hufNum);
    }




    let mxnTag = document.getElementsByClassName('mxn');

    for(let tag of mxnTag){
        let mxnPrice = tag.innerHTML;
        let mxnNum = parseInt(mxnPrice.match(/\d+/));

        mxnPrice = Math.floor(mxnNum * mxnRate);
        tag.innerHTML = `₴ ${mxnPrice}`;

        console.log(mxnNum);
    }



    let chfTag = document.getElementsByClassName('chf');

    for(let tag of chfTag){
        let chfPrice = tag.innerHTML;
        let chfNum = parseInt(chfPrice.match(/\d+/));

        chfPrice = Math.floor(chfNum * chfRate);
        tag.innerHTML = `₴ ${chfPrice}`;

        console.log(chfNum);
    }

