import largeImg from "../../../public/assets/images/handImage.webp";

const AboutComponent = () => {
  const imageSources = [
    "https://media.istockphoto.com/id/1359584148/photo/esg-or-environmental-social-governance-the-company-development-of-a-nature-conservation.jpg?s=612x612&w=0&k=20&c=_sg09QMG8EsGHOjJpknHn5LPEPznkFK4rP8iAWegVgU=",
    "https://www.touchpoint.com/wp-content/uploads/2023/11/Featured-image-copy.png",
    "https://img.freepik.com/free-photo/view-green-forest-trees-with-co2_23-2149675039.jpg?w=1380&t=st=1706137349~exp=1706137949~hmac=76a51d4888c43974e55eefc15ed63456daedeedcd86706951842b95a40db6216",
    "https://img.freepik.com/premium-photo/esg-environmental-social-governance-sustainable-industry-global-warming-reduction-concept_539854-1823.jpg?w=826",
  ];

  return (
    <div className="w-full flex   justify-center">
      <section className="about-us max-w-7xl ">
        <div className="px-[5%] w-full py-28">
          <div className="text-center mb-20">
            <div className="mx-auto max-w-3xl font-sans">
              <h2 className=" text-[#112b65]  mb-4 text-4xl max-w-[1000px] font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ">
                About us
              </h2>
              <p className="text-lg text-[#112b65] mb-8  font-normal lg:text-xl  ">
                At LevelUp, we&apos;re a passionate team of sustainability
                experts and scientists with a mission: to make ESG practices
                achievable for businesses of all sizes. We achieve this by
                offering innovative and affordable ESG solutions alongside
                expert advice.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <img
                src={largeImg}
                alt="Large img"
                className="w-full object-cover rounded-2xl cursor-pointer"
              />
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {imageSources.slice(0).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="image"
                  className="w-full object-cover h-full rounded-2xl cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
