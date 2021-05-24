import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects your components to the store provided by the Provider
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nextProps) {
        const { newPost } = nextProps;
        if (newPost) this.props.posts.unshift(newPost);
    }
    
    render() {

        return (
            <div>
                <h1>Posts</h1>
                {
                    this.props.posts.map((post) => {
                        const { id, title, body } = post;
                        return (
                            <div key={id}>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

// get state from redux and map it to properties of this component
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
