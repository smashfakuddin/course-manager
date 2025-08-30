"use client";

import { useState } from "react";

export default function Banner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative min-h-[500px] mt-5 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1570998103225-83a725716e28?w=1600&auto=format&fit=crop&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/90 to-transparent"></div>

      {/* Glass Card */}
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 space-y-4 text-black">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-md">
            Medical Anthropology
          </h1>

          {/* Scrollable Description */}
          <p
            className={`text-justify text-gray-300 leading-relaxed max-h-[150px] overflow-y-auto hide-scrollbar transition-all duration-300`}
            style={{ maxHeight: expanded ? "500px" : "150px" }}
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quod? Odit doloribus architecto deleniti, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sed labore ad error esse sit quam quasi, magni perferendis fuga! Culpa, placeat accusantium officia deserunt doloremque molestias quas esse, corrupti magnam sint assumenda, dolor ullam aperiam possimus minus voluptates sed quae adipisci nostrum quis repudiandae hic. Repudiandae, vitae. Perspiciatis adipisci beatae consectetur sit, voluptatem asperiores rerum repudiandae magni provident commodi eaque accusantium suscipit eligendi aut blanditiis libero velit enim? Quas nemo aut quis, distinctio asperiores libero ex corrupti nobis pariatur qui molestiae veritatis eius consectetur eligendi quod aliquam illo iusto sapiente provident aspernatur quibusdam non atque ratione vel. Dolorem excepturi qui ab quisquam voluptatibus quam, ipsa at impedit quod nobis iusto magnam, possimus, deleniti perspiciatis dolorum quo. Eligendi in cumque odit vero neque illo minima deserunt quaerat est, blanditiis maxime, numquam eveniet! Eos veritatis, veniam reprehenderit optio nihil cupiditate quo consequuntur cumque sed, hic aliquid quasi eveniet repellendus provident blanditiis deleniti odio recusandae nisi. Cum molestiae aliquid nam sint eius ea. Sunt earum amet impedit unde quas fugiat voluptatum dolorum aspernatur laudantium, obcaecati ab veritatis deleniti quisquam tenetur, iste, nihil odio quasi corrupti? Molestiae, quaerat modi. Velit a doloremque distinctio officia neque ea laborum architecto repudiandae perspiciatis nesciunt, temporibus similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga odit corrupti excepturi magnam eveniet. Enim neque amet assumenda animi dolore fugiat ratione est ab deserunt cupiditate nesciunt, veritatis quibusdam facere repellendus aliquid veniam repudiandae esse dolores? Veniam accusantium dolorum quisquam. Animi mollitia recusandae blanditiis autem porro dignissimos quo sunt consectetur ex, temporibus, error exercitationem corporis totam amet! Necessitatibus non aliquam accusantium animi distinctio ipsum aut numquam laborum maxime, repellendus eos quod! Ipsam aperiam impedit dolorum tenetur possimus aspernatur deserunt! Exercitationem illo at eveniet fugit vel vitae voluptate impedit corrupti tenetur? Similique doloremque earum nobis ipsa nulla autem voluptatem architecto fugiat et aut, ea accusantium itaque? Quisquam quaerat, facere animi iste, odit quidem a adipisci, dignissimos quae quis reprehenderit officia voluptatem sed quam magnam in! Tenetur mollitia eius sunt fuga animi officiis a dolorum accusamus harum ut? Suscipit explicabo doloremque quis corrupti similique ab dolores optio nam eaque commodi ipsa sed, voluptatum quas aut nemo quisquam in rerum minus error debitis nihil assumenda odio? Quidem eveniet consequatur maxime repellendus enim dolore hic! Nostrum, beatae. Voluptas fuga voluptatum reiciendis accusantium similique modi, ullam non ipsa pariatur error, a officiis consequuntur, facilis quod sunt tempora dolorem! Excepturi voluptatibus deleniti error consequatur praesentium accusamus eos pariatur vel dolorem exercitationem, esse nesciunt blanditiis ab obcaecati voluptas hic qui, mollitia veniam dolorum? Voluptate deleniti corporis porro mollitia quas saepe assumenda, vel, quia eveniet consequatur nisi odit rem sed laboriosam eum? Itaque repellat possimus nobis expedita consequatur nemo dolorum, labore asperiores ipsum ea exercitationem atque at vel ex dignissimos, explicabo, ab unde? Dolore debitis sint animi autem atque, libero illum quam necessitatibus magnam modi excepturi exercitationem nesciunt quae odio recusandae laborum esse. Saepe commodi vitae exercitationem aperiam, nulla reiciendis mollitia ex unde? Fuga soluta possimus eum nostrum voluptate nesciunt ab quasi quod molestiae, quidem exercitationem sapiente ullam. ex corrupti veniam alias hic porro aperiam recusandae at velit obcaecati reiciendis exercitationem consectetur cumque deserunt!  Explore the fascinating connections between <span className="font-semibold">culture</span>, <span className="font-semibold">health</span>, and <span className="font-semibold">medicine</span>. Learn how human behavior, traditions, and beliefs influence well-being and healthcare systems worldwide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit magni eveniet placeat! Cupiditate necessitatibus eaque consectetur suscipit. Sed accusamus cupiditate modi consequuntur id rerum hic at. Enim libero quo sunt totam alias illo perferendis vel earum esse debitis. Ex optio dolorum eligendi, ipsa maxime blanditiis soluta. Quia odit sint sed quis dolorem sequi architecto doloribus mollitia assumenda eum veniam voluptate deserunt quisquam aliquid iure optio culpa nam, dolorum ad!
          </p>

        

          {/* Author Info */}
          <div className="flex items-center gap-3 mt-2">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1732304721505-7777969ce2da?w=200&auto=format&fit=crop&q=80"
              alt="Author"
            />
            <h3 className="text-xl font-semibold text-white drop-shadow-md">
              S.M. Ashfak Uddin
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill={index < 4 ? "yellow" : "none"}
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
            <span className="ml-4 text-white font-semibold drop-shadow-md">
              65 Reviews
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-2">
            <button className="bg-black px-4 py-2 text-white font-semibold flex items-center gap-2 rounded-lg hover:bg-gray-900 transition">
              Enroll Course
            </button>
            <button className="border border-white px-4 py-2 text-white font-semibold flex items-center gap-2 rounded-lg hover:bg-white/20 transition">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
