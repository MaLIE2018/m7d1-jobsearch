import React, {useEffect, useState} from 'react';
import {Route, withRouter} from "react-router-dom"
import Home from "./components/home/Home.jsx"
import Company from "./components/company/CompanyDetails.jsx"
import {Col, Container, Row, InputGroup, FormControl} from "react-bootstrap"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchBar from './components/SearchBar.jsx';

const queryClient = new QueryClient();

function App(props) {
  const [queryWord, setQueryWord] = useState("Software")


  return (
    <QueryClientProvider client={queryClient}>
    <Container>
    <SearchBar queryWord={queryWord} setQueryWord={setQueryWord} history={props.history}/>
    <Route exact path="/" render={(routerProps) => <Home queryWord={queryWord}/>}/>
    <Route exact path="/company/:company_name" render={(routerProps) => <Company {...routerProps}/>}/>
    </Container>
    <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default withRouter(App);
