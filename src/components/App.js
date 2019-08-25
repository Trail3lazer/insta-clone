import React, { Fragment } from 'react';
import Header from './layouts/Header'
import Footer from "./layouts/Footer"
import './App.css';

export default class extends React.Component {
  render () {
    return <Fragment>
      <Header />
      <Footer />
    </Fragment>
  }
}