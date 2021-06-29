import './index.css';
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import {Route} from "react-router-dom";
import GamePage from "./Components/GamePage/GamePage";

function App() {
	return (
		<div className="main-container">
			<Header/>
			<div className="main-content">
				<Menu/>
				<div className="content-container">
					<Route path="/">

					</Route>
					<Route path="/play">
						<GamePage/>
					</Route>
					<Route path="/settings">

					</Route>
				</div>
			</div>
		</div>
	);
}

export default App;
