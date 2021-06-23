import React, {useEffect, useState} from 'react';
import {Route, withRouter} from "react-router-dom"
import Home from "./components/home/Home.jsx"
import Company from "./components/company/CompanyDetails.jsx"
import {Container} from "react-bootstrap"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchBar from './components/SearchBar.jsx';
import Favs from './components/favs/Favs.jsx';

const queryClient = new QueryClient();

//mapstateToProps(which state properties are needed) mapDispatchToProps

function App(props) {

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <SearchBar  history={props.history} location={props.location}/>
        <Route exact path="/" render={(routerProps) => <Home />}/>
        <Route exact path="/company/:company_name" render={(routerProps) => <Company {...routerProps}/>}/>
        <Route exact path="/favorites" component={Favs}/>
      </Container>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default withRouter(App);

