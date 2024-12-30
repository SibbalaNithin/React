import React, { useEffect, useState } from 'react';

const App = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set to 5 items per page

    // Fetch products from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                setProducts(data);
            })          
    }, []);

    // Calculate the current products to display
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div>
            <h1>Product List</h1>
            <ol>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ol>
            <div className="pagination">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}>Prev </button>
                <span>{currentPage}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}>Next </button>
            </div>
        </div>
    );
};

export default App;