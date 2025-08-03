//  const  featureCourses = [
//     {
//       img: 'https://i.pinimg.com/736x/eb/e8/f2/ebe8f272e71472bca58429b5a578c01d.jpg',
//       instructor_name: 'choi woo shik',
//       instructor_img: "https://i.pinimg.com/736x/28/cc/05/28cc0589ea825e42cc56945e5cc40ad9.jpg",
//       course_name: 'Resume Building & LinkedIn Optimization',
//       course_desc: '  Learn how to craft a professional resume and  LinkedIn profile for  NGOs, and the private sector.',
//       rating: '4.8',
//       view: '9k rating',
//     }
//     ,

//     {
//       img: 'https://i.pinimg.com/736x/1a/52/68/1a52684e39935324d102eb11e03eb3cb.jpg',
//       instructor_name: 'seo ye ji',
//       instructor_img: "https://i.pinimg.com/736x/fa/6f/b1/fa6fb1633beb5f62bd496b8161e5f1e0.jpg",
//       course_name: 'Crypto, Blockchain & the Future of the Interne',
//       course_desc: 'Understand the evolving world of cryptocurrencies, blockchain technology,  and global finance',
//       rating: '4.9',
//       view: '13k rating'
//     },
//     {
//       img: 'https://i.pinimg.com/736x/4c/1d/08/4c1d08a4944075a883c31a0eec66fc5e.jpg',
//       instructor_name: 'kim seon ho',
//       instructor_img: "https://i.pinimg.com/736x/99/ff/30/99ff30b1f4549a457412ecfbe14a4baa.jpg",
//       course_name: 'Focus, Habits & Time Management for Students',
//       course_desc: 'High emotional hook — improves study skills and life skills.',
//       rating: '4.3',
//       view: '10k rating'
//     },
//     {
//       img: 'https://i.pinimg.com/736x/04/be/d3/04bed3b5e20f285abe7ee410d7ec0b4e.jpg',
//       instructor_name: 'henry golding',
//       instructor_img: "https://i.pinimg.com/736x/7c/29/9a/7c299a9abf064b2178e019e4eeadf733.jpg",
//       course_name: 'Interview Preparation & DAF Handling',
//       course_desc: 'The UPSC Personality Test is not just a Q&A round—its an evaluation of your personality, presence, and purpose.',
//       rating: '4.9',
//       view: '13k rating'
//     }

//   ]

