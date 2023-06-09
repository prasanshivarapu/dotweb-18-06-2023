import './index.css'

// registrationStatus
// id,

const EventItem = props => {
  const {happy, todo} = props
  const {name, location, imageUrl, id} = happy

  const dance = () => {
    todo(id)
  }

  return (
    <div>
      <div className="main11">
        <div>
          <button type="button" className="btn" onClick={dance}>
            <img src={imageUrl} alt={name} className="img" />
            <p>{name}</p>
            <p>{location}</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventItem
