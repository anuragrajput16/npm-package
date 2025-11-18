# Waffle Menu

A lightweight & customizable Google-style waffle app menu for React.  
Display app icons in a grid popup with support for emojis, images, URLs, and flexible layout options.

---

## 📦 Installation

```bash
npm install dropworks-waffle
```
## 🚀 Usage
```bash
import { DropWorksWaffeMenu, WaffleItem } from "dropworks-waffle";

function App() {
  const waffleData: WaffleItem[] = [
    {
      icon: "https://picsum.photos/200/300",
      iconName: "Gmail",
      link: "https://mail.google.com/",
      openIn: "_blank",
    },
    { icon: "📁", iconName: "Drive", link: "#", openIn: "_self" },
    { icon: "📄", iconName: "Docs", link: "#", openIn: "_self" },
    { icon: "📊", iconName: "Sheets", link: "#", openIn: "_self" },
    { icon: "🖥️", iconName: "Slides", link: "#", openIn: "_self" },
    { icon: "🎥", iconName: "Meet", link: "#", openIn: "_self" },
    { icon: "📅", iconName: "Calendar", link: "#", openIn: "_self" },
    { icon: "🖼️", iconName: "Photos", link: "#", openIn: "_self" },
    { icon: "🗺️", iconName: "Maps", link: "#", openIn: "_self" }
  ];

  return (
    <DropWorksWaffeMenu
      rows={3}
      cols={3}
      gap={20}
      waffleData={waffleData}
    />
  );
}

export default App;
```
### Props

#### `rows` (number)
Number of rows in the grid.  
**Default:** `3`

#### `cols` (number)
Number of columns in the grid.  
**Default:** `3`

#### `waffleData` (WaffleItem[])
Array of tile items to be displayed.  
If fewer items are provided than total cell count, empty tiles will be rendered.  
**Default:** `[]`

#### `gap` (number | string)
Spacing between tiles. Accepts numbers (`8`) or CSS values (`"10px"`, `"1rem"`).  
**Default:** `8`

#### `tileSize` (number | string)
Height/width of each tile cell. Accepts numbers or CSS values.  
**Default:** `85`

#### `className` (string)
Custom class names applied to the grid container.

#### `style` (React.CSSProperties)
Inline styles for the grid container.

---

### `WaffleItem` Structure

Each item in the `waffleData` array must follow:

```ts
interface WaffleItem {
  link: string;           // URL to open on click
  icon: string;           // Icon source URL
  openIn: "_blank" | "_self";  // How the link opens
  iconName: string;       // Label below the icon
}