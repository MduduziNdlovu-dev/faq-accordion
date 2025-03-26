import FAQContainer from "@/components/FAQContainer";
import react from "react";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      sx={{
        height:"98vh",
        width:"98vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        backgroundColor:"hsl(275, 100%, 97%)"
      }}
      >
      <FAQContainer/>
      
    </Box>
  );
}
