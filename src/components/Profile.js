import React, { useState } from 'react';
import './Profile.css';
import { getUserData, saveUserData } from '../services/mockUserService';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(getUserData());
  const [description, setDescription] = useState(userData.description);
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    // Guardar los cambios en la descripción
    const updatedUser = { ...userData, description };
    saveUserData(updatedUser);
    // Volver al Home con los cambios reflejados
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Editar Perfil</h2>
      <div className="profile-form">
        <img src={userData.profilePicture} alt="Profile" className="profile-pic" />
        <div className="form-group">
          <label>Nombre de Usuario:</label>
          <p>{userData.username}</p>
        </div>
        <div className="form-group">
          <label>Nombre Completo:</label>
          <p>{userData.fullName}</p>
        </div>
        <div className="form-group">
          <label>Descripción del Perfil:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>URL Página Personal:</label>
          <p>{userData.url}</p>
        </div>
        <button onClick={handleSaveChanges} className="save-button">
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default Profile;