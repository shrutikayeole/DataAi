import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const schema = [
  {
    tableName: 'Inventory',
    columns: [
      'product_id',
      'product_name',
      'total_qty',
      'last_updated',
    ],
  },
  {
    tableName: 'Purchases',
    columns: [
      'purchase_id',
      'invoice_number',
      'buy_date',
      'due_date',
      'product_name',
      'qty',
      'price',
    ],
  },
  {
    tableName: 'Sales',
    columns: [
      'sale_id',
      'product_name',
      'qty',
      'price',
      'total_price',
      'sale_date',
    ],
  },
];

const SchemaDisplay = () => {
  const [openTables, setOpenTables] = useState({});

  const toggleTable = (tableName) => {
    setOpenTables((prevOpenTables) => ({
      ...prevOpenTables,
      [tableName]: !prevOpenTables[tableName],
    }));
  };

  return (
    <div className="p-4 bg-dark text-white shadow-lg rounded-lg max-w-xs">
      <h2 className="text-xl font-bold mb-4">Schema</h2>
      <div className="border border-white border-opacity-10 p-4 rounded-md max-h-[60vh] overflow-auto bg-gray-800 text-white">
        {schema.map((table, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable(table.tableName)}
            >
              <h3 className="font-semibold">{table.tableName}</h3>
              {openTables[table.tableName] ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>
            {openTables[table.tableName] && (
              <ul className="list-disc pl-5 mt-2">
                {table.columns.map((column, idx) => (
                  <li key={idx}>{column}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemaDisplay;
