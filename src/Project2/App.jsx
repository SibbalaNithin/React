// import React, { useEffect, useState } from 'react'
// import './Project2/App.css'
// const App = () => {

//   const [data, setdata] = useState([]);
//   const [search,setSearch] = useState("");

  // useEffect(() =>{
  //   fetch(`https://pixabay.com/api/?key=47814609-177ee1b923098cc7e7f88117d&q=${search}&image_type=photo`)
  //   .then((res) => res.json())
  //   .then((d) => setdata(d.hits))
  // })
//   return (
//     <div>
//       <input onChange={(e) => setSearch(e.target.value)}/>
//       {data.map((item,index) => {
//         return(
//           <div key={index}>
//             <img src={item.largeImageURL} height={item.webformatHeight} width={item.webformatWidth} alt="" />;
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App

// // `https://pixabay.com/api/?key={ KEY }&q=${search}&image_type=photo`


// import React, { useEffect, useState } from 'react';
// // import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

// import './Project2/App.css'

// // const App = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');
//   // const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // if (search === '') return;  // Skip fetch if search is empty
//     // setLoading(true);  // Show loading indicator
    
//     fetch(`https://pixabay.com/api/?key=47814609-177ee1b923098cc7e7f88117d&q=${search}&image_type=photo`)
//       .then((res) => res.json())
//       .then((d) => {
//         setData(d.hits);
//         // setLoading(false);  // Hide loading indicator after fetching data
//       })
//       console.log(data)
//       // .catch(() => setLoading(false));  // Handle fetch error
//   });                                           
//   // [search]

//   return (
//     <div className="container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for images..."
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         {/* <FaSearch className="search-icon" /> */}
//       </div>
      
//       {/* {loading && <div className="loading">Loading...</div>} */}
      
//       <div className="image-gallery">
//         {data.map((item, index) => (
//           <div key={index} className="image-item">
//             <img
//               src={item.largeImageURL}
//               alt={item.tags}
//               className="image"
//               width={item.webformatWidth}
//               height={item.webformatHeight}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// // };

// // export default App;



// import React, { useEffect, useState } from 'react';
// // import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

// import './Project2/App.css'

// const App = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState(" ");
//   // const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // if (search === '') return;  // Skip fetch if search is empty
//     // setLoading(true);  // Show loading indicator
    
//     fetch(`https://pixabay.com/api/?key=47814609-177ee1b923098cc7e7f88117d&q=${search}&image_type=photo`)
//       .then((res) => res.json())
//       .then((d) => setData(d.hits));
//         // setLoading(false);  // Hide loading indicator after fetching data
      
//       console.log(data)
//       // .catch(() => setLoading(false));  // Handle fetch error
//   });                                           
//   // [search]

//   return (
    
//     <div className='main'>
//       <div className='navbar'>
//         <h1>Pixabay</h1>
//       </div>
//         <div className="container">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search for images..."
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             {/* <FaSearch className="search-icon" /> */}
//           </div>
          
//           {/* {loading && <div className="loading">Loading...</div>} */}
          
//           <div className="image-gallery">
//             {data.map((item, index) => (
//               <div key={index} className="image-item">
//                 <img
//                   src={item.largeImageURL}
//                   alt={item.tags}
//                   className="image"
//                   width={item.webformatWidth}
//                   height={item.webformatHeight}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };

// export default App;



import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3; 

    const handleSearch = () => {
        if (search) {
            fetch(`https://pixabay.com/api/?key=47811686-888ff7389a6e9b1e8fe8c51c4&q=${search}&image_type=photo`)
                .then((res) => res.json())
                .then((d) => {
                    setData(d.hits);
                    setCurrentPage(1); 
                });
        }
    };

    const totalPages = Math.ceil(data.length / recordsPerPage);

    const getRecords = () => {
        const firstIndex = (currentPage - 1) * recordsPerPage;
        const lastIndex = firstIndex + recordsPerPage;
        return data.slice(firstIndex, lastIndex);
    };

    return (
        <div>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Search Images' 
            />
            <button onClick={handleSearch}>Search</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {getRecords().map((item) => (
                    <div key={item.id} style={{ margin: '10px' }}>
                        <img 
                            src={item.largeImageURL} 
                            height={item.webformatHeight} 
                            width={item.webformatWidth} 
                            alt={item.tags} 
                        />
                    </div>
                ))}
            </div>
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            {currentPage}
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default App;
