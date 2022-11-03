import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Link from "./Link"
import f4 from './Assets/footer3.png'
import Contact from './contact';

const App = () => {
  return (
    <Router>
    <main>
    
      <Routes>
      <Route path='/contact'
      element= {<Contact/>} />
      <Route path='/'
      element= {<Link/>} />
      </Routes>

      <section>
      <hr/>
    <footer className='footers mini'>
      <div className="inner-footer">
      <h4>Zuri<span className='red-dot'></span>Internship</h4>
    <p>HNG Internship 9 Frontend Task</p>
      <img src={f4} alt='Zuri' />
      </div>
    </footer>
    </section>

    </main>
    </Router>
  )
}

export default App

