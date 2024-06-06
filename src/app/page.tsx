// 'use client'
import React from "react";
import { Container, HeroSlider,Card,Gallery,HeroSlider2 } from "@/component";

const page = () => {
  // console.log(process.env.NEXT_PUBLIC_ADMIN_URL)
  return (
    <>
      <Container>{"danish"}</Container>
      <HeroSlider />
      <Card/>
      <Gallery/>
      <HeroSlider2/>
    </>
  );
};

export default page;
