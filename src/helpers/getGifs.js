


    export const getGifs = async( category ) => {

        const url = "https://api.giphy.com/v1/gifs/search?q=" + category +"&limit=10&api_key=MV61toq9sIbQTsZU0PJCfch5IUxF3sBm";
        const resp = await fetch( url );
        const { data } = await resp.json();

        //data.data parece que también funcionaría
        //console.log(data); 

        const gifs = data.map( img => {
            //returns an object with the info I want
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

    }