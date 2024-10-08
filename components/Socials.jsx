import Link from 'next/link';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 text-lg">
      <Link
        href={'https://github.com/Calstins'}
        className="text-xl hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/caleb-opule/'}
        className="text-xl hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://www.instagram.com/calstins/'}
        className="text-xl hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
