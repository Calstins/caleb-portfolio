'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Socials from '@/components/Socials';
import { FiDownload } from 'react-icons/fi';
import useTypingEffect from '@/lib/useTypingEffect';

const Home = () => {
  const typingText = useTypingEffect(
    ['Software Developer', 'Digital Marketer'],
    100
  );
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">
              {typingText}
              <span className="cursor cursor-height"></span>
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Opule Caleb</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Software Developer and Digital Marketer who blends
              technical skills and marketing expertise to create impactful
              solutions and drive growth.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                className="uppercase flex items-center gap-2"
                size="lg"
                variant="outline"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-o ">
                <Socials />
              </div>
            </div>
          </div>
          <div className="">photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
