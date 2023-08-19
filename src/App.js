import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from './components/TagItem'
import Task from './components/Task'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    taskTag: tagsList[0].optionId,
    tasksList: [],
    userInput: '',
    selectedTag: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  tagChanged = event => {
    this.setState({taskTag: event.target.value})
  }

  addTask = () => {
    const {userInput, taskTag} = this.state
    const taskDet = {userInput, tag: taskTag, id: uuidv4()}
    this.setState(prevState => ({
      userInput: '',
      taskTag: tagsList[0].optionId,
      tasksList: [...prevState.tasksList, taskDet],
    }))
  }

  selectedTag = id => {
    const {selectedTag} = this.state
    if (selectedTag === id) {
      this.setState({selectedTag: ''})
    } else {
      this.setState({selectedTag: id})
    }
  }

  render() {
    const {userInput, tasksList, selectedTag, taskTag} = this.state
    const filteredTasks = tasksList.filter(each =>
      each.tag.includes(selectedTag),
    )

    return (
      <div className="bg-cont">
        <div className="left-cont">
          <h1 className="left-head">Create a task!</h1>
          <form className="form">
            <label className="label" htmlFor="task">
              Task
            </label>
            <input
              type="text"
              placeholder="Enter the task here"
              id="task"
              value={userInput}
              className="box"
              onChange={this.onChangeUserInput}
            />
            <label htmlFor="select" className="label">
              Tags
            </label>
            <select
              id="select"
              className="select"
              onChange={this.tagChanged}
              value={taskTag}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </form>
          <button type="button" className="add-button" onClick={this.addTask}>
            Add Task
          </button>
        </div>
        <div className="right-cont">
          <h1 className="right-head">Tags</h1>
          <ul className="tag-cont">
            {tagsList.map(each => (
              <TagItem
                item={each}
                isActive={each.optionId === selectedTag}
                key={each.optionId}
                selectedTag={this.selectedTag}
              />
            ))}
          </ul>
          <h1 className="right-head">Tasks</h1>
          <div className="task-add-cont">
            {filteredTasks.length === 0 ? (
              <p className="no">No Tasks Added Yet</p>
            ) : (
              <ul className="task-cont">
                {filteredTasks.map(each => (
                  <Task item={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
