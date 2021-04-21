
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

    const header = document.createElement("div");
    header.id="header";
    header.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Coin</h3>
                </div>
                <div class="col">
                    <h2></h2>
                </div>
                <div class="col">
                    <h3>Current Price</h3>
                </div>
                <div class="col">
                    <h3>24 hour change</h3>
                </div>
            </div>
        </div>
        <br>
    `;
    document.body.appendChild(header);

    if(btc.checked){
        const btcdata = document.createElement("div");
        btcdata.id="btcdata"
    
        btcdata.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="${data[0].image.small}">
                    </div>
                    <div class="col">
                        <h2>Bitcoin</h2>
                    </div>
                    <div class="col">
                        <p>${data[0].market_data.current_price.usd}</p>
                    </div>
                    <div class="col">
                        <p>${data[0].market_data.price_change_percentage_24h}%</p>
                    </div>
                </div>
            </div>
            <br>
        `;
        document.body.appendChild(btcdata);
       
    }

    if(eth.checked) {
        const ethdata = document.createElement("div");
        ethdata.id = "ethdata";
    
        ethdata.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="${data[1].image.small}">
                    </div>
                    <div class="col">
                        <h2>Ethereum</h2>
                    </div>
                    <div class="col">
                        <p>${data[1].market_data.current_price.usd}</p>
                    </div>
                    <div class="col">
                        <p>${data[1].market_data.price_change_percentage_24h}%</p>
                    </div>
                </div>
            </div>
            <br>
        `;
        document.body.appendChild(ethdata);
    }

    if (bnb.checked){
        const bnbdata = document.createElement("div");
        bnbdata.id = "bnbdata";
    
        bnbdata.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="${data[2].image.small}">
                    </div>
                    <div class="col">
                        <h2>Binance Coin</h2>
                    </div>
                    <div class="col">
                        <p>${data[2].market_data.current_price.usd}</p>
                    </div>
                    <div class="col">
                        <p>${data[2].market_data.price_change_percentage_24h}%</p>
                    </div>
                </div>
            </div>
            <br>
        `;
        document.body.appendChild(bnbdata);
    }

    if (xrp.checked){
        const xrpdata = document.createElement("div");
            xrpdata.id = "xrpdata";
        
            xrpdata.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src="${data[3].image.small}">
                        </div>
                        <div class="col">
                            <h2>Ripple</h2>
                        </div>
                        <div class="col">
                            <p>${data[3].market_data.current_price.usd}</p>
                        </div>
                        <div class="col">
                            <p>${data[3].market_data.price_change_percentage_24h}%</p>
                        </div>
                    </div>
                </div>
                <br>
            `;
            document.body.appendChild(xrpdata);
    }

    if (doge.checked){
        const dogedata = document.createElement("div");
            dogedata.id = "dogedata";
        
            dogedata.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src="${data[6].image.small}">
                        </div>
                        <div class="col">
                            <h2>Dogecoin</h2>
                        </div>
                        <div class="col">
                            <p>${data[6].market_data.current_price.usd}</p>
                        </div>
                        <div class="col">
                            <p>${data[6].market_data.price_change_percentage_24h}%</p>
                        </div>
                    </div>
                </div>
                <br>
            `;
            document.body.appendChild(dogedata);
    }

    if (link.checked){
        const linkdata = document.createElement("div");
            linkdata.id = "linkdata";
        
            linkdata.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src="${data[11].image.small}">
                        </div>
                        <div class="col">
                            <h2>Chainlink</h2>
                        </div>
                        <div class="col">
                            <p>${data[11].market_data.current_price.usd}</p>
                        </div>
                        <div class="col">
                            <p>${data[11].market_data.price_change_percentage_24h}%</p>
                        </div>
                    </div>
                </div>
                <br>
            `;
            document.body.appendChild(linkdata);
    }
    
}

