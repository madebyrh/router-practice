import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {


  useEffect(() => {
      fetchItem()
  }, [])

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
  }

  const [item, setItem] = useState({
      //なんで空のオブジェクトが必要？
      images: {}
  });

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.images.transparent} alt="" />
    </div>
  );
}

export default ItemDetail;
