import { portfolioData } from "../constants";


const ProjectComponent = () => {
  return (
    <div>
      {portfolioData.map((data, index) => (
        <div
          className="w-full lg:max-w-[85%] flex md:mb-9 mb-6 max-md:border-2 border-[#E0E0E0] md:shadow-custom rounded-xl"
          key={index}
        >
          <div className="md:h-48 flex-none bg-cover rounded-l-xl text-center overflow-hidden lg:w-[30%] w-[32%]">
            <img
              className="object-cover object-center w-full h-full"
              src={data.img}
              alt="project-img"
            />
          </div>
          <div
            className=" bg-white p-4 flex flex-col justify-between leading-normal font-roboto rounded-r-xl w-[70%]"
          >
            <div className="mb-8">
              <div className="text-[#303030] font-medium text-[18px] mb-2">
                {data.title}
              </div>
              <p className="max-md:hidden text-[#9E95A2] font-medium text-[12px]">{data.subTitle}</p>
            </div>
            <div className="text-sm flex justify-between">
                <div>
                <p className="text-[#303030] font-normal text-[12px] leading-none">{data.title2}</p>
                <p className="text-[#9E95A2] ont-normal text-[12px]">{data.subTitle2}</p>
                </div>
            <button className="max-md:hidden bg-gradient-to-r from-[#F39519] to-[#FFCD67] text-[#FFFFFF] px-3 py-2 rounded-md font-medium text-[14px]">Add to Cart</button>
            <button className=" md:hidden bg-gradient-to-r from-[#F39519] to-[#FFCD67] text-[#FFFFFF] px-7 py-2 rounded-md font-medium text-[14px]">A</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
