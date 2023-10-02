import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';

import { github } from '../assets';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: vw;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 54px;
    margin-left: -15%;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin-left: -15%;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 800px;
    height: 600px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-left: -15%;
  }
`;

const Hero = () => {
  return (
    <Section className={`relative w-full h-screen mx-auto`}>
      <Container>
        <div className="max-lg:hidden flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <Left>
          <Title>
            Peeranat <span className="text-[#915EFF]">Phengsalaeh</span>
          </Title>
          <Desc className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm software developer <br className="sm:block hidden" />
            who has a lot of passion for software development.
          </Desc>
          {/* <Desc>I'am software developer</Desc> */}
          <div className="flex flex-wrap gap-1 max-[600px]:mr-12">
            <Tilt className="xs:w-[100px]">
              <a
                href="https://github.com/Pzzzeed"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                target="blank"
              >
                <img
                  src={github}
                  alt="github-icon"
                  className="w-16 h-16 object-contain"
                />
              </a>
            </Tilt>
            <Tilt className="xs:w-[100px]">
              <a
                href="https://www.linkedin.com/in/peeranat-phengsalaeh"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 object-contain "
                >
                  <path d="M20 20h-3.95v-6.285c0-1.49-.028-3.405-2.075-3.405-2.076 0-2.39 1.622-2.39 3.29V20H8V8h3.877v1.75h.052c.54-1.03 1.864-2.12 3.828-2.12C19.13 7.63 20 10.094 20 12.93V20z M4 8h3.955v12H4V8z M6.976 2C5.897 2 5 2.898 5 3.982c0 1.07.882 1.976 1.976 1.976S8.95 5.052 8.95 3.982C8.95 2.898 8.052 2 6.976 2z" />
                </svg>
                <span className="sr-only">LinkedIn account</span>
              </a>
            </Tilt>
          </div>
          <Button className="hover:bg-[#764AF1]">
            <a
              href="https://drive.google.com/file/d/1pCt3hXdKEHofGfoB15d35T4sB87rO4aJ/view?usp=sharing"
              target="blank"
            >
              Resume
            </a>
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#764AF1"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          {/* <div className=" w-[500px] h-[300px] rounded-full object-contain absolute top-0 bottom-0 left-0 right-0 mx-auto animate-spin-slow"> */}
          <Img src="./profile1.png" />
          {/* </div> */}
        </Right>
      </Container>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Hero;
