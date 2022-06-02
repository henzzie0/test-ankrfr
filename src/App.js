import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { 
	Flex,
  	ChakraProvider,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import Dashboard from "./dashboard";
import Wallet from "./wallet";

function App() {
	const [screen, setScreen] = useState(0)
	const [selected, setSelected] = useState(0)
	return (
		<ChakraProvider>	
	        <Router>
	          <Switch>
	            <Route path="/" exact><Dashboard screen={screen} setScreen={setScreen} selected={selected} setSelected={setSelected} /></Route>
	            <Route path="/metamask"><Wallet screen={screen} setScreen={setScreen} selected={selected} setSelected={setSelected} /></Route>
	            <Route><Dashboard screen={screen} setScreen={setScreen} selected={selected} setSelected={setSelected} /></Route>
	          </Switch>
	        </Router>
		</ChakraProvider>
	)
}

export default App;
