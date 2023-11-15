import React from 'react';


const App = () => {
  return <>
    <Content />
    <Content />
    <Content />
    <Content />
  </>
}

const Content= () => {
  return <article>
     <ImageComponents />;
  <Title />;
  </article>
}


const ImageComponents = () => {
  return <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7724/1617724-v-aaaa754e258c" alt="vikram"/>
}

const Title = () => {
  return<h3>Vikram</h3>
}
export default App;
