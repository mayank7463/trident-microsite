import Marquee from 'react-fast-marquee';
import './Highlights.css';
// import TextAnimation01 from '../../AnimateText/AnimatedText01';

const callouts = [
  { id: 1, title: '90+', text: 'Countries' },
  { id: 2, title: '61%', text: 'Exports' },
  { id: 3, title: '25+', text: 'E-commerce website presence' },
  { id: 4, title: '15,500+', text: 'Workforce' },
  { id: 5, title: 'World’s Largest', text: 'Wheat Straw-Based Paper Manufacturer' },
  { id: 6, title: '₹67,903 Million', text: 'Total Income' },
  { id: 7, title: '₹9,949 Million', text: 'EBITDA' },
];

const Highlights = () => {
  return (
    <div className="marquee  text-white py-8 ">
      <h1 className="text-center text-[#febd2a] my-8 text-font text-7xl">Numbers that matter</h1>
      <Marquee gradient={false}>
        {callouts.map((callout, index) => (
          <div key={index} className="mx-8 marquee-content-box bg-white p-4 rounded-lg shadow-md">
            <h1 className="font-extrabold marquee-content-h1 text-[#32998d] mb-3" style={{lineHeight:'47px'}}>{callout.title}</h1>
            <p className="marquee-content-p text-[#000]">{callout.text}</p>
          </div>
        ))}
      </Marquee>
      <div className="flex justify-center mt-16 container-margin">
        <img src="./Home/home_img-2.png" alt="" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Highlights;
