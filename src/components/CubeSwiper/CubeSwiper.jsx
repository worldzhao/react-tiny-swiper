import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/CubeSwiper.styl'

const rotateMap = [
  'rotate1',
  'rotate2',
  'rotate3',
  'rotate4',
  'rotate5',
  'rotate6',
]

export default class CubeSwiper extends Component {
  static propTypes = {
    outerWidth: PropTypes.number,
    // imgWidth: PropTypes.number,
    dots: PropTypes.bool,
    dotsColor: PropTypes.string,
    arrows: PropTypes.bool,
  }

  static defaultProps = {
    outerWidth: 600,
    // imgWidth: 300,
    arrows: true,
    dots: true,
    dotsColor: '#000',
  }

  state = {
    dotsConfig: [],
    rotateClass: rotateMap[0],
    index: 0,
  }

  componentWillMount() {
    const { dots } = this.props
    dots &&
      this.setState({
        dotsConfig: new Array(6)
          .join()
          .split(',')
          .map((v, i) => ({
            index: i,
            status: false,
          })),
      })
  }
  componentDidMount() {
    // do something
    console.log('cube swiper')
  }
  init = () => {}

  pre = () => {
    let { index } = this.state
    if (index === 0) {
      index = 5
      this.setState({
        rotateClass: rotateMap[index],
      })
    } else {
      index -= 1
      this.setState({
        rotateClass: rotateMap[index],
      })
    }
  }

  next = () => {
    let { index } = this.state
    if (index === 5) {
      index = 0
      this.setState({
        rotateClass: rotateMap[index],
      })
    } else {
      index += 1
      this.setState({
        rotateClass: rotateMap[index],
      })
    }
  }

  dotsHandleClick = (i) => {
    this.setState({
      index: i,
      rotateClass: rotateMap[i],
    })
  }

  checkActive = () => {}

  render() {
    const { dotsConfig, rotateClass } = this.state
    const {
      children,
      outerWidth,
      // imgWidth,
      dots,
      arrows,
      dotsColor,
    } = this.props
    return (
      <div className="cube-container" style={{ width: outerWidth }}>
        <div className="cube-wrap">
          <div className={`cube ${rotateClass}`}>{children}</div>
        </div>
        {arrows && (
          <div className="arrows">
            <span className="pre-arrow" onClick={this.pre} />
            <span className="next-arrow" onClick={this.next} />
          </div>
        )}
        {dots && (
          <div className="indicators">
            {dotsConfig.map((v, i) => (
              <span
                className="indicator"
                data-index={i}
                key={v.index}
                style={{ background: v.status ? `${dotsColor}` : '#e5e5e5' }}
                onClick={(i) => {
                  this.dotsHandleClick(i)
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}
