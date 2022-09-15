import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import F1 from './components/f1.jsx';
import F2 from './components/f2.jsx';
import F3 from './components/f3.jsx';
import Confirmation from './components/confirmation.jsx';

// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentView: 0,
                  btnHidden: "initial",
                  form: {}
                };
  }

  proceedToNextView () {
    this.setState({btnHidden: "none", currentView: this.state.currentView + 1}, () => {
      if (this.state.currentView === 5) {
        this.setState({currentView: 0, btnHidden: "initial"})
      }
    });
  }


  render() {
    return (
      <div>
        <div>{(this.state.currentView === 1 ? <F1 handleClick={this.proceedToNextView.bind(this)} form={this.state.form}/> : null)}</div>
        <div>{(this.state.currentView === 2 ? <F2 handleClick={this.proceedToNextView.bind(this)} form={this.state.form}/> : null)}</div>
        <div>{(this.state.currentView === 3 ? <F3 handleClick={this.proceedToNextView.bind(this)} form={this.state.form}/> : null)}</div>
        <div>{(this.state.currentView === 4 ? <Confirmation handleClick={this.proceedToNextView.bind(this)} form={this.state.form}/> : null)}</div>
        <button onClick={this.proceedToNextView.bind(this)} style={{display: this.state.btnHidden}}>Checkout</button>
      </div>
    )

  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
