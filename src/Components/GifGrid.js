import { useFetechGif } from '../Hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) =>{

const {images, isLoading} = useFetechGif(category  );


    return(
        <>
        <h3>{category}</h3>
        {
            isLoading 
            && <h2>Cargando.....</h2>
        }
        <div className="card-grid">
            {
                images.map((image)=>(
                 <GifGridItem 
                 key={image.id} 
                 { ...image }
                 />
                ))
            }
        </div   >
        </>
    )   
}