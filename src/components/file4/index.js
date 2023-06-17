import {Component} from 'react'

import './index.css'

class Expert extends Component {
  state = {isrun: true}

  btn = () => {
    this.setState(p => ({isrun: !p.isrun}))
  }

  render() {
    const {isrun} = this.state
    return (
      <div className="last">
        <div className="inside">
          <div>
            <h1 className="free">Free Consultation by Expert</h1>
          </div>
          <form>
            <div className="her">
              <input
                className="input5"
                type="text"
                id="name"
                name="name"
                placeholder="name"
                onChange={this.nameIn}
              />
            </div>
            <div className="her">
              <input
                type="email"
                className="input5"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.emailIn}
              />
            </div>

            <div className="match">
              <p1 className="mat1">+91</p1>

              <div className="her">
                <input
                  type="tel"
                  className="input6"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile no"
                  onChange={this.mobileIn}
                />
              </div>
            </div>
            <div className="her">
              <select className="input5">
                <option value="">-- Select State --</option>
                <option value="1">State 1</option>
                <option value="2">State 2</option>
                <option value="3">State 3</option>
              </select>
            </div>
            <div className="con">
              <button type="button" className="btn3">
                GET STARTED NOW
              </button>
            </div>
          </form>
        </div>
        {isrun ? (
          <div>
            <button type="button" onClick={this.btn} className="btn5">
              <img
                className="img5"
                src="https://res.cloudinary.com/dzleppv07/image/upload/v1687023389/right-and-wrong-vector-design-illustration-isolated-on-transparent-background-free-png_ibfbhh.png"
              />
            </button>
            <div className="close">
              <div className="wr">
                <div className="res">
                  <div className="down">
                    <img
                      className="img"
                      src="https://res.cloudinary.com/dzleppv07/image/upload/v1687022674/640px-WhatsApp.svg_f4auv8.png"
                    />
                    <p>Chat on whatsapp</p>
                  </div>
                  <div className="down">
                    <img
                      className="img"
                      src="https://res.cloudinary.com/dzleppv07/image/upload/v1687022850/800px-IMessage_logo.svg_cuk0yn.png"
                    />
                    <p>Hey Im suchi! lets talk</p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dzleppv07/image/upload/v1687023164/b4c76dae-843f-4d89-ba51-2c0848cbdf24.8d4fc650ec52975fa2836e55355239c9_mdkazl.jpg"
                />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Expert
