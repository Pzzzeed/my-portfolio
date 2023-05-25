import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { motion } from "framer-motion";

import { styles } from "../styles";

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
          <Button className="hover:bg-[#764AF1]">
            <a
              href="https://drive.google.com/file/d/1qZWjULfUHooHTdMxQGXIXaUvstVv1GZs/view?usp=sharing"
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
                repeatType: "loop",
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
