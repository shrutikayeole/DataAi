import React from 'react';

const schema = [
  { tableName: 'Users', columns: ['id', 'name', 'email', 'created_at'] },
  { tableName: 'Orders', columns: ['id', 'user_id', 'product', 'amount', 'created_at'] },
  { tableName: 'Products', columns: ['id', 'name', 'price', 'stock'] },
];

const SchemaDisplay = () => {
  return (
    <div className="p-4 bg-dark text-white shadow-lg rounded-lg max-w-xs">
      <h2 className="text-xl font-bold mb-4">Schema</h2>
      <div className="border border-white border-opacity-10 p-4 rounded-md max-h-[60vh] overflow-auto bg-gray-800 text-white">
        {schema.map((table, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{table.tableName}</h3>
            <ul className="list-disc pl-5">
              {table.columns.map((column, idx) => (
                <li key={idx}>{column}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemaDisplay;
