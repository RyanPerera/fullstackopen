import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const items = props.content
  const listItems = items.map((element, index) =>
    <Part key={index}
      name={element.name} number={element.exercises}
    />
  );
  return (
    <>{listItems}</>
  )
}

const Part = (props) => {
  return (
    <p>{props.name}, {props.number}</p>
  )
}

const Total = (props) => {
  const total = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
  return (
    <p>{total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
      <div>{counter}</div>
    </div>
  )
}

export default App