
const button = document.getElementById("databtn");
const info = document.getElementById("info");
const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const bnb = document.getElementById("bnb");
const xrp = document.getElementById("xrp");
const doge = document.getElementById("doge");
const link = document.getElementById("link");

button.addEventListener("click", () => {
   fetchPrices();
});

async function fetchPrices() {
    const resp = await fetch('https://api.coingecko.com/api/v3/coins/');
    const data = await resp.json();

    console.log(data);

    if(btc.checked){
        const btcdata = document.createElement("div");
        btcdata.id = "btcdata";
    
        btcdata.innerHTML = `
            <div class="btcdata-header">
                <img src="${data[0].image.small}">
                <h2>Bitcoin</h2>
            </div>
            <div class="btcdata-body">
                <p>Current Price: ${data[0].market_data.current_price.usd}</p>
                <p>24 hour change: ${data[0].market_data.price_change_percentage_24h}%</p>
            </div>
        `;
        document.body.appendChild(btcdata);
    }

    if(eth.checked) {
        const ethdata = document.createElement("div");
        ethdata.id = "ethdata";
    
        ethdata.innerHTML = `
            <div class="ethdata-header">
                <img src="${data[1].image.small}">
                <h2>Ethereum</h2>
            </div>
            <div class="ethdata-body">
                <p>Current Price: ${data[1].market_data.current_price.usd}</p>
                <p>24 hour change: ${data[1].market_data.price_change_percentage_24h}%</p>
            </div>
            `;
        document.body.appendChild(ethdata);
    }

    if (bnb.checked){
        const bnbdata = document.createElement("div");
        bnbdata.id = "bnbdata";
    
        bnbdata.innerHTML = `
            <div class="bnbdata-header">
                <img src="${data[2].image.small}">
                <h2>Binance Coin</h2>
            </div>
            <div class="bnbdata-body">
                <p>Current Price: ${data[2].market_data.current_price.usd}</p>
                <p>24 hour change: ${data[2].market_data.price_change_percentage_24h}%</p>
            </div>
            `;
        document.body.appendChild(bnbdata);
    }

    if (xrp.checked){
        const xrpdata = document.createElement("div");
            xrpdata.id = "xrpdata";
        
            xrpdata.innerHTML = `
                <div class="xrpdata-header">
                    <img src="${data[3].image.small}">
                    <h2>Ripple</h2>
                </div>
                <div class="xrpdata-body">
                    <p>Current Price: ${data[3].market_data.current_price.usd}</p>
                    <p>24 hour change: ${data[3].market_data.price_change_percentage_24h}%</p>
                </div>
            `;
            document.body.appendChild(xrpdata);
    }

    if (doge.checked){
        const dogedata = document.createElement("div");
            dogedata.id = "dogedata";
        
            dogedata.innerHTML = `
                <div class="dogedata-header">
                    <img src="${data[4].image.small}">
                    <h2>Dogecoin</h2>
                </div>
                <div class="dogedata-body">
                    <p>Current Price: ${data[4].market_data.current_price.usd}</p>
                    <p>24 hour change: ${data[4].market_data.price_change_percentage_24h}%</p>
                </div>
            `;
            document.body.appendChild(dogedata);
    }

    if (link.checked){
        const linkdata = document.createElement("div");
            linkdata.id = "linkdata";
        
            linkdata.innerHTML = `
                <div class="linkdata-header">
                    <img src="${data[12].image.small}">
                    <h2>Chainlink</h2>
                </div>
                <div class="linkdata-body">
                    <p>Current Price: ${data[12].market_data.current_price.usd}</p>
                    <p>24 hour change: ${data[12].market_data.price_change_percentage_24h}%</p>
                </div>
            `;
            document.body.appendChild(linkdata);
    }
    
}

