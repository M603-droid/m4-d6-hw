import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import Registration from './components/Registration'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
       <MyNavbar/>
      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
       <Route path ="/" exact render={()=> <BookList books={fantasyBooks} />}/>
      </header>
      

      <Route path="/registration" exact component={Registration} />
      </Router>

     
    </div>
  )
}

export default App
