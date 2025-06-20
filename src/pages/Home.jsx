import { Navbar } from "../components/Navbar";
import DataImage from "../../data";
import {
  FileDown,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { listTools, listProyek } from "../../data";
import { Footer } from "../components/Footer";
import { Preloader } from "../components/Preloader";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Home = () => {
  return (
    <div className="scroll-smooth">
      <Preloader />
      <div>
        {/* Navbar */}
        <Navbar id="navbar" />
        <div className="lg:mx-4 mx-2">
          {/* Hero */}

          <div
            className="hero md:mx-10 mx-2 grid grid-cols-2 gap-2 max-md:grid max-md:grid-cols-1"
            id="beranda"
          >
            <img
              src="assets/Vito.png"
              alt="Hero Image"
              className="w-96 mx-auto md:hidden bg-gradient-to-t from-violet-600 via-violet-500 to-transparent rounded-b-4xl"
            />
            <div className="animate__animated animate__fadeInLeft animate__delay-3s">
              <div className="flex gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl max-md:mx-auto  ">
                <img
                  src="assets/Vito.png"
                  alt="Hero Image"
                  className="w-10 bg-gradient-to-t max-md:hidden from-violet-600 via-violet-500 to-transparent rounded-b-md"
                />
                <q className="m-auto">May the God find us worthy by then ...</q>
              </div>
              <h1 className="text-5xl/tight font-bold mb-6 max-md:text-center">
                Hello, I'm Vito Megataruna{" "}
              </h1>
              <p className="text-base/loose mb-6 opacity-50">
                <span className="text-white text-base font-extrabold opacity-100">
                  Crafting digital experiences from front to back—
                </span>
                {"  "}I am an aspiring{" "}
                <span className="text-white text-base font-extrabold opacity-100">
                  full-stack developer
                </span>
                , driven by a passion for tackling complex problems and creating
                effortless, high-quality solutions. If you need someone who
                turns ideas into reality with precision and passion,{" "}
                <span className="text-white text-base font-extrabold opacity-100">
                  let’s work together and build something exceptional!
                </span>
              </p>
              <div className="flex items-center gap-4 ">
                <button
                  onClick={() =>
                    window.open("assets/Vito Megataruna_CV.pdf", "_blank")
                  }
                  className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 inline-flex gap-2 "
                >
                  <FileDown size={24}></FileDown>
                  Download Resume
                </button>

                <button
                  onClick={() =>
                    window.open("https://www.github.com/shivmega", "_blank")
                  }
                  className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 inline-flex gap-2"
                >
                  <img
                    src="assets/tools/github.png"
                    alt="Github Logo"
                    className="h-6 w-6"
                  />
                  Kunjungi Github
                </button>
              </div>
            </div>
            <img
              src="assets/Vito.png"
              alt="Hero Image"
              className="animate__animated animate__fadeInUp animate__delay-3s w-96 mx-auto max-md:hidden bg-gradient-to-t from-violet-600 via-violet-500 to-transparent rounded-b-2xl"
            />
          </div>
          {/* Main Content */}
          {/* About */}
          <div
            className="about mt-32 py-10"
            data-aos="fade-up"
            data-aos-delay="100"
            id="tentang"
          >
            <div className="xl:w-2/3 lg:w-2/3 w-full mx-auto p-8 bg-zinc-800 rounded-lg">
              <p className="text-base/loose mb-10">
                Hi, I'm Vito, a fresh graduate with a Bachelor's degree in
                Computer Science, eager to dive into the world of full-stack
                development. I specialize in Laravel and React, backed by a
                strong foundation in MySQL. Always ready to embrace new
                challenges, I thrive in dynamic environments and adapt quickly.
                Beyond coding, I have a passion for writing stories, blogging,
                and exploring the world of music, blending creativity with
                technical expertise.
              </p>
              <div className=" flex items-center justify-between">
                <img
                  src="assets/Vito.png"
                  alt="Hero Image"
                  className="w-12 bg-gradient-to-t max-md:hidden from-violet-600 via-violet-500 to-transparent rounded-b-md"
                />
                <div className="flex items-center gap-6">
                  <div className="">
                    <h1 className="text-4xl mb-1">
                      3 <span className=" text-violet-500">+</span>
                    </h1>
                    <p>Finished Project</p>
                  </div>
                  <div>
                    <h1 className="text-4xl mb-1">
                      3 <span className="text-violet-500">+</span>
                    </h1>
                    <p>Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proyek */}
          <div className="proyek mt-32 py-10 md:px-12" id="proyek">
            <h1 className="text-center text-4xl font-bold mb-2 ">Project</h1>
            <p className="text-base/loose text-center opacity-50">
              Here are my Finished projects. Look forward for more.
            </p>
            <div className="proyek-box mt-14 grid md:grid-cols-3 gap-4">
              {listProyek.map((proyek) => (
                <div
                  className="p-6 rounded-2xl border border-zinc-600 bg-zinc-800 hover:bg-zinc-700"
                  key={proyek.id}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src={proyek.gambar}
                    alt="Proyek gambar"
                    className="w-full rounded-xl"
                  />
                  <a href={proyek.link}>
                    <h1 className="text-xl my-4 hover:underline hover:font-bold">
                      {proyek.nama}
                    </h1>
                  </a>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* tools */}
          <div className="tools mt-32 md:mx-5 mx-3">
            <h1 className="text-4xl/snug font-bold mb-4">Tools</h1>
            <p className="w-2/5 text-base/loose opacity-50">
              Here are several tools that I used for my projects.
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 grid-cols-2 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group-hover:bg-zinc-600  hover:bg-zinc-700 group"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src={tool.gambar}
                    alt={tool}
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-700"
                  />
                  <div className="font-bold">
                    <h4>{tool.nama}</h4>
                    <div className="opacity-50">{tool.ket}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div className="lg:w-2/3 md:w-full mx-auto mt-32" id="kontak">
            <h1 className="text-2xl font-bold text-center">
              Get In <span className="text-violet-500">Touch</span>
            </h1>
            <p className="text-sm opacity-50 text-center mt-3 mb-8">
              Have a project in mind or want to collaborate? Feel Free to reach
              out. I'm always open to discussing new opportunities.
            </p>
            <div className="md:grid md:grid-cols-2 md:gap-2 m-auto">
              <div className="" data-aos="fade-right" data-aos-delay="100">
                <h1 className="text-lg font-bold text-white text-center mb-2 py-5">
                  Contact Information
                </h1>
                <div className="w-9/12 rounded-2xl hover:bg-zinc-700 mx-auto mb-3 flex">
                  <div className="size-10 bg-zinc-700 rounded-full">
                    <Mail className="text-violet-500 w-6 h-6 bg-zinc-700 mx-auto translate-y-2" />
                  </div>
                  <div className="w-full text-center">
                    <h1 className="text-md/loose">Email</h1>
                    <a
                      className="opacity-70 hover:underline hover:opacity-100"
                      href="mailto:sivito1407@gmail.com"
                    >
                      sivito1407@gmail.com
                    </a>
                  </div>
                </div>

                <div className="w-9/12 rounded-2xl hover:bg-zinc-700 mx-auto mb-3 flex">
                  <div className="size-10 bg-zinc-700 rounded-full">
                    <Phone className="text-violet-500 w-6 h-6 bg-zinc-700 mx-auto translate-y-2" />
                  </div>
                  <div className="w-full text-center">
                    <h1 className="text-md/loose">Phone</h1>
                    <a
                      className="opacity-70 hover:underline hover:opacity-100"
                      href="#"
                    >
                      +62 856-4798-7710
                    </a>
                  </div>
                </div>
                <div className="w-9/12 rounded-2xl hover:bg-zinc-700 mx-auto mb-3 flex">
                  <div className="size-10 bg-zinc-700 rounded-full">
                    <MapPin className="text-violet-500 w-6 h-6 bg-zinc-700 mx-auto translate-y-2" />
                  </div>
                  <div className="w-full text-center">
                    <h1 className="text-md/loose">Location</h1>
                    <a
                      className="opacity-70 hover:underline hover:opacity-100"
                      href="#"
                    >
                      Central Java, Indonesia
                    </a>
                  </div>
                </div>
                <div className="mt-10 items-center justify-center text-center text-sm">
                  Connect with Me
                  <div className="items-center justify-center flex gap-2 mt-2">
                    <a href="https://www.linkedin.com/in/vito-megataruna">
                      <Linkedin className="size-4 hover:bg-zinc-700 rounded-sm" />
                    </a>
                    <a href="https://www.instagram.com/terlihatvito?igsh=Z2JyZHRqNm85a3k0">
                      <Instagram className="size-4 hover:bg-zinc-700 rounded-sm" />
                    </a>
                    <a
                      href="https://wa.me/qr/YGWG4KQ2XH5KL1 "
                      className="text-white hover:bg-zinc-700 rounded-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                    <a href="https://x.com/Vito_Megataruna">
                      <Twitter className="size-4 hover:bg-zinc-700 rounded-sm" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl bg-zinc-800 border-zinc-600 px-5 py-5 max-md:mt-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h1 className="text-lg font-bold text-white text-center mb-3">
                  Send me a Message
                </h1>
                <form
                  className="grid gap-4"
                  action="https://formsubmit.co/sivito1407@gmail.com"
                  method="POST"
                >
                  <div className="grid mt-2">
                    <h1 className="text-center">Name</h1>
                    <input
                      type="text"
                      name="name"
                      required
                      className="bg-zinc-900 border border-zinc-600 rounded-lg p-2"
                      placeholder="Vito Megataruna..."
                    />
                  </div>
                  <div className="grid">
                    <h1 className=" text-center">Email</h1>
                    <input
                      type="email"
                      name="email"
                      required
                      className="bg-zinc-900 border border-zinc-600 rounded-lg p-2"
                      placeholder="vito@gmail.com"
                    />
                  </div>
                  <div className="grid">
                    <h1 className=" text-center">Message</h1>
                    <input
                      type="textarea"
                      name="message"
                      className="bg-zinc-900 border border-zinc-600 rounded-lg p-2 h-20"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-violet-600 hover:bg-violet-500 text-white mt-1 p-3 text-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
