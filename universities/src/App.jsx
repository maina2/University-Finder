import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [state, setState] = useState("");
  const [universities, setUniversities] = useState([]);
  const [country,setCountry] = useState("")

  const change = (e) => {
    const { name, value } = e.target;
    setState(value);
  };
  const search = (e) => {
    e.preventDefault();
    setCountry(state)
    console.log(universities);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      if (!country) {
        setUniversities([]);
      } else {
        const url = `http://universities.hipolabs.com/search?country=${state}`;
        const res = await fetch(url);
        const data = await res.json();
        setUniversities(data);
      }
    };
    fetchCountries();
  }, [country]);

  return (

    <div className="maincont">

      <div className="top">
          <h3>University finder from  respective countries</h3>
          <div className="fields">
            <input onChange={change} type="text" />

            <button onClick={search}>Search</button>

          </div>


      </div>

      <div className="bottom">
          {state &&
            universities.map((university, index) => (
              <div className="each" key={index}>
                <p style={{fontFamily:"sans-serif", fontWeight:"500"}}>
                  <span>Name:</span>
                  {university.name}
                </p>
                <p style={{fontFamily:"sans-serif", fontWeight:"500"}}>
                  <span>Domains:</span>
                  {university.domains[0]}
                </p>
                <p style={{fontFamily:"sans-serif", fontWeight:"500"}}>
                  <span>Web Pages:</span>
                  {university.web_pages[0]}
                </p>
              </div>
            ))}
        </div>
        





    </div>









    // <div className="container">
    //   <div className="home">
    //     <div className="search">
    //       <div>
    //         <h1>SEARCH PANEL</h1>
    //       </div>
    //       <form>
    //         <div className="">
    //           <input
    //             type="search"
    //             placeholder="Search university using state"
    //             onChange={onChangeHandler}
    //           />
    //           <button onClick={searchHandler}>Search</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="main">
    //     <div className="count">
    //       <h3>
    //         {universities.length == 0
    //           ? "No results found"
    //           : universities.length + " Universities " + state}
    //       </h3>
    //     </div>

    //     <div className="countries">
    //       {state &&
    //         universities.map((university, index) => (
    //           <div className="country" key={index}>
    //             <p>
    //               <span>Name:</span>
    //               {university.name}
    //             </p>
    //             <p>
    //               <span>Domains:</span>
    //               {university.domains[0]}
    //             </p>
    //             <p>
    //               <span>Web Pages:</span>
    //               {university.web_pages[0]}
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
