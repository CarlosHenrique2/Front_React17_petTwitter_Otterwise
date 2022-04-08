import React, { useEffect, useRef } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScroll = ({ fetchMore }) => {
  const containerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default InfiniteScroll;

{
  /* < InfiniteScroll 
  dataLength = { itens . length }  //Este é um campo importante para renderizar os próximos dados 
  next = { fetchData } 
  hasMore = { true } 
  loader = { < h4 > Loading... < / h4 > } 
  endMessage = { 
    < p  style = { {  textAlign : ' centro'  } } > 
      < b >Yay! Você já viu tudo < / b > 
    < / p > 
  } 
  // abaixo das props somente se você precisar da funcionalidade pull down 
  refreshFunction = { this . atualizar } 
  pullDownToRefresh 
  pullDownToRefreshThreshold = { 50 } 
  pullDownToRefreshContent = { 
    < h3  style = { {  textAlign : 'center'  } } > ↓ Puxe para baixo para atualizar < / h3 > 
  }
  releaseToRefreshContent = { 
    < h3  style = { {  textAlign : 'center'  } } > ↑ Solte para atualizar < / h3 > 
  } 
> 
  { items } 
< / InfiniteScroll ></h3> */
}
