import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  paseSize = 11;
  country = "in";
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News pageSize={this.paseSize} key="general" category="general" country={this.country} />}></Route>
          <Route path="/business" element={<News pageSize={this.paseSize} key="business" country={this.country} category="business" />}></Route>
          <Route path="/entertainment" element={<News pageSize={this.paseSize} key="entertainment" country={this.country} category="entertainment" />}></Route>
          <Route path="/health" element={<News pageSize={this.paseSize} key="health" country={this.country} category="health" />}></Route>
          <Route path="/science" element={<News pageSize={this.paseSize} key="science" country={this.country} category="science" />}></Route>
          <Route path="/sports" element={<News pageSize={this.paseSize} key="sports" country={this.country} category="sports" />}></Route>
          <Route path="/technology" element={<News pageSize={this.paseSize} key="technology" country={this.country} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

