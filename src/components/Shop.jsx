import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { atom, useRecoilState, selector } from 'recoil';
import { food, category } from '../constants';
import './Styles/shop.css';
import { BsFillCartPlusFill, BsWhatsapp, BsCartCheckFill } from 'react-icons/bs';
import Transition from '../components/Transition';
import { useEffect, useState } from 'react';

 

 
function Shop() {
   
  const [visible, setVisible] = React.useState(20);
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = React.useState([]);
 

  React.useEffect(() => {
    setItems(food);
    window.scrollTo(0, 0);
  }, []);

  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      setShowTransition(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const typeFilter = searchParams.get('category');
  const displayedItems = useMemo(()=>{
      if(!typeFilter) return items;
    
      const output =  items.filter(items => items.category === typeFilter)
      console.log("category",typeFilter, output )
      return output
  },[typeFilter, items])
  
  

  const showMoreItems = () => {
    setVisible(prevState => prevState + 10);
  };

  const toggleClicked = item => {
    setItems(prevItems => prevItems.map(prevItem => (prevItem.id === item.id ? { ...prevItem, clicked: !prevItem.clicked } : prevItem)));
  };

  const remainingItems = displayedItems.length - visible;
  const showMoreButton = remainingItems > 0 && (
    <div className="shop-button">
      <button className="button" onClick={showMoreItems}>
        Explore More
      </button>
    </div>
  );

  const ItemsElements = displayedItems.slice(0, visible).map(item => (
    <div className="item-card" key={item.id}>
     
      <div className="item-pic">
        <img className="item-pic" src={item.pic} alt="burger" />
      </div>
      <div className="item-info">
        <h2 className="name">{item.Name}</h2>
        <p className="original-price">
          {item.subTitle}
          {/* <span className='original-price'>{item.O_price}$</span> */}
        </p>
        <button
          className="cart-button"
          onClick={() => {
            toggleClicked(item);
          }}
        >
          {item.clicked ? (
            <>
              Added to Cart <BsCartCheckFill />
            </>
          ) : (
            <>
              Order Now
              <span className="cart-button-icon">
                <BsWhatsapp />
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  ));
  console.log("displayedItems",displayedItems)

  return (
    <div className="shop-container">
      {showTransition && <Transition />}
      <h1>Explore Our Items</h1>

      <nav className="filter-nav">
        <Link className="item-type" to=".">
          All
        </Link>
        {category.map(cat => (
          <Link
            key={cat.title} // Adding a key for optimization in React's reconciliation process
            className={`item-type ${cat.title} ${typeFilter === cat.title ? 'selected' : ''}`}
            to={`?category=${encodeURIComponent(cat.title)}`} // Dynamically set the category in the URL
          >
            {cat.title}
          </Link>
        ))} 
      </nav>

      <div className="item-container">{ItemsElements}</div>
      {showMoreButton}
    </div>
  );
}

export default Shop;
