import React from 'react';

function TopButtons({ setQuery }) {
  const cities = [
    {
      id:1,
      title: "Oklahoma City",
    },
    {
      id:2,
      title: "Chicago",
    },
    {
      id:3,
      title: "Seattle",
    },
    {
      id:4,
      title: "Buenos Aires",
    },
    {
      id:5,
      title: "London",
    }
  ]
  return (
    <div className="flex items-center justify-around my-6 sm:flex-row">
      {cities.map((city) =>(
        <button
        key={city.id}
        className="text-white text-lg font-medium"
        onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
          </button>
      ))}
    </div>
  )
}

export default TopButtons;
