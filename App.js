import React, {useEffect, useState} from 'react';
import {Router} from './src/router';
import {Loading} from './src/screen/loading';
const App = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoad(1), 1000);
  }, []);
  if (load) return <Router />;
  else return <Loading />;
};

export default App;
