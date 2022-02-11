import { Box, Container, Card, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
function Overview() {
  useEffect(() => {
    let isSubscribe = true; // cờ báo hiệu component còn mount hay không?
    (async function callAPI() {
      const data = "await f()";
      if (isSubscribe && data) {
        // chỉ re-render khi component chưa unmount
      }
    })();
    return () => {
      isSubscribe = false; // tắt cờ này nếu component bị unmount hoặc re-render;
    };
  }, []);
  return (
    <OverviewWrapper>
      {console.log("render")}
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          {/* <Logo /> */}
          <Typography>Logo</Typography>
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Typography>Hero</Typography>
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
