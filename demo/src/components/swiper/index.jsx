import React, { Component } from 'react'
import ToolBox from 'react-simple-swiper'

const { Swiper } = ToolBox
export default class App extends Component {
  componentDidMount() {
    // do sth
  }
  render() {
    const items = [
      {
        imgurl: 'http://p1.music.126.net/CH-2t5r30b8R-R_NegR2wg==/109951163204412773.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/_AwNVzAV98JvvsIf-5qsRQ==/109951163204453498.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/EFP2ghhlZdO_XEC9yIdopw==/109951163203511401.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/QmQVr9i9paIt29oliTRsaQ==/109951163203026211.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/OJ_FB4X8YLW3N6Ck3gcQxA==/109951163204513240.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/SjA6t1xFG_QOXVmbtf8Sjw==/109951163204460397.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/SPGHjI1hS55RWBjV8bF5pw==/109951163200028103.jpg',
      },
      {
        imgurl: 'http://p1.music.126.net/sMHXjO1kiBRktX6XYfn3eg==/109951163204470542.jpg',
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
            <img src={item.imgurl} alt="slick" />
          </div>
      ))}
      </Swiper>
    )
  }
}

