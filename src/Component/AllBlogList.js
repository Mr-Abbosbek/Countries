import React, { useState, useMemo } from "react";
import Blogs from "./Blogs";
import FormList from "./FormList";

function AllBlogs(data) {
  const post = data.post;
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [select, setSelect] = useState({option: ""});

  const selectRegion = useMemo(() => {
      if (select.option.length) {
      setFilter({query: "" })
      const newItem = [...post].filter((item) => item.region === select.option);
      return newItem;
    }
    return post;
  }, [select.option, post]);

  console.log(select.option);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...post].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return post;
  }, [filter.sort, post]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((res) =>
      res.name.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);



  return (
    <div>
      <FormList filter={filter} setFilter={setFilter} select={select} setSelect={setSelect} />
       
        {
          (filter.query)
          ? <Blogs isLoading={data.isLoading} postError={data.postError} post={sortedAndSearchPosts} key={sortedAndSearchPosts.id} /> :
          (select.option)
          ? <Blogs isLoading={data.isLoading} postError={data.postError} post={selectRegion} key={selectRegion.id} />
          : <Blogs isLoading={data.isLoading} postError={data.postError} post={post} key={post.id} />
        }
        
    </div>
  );
}

export default AllBlogs;
