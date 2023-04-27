import React from 'react';

const NewsCard = ({ image, title, description, link }) => {
  return (
    <div className="lg:w-1/2 rounded-xl mx-5 mb-5 shadow-lg bg-blue-400 text-gray-700 text-center dark:bg-blue-700 text-black">
      <div className="flex rounded-xl flex-col text-center items-center">
        <div className="mb-1 rounded-xl shadow-lg bg-white text-black">
          <a href={link}>
            <img className="object-cover rounded-t-xl" src={image} alt={title} />
          </a>
          <div className="flex bg-white items-center justify-center">
            <a href={link}>
              <h2 className="text-2xl">{title}</h2>
            </a>
          </div>
        </div>
        <p className="p-2 m-2 rounded-xl text-xs text-black bg-blue-200">
          {description}{" "}
          <a className="text-blue-500" href={link}>
            Continue Reading
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
