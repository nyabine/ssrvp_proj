import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/pages/Main'
import Author from './components/pages/Author'
import ReduxThing from './components/pages/ReduxThing'
import Form from './components/pages/Form'
import RestServerAndTable from './components/pages/RestServerAndTable'
import RestServer from './components/pages/RestServer'

function App() {

  return (
    <>    
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/author" element={<Author/>}/>
            <Route path="/reduxthing" element={<ReduxThing/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/restserverandtable" element={<RestServerAndTable/>}/>
            <Route path="/restserver" element={<RestServer/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
