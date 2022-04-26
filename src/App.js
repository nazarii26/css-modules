import './App.css';
import { Header } from './components/header/Header'
import { Banner } from './components/banner/Banner'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className="wrapper">

      <Header />
      <Banner />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
