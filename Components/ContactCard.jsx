export default function ContactCard() {
    return (
      <div
        className="w-full min-h-screen bg-cover bg-center flex  items-center justify-center px-4 py-16"
        style={{ backgroundImage: "url(https://res.cloudinary.com/dlb3doese/image/upload/v1747838858/pexels-lara-jameson-8828320_nn3egu.jpg)" }} // Place mapp.png in your public folder
      >
        <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-xl sm:w-[700px] h-[400px] w-full p-6 sm:p-8 text-[#032E61]">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm sm:text-base mb-6">
            Run Alpha is based in Lagos, Nigeria. We are always happy to hear
            from you. Please reach out to us using the contact form below or
            contact us at the email address or phone number provided.
          </p>
  
          <h3 className="font-semibold text-base mb-2">Head Office</h3>
          <div className="flex items-start gap-2 mb-2">
            <span className="text-lg">📍</span>
            <p className="text-sm sm:text-base">
              1 Uwa Close, Off Billings Way, Oregun, Lagos.
            </p>
          </div>
  
          <p className="text-sm sm:text-base mb-1">
            <span className="font-semibold ">TEL:</span> +234 909 371 7972
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">E:</span>{" "}
            <a
              href="mailto:hello@runalpha.co"
              className="text-[#032E61] underline"
            >
              hello@runalpha.co
            </a>
          </p>
        </div>
      </div>
    );
  }
  