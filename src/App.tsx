import { Grid, SearchBar } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import keyJSON from '../key.json';
import React from 'react';

import './App.css'

function App() {
  const gf = new GiphyFetch(keyJSON.key);
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

  return (
    <>
      <SearchBar />
      <Grid width={500} columns={2} fetchGifs={fetchGifs} />
    </>
  )
}

export default App
