import React from "react";

interface Tag {
  text: string;
}

interface Blog {
  author: string;
  date: string;
  label?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface TagPillProps {
  text: string;
}

interface BlogCardProps {
  blog: Blog;
}

const TagPill: React.FC<TagPillProps> = ({ text }) => {
  // Generate color based on tag text to keep consistent colors for same tags
  const getColorClass = (): string => {
    switch (text.toLowerCase().split(" ")[0]) {
      case "tax":
        return "text-green-700 bg-green-100";
      case "audit":
        return "text-purple-700 bg-purple-100";
      case "money":
        return "text-blue-700 bg-blue-100";
      case "management":
        return "text-indigo-700 bg-indigo-100";
      case "research":
        return "text-cyan-700 bg-cyan-100";
      case "complience":
        return "text-red-700 bg-red-100";
      case "news":
        return "text-pink-700 bg-pink-100";
      case "private":
        return "text-violet-700 bg-violet-100";
      case "customer":
        return "text-amber-700 bg-amber-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full ${getColorClass()}`}>
      {text}
    </span>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="mb-2 flex items-center text-gray-500 text-sm">
          <span>{blog.author}</span>
          <span className="mx-1">•</span>
          <span>{blog.date}</span>
          {blog.label && (
            <>
              <span className="mx-1">•</span>
              <span className="text-blue-600">{blog.label}</span>
            </>
          )}
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#1A1A1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {blog.tags.map((tag, i) => (
            <TagPill key={i} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogs: Blog[] = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      label: "Today",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
      image: "/images/business1.jpg",
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
      image: "/images/business2.jpg",
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: "/images/business3.jpg",
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
      image: "/images/business4.jpg",
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
      image: "/images/business5.jpg",
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
      image: "/images/business6.jpg",
    },
  ];

  return (
    <div className="p-14 bg-gray-50">
      <div className="grid grid-cols-1 gap-4 mb-10">
        <p className="text-[#EB8D15] font-inter place-self-center m-1 tracking-[1.5px] uppercase font-medium">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-[#272D37] font-bold text-[32px] place-self-center tracking-[.16px] text-center max-w-2xl mx-auto">
          Accelerate Digital Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
