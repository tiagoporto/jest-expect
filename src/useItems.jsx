import { Typography } from "@mui/material";

export const useItems = (newItems) => {
  const items = [
    {
      title: "home",
      label: <Typography color="secondary">Home</Typography>,
    },
    {
      title: "contact",
      label: <Typography>Contact</Typography>,
    },
    ...newItems,
  ];

  return items;
};
