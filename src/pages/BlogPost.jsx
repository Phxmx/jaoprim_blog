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
        <p>The anticipation was overwhelming. As I prepared my bags and said goodbye to familiar faces, I couldn't help but feel a mixture of excitement and nervousness. This wasn't just a trip; it was an opportunity to grow, learn, and discover a part of myself I hadn't yet met.</p>
        
        <p>I spent weeks researching Chinese culture, practicing basic Mandarin phrases, and connecting with future classmates online. Every preparation step made the journey feel more real, more tangible.</p>
        
        <h3>What I Packed</h3>
        <ul>
          <li>My favorite books and journals</li>
          <li>Traditional Thai snacks to share</li>
          <li>An open mind and eager heart</li>
          <li>Camera to capture every moment</li>
        </ul>
        
        <p>Looking back, I realize that no amount of preparation could have truly readied me for what was to come. The real learning would happen when I stepped off that plane.</p>
      `,
      images: ["/blog/before-china-1.jpg", "/blog/before-china-2.jpg"],
    },
    2: {
      title: "Study Life",
      subtitle: "Immersed in Learning and Culture",
      date: "July - August 2025",
      color: "var(--color-soft-blue)",
      content: `
        <p>The first day of classes was surreal. Sitting in a Chinese university classroom, surrounded by students from around the world, I felt both small and significant. We were all here for the same reason: to learn, grow, and connect.</p>
        
        <p>The curriculum was challenging but rewarding. From language classes to cultural workshops, every day brought new insights. I particularly loved the calligraphy sessions, where the graceful strokes taught me patience and mindfulness.</p>
        
        <h3>Memorable Experiences</h3>
        <ul>
          <li>Morning tai chi sessions in the park</li>
          <li>Late-night study groups with international friends</li>
          <li>Traditional tea ceremony workshop</li>
          <li>Guest lectures from inspiring professors</li>
        </ul>
        
        <p>Beyond academics, the friendships I formed were invaluable. We came from different backgrounds, but our shared experiences created bonds that transcended borders.</p>
      `,
      images: ["/blog/study-life-1.jpg", "/blog/study-life-2.jpg"],
    },
    3: {
      title: "Travel",
      subtitle: "Exploring the Beauty of China",
      date: "Weekends & Breaks",
      color: "var(--color-green)",
      content: `
        <p>Every weekend was a new adventure. From the Great Wall to the terracotta warriors, from bustling Shanghai streets to serene Hangzhou lakes, each destination left me in awe.</p>
        
        <p>One of my favorite memories was watching the sunrise from the top of Huangshan Mountain. After hiking through the night, we reached the summit just as the first rays of light painted the sky. In that moment, exhausted but exhilarated, I felt truly alive.</p>
        
        <h3>Places That Touched My Heart</h3>
        <ul>
          <li>The Great Wall at sunrise</li>
          <li>Zhangjiajie National Forest Park</li>
          <li>Traditional water towns near Suzhou</li>
          <li>Night markets and street food adventures</li>
        </ul>
        
        <p>Travel taught me that the world is both vast and intimate. Every place had its own story, and I was lucky enough to become a small part of those stories.</p>
      `,
      images: ["/blog/travel-1.jpg", "/blog/travel-2.jpg"],
    },
    4: {
      title: "Reflection",
      subtitle: "Looking Back with Gratitude",
      date: "September 2025",
      color: "var(--color-yellow)",
      content: `
        <p>As my time in China came to an end, I found myself looking back with a heart full of gratitude. This journey had changed me in ways I couldn't have imagined.</p>
        
        <p>I learned that growth happens when we step outside our comfort zones. I discovered strengths I didn't know I had and overcame challenges that once seemed insurmountable. Most importantly, I learned to embrace uncertainty and find beauty in the unexpected.</p>
        
        <h3>Key Takeaways</h3>
        <ul>
          <li>Cultural differences enrich rather than divide us</li>
          <li>True learning happens outside the classroom</li>
          <li>Home is not just a place, but a feeling</li>
          <li>Every goodbye is also a new beginning</li>
        </ul>
        
        <p>The ODOS Summer Camp was more than a program; it was a transformative experience that will stay with me forever. I return home not as the same person who left, but as someone who has grown, learned, and loved.</p>
        
        <p>To anyone considering this journey: take the leap. The memories you'll make and the person you'll become are worth every moment of uncertainty.</p>
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
