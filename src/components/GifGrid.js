import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid( { category } ){

    const { data:images, loading } = useFetchGifs( category );

    return (
        <div>

            <h3 className="animate__animate animate__fadeIn"> {category} </h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                {
                    
                    images.map( img => {
                    return <GifGridItem 
                    key = { img.id }
                    {...img}/>
                    })            
                    }

            </div>


            

        </div>
    );


}

export default GifGrid;