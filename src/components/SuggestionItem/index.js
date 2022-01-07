// Write your code here
import './index.css'

const SuggetionItem = props => {
  const {suggetionList, addSuggestion} = props
  const {suggestion} = suggetionList
  const onAddSuggestion = () => {
    addSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggetion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-class"
        onClick={onAddSuggestion}
      />
    </li>
  )
}

export default SuggetionItem
