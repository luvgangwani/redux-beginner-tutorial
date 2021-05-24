import React, { Component } from 'react'
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';

export class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const { title, body } = this.state;
        this.props.createPost({ title, body });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label>Body:</label><br />
                        <textarea
                            rows="4"
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// // get dispatch functions from redux and map it to properties of this component
const mapDispatchToProps = { createPost };

export default connect(null, mapDispatchToProps)(PostForm)
