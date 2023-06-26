/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import './index.css'
import SliderContext from '../../context/SlideContext'

class SlideListItem extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details

    return (
      <SliderContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyling = isActive ? 'active-styling' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-number">{serialNumber}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default SlideListItem
