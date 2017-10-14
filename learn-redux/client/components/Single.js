import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo'
import Comments from './Comments';
//import comments

const Single = React.createClass({
  render() {
  	//index of the post
  	//

  	const i =this.props.post.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i]
    const postComments = this.props.comments[this.props.params.postId] || []
    return (
      <div className="single-photo">
       <Photo i={i} post={post} {...this.props} />
       <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single;