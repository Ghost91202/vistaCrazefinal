// components/Drawer.tsx
import { FC } from 'react';

interface DrawerProps {
  submenu: string[];
}

const Drawer: FC<DrawerProps> = ({ submenu }) => {
  return (
    <div className="absolute flex  w-auto top-full  bg-gray-700 text-white p-4">
      <ul>
        {submenu.map((item, index) => (
          <li key={index} className="p-2 hover:bg-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
