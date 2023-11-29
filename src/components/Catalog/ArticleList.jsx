import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './ArticleList.css'; // Importa el archivo de estilos
import AdminBoton from './AdminBoton';
import logo from '../assets/logo.png';
import header from '../assets/header4.png';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    // Obtener datos de la Fake Store API usando fetch
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Se ejecuta solo una vez al montar el componente

  // Lógica para paginar los artículos
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Función para cambiar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='header'>
      <div className='header2'>
      <img className='headerfoto' src={header} alt="header" />
    </div>
    <div className='busqueda'>
      <input className="buscar" placeholder="Escribe tu búsqueda aquí"></input>
      <button className="button">Buscar</button>
    </div>
      </div>
      <div className='body'>
        <div className='contenedor' >
        <AdminBoton/>
        <h2>Catálogo de Productos</h2>
        <div className="article-container">
          {/* Renderizar la lista de productos */}
          {currentArticles.map(article => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-title">{article.title}</div>
              <div className="article-price">${article.price}</div>
            </div>
          ))}
        </div>
        {/* Renderizar la paginación */}
        <Pagination
          currentPage={currentPage}
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
        />
        </div>
        
        <div className="notificaciones">
          <div className="square">
          <div className="imgalerta"><img className='logo' src={logo} alt="logo" /></div>
            <div className="textos">
              <div className="texto titulo">Alertas y Notificaciones</div>
              <div className="texto">Agregamos alertas y notificaciones a nuestra pagina web!</div>
              <div className="texto">Pruebalas para estar al tanto de las novedades!</div>
              <div className="button notif">Activar notificaciones</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
       <div></div>
       <button className="button">Contacto</button>
      </div>
    </div>
    
  );
};

export default ArticleList;
