// components/ButtonComponent.js
"use client";
import React, { useState } from 'react';

const ComponentOne = () => <div>Component One Content</div>;
const ComponentTwo = () => <div>Component Two Content</div>;
const ComponentThree = () => <div>Component Three Content</div>;
const ComponentFour = () => <div>Component Four Content</div>;

const ButtonComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const renderComponent = (component) => {
    switch (component) {
      case 'componentOne':
        return <ComponentOne />;
      case 'componentTwo':
        return <ComponentTwo />;
      case 'componentThree':
        return <ComponentThree />;
      case 'componentFour':
        return <ComponentFour />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col p-4 gap-2">
      <h1>Button Component</h1>
      <div className="flex p-20 text-blue-500 gap-20">
          <div className=" flex flex-col gap-10">
        <button onClick={() => setSelectedComponent( 'componentOne' )}>Show Component One</button>
        <button onClick={() => setSelectedComponent( 'componentTwo' )}>Show Component Two</button>
        <button onClick={() => setSelectedComponent( 'componentThree' )}>Show Component Three</button>
        <button onClick={() => setSelectedComponent( 'componentFour' )}>Show Component Four</button>

     </div>
      <div style={{ marginTop: '40px' }} className="text-green-600">{selectedComponent && renderComponent(selectedComponent)}</div>
    </div>
    </div>
  );
};
export default ButtonComponent;
