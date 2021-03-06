import React from 'react'
import { Link } from 'react-router'
import Photo from './Photo'

export default class PhotoGrid extends React.Component {
  render() {
    return (
        <div className='photo-grid'>
        {
          this.props.posts.map((post, index) => (
              <Photo
            key={index}
            post={post}
            index={index}
            {...this.props}/>
          ))
        }
      </div>)
  }
}
