const { useState } = React;

function Navbar() {
	const [vis, setVis] = useState({ display: "none" });
	function handleVis() {
		setVis({ display: "flex" });
	}
	function handleUnvis() {
		setVis({ display: "none" });
	}

	return (
		<div>
			<nav className="navbar">
				<h1>Website Title / Logo</h1>
				<button onClick={handleVis} type="button" className="ham">
					&#9776;
				</button>
				<ul className="nav-list">
					<li className="nav-list-item">Item 1</li>
					<li className="nav-list-item">Item 2</li>
					<li className="nav-list-item">Item 3</li>
					<li className="nav-list-item">Item 4</li>
				</ul>

				<div style={vis}>
					<button onClick={handleUnvis} type="button" className="close-btn">
						X
					</button>
					<ul className="h-menu">
						<li className="h-menu-item">Item 1</li>
						<li className="h-menu-item">Item 2</li>
						<li className="h-menu-item">Item 3</li>
						<li className="h-menu-item">Item 4</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

function Welcome() {
	const [msg, setMsg] = useState("Welcome Message");
	function handelMsg() {
		if (msg === "Welcome Message") {
			setMsg("Have a Good Time");
		}
	}

	return (
		<div>
			{/*<!---------- welcome message ---------->*/}
			<div onClick={handelMsg} className="welcome-message">
				<p>{msg}</p>
			</div>
		</div>
	);
}

function Content() {
	const [vis, setVis] = useState({ display: "none" });
	function handleVis() {
		setVis({ display: "flex" });
	}

	return (
		<div>
			{/*<!---------- section title ---------->*/}
			<div className="section-title">
				<p>Section Title</p>
			</div>

			{/*<!---------- content ---------->*/}
			<div className="content">
				<div className="content-box">Content Box 1</div>
				<div className="content-box">Content Box 2</div>
				<div className="content-box">Content Box 3</div>
				<div className="content-box">Content Box 4</div>
				<button onClick={handleVis} type="button" className="action-btn">
					Call to Action
				</button>
			</div>

			<div style={vis} className="content hide-content">
				<div className="content-box">Content Box 5</div>
				<div className="content-box">Content Box 6</div>
				<div className="content-box">Content Box 7</div>
				<div className="content-box">Content Box 8</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<div>
			<Navbar />
			<Welcome />
			<Content />
		</div>
	);
}

// //usually render tpo level elements into the DOM
ReactDOM.render(<App />, document.getElementById("root"));
