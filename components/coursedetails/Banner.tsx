export default function Banner() {
  return (
    <div
      className="relative h-[500px] mt-5  overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1570998103225-83a725716e28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW50aHJvcG9sb2d5fGVufDB8fDB8fHww')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 p-10 container space-y-4">
        <div className=" text-black space-y-4">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Medical Anthropology
          </h1>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit
            illo animi voluptatem veritatis? Eos debitis neque quod fuga
            corrupti architecto quisquam repellendus, quis possimus accusamus
            est consequatur animi ullam! Ut delectus amet cum quas, est ullam
            nostrum hic omnis modi odio iusto eius! Ratione ipsam ad architecto
            deserunt atque unde aliquam ex obcaecati blanditiis. Aspernatur
            corrupti sed minima animi, voluptatum, et commodi quibusdam facere
            quia deserunt quisquam qui. Fuga officia ratione, accusamus ut
            eveniet sunt inventore commodi ab, ea odit quam in hic consequatur
            facilis fugit sint placeat laudantium vitae debitis dolores,
            molestiae numquam quos illo. Doloremque, nihil aperiam.
          </p>
        </div>
        <div className=" flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1732304721505-7777969ce2da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFudGhyb3BvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h3 className=" text-xl font-semibold">S.M. Ashfak Uddin</h3>
        </div>
        <div className=" flex ">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6"
              fill={index < 4 ? "black" : "none"} // First 3 filled yellow
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
          <span className=" ml-4">{65} Reviews</span>
        </div>
        <div className="flex gap-3">
          <button className=" bg-black px-4 py-2 text-white font-semibold flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            Enroll Course
          </button>
          <button className=" cursor-pointer border border-white ring-0 ring-green-400  px-4 py-2 text-white font-semibold flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}
