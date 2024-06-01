import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Quiz from './Quiz.jsx';
import { jsQuizz } from './constants';

const App = () => {
  const [quizStarted, setQuizStarted] = React.useState(false);
  const startQuiz = () => {
    setQuizStarted(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage quizStarted={quizStarted} startQuiz={startQuiz} />,
      children: [
        {
          path: 'quiz',
          element: <Quiz questions={jsQuizz.questions} quizStarted={quizStarted} startQuiz={startQuiz} />
        }
      ]
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
