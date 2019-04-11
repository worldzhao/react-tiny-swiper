import React, { Component } from 'react'
import ToolBox from 'react-tiny-swiper'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'

console.log('====================================')
console.log(ToolBox)
console.log('====================================')
const { Swiper } = ToolBox
export default class TestSwiper extends Component {
  componentDidMount() {
    // do sth
  }
  render() {
    const items = [
      {
        imgurl: img1,
      },
      {
        imgurl: img2,
      },
      {
        imgurl: img3,
      },
      {
        imgurl: img4,
      },
      {
        imgurl: img5,
      },
      {
        imgurl: img6,
      },
    ]
    const setting = {
      width: 730,
      height: 336,
      autoplay: true,
      autoplayInterval: 3000,
      arrows: true,
      arrowsType: 'dark',
      dots: true,
      dotsColor: '#bc2f2e',
      dotsSize: 'large',
    }
    return (
      <Swiper {...setting}>
        {items.map(item => (
          <div key={item.imgurl}>
            <img src={item.imgurl} alt="slick" key="item.imgurl" />
          </div>
        ))}
      </Swiper>
    )
  }
}
