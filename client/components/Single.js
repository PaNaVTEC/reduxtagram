import React from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends React.Component {
  render() {
    const i = this.props.posts.findIndex(post => post.code === this.props.params.postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[this.props.params.postId] || []
    return (
    <div className='single-photo'>
        <Photo index={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props} />
    </div>)
  }
}
