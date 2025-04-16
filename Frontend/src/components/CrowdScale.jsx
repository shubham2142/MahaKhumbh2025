const areaData = [
    { area: "North Gate", count: 800 },
    { area: "Main Stage", count: 1500 },
    { area: "South Entrance", count: 500 },
  ];
  
  const CrowdScale = () => {
    return (
      <div className="bg-blue-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">People per Area</h3>
        <ul className="space-y-4">
          {areaData.map((a, idx) => (
            <li key={idx} className="flex justify-between text-lg border-b pb-2">
              <span>{a.area}</span>
              <span className="text-orange-600 font-bold">{a.count}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CrowdScale;
  