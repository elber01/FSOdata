 export const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

 export const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)