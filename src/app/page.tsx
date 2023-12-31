import Hero from "@/components/Hero/Hero";
import HeroComponent from "@/components/Hero/HeroComponent";
import Poster from "@/components/poster/Poster";
import Image from "next/image";
import poster from "../../public/png/phone.png";
import headphones from "../../public/png/headphones-removebg-preview.png";
import tv from "../../public/png/Tv2-removebg-preview.png";
import TopCategories from "@/components/topCategories/TopCategories";
import AllProducts from "@/components/products/AllProducts";
import NewsLetter from "@/components/newLetter/NewsLetter";
import mobilePhone from "../../public/png/phone.png";
import Shape from "@/components/shapes/Shape";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px] items-center">
        <div className="relative w-full bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
          <Hero />
          <div className="absolute top-6 opacity-25">

          <Shape/>
          </div>
        </div>
      

        <div className="flex flex-col w-full px-[25px]   md:flex-row max-w-[1100px]  gap-[25px]  items-center justify-center  mx-auto">
          <Poster
            title="Phone"
            image={poster}
            link="https://example.com"
            description="Gaming Processor"
            backgroundColor="green-400"
            textColor="#333"
          />
        
          <Poster
            title="Tv"
            image={tv}
            link="https://example.com"
            description="4k Hd display"
            backgroundColor="blue-50"
            textColor="#333"
          />
        
          <Poster
            title="Music"
            image={headphones}
            link="https://example.com"
            description="Noise cancelation feature"
            backgroundColor="green-500"
            textColor="#333"
          />
      
        </div>
      

        <div className="max-w-[1100px] m-auto items-center flex flex-col gap-[15px]">
          <div className="flex flex-col items-center px-[25px]">
            <span className="text-[25px] font-bold text-center">
              Top Categories
            </span>
            <br />
            <span className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, pariatur.
            </span>
          </div>
          <br />
          <br />

          <div className="flex gap-[15px] items-center justify-center flex-wrap">
            <TopCategories image={headphones} name="Headphones" />
            <TopCategories image={tv} name="Tv" />
            <TopCategories image={poster} name="Phone" />
            <TopCategories image={headphones} name="Headphones" />
            <TopCategories image={headphones} name="Headphones" />
            <TopCategories image={headphones} name="Headphones" />
            <TopCategories image={headphones} name="Headphones" />
          </div>
        </div>
      

        <div className="w-full max-w-[1100px] mx-auto px-[25px] flex flex-col items-center">
          <span className="text-center text-[25px] font-bold ">
            Exclusive Products
          </span>
          <br />

          <AllProducts />
        </div>
       
        <div className="w-full bg-red-500 p-[25px] m-auto  flex items-center justify-center py-[50px]">
          <NewsLetter variant="secondary"/>

        </div>
     

      </div>
    </>
  );
}
