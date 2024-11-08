
const APIKEY = "Oislc2GvTi4OonMSd3HXjHuAFWwvMD0o" 
const APIURL = 'https://api.giphy.com/v1/gifs/search?api_key=Oislc2GvTi4OonMSd3HXjHuAFWwvMD0o&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

async function fetchGIFs() {
    query = document.getElementById("search-input").value
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=Oislc2GvTi4OonMSd3HXjHuAFWwvMD0o&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    console.log (APIURL)
    try {
        const response = await fetch (APIURL);
        if (!response.ok) throw new error("network response was not ok");

        
        const data = await response.json();
        Gifdisplay(data.data);
    }   catch (error) {
        console.error("error fetching GIFs:", error);
    }
}

function Gifdisplay(gifs) {
    let sectionImages = document.getElementById ("GifsImages")
    sectionImages.innerHTML = ""
    
    gifs.forEach(element => {
        let imageElement = document.createElement ("img")
        imageElement.src = element.images.original.url
        sectionImages.appendChild(imageElement)
    });
} 

fetchGIFs (document.getElementById("search-input").value)
