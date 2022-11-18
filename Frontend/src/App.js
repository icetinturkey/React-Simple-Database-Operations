import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import './App.css';
import Main from "./Main";
import Addpage from "./Addpage";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  return (
      <Router>
          <div className="container">
              <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="add-product" element={<Addpage />} />
              </Routes><br/><br/><br/>
              <div className="footer fixed-bottom bg-white">
                  <div className="container mb-3">
                  <hr/>
                  <div className="row">
                      <div className="col-6">
                          Scandiweb Test Assignment
                      </div>
                      <div className="col-6 text-end">
                          React {React.version}
                      </div>
                  </div>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
