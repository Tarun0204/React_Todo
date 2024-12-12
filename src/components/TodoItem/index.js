import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title, isCompleted} = todoDetails

  const [isEditMode, setIsEditMode] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [isChecked, setIsChecked] = useState(isCompleted)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onStatusChange = () => {
    setIsChecked(prevState => !prevState)
  }

  const onTitleChange = event => {
    setCurrentTitle(event.target.value)
  }

  const toggleEditMode = () => {
    setIsEditMode(prevState => !prevState)
  }

  const renderTitle = () => {
    if (isEditMode) {
      return (
        <input
          type="text"
          value={currentTitle}
          onChange={onTitleChange}
          className="edit-input"
        />
      )
    }
    return (
      <p className={isChecked ? 'title completed' : 'title'}>{currentTitle}</p>
    )
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={isChecked} onChange={onStatusChange} />
      {renderTitle()}
      <button type="button" className="edit-btn" onClick={toggleEditMode}>
        {isEditMode ? 'Save' : 'Edit'}
      </button>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
