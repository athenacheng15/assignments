const { useState } = React;

function Counter() {
	const [num, setNum] = useState(0);
	function plusOne() {
		setNum(num + 1);
	}

	return (
		<div className="counter">
			<button onClick={plusOne} className="btn-counter">
				+1
			</button>
			<p>{num}</p>
		</div>
	);
}

function App() {
	const [counters, setCounter] = useState([]);

	function addCounter(newCounter) {
		setCounter((prevCounter) => {
			return [...prevCounter, newCounter];
		});
	}

	return (
		<div className="my-app">
			<button className="btn-all">All + 1</button>
			<Counter />
			<Counter />
			<Counter />
			{counters.map((countersItem) => {
				return <Counter />;
			})}
			<button onClick={addCounter} className="btn-add-counter">
				Add a Counter
			</button>
		</div>
	);
}

// //usually render tpo level elements into the DOM
ReactDOM.render(<App />, document.getElementById("root"));
