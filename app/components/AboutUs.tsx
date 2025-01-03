export default function AboutUs() {
    return (
      <div className="bg-light text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              About <span className="text-secondary">Pens & Papers</span>
            </h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold">Pens & Papers</span>, we believe that creativity begins with the right tools. Whether you're a student, an artist, or someone who loves to journal, we offer an extensive range of books, stationery, and art supplies to fuel your imagination and bring your ideas to life.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to provide top-quality products that inspire and empower individuals to express themselves. We are passionate about creating a seamless shopping experience for our customers, ensuring satisfaction with every purchase.
            </p>
            <button className="bg-secondary text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-primary-dark transition duration-300">
              Learn More
            </button>
          </div>
  
          {/* Image Content */}
          <div className=" flex justify-center">
            <div className="rounded-md shadow-lg overflow-hidden w-full max-w-lg">
              <img
                src="about.jpg" // Replace with your image URL or path
                alt="Stationery and creativity"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* <div className="absolute top-4 left-4 bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
              <img
                src="logo.png" // Replace with your logo URL or path
                alt="Pens & Papers logo"
                className="w-16 h-16 object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  