// 'use client'
import React from "react";
import { Container, HeroSlider,Card } from "@/component";

const page = () => {
  // console.log(process.env.NEXT_PUBLIC_ADMIN_URL)
  return (
    <>
      <Container>{"danish"}</Container>
      <HeroSlider />
      <Card/>
    </>
  );
};

export default page;
