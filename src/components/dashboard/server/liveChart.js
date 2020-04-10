import React, { Component, Fragment } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const primary = localStorage.getItem('primary_color') || '#4466f2'

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w

  return (function () {
    // eslint-disable-next-line
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0
        x2 = 2.0 * Math.random() - 1.0
        w = x1 * x1 + x2 * x2
      } while (w >= 1.0)

      w = Math.sqrt((-2.0 * Math.log(w)) / w)
      return x1 * w
    } else {
      return x2 * w
    }
  })()
}

class LiveChart extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()]),
        }),
      500,
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Fragment>
        <div className="flot-chart-placeholder" id="cpu-updating">
          <Sparklines data={this.state.data} limit={20}>
            <SparklinesLine color={primary} style={{ strokeWidth: 0.4 }} />
          </Sparklines>
        </div>
      </Fragment>
    )
  }
}

export default LiveChart
