import BlogCard from './BlogCard';
import SolutionHero from '../Hero_Services/Hero_Services';

function BlogCardsList() {
 // Array of blog objects
 const blogs = [
    {
      img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
      title: "Empowering for Sustainable Success: Navigating Complexities and Driving Unified Action",
      description:
        " In today's business landscape, the responsibility of driving sustainability initiatives often falls on the CEO. However, the success of these endeavors heavily relies on the collective efforts of the leadership team. To avoid any accusations of Greenwashing, it's crucial for the business leaders to actively participate in monitoring and tracking sustainability goals within their respective teams.",
      author: "Deppa",
      date: "February 1, 2024",
      readingTime: "5 min read",
      link: "/blog/all/Empowering-for-Sustainable-Success",
    },
    {
      img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
      title: "Empowering the C Suite for Sustainable Success",
      description:
        " In today's business landscape, the responsibility of driving sustainability initiatives often falls on the CEO. However, the success of these endeavors heavily relies on the collective efforts of the C-suite team. To avoid any accusations of Greenwashing, it's crucial for the C-suite leaders to actively participate in monitoring and tracking sustainability goals within their respective teams.",
      author: "Deppa",
      date: "February 5, 2024",
      readingTime: "8 min read",
      link: "/blog/all/Empowering-the-C-Suite-for-Sustainable-Success",
    },
    {
      img: "../../../public/assets/images/business-people-shaking-hands-together.avif",
      title: "Understanding Greenwashing and Its Consequences",
      description:
        " The term greenwashing is used across various industries, but its meaning lacks consistency, creating challenges for companies seeking clarity. For this reason, the three European Supervisory Authorities (ESAs) have offered guidance in their recent call for evidence on greenwashing. This guidance outlines core characteristics associated with greenwashing, such as misleading communications occurring intentionally or unintentionally at the entity, product, or service level. Trying to combine the various definitions proposed, greenwashing can be interpreted as: the act of providing a deceptive or inaccurate portrayal of the environmental advantages of a product, service, or organization.",
      author: "Deppa",
      date: "February 2, 2024",
      readingTime: "10 min read",
      link: "/blog/all/Understanding-Greenwashing-and-Its-Consequences",
    },
  ];

  return (
    <div className="container  mx-auto py-8 mt-20 px-[5%]">
        <SolutionHero
        title={"Learn from our impact makers"}
        subtitle={"Our blog is a great resource for learning about the latest trends in sustainability, ESG, and corporate governance."}
      
       />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogCardsList