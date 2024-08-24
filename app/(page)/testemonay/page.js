import Image from "next/image";
import user1 from '../../../public/user1.jpg';
import user2 from '../../../public/user2.jpg';
import user3 from '../../../public/user3.jpg';
import user4 from '../../../public/user4.jpg';
import user5 from '../../../public/user5.jpg';

const Testimonials = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        What Our Clients Say?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial Card 1 */}
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Image
                src={user1}
                alt="Client 1"
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">አምላክ ተስፋዬ</h3>
                <p className="text-gray-400">የኩባንያ አስተዳደር</p>
              </div>
            </div>
            <p className="text-gray-300">
            "ይህ የሶፍትዌር ኩባንያ ልዩ አገልግሎት ሰጥቷናል እና የመጨረሻው ምርት ከምንጠብቀው በላይ ነበር. በጣም የሚመከር ነው!"            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Image
                src={user2}
                alt="Client 2"
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">ግሩም አስፋይ</h3>
                <p className="text-gray-400"> ወኪል</p>
              </div>
            </div>
            <p className="text-gray-300">
            "ለዝርዝር ትኩረት የተሰጠው እና የስራ ጥራት ከማንም በላይ ነበረ። በውጤቱ በጣም ተደስተናል።            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Image
                src={user3}
                alt="Client 3"
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">አሌክስ ጆንሰን</h3>
                <p className="text-gray-400">ማንጅር  C</p>
              </div>
            </div>
            <p className="text-gray-300">
            "አስደናቂ ተሞክሮ! የሰሩት ሶፍትዌር የንግድ ሂደታችንን ለውጦታል።
            </p>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Image
                src={user4}
                alt="Client 4"
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">ሳራ ዊሊያምስ</h3>
                <p className="text-gray-400">ዲዛይነር  D</p>
              </div>
            </div>
            <p className="text-gray-300">
            “The team delivered our project on time and within budget. Their expertise was evident in every aspect of the work.”            </p>
          </div>

          {/* Testimonial Card 5 */}
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <Image
                src={user5}
                alt="Client 5"
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">ማይካኤል ብራውን</h3>
                <p className="text-gray-400">ዳይሬክተር </p>
              </div>
            </div>
            <p className="text-gray-300">
              “ይህ ቡድን በሁሉም አካል እንደተጠበቀው እንደ ታላቅ ትብብር እና ባለሙያነት ተነስቷል።”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
