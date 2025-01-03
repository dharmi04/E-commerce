export default function Banner(){
return(
  <div>

    <div className="relative bg-primary py-8 px-8">
  <div className="text-center max-w-2xl mx-auto">
    <h1 className="text-3xl font-serif font-bold text-light mb-4">Unleash Your Creativity</h1>
    <p className="text-md text-accent mb-6">Stationery and Books for Every Passion</p>

    <div className="flex justify-center gap-4">
      <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105">Shop Now</button>
      <button className="bg-transparent border-2 border-secondary text-accent px-6 py-3 rounded-lg shadow-lg transition transform hover:bg-accent hover:text-black hover:scale-105">Browse Categories</button>
    </div>
  </div>

 
  <div className="absolute top-4 right-4 bg-light text-primary px-4 py-2 rounded-full shadow-md">
    <span className="text-sm">10% Off on First Purchase!</span>
  </div>
</div>
<div className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-serif">Our Featured Collection</h2>
          <p className="text-lg text-gray-600 mb-8">Explore the finest stationery and books designed to fuel your creativity.</p>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-72">
              <img src="/stationary.jpg" alt="Stationery" className="mb-4 rounded-lg h-56 w-64" />
              <h3 className="text-xl font-semibold text-gray-800">Premium Stationery</h3>
              <p className="text-gray-600 mt-2">Top-quality notebooks, pens, and accessories.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-72">
              <img src="/books.jpg" alt="Books" className="mb-4 rounded-lg h-56 w-64" />
              <h3 className="text-xl font-semibold text-gray-800">Best-Selling Books</h3>
              <p className="text-gray-600 mt-2">Explore our curated collection of must-read books.</p>
            </div>
          </div>
        </div>
      </div>

  </div>



)
}