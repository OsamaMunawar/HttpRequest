import React , {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

        state = {
        posts: []
        //selectedPostId:null,
        //error:false
    }

    componentDidMount(){
        //yeh function tb bhi chalta hai jab page change hota hai
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                //console.log(posts);
                const updatePosts = posts.map(post => {
                        return {
                            ...post,
                            author:'Max' 
                        }
                });
                this.setState ({posts : updatePosts});
                //console.log(response);
            })
            .catch(error => {
                this.setState ({error : true});
            });
    }


    postSelectedHandler = (id) => {
        console.log('postSelectedHandler '+ id);
        //this.props.history.push({pathname:'/posts/' + id});
        this.props.history.push('/posts/' +id);
        //this.setState({selectedPostId:id});
     }

    render() {
        let posts = <p style={{textAlign:'center'}}>Something Went Wrong</p>;
                        
        if(!this.state.error){
         posts = this.state.posts.map(post => {
           return ( 
        //    <Link to= {'/posts/'+post.id} key={post.id} >
        //    <Post 
        //    //key={post.id} 
        //    title={post.title} 
        //    body={post.body} 
        //    Author={post.author}
        //    clicked = {() => this.postSelectedHandler(post.id)}
        //    />
        //    </Link>
            <Post 
           key={post.id} 
           title={post.title} 
           body={post.body} 
           Author={post.author}
           clicked = {() => this.postSelectedHandler(post.id)}
           />
           )
        });
    }
        return (
            <div>            
                <section className="Posts">
                   {posts}
                </section>
                 <Route path="/posts/:id" exact component={FullPost}></Route>
                </div>
        ); 
    }
}

export default Posts;