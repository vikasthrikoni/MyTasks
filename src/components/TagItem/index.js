import './index.css'

const TagItem = props => {
  const {item, selectedTag, isActive} = props
  const {optionId, displayText} = item
  const buttonStyle = isActive ? 'active' : 'normal'
  const selected = () => {
    selectedTag(optionId)
  }
  return (
    <li className="tag">
      <button className={buttonStyle} type="button" onClick={selected}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
