import React, { useEffect, useState } from "react";
import ReciepeDetails from "./ReciepeDetails";

export default function MealSearch() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [reciepe, setReciepe] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(()=>{
    setReciepe("Pizza");
    fetchData()
  },[])


  function fetchData(){ 
    setLoading(true)
    setError(false)
    fetch(`${apiUrl}${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setReciepe(data.meals[0]);
      setLoading(false)

    })
    .catch((error) => setError(error));
  }


  function searchReciepe(event) {
    event.preventDefault();
    fetchData()
  }

  return (
    <div className="mt-8 bg-slate-100 max-w-xl mx-auto shadow-md rounded-lg p-8">
      <h1 className="text-center text-xl font-bold">Search Any Reciepe</h1>
      <form
        onSubmit={searchReciepe}
        className="mt-8 flex flex-col items-center"
      >
        <input
          type="text"
          className="w-full border-2 p-3 rounded-lg "
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button className="bg-green-300 px-8 py-2 rounded-md mt-8">
          Search
        </button>
      </form>
          {error? "Error Getting data" : loading? <div class="loader"></div>
    :  <ReciepeDetails reciepe={reciepe} />}
    </div>
  );
}
