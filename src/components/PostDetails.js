import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = ({ images }) => {
    const { id } = useParams();  // Obtener el ID de la imagen desde la URL
    const imageUrl = images[id];  // Obtener la URL de la imagen desde el array de imágenes

    return (
        <div className="modal">
            <img src={imageUrl} alt={`Imagen ${id}`} />
        </div>
    );
};

export default PostDetails;