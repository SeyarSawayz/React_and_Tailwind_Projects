function Hero() {
  return (
    <main className="hero grid grid-cols-2 justify-center items-center  container mx-auto  h-[92vh]  ">
      <div className="hero-content md:ml-0 ml-4">
        <h1 className="md:text-[108px] text-[80px] font-[800] leading-[102px]">YOUR FEET DESERVE THE BEST</h1>
        <p className="text-xl  leading-8 text-gray-600">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-button my-4 font-bold flex md:gap-4 md:space-y-0 flex-wrap space-y-4 ">
            <button className="bg-red-600 text-white px-2 rounded-sm py-[0.5px] h-10 w-40">Shop Now</button>
            <button className="border border-red-600  text-gray-900 px-2 rounded-sm py-[0.5px] h-10 w-40">Catergory</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="icons flex items-center mt-3 cursor-pointer gap-4">
                <img src="../images/flipkart.png" alt="" />
                <img src="../images/amazon.png" alt="" />

            </div>
        </div>
      </div>
      <div className="hero-image mx-auto">
        <img src="../images/shoe_image.png" alt="" />
      </div>
    </main>
  );
}
export default Hero;
