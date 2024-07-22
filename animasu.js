/**
  * Made by MannR
  * Don't delete this CR
  * eror? yaudah😹
**/

var axios = require('axios'), fetch = require('node-fetch'), cheerio = require('cheerio'), baseUrl = "https://v5.animasu.cc"

async function search(q) {
try {
    const { data } = await axios.get(baseUrl + '/?s=' + q), $ = cheerio.load(data), title = [], status = [], epsd = [], type = [], url = [], img = [], result = []
    
    $('.tt').each((a, b) => {
        let titleData = $(b).text().trim()
        title.push(titleData)
    })
    
    $('.bt .sb').each((a, b) => {
        let statsData = $(b).text()
        status.push(statsData)
    })
    
    $('.bt .epx').each((a, b) => {
        let epsData = $(b).text().trim()
        epsd.push(epsData)
    })
    
    $('.typez').each((a, b) => {
        let typeData = $(b).text().trim();
        type.push(typeData);
    })
    
    $('.bsx a').each((a, b) => {
        let urlData = $(b).attr('href')
        url.push(urlData)
    })
    
    $('.postbody img').each((a, b) => {
        let imgData = $(b).attr('data-src')
        img.push(imgData)
    })
    
    for (let i = 0; i < title.length; i++) {
        result.push({
            title: title[i],
            status: status[i],
            epsd: epsd[i],
            type: type[i],
            url: url[i],
            img: img[i]
        })
    }
    
    return result ({ status: 200, creator: "MannR", result })
} catch (e) {
console.log(e)
return e
}
}

async function donghua_list(page) {
try {
    var { data } = await axios.get(baseUrl + "/genre/donghua/page/" + page), title = [], status = [], epsd = [], type = [], url = [], img = [], result = [], $ = cheerio.load(data);
    
    $(".tt").each(function(a, b) {
        let x = $(b).text().trim();
        title.push(x);
    })
    
    $('.bt .sb').each((a, b) => {
        let x = $(b).text();
        status.push(x);
    })
    
    $('.bt .epx').each((a, b) => {
        let x = $(b).text().trim();
        epsd.push(x);
    })
    
    $('.typez').each((a, b) => {
        let x = $(b).text().trim();
        type.push(x);
    })
    
    $(".bsx a").each(function(a, b) {
        let x = $(b).attr("href");
        url.push(x);
    })
    
    $('.postbody img').each((a, b) => {
        let x = $(b).attr('data-src')
        img.push(x)
    })
    
    for (let i = 0; i < title.length; i++) {
    result.push({
        title: title[i],
        status: status[i],
        epsd: epsd[i],
        type: type[i],
        url: url[i],
        img: img[i]
    })
    }
    return ({ status: 200, creator: "MannR", result })
} catch (e) {
console.log(e)
return e
}
}

async function ongoing() {
try {
    var { data } = await axios.get(baseUrl + "/segera-tayang"), title = [], status = [], tayang = [], type = [], url = [], img = [], result = [], $ = cheerio.load(data)
    
    $('.tt').each(function(a, b) {
        let x = $(b).text().trim();
        title.push(x)
    })
    
    $('span[class="sb RAW"]').each(function(a, b) {
        let x = $(b).text().trim();
        let c = {
        "⏳": "Segera tayang⏳"
        }
        let v = c[x]
        status.push(v)
    })
    
    $('.bt .epx').each(function(a, b) {
        let x = $(b).text().trim()
        tayang.push(x)
    })
    
    $('.typez').each(function(a, b) {
        let x = $(b).text().trim();
        type.push(x)
    })
    
    $('.bsx a').each(function(a, b) {
        let x = $(b).attr('href')
        url.push(x)
    })
    
    $('.postbody img').each(function(a, b) {
        let x = $(b).attr('data-src')
        img.push(x)
    })
    
    for (let i = 0; i < title.length; i++) {
    result.push({
        title: title[i],
        status: status[i],
        tayang: tayang[i],
        type: type[i],
        url: url[i],
        img: img[i]
    })
    }
    return result ({ status: 200, creator: "MannR", result })
} catch (e) {
console.log(e)
return e
}
}

async function popular_list(page) {
try {
    var { data } = await axios.get(baseUrl + "/populer/?halaman=" + page), title = [], status = [], epsd = [], type = [], url = [], img = [], result = [], $ = cheerio.load(data);
    
    $(".tt").each((a, b) => {
        let x = $(b).text().trim();
        title.push(x);
    })
    
    $('.bt .sb').each((a, b) => {
        let x = $(b).text();
        status.push(x);
    })
    
    $('.bt .epx').each((a, b) => {
        let x = $(b).text().trim();
        epsd.push(x);
    })
    
    $('.typez').each((a, b) => {
        let x = $(b).text().trim();
        type.push(x);
    })
    
    $(".bsx a").each(function(a, b) {
        let x = $(b).attr("href");
        url.push(x);
    })
    
    $('.postbody img').each((a, b) => {
        let x = $(b).attr('data-src')
        img.push(x)
    })
    
    for (let i = 0; i < title.length; i++) {
    result.push({
        title: title[i],
        status: status[i],
        epsd: epsd[i],
        type: type[i],
        url: url[i],
        img: img[i]
    })
    }
    return ({ status: 200, creator: "MannR", result })
} catch (e) {
return e
}
}

async function top_list(q) {
try {
    var { data } = await axios.get(baseUrl + "/pencarian/?status=&tipe=&urutan=rating&halaman=" + q), title = [], status = [], epsd = [], type = [], url = [], img = [], result = [], $ = cheerio.load(data);
    
    $(".tt").each((a, b) => {
        let x = $(b).text().trim();
        title.push(x);
    })
    
    $('.bt .sb').each((a, b) => {
        let x = $(b).text();
        status.push(x);
    })
    
    $('.bt .epx').each((a, b) => {
        let x = $(b).text().trim();
        epsd.push(x);
    })
    
    $('.typez').each((a, b) => {
        let x = $(b).text().trim();
        type.push(x);
    })
    
    $(".bsx a").each((a, b) => {
        let x = $(b).attr("href");
        url.push(x);
    })
    
    $('.postbody img').each((a, b) => {
        let x = $(b).attr('data-src')
        img.push(x)
    })
    
    for (let i = 0; i < title.length; i++) {
    result.push({
        title: title[i],
        status: status[i],
        epsd: epsd[i],
        type: type[i],
        url: url[i],
        img: img[i]
    })
    }
    return ({ status: 200, creator: "MannR", result })
} catch (e) 
console.log(e)
return e
}
}

module.exports = { search, donghua_list, ongoing, popular_list, top_list }
