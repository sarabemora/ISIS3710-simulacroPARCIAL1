import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { getUserData } from '../services/mockUserService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [images, setImages] = useState([]);  // Mantiene las imágenes
  const [userData, setUserData] = useState(getUserData());  // Datos del usuario
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar imágenes de localStorage si existen
    const storedImages = localStorage.getItem('images');
    
    if (storedImages) {
      // Si ya hay imágenes guardadas, las usamos
      setImages(JSON.parse(storedImages));
    } else {
      // Si no hay imágenes guardadas, las generamos
      const fetchImages = async () => {
        let imageArray = [];
        for (let i = 0; i < 12; i++) {
          const response = await axios.get(`https://picsum.photos/350?random=${i}`);
          imageArray.push(response.request.responseURL);  // Guardar la URL de la imagen
        }
        // Guardamos las imágenes en localStorage
        localStorage.setItem('images', JSON.stringify(imageArray));
        setImages(imageArray);
      };
      fetchImages();
    }
  }, []);  // El array vacío asegura que solo se ejecuta una vez

  // Mostrar modal con la imagen seleccionada
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  // Cerrar el modal
  const handleCloseModal = () => setShowModal(false);

  // Redirigir al perfil
  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="home-container">
      {/* Sección del usuario */}
      <div className="user-info">
        <div className="user-header">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="profile-pic"
            onClick={handleProfileClick} // Redirige al perfil al hacer clic
          />
          <div className="user-details">
            <h2>{userData.username}</h2>
            <p>{userData.fullName}</p>
            <p>{userData.description}</p>
            <a href={userData.url}>{userData.url}</a>
          </div>
        </div>
        <div className="user-stats">
          <span><strong>{userData.posts}</strong> posts</span>
          <span><strong>{userData.followers}</strong> followers</span>
          <span><strong>{userData.following}</strong> following</span>
        </div>
      </div>

      {/* Sección de imágenes */}
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="grid-image"
            onClick={() => handleImageClick(image)} // Al hacer click en la imagen
          />
        ))}
      </div>

      {/* Modal para ver el detalle de la imagen */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de la Imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;