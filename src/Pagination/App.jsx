// import { useState } from 'react';
// import Data from './Pagination/Data.json';
// import './App.css'

// const App = () => {
//   const recordsPerPage = 10;
//   const [currentPage, setCurrentPage ] = useState(1)
//   const TotalPages = Math.ceil(Data.length/recordsPerPage) 
//   console.log(TotalPages)

//   const getCurrentRecords = () => {
//     const firstIndex = (currentPage - 1) * recordsPerPage;
//     const lastIndex = firstIndex + recordsPerPage;
//     console.log(firstIndex)
//     console.log(lastIndex)
//     const currentRecords = Data.slice(firstIndex, lastIndex);
//     console.log(currentRecords);
//     return currentRecords;
//   }
  

//   function handleNext(){
//     if (currentPage<TotalPages) {
//       setCurrentPage(prevPage=>prevPage+1)
//     }
//   }

//   function handlePrev(){
//     if (currentPage>1) {
//       setCurrentPage(prevPage=>prevPage-1)
//     }
//   }






//   return (
//     <div>
//       <table border="1" width="90%" cellSpacing="10" cellPadding={'10px'}>
//         <thead>
//           <tr>
//             <td><b>Id</b></td>
//             <td><b>Name</b></td>
//             <td><b>Email</b></td>
//           </tr>
//         </thead>
//         <tbody>
//           {getCurrentRecords().map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//      <div className='pagination'>
//      <button disabled={currentPage===1} onClick={handlePrev}>Prev</button>
//      <span> {currentPage}of{TotalPages}</span>
//       <button disabled={currentPage===TotalPages} onClick={handleNext}>Next</button>
//      </div>
//     </div>
//   );
// };

// export default App;

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