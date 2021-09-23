import * as React from "react";
import { Stack, Avatar, Typography, Box } from "@mui/material";
import "./SkeletonMaterial.scss";

const SkeletonMaterial = ({ imageURL, title, country, yearFoundation, trustRank, webURL }) => {
  return (
    <Stack className={trustRank <= 10 ? "skeleton skeleton-rank-green" : "skeleton"}>
      <Box className="skeleton-header">
        <Avatar src={imageURL} width={60} height={60} />
        <Typography>{title}</Typography>
      </Box>

      <Box className="skeleton-body">
        <div className="skeleton-aside left">
          <Typography className="skeleton-info">Trust-Rank:</Typography>
          <Typography className="skeleton-info">{trustRank}</Typography>
        </div>
        <div className="skeleton-aside right">
          <Typography className="skeleton-info">País: {country}</Typography>
          <Typography className="skeleton-info"> Año: {yearFoundation}</Typography>
        </div>
      </Box>
    </Stack>
  );
};

export default SkeletonMaterial;
