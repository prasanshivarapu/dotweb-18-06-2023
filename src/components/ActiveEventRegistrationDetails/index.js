import './index.css'

const final = {
  notR: 'notRegistered',
  closedR: 'rclosed',
  initial: 'initial',
  register: 'Register',
}

const ActiveEventRegistrationDetails = props => {
  const {happu} = props

  const notRegistered = () => (
    <div>
      <img
        className="imgr2"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="notings">Not registered</p>
    </div>
  )

  const registered = () => (
    <div>
      <img
        className="imgr"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <p>Registeres</p>
    </div>
  )

  const reClosed = () => (
    <div>
      <img
        className="imgr"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
      />
      <p>Stay tuned we will open registration soon</p>
    </div>
  )
  const noting = () => (
    <div className="noting">
      <h1 className="notings">nothing to view</h1>
    </div>
  )

  const getresult = () => {
    switch (happu) {
      case 'YET_TO_REGISTER':
        return notRegistered()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return reClosed()
      default:
        return noting()
    }
  }
  return <div className="cen">{getresult()}</div>
}
export default ActiveEventRegistrationDetails
