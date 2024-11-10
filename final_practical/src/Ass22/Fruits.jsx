import React from 'react';

function Fruits() {
  // Define the two arrays
  const fruits1 = ["apple", "banana", "guava", "Almond"];
  const fruits2 = ["cherry", "orange", "banana", "Mango", "Avocado"];

  // Merge both arrays using the spread operator
  const mergedFruits = [...fruits1, ...fruits2];

  // Get the last two elements of the merged array
  const lastTwoElements = mergedFruits.slice(-2);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Fruits List</h1>
      
      {/* Display all elements in merged array */}
      <h2>All Fruits:</h2>
      <ul>
        {mergedFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Display the last two elements */}
      <h2>Last Two Fruits:</h2>
      <ul>
        {lastTwoElements.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
