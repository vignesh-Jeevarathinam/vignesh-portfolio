import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-6 hover:scale-101
transition
duration-300">

      <a
        href="https://github.com/vignesh-Jeevarathinam"
        target="_blank"
      >
        <FaGithub size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/vignesh-jeevarathinam-aa9892187/"
        target="_blank"
      >
        <FaLinkedin size={30} />
      </a>

    </div>
  );
}