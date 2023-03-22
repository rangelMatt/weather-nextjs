import Image from "next/legacy/image";
import React from "react";

const Weather = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat"></div>
      <div className=" relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 ">
        <div className="relative flex justify-between pt-12 bg-black/50 p-8 rounded-md shadow-2xl ">
          <div className="flex flex-col items-center ">
            <h4>{data.name}</h4>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              // fill
              // sizes="(max-width: 100px) 100vw,
              //   (max-width: 100px) 50vw,
              //   33vw"
              width="100"
              height="100"
            />
            <p className="text-2xl">{data.weather[0].main}</p>
          </div>
          <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        <div className="bg-black/50 relative p-8 rounded-md shadow-xl ">
          <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
          <div className="flex justify-between text-center ">
            <div>
              <p className="font-bold text-2xl">
                {data.main.feels_like.toFixed(0)}&#176;
              </p>
              <p className="text-xl">Feels Like</p>
            </div>
            <div>
              <p className="font-bold text-2xl">{data.main.humidity}%</p>
              <p className="text-xl">Humidity</p>
            </div>
            <div>
              <p className="font-bold text-2xl">
                {data.wind.speed.toFixed(0)} MPH
              </p>
              <p className="text-xl">Winds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
