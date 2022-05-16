import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 함수 컴포넌트
// 함수 컴포넌트는 더 간단하게 컴포넌트를 작성하는 방법이며 state 없이 render 함수만을 가집니다.
// 함수 컴포넌트는 클래스로 작성하는 것보다 빠르게 작성할 수 있으며 많은 컴포넌트를 함수 컴포넌트로 표현할 수 있습니다.

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return (<Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let line = "--------------------------------";
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        // console.log(line)
        // console.log(...lines[i])
        // console.log("================")
        // console.log(lines[i])
        // console.log(line)
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        if(squares[i]) return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // squares[i] = 'X';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext
        });

    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}

                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// /*#__PURE__*/
// React.createElement("div", {
//     className: "shopping-list"
// }, /*#__PURE__*/React.createElement("h1", null, "Shopping List for ", props.name), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Instagram"), /*#__PURE__*/React.createElement("li", null, "WhatsApp"), /*#__PURE__*/React.createElement("li", null, "Oculus")));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Game/>

    <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import'/index.css';
// import App from '/App';
// import * as service Worker from '/service Worker';
// ReactDOM.render(
//     <React.StrictMode.>
//         <App />
//     </React.StrictMode>,
//     document.getElementByld(root)
// // Il If you want your app to work offline and load faster, you can change
// // unregister0 to register below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// service Worker.unregisterO;