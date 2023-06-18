import {Component} from 'react'

import './index.css'

class Mainpage extends Component {
  state = {name: '', email: '', mobile: '', state: '', error: false}

  nameIn = event => {
    this.setState({name: event.target.value})
  }

  emailIn = event => {
    this.setState({email: event.target.value})
  }

  mobileIn = event => {
    this.setState({mobile: event.target.value})
  }

  stateIn = event => {
    this.setState({state: event.target.value})
  }

  submited = event => {
    event.preventDefault()
    const {name, email, mobile, state} = this.state
    if (name === '' && email === '' && mobile === '' && state === '') {
      this.setState({error: true})
    }
  }

  render() {
    const {error} = this.state
    return (
      <div className="mainpage">
        <div className="get">
          <div className="book">
            <li className="h1">Book a Free Consultation</li>
            <li className="with">Get response within 24 hours</li>
            <hr className="line" />
          </div>
          <form className="form" onSubmit={this.submited}>
            <div>
              <div className="name1">
                <div>
                  <div className="her">
                    <input
                      type="text"
                      className="inputcl"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      onChange={this.nameIn}
                    />
                  </div>
                  <div className="her">
                    <input
                      className="inputcl"
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      onChange={this.mobileIn}
                    />
                  </div>
                </div>
                <div>
                  <div className="her">
                    <input
                      className="inputcl"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.emailIn}
                    />
                  </div>

                  <div className="her">
                    <select className="inputcl">
                      <option value="">-- Select State --</option>
                      <option value="1">State 1</option>
                      <option value="2">State 2</option>
                      <option value="3">State 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn">
              <button className="button" type="submit">
                SEND NOW
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="doc">Documents required to obtain an AYUSH Licence</h1>
        </div>
      </div>
    )
  }
}

export default Mainpage
