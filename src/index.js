import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { LastLocationProvider } from 'react-router-last-location';

import ScrollToTop from './containers/utilities/ScrollToTop';

ReactDOM.render(
  <Router>

  	<ScrollToTop>
  		<LastLocationProvider>
    		<App />
    	</LastLocationProvider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();