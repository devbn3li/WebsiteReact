
import H1 from '../../Components/Blog/H1'
import H2 from '../../Components/Blog/H2'
import image from '../../../../public/assets/images/blogs/1.png';

const blogTitle = 'How to improve Web Design Process';
const writerName = 'Deepa';
const publishDate = 'December 24, 2023';
const publishTime = '5 min';
const imgSrc = image;


const Body = () => (
  <div className='flex flex-col gap-4'>
    <H1 text="Shaping a Sustainable Future: Decoding the Environmental, Social, and Governance Factors" />
    <p>
      In an era marked by rising social consciousness and heightened environmental concerns, the acronym "ESG" has risen to prominence, captivating the attention of investors, businesses, and consumers alike. But what exactly does ESG stand for, and how do these factors interweave to impact our world? This below aims to demystify the essential elements of ESG, offering a foundation for further exploration and informed decision-making.
    </p>

    <H2 text="E is for Environment:" />
    <p>
      This pillar addresses the impact of an organization's activities on the natural world. Key considerations include climate change mitigation, resource management, energy efficiency, water management, pollution control, and biodiversity conservation. Businesses demonstrating a commitment to environmental sustainability are increasingly viewed as responsible and forward-thinking, attracting stakeholders who prioritize a healthy planet.
    </p>

    <H2 text="S is for Social:" />
    <p>
      This facet focuses on the social impact of an organization's operations and practices. Areas of concern encompass employee well-being, diversity and inclusion, community engagement, human rights, and responsible sourcing. By demonstrating ethical treatment of employees, fostering responsible sourcing practices, and promoting social justice, organizations can build trust and loyalty with stakeholders who value responsible conduct.
    </p>

    <H2 text="G is for Governance:" />
    <p>
      This final pillar pertains to the internal practices and structures that guide an organization. Transparency, accountability, risk management, board composition, and executive compensation are all key elements here. Strong governance ensures alignment with stakeholder interests, minimizes risks, and fosters ethical decision-making within the organization.
    </p>

    <p>
      Understanding the interconnectedness of these three pillars is crucial. For example, adopting environmentally friendly practices (E) may positively impact employee health and well-being (S). Conversely, strong governance (G) can ensure transparent reporting on environmental and social performance, fostering trust with stakeholders.
    </p>

    <H2 text="Importance of ESG Factors:" />
    <p>
      ESG factors provide a comprehensive framework for evaluating the sustainability and ethical impact of companies and investments. By considering these factors, investors and stakeholders can make informed decisions that align with their values and contribute to a more sustainable and responsible economy. ESG factors encourage companies to adopt sustainable practices and improve their social impact. By integrating environmental considerations, companies can reduce resource consumption, minimize waste generation, and lower their carbon emissions. This not only benefits the environment but also contributes to cost savings and operational efficiency. Considering social factors helps companies prioritize fair treatment of employees, diversity and inclusion, and community engagement. By fostering a positive work environment and engaging with communities, companies can enhance their reputation, attract top talent, and build long-term relationships with stakeholders. Governance factors ensure that companies have strong leadership and ethical practices. Transparent decision-making processes and effective risk management reduce the likelihood of fraud or unethical behavior, protecting investors and stakeholders.
    </p>
  </div>
);

const ShapingASustainableFuture = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col box-border px-[5%] items-center mt-[4.5rem] text-[#121212] max-w-[1400px]'>
        <div className='flex flex-col max-w-[80rem] mt-24 gap-[40px] pb-[40px]'>
          <H1 text={blogTitle} />
          <div>
            <h4>{writerName}</h4>
            <span>{publishDate} • {publishTime}</span>
          </div>
        </div>
        <div className='overflow-hidden rounded-xl mb-24 aspect-[2/1] '>
          <img src={imgSrc} alt={blogTitle} className="min-h-full min-w-full object-cover" />
        </div>
        <div className='max-w-[80rem]'>
          <Body />
        </div>
        {/* <div>
        <div className="flex justify-between">
          <h1 className='font-bold text-[28px] my-7'>You may also like</h1>
          <Link to="/blog" className="text-[#121212] pb-1 border-b border-b-[#121212]">View all</Link>
        </div>
        <div className="flex flex-wrap mb-10">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default ShapingASustainableFuture;
