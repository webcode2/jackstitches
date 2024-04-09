import Masonry from 'react-masonry-css';
import "./gallary.css"

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
const items = [
    { id: 1, width: 300, height: 200, content: 'Item 1' },
    { id: 2, width: 200, height: 400, content: 'Item 2' },
    { id: 3, width: 500, height: 300, content: 'Item 3' },
    { id: 4, width: 900, height: 500, content: 'Item 4' },
    // ... more items
  ]

  export default function MyGrid() {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        
      >
        {items.map((item,i) => (
          <div key={item.id} className={i%2===0?"bg-green-300":"bg-red-300"} style={{ width: item.width, height: item.height }}>
            {item.content}
          </div>
        ))}
      </Masonry>
    );
  }