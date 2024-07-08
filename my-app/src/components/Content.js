import React, { Component } from "react";
import css from "./css/Content.module.css";
import postsData from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({
        //         isLoaded: true,
        //         posts: postsData.savedPosts,
        //     })
        // }, 2000)
        this.setState({
            isLoaded: true,
            posts: postsData.savedPosts,
        })
    }
    
    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = postsData.savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input
                            type="search"
                            placeholder="By Author"
                            id="searchInput"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content