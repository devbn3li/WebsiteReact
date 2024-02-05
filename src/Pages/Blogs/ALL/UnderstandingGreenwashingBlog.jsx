import H1 from '../../../Components/Blog/H1'
import H2 from '../../../Components/Blog/H2'
import image from '../../../../public/assets/images/blogs/1.png';

const blogTitle = 'How to improve Web Design Process';
const writerName = 'Deepa';
const publishDate = 'December 24, 2023';
const publishTime = '5 min';
const imgSrc = image;


const Body = () => (
  <div className='flex flex-col gap-4'>
  <H1 text="Understanding Greenwashing and Its Consequences" />

  <H2 text="What is Greenwashing?" />
  <p>
  The term "greenwashing" is used across various industries, but its meaning lacks consistency, creating challenges for companies seeking clarity. For this reason, the three European Supervisory Authorities (ESAs) have offered guidance in their recent call for evidence on greenwashing. This guidance outlines core characteristics associated with greenwashing, such as misleading communications occurring intentionally or unintentionally at the entity, product, or service level. Trying to combine the various definitions proposed, greenwashing can be interpreted as: the act of providing a deceptive or inaccurate portrayal of the environmental advantages of a product, service, or organization.
  </p>

  <H2 text="Risk for Companies:" />
  <p>
    The risks for companies engaging in greenwashing are multifaceted and can have significant consequences, including:
  </p>
  <ul>
    <li>Sanction & Litigation: Currently, governmental bodies are proactively overseeing and evaluating companies' claims, imposing penalties for breaches of regulations, while companies face the growing risk of legal action from vigilant consumers and advocates who are highly aware of environmental issues. Greenwashing not only exposes companies to fines, penalties, and legal repercussions but can also be deemed a criminal offense.</li>
    <li>Reputational Risk: The consequences of greenwashing go beyond damaging media coverage and public backlash, significantly impacting a company's reputation and eroding customer trust. In addition to external challenges, exposure to greenwashing practices can result in negative publicity, leading consumers to prefer competitors with genuine sustainability practices. This, in turn, directly causes a decline in sales, initiating a cycle of talent loss, diminished innovation, and revenue decline for the company.</li>
    <li>Shareholder Activism: Shareholders are increasingly demanding increased transparency from companies, acknowledging the significant impact of environmental, social, and governance (ESG) factors on investment returns. This emphasizes the importance of well-prepared company boards in addressing shareholder concerns, particularly regarding issues such as greenwashing. Shareholders have the ability to exercise their voting authority by objecting to specific proposals presented at general meetings, thereby exerting influence and holding companies accountable for their sustainability practices.</li>
  </ul>

  <H2 text="How to counter it:" />
  <p>
    The tools available to companies to reduce the risks of greenwashing are numerous, including:
  </p>
  <ul>
    <li>Legislation and Regulations: The current regulatory landscape regarding greenwashing is fragmented, varying based on region, sector, and product. However, recent interventions such as the EU Taxonomy Regulation and the Corporate Sustainability Reporting Directive (CSRD) aim to establish a common language and impose more stringent obligations on companies. These regulations seek to increase transparency and combat greenwashing practices.</li>
    <li>Education and Awareness: Raising awareness is vital in combating greenwashing, and companies play a pivotal role in this regard. They can actively share insights, experiences, and knowledge within their industry to promote a culture of sustainability. Supporting and participating in recognized sustainability initiatives not only contributes to a culture of sustainability but also reinforces a commitment to authentic environmental stewardship.</li>
    <li>Third-Party Auditors: The involvement of third-party independent auditors is crucial in addressing greenwashing. These auditors provide an unbiased and objective evaluation of sustainability claims, enhancing credibility and transparency. External scrutiny helps build trust among stakeholders by verifying the authenticity of environmental initiatives and preventing deceptive practices.</li>
  </ul>
</div>
);

const UnderstandingGreenwashingBlog = () => {
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
      <div className='overflow-hidden border-2 rounded-xl mb-24 aspect-[2/1] '>
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

export default UnderstandingGreenwashingBlog
;
