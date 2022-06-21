
fetch('https://api.coincap.io/v2/assets')
.then (function (res) {
  return res.json();
})
.then (function (data){
  let file = data.data;
  file.forEach(function (list){  
    table_row(list);
  })
});
  

  let table = document.querySelector('.table-body');
  var moneyFormatter  = new Intl.NumberFormat();

  function table_row (row){
    console.log(table_row);
        let table_container = document.createElement('div');
        table_container.classList.add("main-container", "auto");
        let container = document.createElement('div');
        container.classList.add("table-container","auto");
        container.setAttribute('id','table-container');
        let rank_container = document.createElement('div');
        rank_container.classList.add("rank-container");
        rank_container.setAttribute('id','rank-container');
        let rank = document.createElement('div');
        rank.classList.add("rank");
        rank.textContent = row.rank;
        let logo_container = document.createElement('div');
        logo_container.classList.add("table-logo-container");
        logo_container.setAttribute('id','table-logo-container');
        let name_container = document.createElement('div');
        name_container.classList.add("name-container");
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.setAttribute('id','underline-link');
        let symbol = document.createElement('div');
        symbol.classList.add("symbol" , "table-same-width");
        symbol.textContent = row.symbol;
        let icon = symbol.textContent;
        icon = icon.toLowerCase();
        let image = document.createElement('img');
        image.setAttribute("src" ,`https://assets.coincap.io/assets/icons/${icon}@2x.png` );
        image.setAttribute("width" , "28px");
        let name = document.createElement('div');
        name.textContent = row.name;
        let price_container = document.createElement('div');
        price_container.classList.add("price-container","flex");
        price_container.setAttribute('id','price-container');
        let price = document.createElement('div');
        price.textContent = moneyFormatter.format(Math.floor(row.priceUsd))+ ("$");
        price.classList.add("price" , "table-same-width");
        let marketcap = document.createElement('div');
        marketcap.textContent = row.marketCapUsd ;
        marketcap.classList.add("marketcap" , "table-same-width");
        let market_number = marketcap.textContent;
        market_number = numeral(market_number).format("$0,0.00a");
        marketcap.textContent = market_number;
        let supply = document.createElement('div');
        supply.classList.add("supply" , "table-same-width");
        supply.textContent = row.supply;
        let supply_number = supply.textContent;
        supply_number = numeral(supply_number).format("$0,0.00a");
        supply.textContent = supply_number;
        let Vwap = document.createElement('div');
        Vwap.classList.add("Vwap" , "table-same-width");
        Vwap.textContent = row.vwap24Hr;
        let vwap = Vwap.textContent;
         vwap = numeral(vwap).format("$0,0.00a");
         Vwap.textContent = vwap;
        let volume = document.createElement('div');
        volume.classList.add("volume" , "table-same-width");
        volume.textContent = row.volumeUsd24Hr;
        let Volume = Vwap.textContent;
        Volume = numeral(Volume).format("$0,0.00a");
         volume.textContent = Volume;
        let per24hour = document.createElement('div');
        per24hour.classList.add("perhour" , "table-same-width");
        per24hour.textContent = moneyFormatter.format(row.changePercent24Hr) + ("%");
        
        table.appendChild(table_container);
        table_container.appendChild(container);
        container.appendChild(rank_container);
        rank_container.appendChild(rank);
        rank_container.appendChild(logo_container);
        logo_container.appendChild(image);
        logo_container.appendChild(name_container);
        name_container.appendChild(link);
        link.appendChild(name);
        link.appendChild(symbol);
        container.appendChild(price_container);
        price_container.appendChild(price);
        price_container.appendChild(marketcap);
        price_container.appendChild(Vwap);
        price_container.appendChild(supply);
        price_container.appendChild(volume);
        price_container.appendChild(per24hour);
        
        };



  
  const hamburger = document.querySelector(".hamburger");
  const asidebar = document.querySelector(".asidebar");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    asidebar.classList.toggle("active");
    
  });


   const close_button = document.querySelector('.close-button');
   const ad = document.querySelector('.advertisement');
   close_button.addEventListener('click', () =>{
    close_button.classList.add("active");
    ad.classList.add("active");
   });



   

 
  