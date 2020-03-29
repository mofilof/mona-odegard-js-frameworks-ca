import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function AboutGame() {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const url = BASE_URL + id;

  useEffect(function() {
    console.log("something");
    fetch(url) 
      .then(response => response.json())
      .then(json => {
        console.log("more", json);
        setDetail(json);
        setLoading(false);
      })
      .catch(error => console.log(error));
    });        
   
    if (loading) {
        return <div>Loading game details...</div>;
    }
    
      return (
        <div>
          <h1>{detail.name}</h1>
          <p>Description: {detail.description}</p>        
        </div>
    );
  }


export default AboutGame; 
