const Header = (props) => {
  console.log(props.course)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props.content)
  const items = props.content
  const listItems = items.map((element, index) =>
    <Part key={index}
      name = {element[0]} number = {element[1]}
    />
  );
  return (
    <>{listItems}</>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>{props.name}, {props.number}</p>
  )
}

const Total = (props) => {
  console.log(props.total)
  return(
    <p>{props.total}</p>
  )
}

const App = () => {
  //  <!-- <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> -->
  const course = 'Half Stack application development'

  const content = [[ 'Fundamentals of React', 10 ], [ 'Using props to pass data', 7 ], [ 'State of a component', 14 ]]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total = {content[0][1] + content[1][1] + content[2][1]} />
    </div>
  )
}

export default App