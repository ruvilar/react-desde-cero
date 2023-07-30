import '../styles/styles.scss';
// import CourseCard from './CourseCard';
import Form from './Pages/Form';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import History from './Pages/History';
import Home from './Pages/Home';
import MainMenu from './Organisms/MainMenu';
import Users from './Pages/Users';

const App = () => (

    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/cursos/:idem" component={ Course } />
            <Route path="/cursos" component={ Courses } />
            <Route path="/historial/:idem" component={ History } />
            <Route path="/historial" component={ History } />
            <Route path="/usuarios" component={ Users } />
            <Route path="/formulario" component={ () => <Form name="Página de contacto" /> } />
            <Route component={ () => 
            <div>
                <h1>Error 404</h1>
                <span>Página Ausente</span>
            </div> 
            } />
        </Switch>
    </Router>

        // <div className="ed-grid m-grid-3">
        //     {
        //         cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
        //     }
        // </div>

)

export default App;