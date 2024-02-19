import React, {useEffect, useState} from 'react'
import BlogCard from "../../Components/BlogCard/BlogCard";

function BlogCardsResource() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
    fetch(process.env.BLOG_EXPLORE_API_URL)
        .then((response) => response.json())
        .then((data) => {
        setBlogs(Array.from(data));
        })
    }, []);

    if (!blogs) return <div>Loading...</div>;
  return (
    <div className=''> 
        <div className="container mx-auto py-8 mt-5 px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={{...blog}} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default BlogCardsResource
