// Write your code here
import {Component} from 'react'
import SuggetionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addSuggestion = suggestion => {
    this.setState(() => ({searchInput: suggestion}))
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const searchList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="content-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-class"
              value={searchInput}
              onChange={this.changeInput}
            />
          </div>
          <ul className="list-container">
            {searchList.map(eachSuggetion => (
              <SuggetionItem
                suggetionList={eachSuggetion}
                key={eachSuggetion.id}
                addSuggestion={this.addSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
