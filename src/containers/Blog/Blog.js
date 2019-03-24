import React, { Component } from 'react';
import { Route,NavLink,Switch,Redirect } from 'react-router-dom';
//import axios from 'axios';
//import axios from '../../axios';
// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    // state = {
    //     posts: [],
    //     selectedPostId:null,
    //     error:false
    // }

    state = {
        auth:true
    }

    // componentDidMount(){
    //     axios.get('/posts')
    //         .then(response => {
    //             const posts = response.data.slice(0,4);
    //             //console.log(posts);
    //             const updatePosts = posts.map(post => {
    //                     return {
    //                         ...post,
    //                         author:'Max' 
    //                     }
    //             });
    //             this.setState ({posts : updatePosts});
    //             //console.log(response);
    //         })
    //         .catch(error => {
    //             this.setState ({error : true});
    //         });
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId:id});
    // }

    render () {
        // let posts = <p style={{textAlign:'center'}}>Something Went Wrong</p>;
                        
        // if(!this.state.error){
        //  posts = this.state.posts.map(post => {
        //    return <Post key={post.id} 
        //    title={post.title} 
        //    body={post.body} 
        //    Author={post.author}
        //    clicked = {() => this.postSelectedHandler(post.id)}/>
        // });
    

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */
                            }
                            <li><NavLink to="/posts/" exact
                                activeClassName= "my-active"
                                activeStyle= {{
                                        color:'#fa923f',
                                        textDecoration:'underline'
                                }}
                                    >Home</NavLink></li>
                            <li><NavLink to={{
                                            pathname:'/new-post',
                                            hash:'#submit',
                                            search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                
                <Switch>
                {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}></Route> : null}
                {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost}></Route> : null} */}
                <Route path="/posts" component={Posts}></Route>
                
                <Route render={() => <h1>Not found</h1> }></Route>

                {/* //guard */}
                 {/* <Redirect from="/" to ="/posts"></Redirect> */}
                 
                 {/* <Route path="/" component={Posts}></Route>  */}
                {/* <Route path="/:id" exact component={FullPost}></Route> */}
                </Switch>
                {/* <Posts/> */}
                {/* <section className="Posts">
                   {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;