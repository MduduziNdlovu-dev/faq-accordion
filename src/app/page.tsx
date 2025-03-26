import FAQContainer from "@/components/FAQContainer";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "hsl(276, 100.00%, 87.80%)",
        flexDirection: "column"
      }}
    >
      <Image 
        src="./assets/images/background-pattern-desktop.svg" 
        alt="background" 
        width={1440} 
        height={320} 
        style={{ position: "absolute", top: 0, zIndex: 1 }} 
        priority={true} 
      />
      
      <FAQContainer />
    </Box>
  );
}
