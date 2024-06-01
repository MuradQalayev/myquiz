import React, { useState } from 'react'
import './index.scss'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const HomePage = (props) => {
  return (
    <div>
    {props.quizStarted === false ? (
      <div>
        <Button onClick={props.startQuiz}>
          <Link to={'quiz'}>Start Quiz</Link>
        </Button>
      </div>
    ) : (
      <Outlet />
    )}
  </div>
  )
}

export default HomePage