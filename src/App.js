import './App.css';
import { StudentList } from './component/StudentList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StudentProfile } from './component/StudentProfile';
import { StudentSaveOrUpdate } from './component/StudentSaveOrUpdate';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/students/saveOrUpdate">
            <StudentSaveOrUpdate />
          </Route>
          <Route path="/students/profile/:studentId">
            <StudentProfile />
          </Route>
          <Route path="/">
            <StudentList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
