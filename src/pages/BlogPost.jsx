import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogContent = {
    1: {
      title: "Before China",
      subtitle: "Preparing for the Journey of a Lifetime",
      date: "June 2025",
      color: "var(--color-pink)",
      content: `
        <p>After I passed the ODOS program selection, the last step was drawing lots to see which country I would go to, along with an interview. After that, we had a pre-departure orientation before going abroad.</p>
        
        <p>We also visited Kubota Farm for a study trip, and it was really fun. I learned a lot and truly enjoyed the experience.</p>
        
        <p>I'm so excited and really can't wait to start my life overseas and enjoy every moment there.</p>
      `,
      images: ["/blog/before-china-1.jpg", "/blog/before-china-2.jpg"],
    },
    2: {
      title: "Study Life",
      subtitle: "Immersed in Learning and Culture",
      date: "July - August 2025",
      color: "var(--color-soft-blue)",
      content: `
        <p>I studied in Beijing at Beijing University of Posts and Telecommunications, which is a well-known university in China, especially for technology and communication.</p>
        
        <p>Even though the classes during the 5-week program focused a lot on math and science, I still really enjoyed them, even as someone from a language and arts background. I tried my best to take part in every class and activity, and it turned out to be a fun and meaningful experience for me.</p>
      `,
      images: ["/blog/study-life-1.jpg", "/blog/study-life-2.jpg"],
    },
    3: {
      title: "Travel",
      subtitle: "Exploring the Beauty of China",
      date: "Weekends & Breaks",
      color: "var(--color-green)",
      content: `
        <p>Every weekend was a new adventure, exploring the beautiful landscapes and vibrant cities of China.</p>
      `,
      images: ["/blog/travel-1.jpg", "/blog/travel-2.jpg"],
    },
    4: {
      title: "Reflection",
      subtitle: "Looking Back with Gratitude",
      date: "September 2025",
      color: "var(--color-yellow)",
      content: `
        <p>And this is the journey of a princess, not just encountering these, but encountering many other things as well. Getting to encounter many stories along the way. From a girl from nowhere who never thought she would have the opportunity to live abroad, to learn new things both in and out of the classroom. Every day was filled with excitement, curiosity, and small impressive moments that gradually accumulated.</p>
        
        <p>I met 50 trip mates who were full of energy. Throughout this journey, we met over 50 lovely trip mates, full of positive energy, and made every day more filled with laughter. We met the most quirky mentors, who were both mothers and friends in one person, always providing guidance and encouragement.</p>
        
        <p>And the most important thing that this journey taught us is realizing the true value of education. We learned that knowledge is not limited to just books or classrooms, but is the key that helps open the door to a wider world, opens new perspectives, and helps us understand both the world and ourselves better. Learning has taught us to believe that no matter where we come from, as long as we never stop learning, good opportunities are always ready to happen.</p>
        
        <p>This journey is just a small starting point, but it is a starting point that makes us want to learn, want to grow, and want to continue on our own path with a braver heart to dream.</p>
      `,
      images: ["/blog/reflection-1.jpg", "/blog/reflection-2.jpg"],
    },
  };

  const post = blogContent[id];

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h1>Post not found</h1>
          <button onClick={() => navigate("/journey")} className="back-button">
            ← Back to Journey
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <button
        onClick={() => navigate("/journey")}
        className="back-button floating"
      >
        ← Back to Journey
      </button>

      <article className="blog-post-container">
        <header
          className="blog-post-header"
          style={{ borderTopColor: post.color }}
        >
          <div className="blog-post-meta">{post.date}</div>
          <h1 className="blog-post-title" style={{ color: post.color }}>
            {post.title}
          </h1>
          <p className="blog-post-subtitle">{post.subtitle}</p>
        </header>

        <div className="blog-post-images">
          {post.images.map((img, index) => (
            <div key={index} className="blog-post-image-wrapper">
              <img
                src={img}
                alt={`${post.title} ${index + 1}`}
                className="blog-post-image"
              />
            </div>
          ))}
        </div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
