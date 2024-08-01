

import './ReadMoreButton.css'

const ReadMoreButton = () => {
  return (
    <div className='flex justify-center'>
          <button className=" flex justify-center w-36 h-10 border-2 font-400 border-[#0c8678] rounded text-lg px-2 py-0.5 transition-all duration-500 ease hover:pl-0 custom-button">
              Read more
          </button>
    </div>
  );
};

export default ReadMoreButton;