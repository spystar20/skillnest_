import React, { useState } from 'react'
import hero from '../assets/girl.png'
import { TbBooks } from "react-icons/tb";
import { FaCartArrowDown, FaChalkboardTeacher, FaHeart } from "react-icons/fa";
import {  GrCertificate, GrInstagram } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import { FaAws } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 0.3, startDelay: 1000 })],
  );
  const [show, hide] = React.useState(false)
  const ShowFeature = () => {
    hide(!show)
  }
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => setSelectedIndex(emblaApi1.selectedScrollSnap()));
  }, [emblaApi]);

    const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true })
      const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [scrollSnaps1, setScrollSnaps1] = useState([]);

  const scrollTo1 = useCallback((index) => emblaApi1 && emblaApi1.scrollTo1(index), [emblaApi1]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);
  // courses array
  const featureCourses = [
    {
      img: 'https://i.pinimg.com/736x/eb/e8/f2/ebe8f272e71472bca58429b5a578c01d.jpg',
      instructor_name: 'choi woo shik',
      instructor_img: "https://i.pinimg.com/736x/28/cc/05/28cc0589ea825e42cc56945e5cc40ad9.jpg",
      course_name: 'Resume Building & LinkedIn Optimization',
      course_desc: '  Learn how to craft a professional resume and  LinkedIn profile for  NGOs, and the private sector.',
      rating: '4.8',
      view: '9k rating',
    }
    ,

    {
      img: 'https://i.pinimg.com/736x/1a/52/68/1a52684e39935324d102eb11e03eb3cb.jpg',
      instructor_name: 'seo ye ji',
      instructor_img: "https://i.pinimg.com/736x/fa/6f/b1/fa6fb1633beb5f62bd496b8161e5f1e0.jpg",
      course_name: 'Crypto, Blockchain & the Future of the Interne',
      course_desc: 'Understand the evolving world of cryptocurrencies, blockchain technology,  and global finance',
      rating: '4.9',
      view: '13k rating'
    },
    {
      img: 'https://i.pinimg.com/736x/4c/1d/08/4c1d08a4944075a883c31a0eec66fc5e.jpg',
      instructor_name: 'kim seon ho',
      instructor_img: "https://i.pinimg.com/736x/99/ff/30/99ff30b1f4549a457412ecfbe14a4baa.jpg",
      course_name: 'Focus, Habits & Time Management for Students',
      course_desc: 'High emotional hook — improves study skills and life skills.',
      rating: '4.3',
      view: '10k rating'
    },
    {
      img: 'https://i.pinimg.com/736x/04/be/d3/04bed3b5e20f285abe7ee410d7ec0b4e.jpg',
      instructor_name: 'henry golding',
      instructor_img: "https://i.pinimg.com/736x/7c/29/9a/7c299a9abf064b2178e019e4eeadf733.jpg",
      course_name: 'Interview Preparation & DAF Handling',
      course_desc: 'The UPSC Personality Test is not just a Q&A round—its an evaluation of your personality, presence, and purpose.',
      rating: '4.9',
      view: '13k rating'
    }

  ]
  //  teacher array
  const teachers = [
    {
      name: 'ana paula',
      title: 'Economics Mentor',
      img: 'https://i.pinimg.com/736x/b4/f2/a3/b4f2a3e6e84314b8dd922cd7c3df0b07.jpg'

    },
    {
      name: 'Ricardo Soriia',
      title: 'Web3  Instructor',
      img: 'https://i.pinimg.com/736x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.jpg'
    },
    {
      name: 'shilvia ',
      title: 'UI/UX Designer Mentor',
      img: 'https://i.pinimg.com/736x/75/c2/e1/75c2e19786dbf383db8cec3aa2f02ea1.jpg'
    }, {
      name: 'sara',
      title: 'Data Science Mentor',
      img: 'https://i.pinimg.com/736x/8c/fa/5a/8cfa5a9f5f6e1d6aae9c6d5973a66bb1.jpg'
    }
  ]
 const  testimonials =[
    {
      name:'kim min jae',
      title:'MBA Graduate',
      img:'https://i.pinimg.com/736x/45/ab/d1/45abd11b681fa6b4e284321b55c8ecc5.jpg',
      desc:'“Learning here didn’t feel like a chore. The teachers genuinely care, and the course structure is intuitive. Especially loved the one-on-one resume review!”'
    },{
      name: 'jung hae in ',
      title:'B.Tech Student',
      img:'https://i.pinimg.com/736x/af/a0/ab/afa0abbec2dd14dc9f321de223f94c9d.jpg',
      desc:'“The Web Dev Bootcamp was game-changing. Real projects, instant feedback, and resume help — landed an internship in just 2 months!”'
    },{
      name:'jung da bin',
      title:' UPSC Aspirant',
      img:'https://i.pinimg.com/736x/63/a6/19/63a61984b341c3e69ae521d44a1dc607.jpg',
      desc:'“I cracked my prelims on the second attempt, and the daily current affairs + live answer writing sessions made a huge difference. The mentorship here feels personal and focused.”'
    },{
      name:'kim ji won',
      title:'First-time UPSC Qualifier',
      img:'https://i.pinimg.com/736x/c9/57/11/c957119cea8216a963809cfffbe04537.jpg',
      desc:'“I was overwhelmed by the syllabus at first, but this platform broke it into daily targets with mentorship. Cleared Prelims this year!”'
    }
  ]

  return (
    <div >
      <div className='w-full  py-10 font-["Roboto"] home-bg h-screen'>
        <div className=' grid grid-cols-2 relative z-0 px-20 py-10 justify-between items-center'>
          <div className='flex flex-col max-w-lg justify-center items-start gap-4'>
            <h1 className='text-5xl font-[Merienda] font-bold text-white'>Learn. Create. Thrive.</h1>
            <p className='text-white mt-4'>Learn in-demand skills from top mentors across tech, design, business, and more — all in one place. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, magnam.</p>
             
            <button className=' transition-all bg-gradient-to-tr from-[#95b1ee] to-[#728ccd] font-[Comic_Relief]  cursor-pointe text-white rounded-lg py-2 px-6 text-xl box capitalize font-medium'>Explore courses</button>
          </div>
          <div>
            <div className='flex '>
              <img className='relative rounded-4xl left-[4rem] top-16 w-lg z-30' src={hero} alt="" />
            </div>
            {/* connected students */}
            <div className="home-bg border-white border max-w-1/3 shadow-2xs shadow-black  absolute top-[7rem] right-[10rem] flex gap-3 flex-col px-4 py-5 rounded-2xl">
              <h2 className='text-xl font-bold  capitalize text-gray-100'>2K+ connected students</h2>
              <div className='flex flex-col justify-start gap-4 items-start '>
                <div className='flex justify-center items-center gap-2'>
                  <img className='w-14 rounded-2xl' src="https://i.pinimg.com/736x/49/69/ee/4969eedf929fec0fdd484ef1260bcb51.jpg" alt="" />
                  <div className='flex flex-col'>
                    <span className='text-lg capitalize font-semibold text-white'>
                      kefier
                    </span>
                    <span className='text-sm flex items-center gap-1 justify-center  text-pink-300'>
                      <span className='w-2 h-2 mt-1 rounded-full font-medium bg-pink-300'></span>connected
                    </span>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                  <img className='w-14 rounded-2xl' src="https://i.pinimg.com/736x/41/9d/79/419d79f7ed0bade5a1d43b2f43f91eff.jpg" alt="" />
                  <div className='flex flex-col'>
                    <span className='text-lg capitalize font-semibold text-white'>
                      jay jay
                    </span>
                    <span className='text-sm flex items-center gap-1 justify-center  text-pink-300'>
                      <span className='w-2 h-2 mt-1 rounded-full font-medium bg-pink-300'></span>connected
                    </span>
                  </div>
                </div>
              </div>
            </div> 
            {/* successful growth */}
            <div className='flex shadow-lg shadow-black  w-[14vw] absolute z-10 top-[14rem] right-[30rem] px-2 py-1  gap-1 justify-start  rounded-2xl bg-[#fffdf5] opacity-85 backdrop-blur-md items-center '>
              <h2 className='text-sm font-semibold  capitalize '>successful growth</h2>
              <div>
                <img className='w-14 rounded-2xl' src="https://i.pinimg.com/736x/d7/f2/c9/d7f2c9b7a05f1e67e863b26f4bd3a8aa.jpg" alt="" />
              </div>

            </div>
          </div>
        </div>
        {/* data */}
        <div className='data  my-10 flex flex-row gap-6 justify-center items-center'>
          <div className='flex border-2 opacity-95 hover:opacity-100  border-rose-200 inset-shadow-rose-300 inset-shadow-2xs  cursor-pointer shadow-md shadow-black hover:-translate-y-4 -translate-y-0 transition-all justify-start p-5 rounded-xl  items-center gap-2 bg-white capitalize duration-300 ease-in hover:scale-105'>
            <span>
              <TbBooks className='text-6xl  font-light icon' />
            </span>
            <span className='flex justify-start flex-col ' >
              <span className='text-3xl font-semibold'>24K+</span>
              <span className='text-lg font-light'> online courses</span>
            </span>
          </div>
          <div className='flex border-2 opacity-95 hover:opacity-100  border-rose-200 inset-shadow-rose-300 inset-shadow-2xs  cursor-pointer shadow-md shadow-black hover:-translate-y-4 -translate-y-0 transition-all justify-start p-5 rounded-xl  items-center gap-2 bg-white capitalize duration-300 ease-in hover:scale-105 '>
            <span>
              <FaChalkboardTeacher className='text-6xl  font-light icon' />
            </span>
            <span className='flex justify-start flex-col ' >
              <span className='text-3xl font-semibold'>60+</span>
              <span className='text-lg font-light'> expert tutors</span>
            </span>
          </div>
          <div className='flex border-2 opacity-95 hover:opacity-100  border-rose-200 inset-shadow-rose-300 inset-shadow-2xs  cursor-pointer shadow-md shadow-black hover:-translate-y-4 -translate-y-0 transition-all justify-start p-5 rounded-xl  items-center gap-2 bg-white capitalize duration-300 ease-in hover:scale-105 '>
            <span>
              <PiStudentFill className='text-6xl  font-light icon' />
            </span>
            <span className='flex justify-start flex-col ' >
              <span className='text-3xl font-semibold'>20K+</span>
              <span className='text-lg font-light'>online sudents </span>
            </span>
          </div>
          <div className='flex border-2 opacity-95 hover:opacity-100  border-rose-200 inset-shadow-rose-300 inset-shadow-2xs  cursor-pointer shadow-md shadow-black hover:-translate-y-4 -translate-y-0 transition-all justify-start p-5 rounded-xl  items-center gap-2 bg-white capitalize duration-300 ease-in hover:scale-105'>
            <span>
              <GrCertificate className='text-6xl  font-light icon' />
            </span>
            <span className='flex justify-start flex-col ' >
              <span className='text-3xl font-semibold'>5K+</span>
              <span className='text-lg font-light'> certified courses</span>
            </span>
          </div>
        </div>
      </div>
      {/* features */}
      <div className='w-full flex flex-col gap-6 justify-center items-center  h-screen py-20 my-28 px-10 font-["Roboto"]  '>
        {/* feature header */}
        <div onClick={ShowFeature} className={`feature-box flex justify-center items-center font-[Outfit] w-1/2 h-1/2 shadow-2xs shadow-black text-4xl capitalize font-semibold  text-[#2a3f74]  gap-3 p-10 rounded-2xl ${show ? '-translate-y-0' : '-translate-y-2/3'}`}>
          <div className='flex flex-col  justify-center items-center gap-6'><div><h2>our <span className='font-[Merienda] italic lowercase  text-shadow-2xs  drop-shadow-2xl text-white' >features</span> specially for you</h2></div>
            <div className='flex justify-start flex-row items-center cursor-pointer '>
              <div className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer box text-white rounded-lg py-2 px-3 gap-1 text-xl  capitalize font-medium'><button  >see all features</button><span className='mt-1 group-hover:-translate-y-1 transition-all -translate-y-0'> <MdArrowOutward /></span></div>

            </div>
          </div>
        </div>

        {/* feature cards */}
        {show && (
          <div className='grid grid-cols-4 gap-4 px-5 py-10 '>
            <div className=' group flex justify-start items-center shadow-2xl cursor-pointer hover:scale-105 transition-all  scale-100 border-2 border-[#95b1ee] hover:bg-gradient-to-tr hover:from-[#95b1ee] hover:to-[#728ccd] hover:text-white rounded-2xl py-6 px-3 gap-3  flex-col  capitalize '>
              <span ><PiVideoFill className='text-6xl text-blue-300 group-hover:text-white' /></span>
              <h2 className='text-2xl font-heading font-semibold'>
                Video lesson</h2>
              <p className='font-body text-center'>
                recorded version of lectures from professional instructions to boost your growth
              </p>
            </div>
            <div className=' group flex justify-start items-center shadow-2xl cursor-pointer hover:scale-105 transition-all  scale-100 border-2 border-[#95b1ee] hover:bg-gradient-to-tr hover:from-[#95b1ee] hover:to-[#728ccd] hover:text-white rounded-2xl py-6 px-3 gap-3  flex-col  capitalize'>
            
              <span><LiaCertificateSolid className='text-6xl text-blue-300 group-hover:text-white' /></span>
              <h2 className='text-2xl font-heading font-semibold'>
                get Certificate</h2>
              <p className='font-body text-center'>
                add value to your Certificate and increase chance of getting hired in your dream job
              </p>
            </div>
            <div className=' group flex justify-start items-center shadow-2xl cursor-pointer hover:scale-105 transition-all  scale-100 border-2 border-[#95b1ee] hover:bg-gradient-to-tr hover:from-[#95b1ee] hover:to-[#728ccd] hover:text-white rounded-2xl py-6 px-3 gap-3  flex-col  capitalize'>
              <span><MdSupportAgent className='text-6xl text-blue-300 group-hover:text-white'/></span>
              <h2 className='text-2xl font-heading font-semibold'>
                life time support</h2>
              <p className='font-body text-center'>
                you will have lifetime access of the courses & resources. also contacting supporters any time
              </p>
            </div>
            <div className=' group flex justify-start items-center shadow-2xl cursor-pointer hover:scale-105 transition-all  scale-100 border-2 border-[#95b1ee] hover:bg-gradient-to-tr hover:from-[#95b1ee] hover:to-[#728ccd] hover:text-white rounded-2xl py-6 px-3 gap-3  flex-col  capitalize'>
              <span><GiTeacher className='text-6xl text-blue-300 group-hover:text-white' /></span>
              <h2 className='text-2xl font-heading  font-semibold'>
                Amazing instructor</h2>
              <p className='font-body text-center'>
                our Amazing instructor bring experience , knowledge and fun on the table
              </p>
            </div>
          </div>
        )}
      </div>
      {/* popular courses */}
      <div className={`box p-10 font-[outfit] w-full h-full ${show ? 'translate-y-0' : '-translate-y-1/3'}`}>
        <div>
          <h2 className='text-5xl text-white drop-shadow-lg py-10 font-medium font-[outfit] capitalize text-center '>popular <span className='text-4xl border-b-2 font-[Merienda]  italic'>courses</span></h2>
        </div>
        {/* courses cards */}
        <div className='embla' ref={emblaRef}>
          <div className='embla__container  flex  gap-4 px-5 py-10'>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2x text-whit backdrop-blur-lg  border 
rounded-2xl p-6 shadow-lg 
hover:shadow-2xl hover:shadow-[#1e3a8a]/40 
transition-all duration-300'>
              <div className='grid group'>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/40/d0/21/40d021be8efd787a53076c457167e101.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85  rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>

              <div className='flex justify-start  items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium text-white font-heading'>cha eun woo </span>
                  <span className='font-medium text-sm text-gray-300 font-body'>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold font-heading'> Full-Stack Web Development</h2>
                <p className='text-base mt-2 text-wrap font-body text-gray-100'>Learn HTML, CSS, JavaScript, React & Node.js to build dynamic websites.</p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex border text-white bg-black capitalize text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 5</h2>
                </div>
                <div className='flex border capitalize text-white bg-black text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
            <div className='embla__slide rounded-4xl p-5'>
             
              <div className='relative group cursor-pointer '>
                <img src="https://i.pinimg.com/736x/40/d0/21/40d021be8efd787a53076c457167e101.jpg" className='aspect-square rounded-2xl shadow group-hover:brightness-50 transition-all ease-in duration-200' alt="" />
                <div className=' gap-5 items-center justify-start absolute bottom-1 right-0 z-40 text-xl text-black p-5 hidden group-hover:flex '><span className=' bg-white p-2 rounded-full hover:scale-110 ease-in duration-200 transition-all'>
                  <FaHeart/></span><span className=' bg-white p-2 rounded-full hover:scale-110 ease-in duration-200 transition-all'><FaCartArrowDown/></span></div>
              </div>
               <span className='p-2 bg-black/40 font-body rounded-lg'>Development</span>
                <div>
                    <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold font-heading text-black'> Full-Stack Web Development</h2>
                <p className='text-base mt-1 text-wrap font-body text-gray-900 line-clamp-2'>Learn HTML, CSS, JavaScript, React & Node.js to build dynamic websites.
                </p>
              </div>
                </div>
            </div>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
              <div className='grid group '>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/42/da/db/42dadbfe747110c544fab569d954869c.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85  rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium'>cha eun woo </span>
                  <span className='font-medium text-sm '>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold'>UI/UX Design Masterclass </h2>
                <p className='text-lg text-wrap'> Master design Lorem ipsum dolor sit. tools & principles to craft stunning user experiences..</p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 4.8</h2>
                </div>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
              <div className='grid group '>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/1b/93/36/1b9336a73cb9d8f8e9aab83ab7c64907.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85 rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium'>cha eun woo </span>
                  <span className='font-medium text-sm '>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold'> Digital Marketing Bootcamp </h2>
                <p className='text-lg text-wrap'> SEO, social media, and strategy — all in one power-packed course..</p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex bg-black text-white border capitalize text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 4.8</h2>
                </div>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
              <div className='grid group '>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/93/01/e8/9301e8a46ad56d6b60d70562df8b802b.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85  rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium'>cha eun woo </span>
                  <span className='font-medium text-sm '>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold'> AI & Machine Learning</h2>
                <p className='text-lg text-wrap'>Dive into neural networks, deep learning, and AI concepts from Lorem ipsum dolor sit amet, consectetur  </p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 5</h2>
                </div>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
              <div className='grid group '>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/1b/93/36/1b9336a73cb9d8f8e9aab83ab7c64907.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85 rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium'>cha eun woo </span>
                  <span className='font-medium text-sm '>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold'> Digital Marketing Bootcamp </h2>
                <p className='text-lg text-wrap'> SEO, social media, and strategy — all in one power-packed course..</p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex bg-black text-white border capitalize text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 4.8</h2>
                </div>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
            <div className='flex embla__slide flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
              <div className='grid group '>
                <div className='col-start-1 row-start-1 z-0'><img src="https://i.pinimg.com/736x/93/01/e8/9301e8a46ad56d6b60d70562df8b802b.jpg" className=' col-span-1 rounded-2xl' alt="" /></div>
                <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85  rounded-2xl'>
                  <div >
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                  <div>
                    <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                </div>
              </div>
              <div className='flex justify-start items-center gap-3'>
                <div><img src="https://i.pinimg.com/736x/26/f7/b9/26f7b9e4919314c77cf658313c59c0e8.jpg" className='w-16 rounded-full ' alt="" /></div>
                <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                  <span className='text-lg font-medium'>cha eun woo </span>
                  <span className='font-medium text-sm '>instructor</span>
                </div>
              </div>
              <div className='flex flex-col text-left  flex-wrap'>
                <h2 className='text-xl font-semibold'> AI & Machine Learning</h2>
                <p className='text-lg text-wrap'>Dive into neural networks, deep learning, and AI concepts from Lorem ipsum dolor sit amet, consectetur  </p>
              </div>
              <div className='flex  justify-between  items-center'>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                  <span className='flex justify-center text-yellow-500'><FaStar /></span>
                  <h2 className=' font-medium'> 5</h2>
                </div>
                <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                  12.9k rating
                </div>
              </div>
            </div>
          </div>
          <div className="relative  flex justify-center items-center gap-3 mt-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-1 w-6 rounded-full cursor-pointer transition-all duration-500 ${index === selectedIndex
                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 w-8 shadow-md shadow-pink-300/40'
                    : 'bg-pink-200'
                  }`}
              />
            ))}
          </div>






        </div>
      </div>
      {/* trusted by */}
      <div className={`text-center w-full h-full px-10 py-5  ${show ? 'translate-y-0' : '-translate-y-[15rem]'}`}>
        <h2 className='text-xl font-light font-[Outfit]'>Trusted by over 16,000 companies and millions of learners around the world  </h2>
        <div className='text-6xl logo font-light opacity-80 font-[Outfit] flex flex-row  justify-center gap-24 items-center mt-11'>
          <span><FaAws /></span>
          <span><SiCanva /></span>
          <span><FaGoogle /></span>
          <span><SiSamsung /></span>
          <span><TiVendorMicrosoft /></span>
          <span><FaGitAlt /></span>
          <span><FaApple /></span>
          <span><SiDuolingo /></span>
        </div>
      </div>
      {/* featured courses and teachers */}
      <div className={`box  grid grid-cols-1 gap-10  w-full h-full px-10 py-20 mt-12  ${show ? 'translate-y-0' : '-translate-y-[15rem]'}`}>
        {/* featured courses */}
        <div>
          <div className=' flex flex-col  justify-start  items-start gap-3 mt-10'>
            <h4 className=' text-lg text-pink-300 text-left capitalize font-[Merienda]'> “Editor’s Picks” </h4>
            <h2 className='text-5xl text-white drop-shadow-lg  font-medium font-[outfit] capitalize text-center '>featured <span className='text-4xl border-b-2 font-[Merienda]  italic'>courses</span></h2>
            <p className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, nostrum!</p>
          </div>
          <div className='grid grid-cols-4 gap-4 px-5 py-10'>
            {featureCourses.map((courses, index) => (
              <div className='flex cards flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
                <div className='grid group'>
                  <div className='col-start-1 row-start-1 z-0'><img src={courses.img} className=' col-span-1 rounded-2xl' alt="" /></div>
                  <div className='col-start-1 invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-blue-300 opacity-85  rounded-2xl'>
                    <div >
                      <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group   border-blue-300 font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>view course</button></div>
                    <div>
                      <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>Free</button></div>
                  </div>
                </div>

                <div className='flex justify-start  items-center gap-3'>
                  <div><img src={courses.instructor_img} className='w-16 rounded-full ' alt="" /></div>
                  <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                    <span className='text-lg font-medium'>{courses.instructor_name} </span>
                    <span className='font-medium text-sm '>instructor</span>
                  </div>
                </div>
                <div className='flex flex-col text-left  flex-wrap'>
                  <h2 className='text-xl font-semibold'> {courses.course_name}</h2>
                  <p className='text-lg text-wrap'>{courses.course_desc} </p>
                </div>
                <div className='flex  justify-between  items-center'>
                  <div className='flex border text-white bg-black capitalize text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
                    <span className='flex justify-center text-yellow-500'><FaStar /></span>
                    <h2 className=' font-medium'> {courses.rating} </h2>
                  </div>
                  <div className='flex border capitalize text-white bg-black text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
                    {courses.view}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* featured teachers */}
        <div>
          <div className=' flex flex-col  justify-start  items-start gap-3 mt-10'>
            <h2 className='text-5xl text-white drop-shadow-lg  font-medium font-[outfit] capitalize text-center '>featured <span className='text-4xl border-b-2 font-[Merienda]  italic'>teachers</span></h2>
            <p className='text-white text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, nostrum!</p>
          </div>
          <div className='grid grid-cols-4 gap-4 px-5 py-10'>
            {teachers.map((teacher, index) => (
              <div className='flex cards ease-in-out  flex-col cursor-pointer shadow-2xl bg-white w-full gap-3 rounded-2xl   h-full px-6 py-6'>
                <div className='text-2xl flex   flex-col font-[Roboto] capitalize '>
                  <span className='font-semibold'>{teacher.name}</span>
                  <span className='text-lg italic'>{teacher.title}</span>
                </div>
                <div className=' ease-in-out '><img className='rounded-2xl  ' src={teacher.img} alt="" />
                </div>
                <div className='text-4xl flex justify-center  rounded-4xl cards shadow-2xl  items-center gap-5 text-gray-800 '>
                  <span className='hover:text-black scale-100 hover:scale-110 transition-all'>
                    <a href="/home"><FaLinkedin /></a>
                  </span>
                  <span className='hover:text-black scale-100 hover:scale-110 transition-all'>
                    <a href="/home"><FaInstagram /></a>
                  </span>
                  <span className='hover:text-black scale-100 hover:scale-110 transition-all'>
                    <a href="/home"><FaSquareXTwitter /></a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className={`bg-black text-white  grid  grid-cols-1 gap-10  w-full h-full px-10 py-20   ${show ? 'translate-y-0' : '-translate-y-[15rem]'}`}>
      <div className='flex flex-col gap-2 text-center items-center justify-center'>
        <h2 className='text-4xl capitalize  text-center  font-[outfit]'>what our students say about us ?</h2>
        <p>Lorem ipsum dolor sit amet, . Labore, libero!</p>
      </div>
      <div className='embla1' ref={emblaRef1}>
      <div className='flex flex-col gap-5 justify-center items-center'>
      {testimonials.map((testimonials, index) => (
      <div key={index} className='flex flex-col justify-center items-center'>
      <div className='flex p-7 bg-white rounded-4xl w-[50vw] justify-center item-center'>
        <div className=' grid  shadow-2xl testimonials grid-cols-2  rounded-4xl justify-center p-5 items-center gap-3 '>
          <div className='flex flex-col  text-center justify-center items-center gap-3'>
            <div className=' border-2 p-3 rounded-br-3xl rounded-tl-3xl'><img className='w-[10rem] rounded-tl-3xl rounded-br-3xl' src={testimonials.img} alt="" /></div>
           <span className='text-lg text-black capitalize font-medium flex flex-col'> <span>{testimonials.name}</span><span> {testimonials.title}</span></span>
            </div>
            <div className='text-xl  font-[Merienda] italic text-white  drop-shadow-lg  font-medium  capitalize '>
              {testimonials.desc}
            </div>
        </div>
      </div>
      </div>
      ))}
      </div>
      </div>
</div>

    </div>
  )
}

export default Home