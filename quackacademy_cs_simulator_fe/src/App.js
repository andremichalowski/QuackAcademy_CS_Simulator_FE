import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="container">
        <p>
          HEADER
        </p>
        <a
          className="link"
          href="https://reactjs.org"
        >
          HEADER LINK
        </a>
      </header>

      <body className="container">
        BODY TEXT
        <a
          className="link"
        >
          BODY LINK
        </a>
      </body>

      <footer className="container">
        FOOTER TEXT
        <a
          className="link"
        >
          FOOTER LINK
        </a>
      </footer>

    </div>
  );
}

export default App;
