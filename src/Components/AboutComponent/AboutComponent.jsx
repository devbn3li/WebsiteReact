import largeImg from "../../../public/assets/images/handImage.webp";
import image1 from "../../../public/assets/images/image1.jpg";
import image2 from "../../../public/assets/images/image2.webp";
import image3 from "../../../public/assets/images/image3.avif";
import image4 from "../../../public/assets/images/image4.avif";

const AboutComponent = () => {
  const imageSources = [image1, image2, image3, image4];

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
