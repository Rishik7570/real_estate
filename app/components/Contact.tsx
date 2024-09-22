

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-20 sm:mt-28">

      <div className="">
        <p className="text-[#344465] font-bold text-2xl sm:text-3xl">CONTACT US</p>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-around mt-14 sm:mt-20">

        {/* Left */}
        <div className="flex flex-col gap-10">

          <div className="">
            <p className="text-[#344465] text-lg sm:text-xl font-semibold">ADDRESS</p>
          </div>

          <div className="map">
            <div className="text-[#9d7e4c]">
              <p className="">500 Terry Francine Street</p>
              <p className="">San Francisco, CA 94158</p>
            </div>
            <iframe className="w-[400px] h-40"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={` https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao`}>
            </iframe>
          </div>

          <div className="flex flex-col text-[#344465] text-lg sm:text-xl font-semibold">
            <p className="">TO SPEAK WITH AN AGENT,</p>
            <p className="">PLEASE CALL OR EMAIL US:</p>
          </div>

          <div className="flex flex-col text-[#9d7e4c]">
            <p className="">Email: info@mysite.com</p>
            <p className="">Tel: 123-456-7890</p>
            <p className="">Fax: 123-456-7890</p>
          </div>
        </div>

        {/* Right */}
        <form className="flex flex-col gap-4">

          <p className="w-80 text-lg sm:text-xl text-[#344465] font-semibold">ALTERNATIVELY YOU CAN FILL IN THE FOLLOWING CONTACT FORM:</p>

          <div className="names flex gap-2 mt-5">
            <input type="text" placeholder="First Name" className="border border-gray-700 px-4 py-2 text-base" required/>
            <input type="text" placeholder="Last Name" className="border border-gray-700 px-4 py-2 text-base" required/>
          </div>

          <div className="email">
            <input type="email" placeholder="Email" className="border border-gray-700 px-4 py-2 text-base w-full" required/>
          </div>

          <div className="subject">
            <input type="text" placeholder="Subject" className="border border-gray-700 px-4 py-2 text-base w-full" required/>
          </div>

          <div className="message">
            <textarea placeholder="Message" className="border border-gray-700 px-4 py-2 text-base w-full" required/>
          </div>

          <button type="submit" className="py-2 bg-[#344465] text-white hover:bg-[#5772a8]">Submit</button>

        </form>

      </div>
    </div>
  )
}

export default Contact
