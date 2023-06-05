import { useState, useEffect } from "react"
import axios from "axios"
import './Style.css'
import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
    IoMdSearch,
} from 'react-icons/io'

import {TbTemperatureCelsius} from 'react-icons/tb'


import{
    BsCloudHaze2Fill,
    BsCloudDrizzleFill,
    BsEye,
    BsWater,
    BsThermometer,
    BsWind,
    BsCloudHaze,
    BsCloudHazeFill,
} from 'react-icons/bs'

import {ImSpinner8} from 'react-icons/im'

//api key
const APIkey = 'b0de691f0434dd017bb918f18592f094';
let icon;

const Weather = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('Wardha');
    const [inputValue, setInputValue] = useState('');
    const [animate, setAnimate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(``);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        if(inputValue !== ''){
            setLocation(inputValue)
        }

        const input = document.querySelector('input');
        
        if(input.value === ''){
            setAnimate(true);

            setTimeout(() =>{
                setAnimate(false)
            },500)
        }

        input.value = '';
        //prevent default
        e.preventDefault();
    }

    //fetch the data
    useEffect(() => {
        //set loading to true
        setLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

        axios.get(url).then((res) => {
            //set the data after 1500 ms
            setTimeout(() => {
                setData(res.data);
                //set loading to false
                setLoading(false);
            },2000)
        }).catch((err) => {
            setLoading(false);
            setErrorMsg(err);
        })
    }, [location]);
    
    //error message
    
    useEffect(()=>{
        const timer = setTimeout(() => {
            setErrorMsg('');
        },1500)
        //clear timer
        return() => clearTimeout(timer);
    }, [errorMsg])

    //if data false show the loader
    if(!data)
    return(
        <div className="w-full h-screen bg-gradient-to-tr
                        from-fuchsia-600 to-fuchsiapink-500
                        bg-no-repeat bg-cover bg-center flex
                        flex-col justify-center items-center ">
            <div>
                <ImSpinner8 className="text-5xl animate-spin text-white"/>
            </div>
        </div>
    )
switch(data.weather[0].main){
    case 'Clouds':
        icon= <IoMdCloudy className="text-[#e7e5c6]"/>
        break;
        case 'Haze':
        icon= <BsCloudHaze2Fill className="text-[#7fdaf8]"/>
        break;
        case 'Rain':
        icon= <IoMdRainy className="text-[#31cafb]"/>
        break;
        case 'Clear':
        icon= <IoMdSunny className="text-[#ffde33]"/>
        break;
        case 'Drizzle':
        icon= <BsCloudDrizzleFill className="text-[#31cafb]"/>
        break;
        case 'Snow':
        icon= <IoMdSnow className="text-[#31cafb]"/>
        break;
        case 'Thunderstorm':
        icon= <IoMdThunderstorm className="text-[#94a3b8]"/>
        break;
}
const date =new Date()

  return (
        <div className="w-full min-h-[850px] bg-gradient-to-tr
         from-fuchsia-600 to-fuchsiapink-500 bg-no-repeat 
        bg-cover bg-center flex flex-col items-center 
        justify-center lg:px-0">
            {errorMsg && <div className="w-full max-w-[90vw] lg:max-w-[380px]
                                            bg-[#ff208c] text-white absolute
                                            top-2 lg:top-10 p-4 capitalize rounded-md">
                                City Not Found
                                </div>}
                            {/* form */}
            <form className={`${animate ? 'animate-shake' : 'animate-none'}h-16 bg-black/30 w-full
                                        max-w-[390px] rounded-full backdrop-blur-[32px] mb-8`}>
                <div  className="h-full relative flex items-center justify-between p-2">
                    <input  onChange={(e) => handleInput(e)}
                            type="text"
                            className="flex-1 bg-transparent outline-none placeholder:text-white
                            text-white text-[15px] font-light pl-6 h-full"
                            placeholder="Search by City or Country"/>
                    <button onClick={(e) => handleSubmit(e)}
                            className="bg-[#1ab8ed] hover:bg-[#12a2d2] w-20
                                        h-12 rounded-full flex justify-center
                                        items-center transition">
                        <IoMdSearch className="text-2xl text-white"/>
                    </button>
                </div>
            </form>
            <div className="w-full max-w-[400px] bg-black/20 
                            min-h-[400px] text-white backdrop-blur-[32px] 
                            rounded-[32px] py-9 px-4">
                                {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <ImSpinner8 className="text-white text-5xl animate-spin"/>
                </div>
                ) :(
                <div>
                    {/* card top */}
                    <div className="flex items-center gap-x-5">
                        {/* icon */}
                        <div className="text-[87px]">
                            {icon}
                        </div>
                        <div>
                            {/* country name */}
                            <div className="text-2xl font-semibold">
                                {data.name} {data.sys.country}
                            </div>
                            {/* date */}
                            <div>
                                {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
                            </div>
                        </div>
                    </div>
                        {/* card body */}
                    <div className="my-16">
                        <div className="flex justify-center items-center">
                            {/* temp */}
                            <div className="text-[144px] leading-none font-light">
                                {parseInt(data.main.temp)}
                            </div>
                            {/* celsius icon */}
                            <div className="text-4xl">
                                <TbTemperatureCelsius />
                            </div>
                        </div>
                        {/* weather description */}
                        <div className="capitalize text-center">
                            {data.weather[0].description}
                        </div>
                    </div>
                        {/* card bottom */}
                    <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-x-2">
                                {/* icon */}
                                <div className="text-[20px]">
                                    <BsEye/>
                                </div>
                                <div>
                                    Visibility<span className="ml-2">{data.visibility / 1000}km</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                {/* icon */}
                                <div className="text-[20px]">
                                    <BsThermometer/>
                                </div>
                                <div className="flex">
                                    Feels Like<div className=" flex ml-2">{parseInt(data.main.feels_like)}</div>
                                    <TbTemperatureCelsius/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-x-2">
                                {/* icon */}
                                <div className="text-[20px]">
                                    <BsWater/>
                                </div>
                                <div>
                                    Humidity <span className="ml-2">{data.main.humidity}%</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                {/* icon */}
                                <div className="text-[20px]">
                                    <BsWind/>
                                </div>
                                <div>Wind <span className="ml-2">{data.wind.speed} m/s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
  )
}

export default Weather