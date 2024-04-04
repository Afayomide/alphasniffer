import React, { useState, useEffect,  Component } from 'react';
import axios from 'axios';
import "./dashboard.css"
import FadeInSection from '../fadeinsection';








const ApiData = () => {
 



    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    useEffect(() => {
      // Fetch all blog posts
      axios.get('http://localhost:3002/blogs')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => {
      if (currentPage < Math.ceil(datas.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    return (
        <div className='api-container'>    
          {loading ?    (
            <div className="loader-container">
            <div className="spinner"></div>
        </div>) : (                     
    <div className='table-container'>
     <FadeInSection>

                      <table>
    <tbody>
  <tr>
  <th>
    Gains
  </th>
    <th>
      Token Name
    </th>
    <th>
      Call Market Cap
    </th>
    <th>
      Ath
    </th>
    <th>
      Security Score
    </th>
    <th>
      Date
    </th>
  </tr>
            {currentItems.map(data => (  
              <tr key={data._id}>
              <th>
                {data.gains}
              </th>
              <th>
                {data.tokenName}
              </th>
              <th>
                {data.callmarketcap}
              </th>
              <th>
                {data.ath}
              </th>
              
              <th>
                {data.securityScore}
              </th> 
              <th>
                {data.date}
              </th>
              </tr>            
            ))}   
           </tbody>
          </table>
          <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>
            {Array.from({ length: Math.ceil(datas.length / itemsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
            <button onClick={nextPage} disabled={currentPage === Math.ceil(datas.length / itemsPerPage)}>
              Next
            </button>
          </div>
          
          </FadeInSection>

        
</div>
)}
        </div>
      );
    };
    
    export default ApiData;
