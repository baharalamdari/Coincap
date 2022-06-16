
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
        container.classList.add("table-container","flex","auto");
        
        let rank_container = document.createElement('div');
        rank_container.classList.add("rank-container");
        let rank = document.createElement('div');
        rank.classList.add("rank");
        rank.textContent = row.rank;

        let name_container = document.createElement('div');
        name_container.classList.add("name-container");
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.setAttribute('id','underline-link');
        let symbol = document.createElement('div');
        symbol.classList.add("symbol");
        symbol.textContent = row.symbol;
        let name = document.createElement('div');
        name.textContent = row.name;

        let price_container = document.createElement('div');
        price_container.classList.add("price-container","flex");
        price_container.setAttribute('id','price-container');
        
        let price = document.createElement('div');
        price.textContent = moneyFormatter.format(Math.floor(row.priceUsd))+ ("$");
        price.classList.add("price");
        let marketcap = document.createElement('div');
        marketcap.textContent = moneyFormatter.format(Math.floor(row.marketCapUsd))+ ("$");
        marketcap.classList.add("marketcap");
        let supply = document.createElement('div');
        supply.classList.add("supply");
        supply.textContent = moneyFormatter.format(Math.floor(row.supply))+ ("$");
        let Vwap = document.createElement('div');
        Vwap.classList.add("Vwap");
        Vwap.textContent = moneyFormatter.format(Math.floor(row.vwap24Hr))+ ("$");
        let volume = document.createElement('div');
        volume.classList.add("volume");
        volume.textContent = moneyFormatter.format(Math.floor(row.volumeUsd24Hr))+ ("$");
        let per24hour = document.createElement('div');
        per24hour.classList.add("perhour");
        per24hour.textContent = moneyFormatter.format(row.changePercent24Hr) + ("%");
  
        table.appendChild(table_container);
        table_container.appendChild(container);
        container.appendChild(rank_container);
        rank_container.appendChild(rank);
        rank_container.appendChild(name_container);
        name_container.appendChild(link);
        link.appendChild(name);
        link.appendChild(symbol);
        container.appendChild(price_container);
        price_container.appendChild(price);
        price_container.appendChild(marketcap);
        price_container.appendChild(supply);
        price_container.appendChild(Vwap);
        price_container.appendChild(volume);
        price_container.appendChild(per24hour);
        
        }



  
  const hamburger = document.querySelector(".hamburger");
  const asidebar = document.querySelector(".asidebar");
 
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    asidebar.classList.toggle("active");
    
  })


   const close_button = document.querySelector('.close-button');
   const ad = document.querySelector('.advertisement');
   close_button.addEventListener('click', () =>{
    close_button.classList.add("active");
    ad.classList.add("active");
   })
