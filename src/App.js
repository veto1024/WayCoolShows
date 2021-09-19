import React, {useState} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {MainHeader} from "./assets/MainHeader";
import './App.scss'
import {MainContent} from "./assets/MainContent";
import {SiteFooter} from "./assets/SiteFooter";


function App() {
    const [contentMounted, changeContentMounted] = useState(false)

    function handleContentMounted() {
        changeContentMounted(true)
    }

  return (
    <div className="App">
        <Container fluid >
            <MainHeader/>
            <MainContent onContentMounted={handleContentMounted} />
            {contentMounted? <SiteFooter /> : ''}
        </Container>
    </div>
  );
}

export default App;