const featureCourses = [
  {
    img: 'https://i.pinimg.com/736x/4c/1d/08/4c1d08a4944075a883c31a0eec66fc5e.jpg',
    instructor_name: 'Kim Seon Ho',
    instructor_img: 'https://i.pinimg.com/736x/99/ff/30/99ff30b1f4549a457412ecfbe14a4baa.jpg',
    course_name: 'Focus, Habits & Time Management for Students',
    course_desc: 'High emotional hook — improves study skills and life skills.',
    rating: '4.3',
    view: '10k ratings',
    category: 'Productivity',
    price: 'Free',
    duration: '2.5 hours'
  },
  {
    img: 'https://i.pinimg.com/736x/d2/6b/5a/d26b5a6f6509fc9e84c8c21ee0c1bd1a.jpg',
    instructor_name: 'Lee Min Ho',
    instructor_img: 'https://i.pinimg.com/736x/51/00/0d/51000d7f9a2b8dfdd9c127e2a7f8e1a2.jpg',
    course_name: 'Master Web Development: HTML, CSS, JS',
    course_desc: 'Become a front-end developer by building real websites.',
    rating: '4.8',
    view: '21k ratings',
    category: 'Web Development',
    price: 'Paid',
    duration: '8 hours'
  },
  {
    img: 'https://i.pinimg.com/736x/90/e0/d0/90e0d01217eb37911a8c4f3857aa29fc.jpg',
    instructor_name: 'Park Shin Hye',
    instructor_img: 'https://i.pinimg.com/736x/e9/e5/4a/e9e54aa1a2fc95fbcf20b72c3174a02a.jpg',
    course_name: 'Beginner Korean Language Course',
    course_desc: 'Learn to speak Korean fluently from scratch.',
    rating: '4.6',
    view: '14k ratings',
    category: 'Language',
    price: 'Free',
    duration: '6 hours'
  },
  {
    img: 'https://i.pinimg.com/736x/67/09/c2/6709c28fa4c6e6f3509a2c02f2f8ff4e.jpg',
    instructor_name: 'Nam Joo Hyuk',
    instructor_img: 'https://i.pinimg.com/736x/7b/20/f2/7b20f2dbcefbdb65e826fc5074f7b326.jpg',
    course_name: 'Build Mobile Apps with Flutter',
    course_desc: 'Create beautiful, responsive apps for Android and iOS.',
    rating: '4.5',
    view: '17k ratings',
    category: 'App Development',
    price: 'Paid',
    duration: '10 hours'
  },
  {
    img: 'https://i.pinimg.com/736x/c1/74/26/c1742612c7c78d733f86ecaa5f6d489f.jpg',
    instructor_name: 'IU',
    instructor_img: 'https://i.pinimg.com/736x/58/31/5c/58315c31ffce3c13ccde5b3f7fc2908d.jpg',
    course_name: 'UI/UX Design Essentials with Figma',
    course_desc: 'Design modern interfaces and user experiences with real projects.',
    rating: '4.7',
    view: '25k ratings',
    category: 'Design',
    price: 'Free',
    duration: '4 hours'
  },
  {
    img: 'https://i.pinimg.com/736x/15/4a/2d/154a2df4f86c5362b772e8a1763cb727.jpg',
    instructor_name: 'Choi Woo Shik',
    instructor_img: 'https://i.pinimg.com/736x/9e/8b/f5/9e8bf5c8b4600a5f6e5a6d913e03b14e.jpg',
    course_name: 'Data Structures & Algorithms in JavaScript',
    course_desc: 'Ace technical interviews by mastering DSA concepts.',
    rating: '4.9',
    view: '30k ratings',
    category: 'Web Development',
    price: 'Paid',
    duration: '12 hours'
  }
  ,
  {
    
    img: 'https://i.pinimg.com/736x/4c/1d/08/4c1d08a4944075a883c31a0eec66fc5e.jpg',
    instructor_name: 'Kim Seon Ho',
    instructor_img: 'https://i.pinimg.com/736x/99/ff/30/99ff30b1f4549a457412ecfbe14a4baa.jpg',
    course_name: 'Focus, Habits & Time Management for Students',
    course_desc: 'High emotional hook — improves study skills and life skills.',
    rating: 4.3,
    view: '10k rating',
    category: 'Personal Development',
    subcategory: 'Productivity',
    price: 'Free',
    duration: '3.5 hours',
  },
  {
    
    img: 'https://i.pinimg.com/736x/e3/84/b5/e384b5d3fcdc1ab68f7f7ec90c77f264.jpg',
    instructor_name: 'Sarah Kim',
    instructor_img: 'https://i.pinimg.com/736x/5e/f7/56/5ef756c7cf7a7e0192c190377847a2fa.jpg',
    course_name: 'Modern Web Development with React',
    course_desc: 'Master React and build powerful front-end applications.',
    rating: 4.7,
    view: '8.4k rating',
    category: 'Development',
    subcategory: 'Web Development',
    price: 'Paid',
    duration: '6 hours',
  },
  {
    img: 'https://i.pinimg.com/736x/b1/60/13/b160139fc29f0a6225a2cd22d1de6fd9.jpg',
    instructor_name: 'David Lee',
    instructor_img: 'https://i.pinimg.com/736x/ce/4a/59/ce4a59d3cddc8eec46d6c98f6b6b4420.jpg',
    course_name: 'Mobile App Development with Flutter',
    course_desc: 'Build beautiful native apps with Flutter and Dart.',
    rating: 4.5,
    view: '12.3k rating',
    category: 'Development',
    subcategory: 'App Development',
    price: 'Paid',
    duration: '5 hours',
  },
  {

    img: 'https://i.pinimg.com/736x/fb/3c/7b/fb3c7b1cf86e00d61b112aa5c4b8a8b0.jpg',
    instructor_name: 'Emma Choi',
    instructor_img: 'https://i.pinimg.com/736x/fc/d3/5f/fcd35f0b3eaf019cb20a83013e8711c0.jpg',
    course_name: 'Graphic Design Essentials',
    course_desc: 'Learn the fundamentals of design theory and tools.',
    rating: 4.2,
    view: '9k rating',
    category: 'Design',
    subcategory: 'Graphic Design',
    price: 'Free',
    duration: '2.5 hours',
  },
  {
    
    img: 'https://i.pinimg.com/736x/a7/70/24/a770248b56100d567202f527e56c50e7.jpg',
    instructor_name: 'Noah Park',
    instructor_img: 'https://i.pinimg.com/736x/71/61/95/716195a3f27e973e9ec0a4562ac5c066.jpg',
    course_name: 'Python Programming for Beginners',
    course_desc: 'Start coding in Python with real-world projects.',
    rating: 4.6,
    view: '15k rating',
    category: 'Development',
    subcategory: 'Programming Languages',
    price: 'Free',
    duration: '7 hours',
  },
  {
    
    img: 'https://i.pinimg.com/736x/b7/d5/58/b7d5583d627b43aeb319b979f524d3fa.jpg',
    instructor_name: 'Sofia Lim',
    instructor_img: 'https://i.pinimg.com/736x/d5/1e/2a/d51e2a2e2b9d2c4ff2e3e0b019ad46c3.jpg',
    course_name: 'Mastering Public Speaking',
    course_desc: 'Boost confidence and communication in every speech.',
    rating: 4.9,
    view: '20k rating',
    category: 'Personal Development',
    subcategory: 'Communication',
    price: 'Paid',
    duration: '4 hours',
  },
  {
    
    img: 'https://i.pinimg.com/736x/89/68/93/8968930d49e9eb4a02e58f9137b889eb.jpg',
    instructor_name: 'Liam Han',
    instructor_img: 'https://i.pinimg.com/736x/41/f4/e3/41f4e39327089d4fc55a43eec95d8937.jpg',
    course_name: 'UI/UX Design for Beginners',
    course_desc: 'Design user-friendly websites and apps.',
    rating: 4.4,
    view: '6.7k rating',
    category: 'Design',
    subcategory: 'UI/UX',
    price: 'Paid',
    duration: '3 hours',
  }
,
  {
    img: "https://i.pinimg.com/736x/4c/1d/08/4c1d08a4944075a883c31a0eec66fc5e.jpg",
    instructor_name: "Kim Seon Ho",
    instructor_img: "https://i.pinimg.com/736x/99/ff/30/99ff30b1f4549a457412ecfbe14a4baa.jpg",
    course_name: "Focus, Habits & Time Management for Students",
    course_desc: "High emotional hook — improves study skills and life skills.",
    rating: "4.3",
    view: "10k ratings",
    category: "Personal Development",
    subcategory: "Time Management",
    duration: "3h 20m",
    price: 799
  },
  {
    img: "https://i.pinimg.com/736x/92/01/3f/92013f306f418b23d0f5b8f77cc2dc65.jpg",
    instructor_name: "Sarah Lee",
    instructor_img: "https://i.pinimg.com/736x/91/2f/63/912f63547c5b40d0ae07ec0f9c72f8b1.jpg",
    course_name: "Full Stack Web Development Bootcamp",
    course_desc: "Learn HTML, CSS, JS, React, Node, and MongoDB from scratch.",
    rating: "4.7",
    view: "25k ratings",
    category: "Development",
    subcategory: "Web Development",
    duration: "15h 30m",
    price: 1499
  },
  {
    img: "https://i.pinimg.com/736x/0d/20/1c/0d201ce6613b986cf2cf5cf62c1342c3.jpg",
    instructor_name: "David Kim",
    instructor_img: "https://i.pinimg.com/736x/9f/d2/84/9fd284c1de506238d2d84dc0e2de12df.jpg",
    course_name: "UI/UX Design Principles",
    course_desc: "Master user experience and modern interface design.",
    rating: "4.5",
    view: "12k ratings",
    category: "Design",
    subcategory: "UI/UX Design",
    duration: "7h 10m",
    price: 999
  },
  {
    img: "https://i.pinimg.com/736x/b1/0a/99/b10a99692aa5aa8c9f0193ae3cf802db.jpg",
    instructor_name: "Emma Park",
    instructor_img: "https://i.pinimg.com/736x/3c/57/f5/3c57f5f76a6ef4f43a2e2a63d003b6a3.jpg",
    course_name: "Digital Marketing Masterclass",
    course_desc: "SEO, Social Media, Branding and everything digital.",
    rating: "4.6",
    view: "19k ratings",
    category: "Marketing",
    subcategory: "Digital Marketing",
    duration: "10h 45m",
    price: 1299
  }
];



  export default featureCourses
  