import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class BrowseSuggestion extends Component {
  state = {searchInput: '', searchHistory: this.props}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteElement = uniqueNo => {
    const {searchHistory} = this.state
    const remainingHistory = searchHistory.filter(
      eachHistory => eachHistory.id !== uniqueNo,
    )
    this.setState({searchHistory: remainingHistory})
  }

  render() {
    const {searchInput, searchHistory} = this.state
    const filteredUserData = searchHistory.filter(eachHistory =>
      eachHistory.title.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-logo"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="input-search"
              value={searchInput}
              placeholder="Search History"
              onChange={this.changeInput}
            />
          </div>
        </div>
        <div className="main-container">
          <ul className="list-container">
            {filteredUserData === null ? (
              <p>There is no history to show</p>
            ) : (
              filteredUserData.map(eachHistory => (
                <SuggestionItem
                  suggestionDetail={eachHistory}
                  key={eachHistory.id}
                  deleteItem={this.deleteElement}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowseSuggestion
