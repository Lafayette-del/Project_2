
const APIKEY = "Oislc2GvTi4OonMSd3HXjHuAFWwvMD0o" 
const APIURL = 'https://api.giphy.com/v1/gifs/search?api_key=Oislc2GvTi4OonMSd3HXjHuAFWwvMD0o&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

async function fetchGIFs(query) {
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
    console.log(gifs)
    gifs.forEach(element => {
        let imageElement = document.createElement ("img")
        imageElement.src = element.images.original.url
        console.log (imageElement)
        console.log(element.images.original.url)
        let sectionImages = document.getElementById ("GifsImages")
        console.log(sectionImages)
        sectionImages.appendChild(imageElement)
        
        
    });
} 

fetchGIFs("book")
