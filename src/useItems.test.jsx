import { renderHook } from "@testing-library/react-hooks";
import { Typography } from "@mui/material";
import { useItems } from "./useItems";

jest.mock("@mui/material", () => ({
  Typography: ({ children }) => <div>{children}</div>,
}));

test("should return correct items", () => {
  const {
    result: { current },
  } = renderHook(() => useItems([]));

  // This expect works
  expect(current).toStrictEqual([
    { title: "home", label: expect.any(Object) },
    { title: "contact", label: expect.any(Object) },
  ]);

  // This expect doesn't works like ./items.jsx
  expect(current).toStrictEqual([
    { title: "home", label: <Typography color="secondary">Home</Typography> },
    { title: "contact", label: <Typography>Contact</Typography> },
  ]);
});
