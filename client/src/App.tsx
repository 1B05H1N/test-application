import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import QuestionList from './components/Questions/QuestionList';
import QuestionDetail from './components/Questions/QuestionDetail';
import QuestionForm from './components/Questions/QuestionForm';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/questions/new" element={<QuestionForm onSubmitSuccess={() => {}} />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/questions/:id/edit" element={<QuestionForm onSubmitSuccess={() => {}} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
