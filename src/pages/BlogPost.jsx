import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogPost.css";
import bfc1 from "/blog/Before_china_1.jpg?url";
import bfc2 from "/blog/Before_china_2.jpg?url";
import sl1 from "/blog/Study_life_1.jpg?url";
import sl2 from "/blog/Study_life_2.jpg?url";
import t1 from "/blog/Travel_1.JPG?url";
import t2 from "/blog/Travel_2.MOV?url";
import t3 from "/blog/Travel_3.JPG?url";
import r1 from "/blog/Reflection_1.jpg?url";
import r2 from "/blog/Reflection_2.jpg?url";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const blogContent = {
    1: {
      title: "Before China",
      subtitle: "Preparing for the Journey of a Lifetime",
      date: "August 2025",
      color: "var(--color-pink)",
      content: `
        <p>After I passed the ODOS program selection, the last step was drawing lots to see which country I would go to, along with an interview. After that, we had a pre-departure orientation before going abroad.</p>
        
        <p>We also visited Kubota Farm for a study trip, and it was really fun. I learned a lot and truly enjoyed the experience.</p>
        
        <p>I'm so excited and really can't wait to start my life overseas and enjoy every moment there.</p>
      `,
      images: [bfc1, bfc2],
    },
    2: {
      title: "Study Life",
      subtitle: "Immersed in Learning and Culture",
      date: "19 October - 22 November 2025",
      color: "var(--color-soft-blue)",
      content: `
        <p>I studied in Beijing at Beijing University of Posts and Telecommunications, which is a well-known university in China, especially for technology and communication.</p>
        
        <p>Even though the classes during the 5-week program focused a lot on math and science, I still really enjoyed them, even as someone from a language and arts background. I tried my best to take part in every class and activity, and it turned out to be a fun and meaningful experience for me.</p>
      `,
      images: [sl1, sl2],
    },
    3: {
      title: "Travel",
      subtitle: "Exploring the Beauty of China",
      date: "Weekends & Breaks",
      color: "var(--color-green)",
      content: `
        <p>Every weekend was a new adventure, exploring the beautiful landscapes and vibrant cities of China.</p>
      `,
      images: [t1, t3],
      video: t2,
    },
    4: {
      title: "Reflection",
      subtitle: "Looking Back with Gratitude",
      date: "After ODOS Program",
      color: "var(--color-yellow)",
      content: `
        <p>และนี่คือjourney ของเจ้าหญิงไม่ได้แค่เจอนี่ แต่เจอนู้นเจอนั่นมากมาย การได้พบเจอเรื่องราวมากมายระหว่างทาง จาก Girl form no where ที่ไม่เคยคิดว่าตัวเองจะมีโอกาสได้ไปใช้ชีวิตในต่างประเทศ ได้เรียนรู้สิ่งใหม่ๆ ทั้งในห้องเรียนและนอกห้องเรียน ทุกวันเต็มไปด้วยความตื่นเต้น ความสงสัย และความประทับใจเล็กๆ ที่ค่อยๆ สะสมขึ้นเรื่อยๆ
พบเจอผู้ร่วมทริปอีก50คน ที่ๆเต็มเปี่ยมไปด้วยพลัง ตลอดการเดินทางครั้งนี้ เราได้พบกับเพื่อนร่วมทริปกว่า 50 คน ที่น่ารัก เต็มไปด้วยพลังบวก และทำให้ทุกวันมีเสียงหัวเราะมากขึ้น เจอพี่เลี้ยงที่ตะมุตะมิที่สุด เป็นทั้งแม่และเพื่อนในคนเดียว คอยให้คำแนะนำและกำลังใจ</p>
        
        <p>สิ่งที่สำคัญที่สุดที่ journey ครั้งนี้สอนเรา คือการได้ตระหนักถึงคุณค่าของการศึกษาอย่างแท้จริง เราได้เห็นว่าความรู้ไม่ได้จำกัดอยู่แค่ในหนังสือหรือห้องเรียน แต่คือกุญแจที่ช่วยเปิดประตูไปสู่โลกที่กว้างขึ้น เปิดมุมมองใหม่ๆ และทำให้เราเข้าใจทั้งโลกและตัวเองมากขึ้น การได้เรียนรู้ทำให้เราเชื่อว่า ไม่ว่าเราจะมาจากจุดไหน หากเรายังไม่หยุดเรียนรู้ โอกาสดีๆ ก็พร้อมจะเกิดขึ้นเสมอ
journey ครั้งนี้เป็นเพียงจุดเริ่มต้นเล็กๆ แต่เป็นจุดเริ่มต้นที่ทำให้เราอยากเรียนรู้ อยากเติบโต และอยากเดินต่อไปบนเส้นทางของตัวเองด้วยหัวใจที่กล้าฝันมากกว่าเดิม</p>

        <p>And this is the journey of a princess, not just encountering these, but encountering many other things as well. Getting to encounter many stories along the way. From a girl from nowhere who never thought she would have the opportunity to live abroad, to learn new things both in and out of the classroom. Every day was filled with excitement, curiosity, and small impressive moments that gradually accumulated.</p>
        
        <p>I met 50 trip mates who were full of energy. Throughout this journey, we met over 50 lovely trip mates, full of positive energy, and made every day more filled with laughter. We met the most quirky mentors, who were both mothers and friends in one person, always providing guidance and encouragement.</p>
        
        <p>And the most important thing that this journey taught us is realizing the true value of education. We learned that knowledge is not limited to just books or classrooms, but is the key that helps open the door to a wider world, opens new perspectives, and helps us understand both the world and ourselves better. Learning has taught us to believe that no matter where we come from, as long as we never stop learning, good opportunities are always ready to happen.</p>
        
        <p>This journey is just a small starting point, but it is a starting point that makes us want to learn, want to grow, and want to continue on our own path with a braver heart to dream.</p>
      `,
      images: [r1, r2],
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
            <div key={`img-${index}`} className="blog-post-image-wrapper">
              <img
                src={img}
                alt={`${post.title} ${index + 1}`}
                className="blog-post-image"
                onClick={() => setSelectedImage(img)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
          {post.video && (
            <div className="blog-post-video-wrapper">
              <video src={post.video} controls className="blog-post-video" />
            </div>
          )}
        </div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {selectedImage && (
        <div
          className="image-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="image-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="image-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
