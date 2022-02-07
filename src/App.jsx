import { items } from "./items";
import { useItems } from "./useItems";
import { Typography } from "@mui/material";

export function App() {
  const hookItems = useItems([
    {
      title: "new",
      label: <Typography color="secondary">New</Typography>,
    },
  ]);

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div key={item.title}>
            <h2>{item.title}</h2>
            {item.label}
          </div>
        );
      })}
      {hookItems.map((item) => {
        return (
          <div key={item.title}>
            <h2>{item.title}</h2>
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
