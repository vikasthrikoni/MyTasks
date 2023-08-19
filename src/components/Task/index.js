import './index.css'

const Task = props => {
  const {item} = props
  const {userInput, tag} = item
  return (
    <li className="task-item">
      <p className="task">{userInput}</p>
      <div className="tag-cont1">
        <p className="tag-task">{tag}</p>
      </div>
    </li>
  )
}
export default Task
