// components/ButtonComponent.js
"use client";
import React, { useState } from 'react';

const ComponentOne = () => <div>Component One Content</div>;
const ComponentTwo = () => <div>Component Two Content</div>;
const ComponentThree = () => <div>Component Three Content</div>;
const ComponentFour = () => <div>Component Four Content</div>;

const componentsMap = {
  componentOne: ComponentOne,
  componentTwo: ComponentTwo,
  componentThree: ComponentThree,
  componentFour: ComponentFour,
};

const ButtonComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = (component) => {
    const Component = componentsMap[component];
    return Component ? <Component key={component} /> : null; // Provide key prop here
  };

  return (
    <div>
      <div className="flex flex-col gap-10">
        <h1>onclick change Button Component</h1>
        <div className="flex gap-5">
          {Object.keys(componentsMap).map((component) => (
            <div key={component} className="flex flex-row text-green-500 gap-10"> {/* Provide key prop here */}
              <button onClick={() => setSelectedComponent(component)}>
                {`Show ${component}`}
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>{selectedComponent && renderComponent(selectedComponent)}</div>
      </div>
    </div>
  );
};

export default ButtonComponent;
