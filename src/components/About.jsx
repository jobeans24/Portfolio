import iconImage from "../assets/profile/IconImage.png"
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <i src= {iconImage} style={{ fontSize: "96px"}}>A Little Glimpse of Me</i>
        </div>
        <p>
          Josie Zobel 
        </p>
        <p>
          I am a Full Stack web developer who recently graduated from George Washington University Coding Bootcamp. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, SQL, and MongoDB. I am excited to continue learning and growing as a developer.
          As a fast learner with prior experience in the Service industry I have become quick on my feet and easily able to adapt to new situations. I am a team player and enjoy working with others to solve problems and create new and exciting projects.
        </p>
      </div>
    </section>
  );
        }

        export default About;
 
