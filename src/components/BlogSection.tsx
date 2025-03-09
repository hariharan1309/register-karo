import Img1 from "../assets/blog/B1.png";

import Img2 from "../assets/blog/B2.png";
import Img4 from "../assets/blog/B4.png";
import Img5 from "../assets/blog/B5.png";
import Img6 from "../assets/blog/B6.png";

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
    switch (text.toLowerCase()) {
      case "tax & audit":
        return "text-[#6941C6] bg-[#F9F5FF]";
      case "tax":
        return "text-[#026AA2] bg-[#F0F9FF]";
      case "audit":
        return "text-[#6941C6] bg-[#F9F5FF]";
      case "money back":
        return "text-[#3538CD] bg-blue-[#EEF4FF]";
      case "money":
        return "text-[#6941C6] bg-[#F9F5FF]";
      case "management":
        return "text-[#363F72] bg-[#F8F9FC]";
      case "tax return":
        return "text-[#027A48] bg-[#ECFDF3]";
      case "research":
        return "text-[#3538CD] bg-[#EEF4FF]";
      case "complience":
        return "text-[#C4320A] bg-[#FFF6ED]";
      case "news":
        return "text-[#C11574] bg-[#FDF2FA]";
      case "private limited company":
        return "text-[#6941C6] bg-[#F9F5FF]";
      case "customer success":
        return "text-[#363F72] bg-[#F8F9FC]";
      default:
        return "text-[#C01048] bg-[#FFF1F3]";
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
    <div className="flex flex-col gap-6 h-full *:font-inter transition-all duration-200 w-96">
      <div className="h-60 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-6 flex-grow font-semibold">
        <div className=" flex items-center text-[#667085] text-sm">
          <span>{blog.author}</span>
          <span className="mx-1">•</span>
          <span>{blog.date}</span>
          {blog.label && (
            <>
              <span className="mx-1">•</span>
              <span className="">{blog.label}</span>
            </>
          )}
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-[22px] font-bold text-[#1A1A1A]">{blog.title}</h3>
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

        <p className="text-[#667085] text-[15px] flex-grow font-normal">
          {blog.description}
        </p>

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
      image: Img1,
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
      image: Img2,
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: Img1,
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
      image: Img4,
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
      image: Img5,
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
      image: Img6,
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

      <div className="grid grid-cols-3 *:place-self-center gap-8 p-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
