import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {

  const links = [{ label: "Cards", href: "cards.html" }, { label: "Botões", href: "btn.html" }, { label: "Formulario", href: "forms.html" }, { label: "Navbar", href: "nav.html" },
  { label: "Layout", href: "layout.html" }]

  const title = "Bem vindo ao projeto react com bootstrap"
  return (
    <div>
      <Home title = {title} link = {links}/>
    </div>
  );
}

export default App;
