// Importing the useState hook from React to manage state (color in this case)
import { useState } from "react";


// Main App component
function App() {

  // Declaring a state variable called 'color' and a function 'setColor' to update it
  // Default color is "olive"
  const [color, setColor] = useState("olive");

  return (
    // This outer div covers the full screen and its background color depends on the 'color' state
    <div 
      // Tailwind CSS classes:
      // w-full: width 100%
      // h-screen: height = full screen height
      // duration-200: adds a smooth transition effect (200ms) when changing styles (like background color)
      className="w-full h-screen duration-200"

      // Inline style to set background color dynamically from the 'color' state
      style={{ backgroundColor: color }}
    >

      {/* Button container fixed at the bottom of the screen, centered horizontally */}
      <div 
        // Tailwind CSS classes:
        // fixed: position stays fixed even when scrolling
        // flex: makes the container a flexbox
        // flex-wrap: wraps the buttons if there's not enough space
        // justify-center: centers the buttons horizontally
        // bottom-12: places it 3rem (48px) from the bottom
        // inset-x-0: sets left and right to 0 (centers it)
        // px-2: horizontal padding of 0.5rem on both sides
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >

        {/* Inner box that holds the buttons with styling */}
        <div 
          // Tailwind CSS classes:
          // flex: flex container
          // flex-wrap: wrap buttons if needed
          // justify-center: center buttons
          // gap-3: 0.75rem gap between buttons
          // shadow-lg: large shadow for floating effect
          // bg-white: white background
          // px-3: horizontal padding
          // py-2: vertical padding
          // rounded-3xl: large rounded corners for pill shape
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >

          {/* Red button */}
          <button
            // onClick triggers a function that sets the background color to red
            onClick={() => setColor("red")}

            // Tailwind CSS:
            // outline-none: removes default focus border
            // px-4: horizontal padding
            // py-1: vertical padding
            // rounded-full: makes it a full circle/rounded button
            // text-white: makes button text white
            // shadow-lg: adds shadow
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"

            // Inline style to give the button red background
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          {/* Green button */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          {/* Blue button */}
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>
    </div>
  );
}

// Exporting the App component so it can be used in your main index.js
export default App;
