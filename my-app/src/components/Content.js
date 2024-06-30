import React, { Component } from 'react';
import css from './css/Content.module.css';
import postsData from '../posts.json';
import PostItem from "./PostItem";

export class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={CSS.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={CSS.SearchResults}>
                    {/* {
                        postsData.savedPosts.map((post) => {
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt="random" />
                                <p>{post.description}</p>
                            </div>
                        })
                    } */}

                    <PostItem savedPosts={postsData.savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content