import './index.css'

const HistoryItem = props => {
  const {eachHistory, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    onDeleteHistory(id)
    // console.log('ondelete-triggered')
  }

  return (
    <li className="list-item">
      <div className="larger-screen">
        <div className="history-item-container">
          <p className="time-accessed">{timeAccessed}</p>
          <img src={logoUrl} alt="domainlogo" className="logo" />
          <div className="title-container">
            <div className="inner-title-container">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
            <button
              data-testid="delete"
              onClick={onDelete}
              type="button"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="smaller-screen">
        <div className="history-item-container1">
          <p className="time-accessed1">{timeAccessed}</p>
          <div className="item-container1">
            <img src={logoUrl} alt="domain logo" className="logo1" />
            <div className="title-container1">
              <div className="inner-title-container1">
                <p className="title1">{title}</p>
                <p className="domain-url1">{domainUrl}</p>
              </div>
              <button
                data-testid="delete"
                type="button"
                onClick={onDelete}
                className="button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete-icon1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
