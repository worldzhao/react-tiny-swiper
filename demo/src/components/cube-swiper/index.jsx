import React, { Component } from 'react'
import ToolBox from 'react-tiny-swiper'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'

const { CubeSwiper } = ToolBox

export default class TestCubeSwiper extends Component {
  componentDidMount() {
    // do sth
    console.log('this is cube swiper test')
  }
  render() {
    return (
      <CubeSwiper>
        <div className="cube-face front">
          <img src={img1} alt="front" />
        </div>
        <div className="cube-face back">
          <img src={img2} alt="back" />
        </div>
        <div className="cube-face left">
          <img src={img3} alt="left" />
        </div>
        <div className="cube-face right">
          <img src={img4} alt="right" />
        </div>
        <div className="cube-face top">
          <img src={img5} alt="top" />
        </div>
        <div className="cube-face bottom">
          <img src={img6} alt="bottom" />
        </div>
      </CubeSwiper>
    )
  }
}
