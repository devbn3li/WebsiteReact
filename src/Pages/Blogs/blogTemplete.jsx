import React, { useEffect, useState } from 'react';
import Quote from '../../Components/Blog/Quote'
import H1 from '../../Components/Blog/H1'
import H2 from '../../Components/Blog/H2'
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import BlogCard from '../../Components/BlogCard/BlogCard';


const generateBody = (content) => {
  const bodyElements = content.map((element, index) => {
    switch (element.type) {
      case 'h1':
        return (<H1 key={index} text={element.data} />);

      case 'h2':
        return (<H2 key={index} text={element.data} />);

      case 'p':
        return (<p key={index}>{element.data}</p>);

      case 'quote':
        return (<Quote key={index} text={element.data} />);
      default:
        return null;
    }
  });

  return (
    <div className="flex flex-col gap-4">
      {bodyElements}
    </div>
  );
}


const BlogTemplete = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Assume you have a json file `posts.json` in the public folder
    // or an API endpoint that returns your posts
    fetch(`/src/data/posts.data.json`)
      .then((response) => response.json())
      .then((data) => {
        // Find the post with the matching id
        const matchingPost = data.find((p) => p['id'].toString() === id);
        setPost(matchingPost);
      });
  }, [id]);

  console.log(post);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center box-border px-[5%] justify-center mx-auto mt-[4.5rem] text-[#121212] max-w-[1400px]'>
      <div className='flex flex-col max-w-[80rem] mt-24 gap-[40px] pb-[40px]'>
        <H1 text={post.title} />
        <div>
          <h4 className='font-bold'>LevelUp</h4>
        </div>
      </div>
      <div className='overflow-hidden rounded-xl mb-24 aspect-[2/1] '>
        <img src={post.image} alt={post.title} className="min-h-full min-w-full object-cover" />
      </div>
      <div className='max-w-[80rem]'>
        {generateBody(post.content)}
      </div>
    </div>
  );
}

export default BlogTemplete;
