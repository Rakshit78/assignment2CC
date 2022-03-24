import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Qes1 from './Components/Qes1';
import Qes2 from './Components/Qes2';
import Qes3 from './Components/Qes3';
import Qes4 from './Components/Qes4';
import Qes5 from './Components/Qes5';
import Nav from './Components/Nav';
import Res from './Components/Res';
import { useState, useEffect } from 'react';
import { obj, obj1, obj2 } from './Components/data';

function App() {
  const navigate = useNavigate();
  const [user, setuser] = useState('');
  const [subject, setsubject] = useState('');
  const [ans1, setans1] = useState('');
  const [ans2, setans2] = useState('');
  const [ans5, setans5] = useState('');
  const [navvisible, setnavvisible] = useState(false);
  const [question, setquestions] = useState(obj);
  const [marks, setmarks] = useState(0);

  const selectedsubject = () => {
    if (subject === 'Englist') {
      setquestions(obj1);
    } else if (subject === 'java') {
      setquestions(obj2);
    }
  };
  let ans3: any = {
    a: '',
    b: '',
  };
  let ans4: any = {
    a: '',
    b: '',
    c: '',
    d: '',
  };
  useEffect(() => {
    selectedsubject();
  }, []);

  const calculatemarks = () => {
    if (ans1 === question.ans1) {
      setmarks(marks + 1);
    } else if (ans2 === question.ans2) {
      setmarks(marks + 1);
    } else if (ans3.a === question.ans3.ans1) {
      setmarks(marks + 1);
    } else if (ans4.a === question.ans4) {
      setmarks(marks + 1);
    } else if (ans5 === question.ans5) {
      setmarks(marks + 1);
    }
  };

  return (
    <div className='App'>
      {navvisible ? <Nav /> : null}
      <Routes>
        <Route
          path='/'
          element={
            <Home
              setuser={setuser}
              setsubject={setsubject}
              user={user}
              navigate={navigate}
              setnavvisible={setnavvisible}
            />
          }
        />
        <Route
          path='/q1'
          element={
            <Qes1
              question={question}
              navigate={navigate}
              user={user}
              setans1={setans1}
            />
          }
        />
        <Route
          path='/q2'
          element={
            <Qes2 question={question} navigate={navigate} setans2={setans2} />
          }
        />

        <Route
          path='/q3'
          element={<Qes3 question={question} navigate={navigate} ans3={ans3} />}
        />
        <Route
          path='/q4'
          element={<Qes4 question={question} navigate={navigate} ans4={ans4} />}
        />
        <Route
          path='/q5'
          element={
            <Qes5
              question={question}
              navigate={navigate}
              setans5={setans5}
              marks={marks}
              calculatemarks={calculatemarks}
              setnavvisible={setnavvisible}
            />
          }
        />
        <Route
          path='/res'
          element={
            <Res
              question={question}
              ans1={ans1}
              ans2={ans2}
              ans3={ans3}
              ans4={ans4}
              ans5={ans5}
              user={user}
              marks={marks}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
