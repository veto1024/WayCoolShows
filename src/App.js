import React, {useState} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {MainHeader} from "./assets/MainHeader";
import './App.scss'
import {MainContent} from "./assets/MainContent";
import {SiteFooter} from "./assets/SiteFooter";


function App() {
    const [contentMounted, changeContentMounted] = useState(false)

    // function handleContentMounted(s) {
    //     changeContentMounted(true)
    // }

  return (
    <div className="App">
        <Container fluid >
            <MainHeader/>
            <MainContent onContentMounted={changeContentMounted} />
            {contentMounted? <SiteFooter /> : ''}
        </Container>
    </div>
  );
}

export default App;
