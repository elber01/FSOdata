
import {Part, Content} from './components/Course.jsx'

const App = () => {


 const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

 /*const total = courses.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)*/

  return ( 
 <div>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Content parts={course.parts} />
         
          <strong>
            Total of: {course.parts.reduce((s, p) => s + p.exercises, 0) +" exercises"}
          </strong>
        </div>
      ))}
    </div>
  );
};


export default App