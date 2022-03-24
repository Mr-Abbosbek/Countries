import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import AllBlogList from "./AllBlogList";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Heder from "./Heder";
import './../style/media.css';
import './../style/style.css';
import PostServerApi from './../API/PostServiceApi';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function SmallRouter() {

  return (
    <BrowserRouter>
      <div className="header shadow-sm w-100 py-3 position-fixed">
        <Heder />
      </div>
      <div className="App">
        <Switch>
          <Route path="/" component={AllBlog} exact />
          <Route path="/name/:name" component={Single} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


const AllBlog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postError, setPostError] = useState(false);
  
  async function fetchPosts(){
    try{
      setIsLoading(true);
      const data = await PostServerApi.getAllPost();
      setPosts(data);
    } catch(e){
      setPostError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

    return (
      <div>
        <AllBlogList post={posts} key={posts.id} isLoading={isLoading} postError={postError} />
      </div>
    )
}

const Single = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postError, setPostError] = useState(false);
  
  async function fetchPosts(){
    try{
      setIsLoading(true);
      const data = await PostServerApi.getAllPost();
      setPosts(data);
    } catch(e){
      setPostError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

    return (
      <div>
        <SingleBlog post={posts} key={posts.id} isLoading={isLoading} postError={postError} />
      </div>
    )
}


export default SmallRouter;
