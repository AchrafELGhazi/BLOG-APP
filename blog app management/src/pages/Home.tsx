import BlogList from '../components/BlogLIst';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function Home() {
  // const handleClick = (name: string, e: MouseEvent) => {
  //   console.log(`Hello ${name}`, e);};

  //   const [sentence, setSentence] = useState(
  //     'EL MEHDI GREATEST SOFTWARE DEVELOPER ENGINEER'
  //   );
  //   const [age, setAge] = useState(25);

  // const handleClick = () => {
  //   setSentence('Achraf GREATEST SOFTWARE DEVELOPER ENGINEER');
  //   setAge(30);
  // };

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Web Development',
      content:
        "As we step into a new era of technological advancement, Artificial Intelligence (AI) is revolutionizing the way we approach web development. From intelligent chatbots to personalized user experiences, AI is reshaping the digital landscape. This blog post explores the potential applications of AI in web development, including predictive analytics, automated testing, and smart content generation. We'll also discuss the challenges and ethical considerations that come with integrating AI into our development processes.",
      author: 'Dr. Emily Chen',
    },
    {
      id: 2,
      title: 'Mastering CSS Grid: A Comprehensive Guide',
      content:
        "CSS Grid has transformed the way we create layouts in web design. This in-depth guide covers everything from the basics of grid container and grid items to advanced techniques like nested grids and responsive layouts without media queries. We'll walk through practical examples, discuss browser support, and share tips for integrating CSS Grid with other layout methods like Flexbox. Whether you're a beginner or an experienced developer, this post will help you harness the full power of CSS Grid in your projects.",
      author: 'Alex Rodriguez',
    },
    {
      id: 3,
      title: 'The Rise of JAMstack: Revolutionizing Web Architecture',
      content:
        "JAMstack (JavaScript, APIs, and Markup) is gaining traction as a modern web development architecture that promises better performance, higher security, and lower cost of scaling. This post delves into the core principles of JAMstack, its benefits, and potential drawbacks. We'll explore popular static site generators, headless CMS options, and deployment strategies. Through case studies, we'll demonstrate how companies are leveraging JAMstack to build faster, more secure websites and applications.",
      author: 'Sarah Johnson',
    },
    {
      id: 4,
      title: 'Accessibility in Web Design: Ensuring Inclusive User Experiences',
      content:
        "Creating accessible websites is not just a legal requirement in many countries, it's a moral imperative. This comprehensive guide covers the key principles of web accessibility, including keyboard navigation, screen reader compatibility, and color contrast. We'll discuss the Web Content Accessibility Guidelines (WCAG) and provide practical tips for implementing accessibility features in your web projects. Learn how to conduct accessibility audits and the tools that can help you create more inclusive digital experiences for all users.",
      author: 'Michael Thompson',
    },
    {
      id: 5,
      title: 'Optimizing Web Performance: Strategies for Faster Load Times',
      content:
        "In an age where users expect instant gratification, optimizing your website's performance is crucial. This blog post explores various strategies to enhance web performance, including minimizing HTTP requests, leveraging browser caching, and implementing lazy loading for images and videos. We'll dive into the latest performance APIs, discuss the impact of third-party scripts, and share best practices for optimizing CSS and JavaScript. Discover how tools like Lighthouse and WebPageTest can help you identify and fix performance bottlenecks in your web applications.",
      author: 'Lena Patel',
    },
  ]);




  return (
    <div className='bg-gray-200 min-h-screen'>
      <Navbar />
      <div className='container  text-center -mb-10 mt-11 mx-auto px-4 py-16'>
        <h1 className='text-4xl md:text-5xl font-normal text-center text-gray-800 tracking-widest relative inline-block'>
          BLOGS
          <span className='absolute -bottom-2 left-0 w-full h-0.5 bg-gray-800 transform -skew-x-12'></span>
        </h1>
      </div>
      <div className='text-center'>
        {/* <button
          onClick={e => {
            handleClick('john', e);
          }}
          className='bg-blue-600 hover:bg-blue-400 text-white font-medium py-3 px-5 rounded '
        >
          CLICK ME !
        </button> */}

        {/* <button
          onClick={() => {
            handleClick();
          }}
          className='bg-blue-600 hover:bg-blue-400 text-white font-medium py-3 px-5 rounded '
        >
          CLICK ME !
        </button>

        <div className='text-3xl mx-20 font-bold mt-20 text-center'>{sentence}, and he is {age} years old</div> */}
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}

export default Home;
