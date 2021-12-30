const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/_interstar/');
 
 const imgList =  await page.evaluate(()=>{
// toda essa função será executada no browser

// vamos pegar todas as imagens que estão na parte de posts
const nodeList = document.querySelectorAll('article img')
// transformar o nodeLister em array
const imgArray = [...nodeList]
// trasnformar os nodes (elementos html) em objetos JS
const imgList = imgArray.map( ({src}) => ({
    src
}))
//console.log(imagList)
// colocar para fora da função
return imgList

  });

// escrever os dados em um arquivo local Json
fs.writeFile('interstar.json', JSON.stringify(imgList, null,2), err => {
    if(err) throw new Error(' Aconteceu algum erro')

    console.log(' deu certo Você Baixo todas as imagens')
})
  await browser.close();
})();