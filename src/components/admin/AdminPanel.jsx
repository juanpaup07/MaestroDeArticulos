import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';
import header from '../assets/header4.png';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    // Obtener datos de la Fake Store API al cargar el componente
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setEditedText(product.title);
  };

  const handleConfirmEdit = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, title: editedText }
          : product
      )
    );
    setSelectedProduct(null);
  };

  const handleCancelEdit = () => {
    setSelectedProduct(null);
    setEditedText('');
  };

  return (
    <div id="admin-panel">
      <div className='header'>
      <div className='header2'>
      <img className='headerfoto' src={header} alt="header" />
    </div>
    
      </div>
      <div className='titulo subheader'>
       <h2>Panel de Administrador</h2>
       <Link to="/">
        <button className='button' type='submit' >Volver</button>
      </Link>
      </div>
      
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <div className='idfoto'>
                <strong>ID:</strong> {product.id}
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div>
                {selectedProduct === product ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  <>
                    
                    <strong>Texto:</strong> {product.title}
                  </>
                )}
              </div>
              <div className="action-buttons">
                {selectedProduct === product ? (
                  <>
                    <button onClick={handleConfirmEdit}>Confirmar Edición</button>
                    <button onClick={handleCancelEdit}>Cancelar Edición</button>
                  </>
                ) : (
                  <>
                    <button className='button' onClick={() => handleEditProduct(product)}>Editar</button>
                    <button
                      onClick={() => {
                        const confirmation = window.confirm(
                          '¿Seguro que quieres eliminar este producto?'
                        );
                        if (confirmation) {
                          handleDeleteProduct(product.id);
                        }
                      }}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos para mostrar.</p>
      )}
      <Link to="/">
        <button className='button' type='submit' >Volver</button>
      </Link>
    </div>
    
  );
};

export default AdminPanel;
