import { Typography } from "@mui/material";
import { items } from "./items";

jest.mock("@mui/material", () => ({
  Typography: ({ children }) => <div>{children}</div>,
}));

test("should return correct items", () => {
  expect(items).toStrictEqual([
    { title: "home", label: <Typography color="secondary">Home</Typography> },
    { title: "contact", label: <Typography>Contact</Typography> },
  ]);
});
