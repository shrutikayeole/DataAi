import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Adjust path if necessary
import Footer from '../components/Footer'; // Adjust path if necessary
import DataVisualizer from '../components/DataVisualizer';

const Dashboard = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalPurchases, setTotalPurchases] = useState(0);
  const [selectedTable, setSelectedTable] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const salesResponse = await axios.get('http://localhost:5000/total-sales');
        const purchasesResponse = await axios.get('http://localhost:5000/total-purchases');
        setTotalSales(salesResponse.data.total);
        setTotalPurchases(purchasesResponse.data.total);
      } catch (error) {
        console.error('Error fetching totals:', error);
      }
    };

    fetchTotals();
  }, []);

  const handleButtonClick = async (table) => {
    try {
      const response = await axios.get(`http://localhost:5000/${table}`);
      setData(response.data.result);
      setSelectedTable(table);
    } catch (error) {
      console.error(`Error fetching ${table} data:`, error);
    }
  };

  return (
    <div className="bg-universe min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">
        <div className="max-w-5xl mx-auto bg-[#2E2A5C] rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-gray-100 mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 text-gray-200 rounded-lg p-4 shadow-md flex flex-col items-center">
              <p className="text-sm font-medium mb-2">Total Sales</p>
              <p className="text-2xl font-bold">{totalSales}</p>
            </div>
            <div className="bg-gray-800 text-gray-200 rounded-lg p-4 shadow-md flex flex-col items-center">
              <p className="text-sm font-medium mb-2">Total Purchases</p>
              <p className="text-2xl font-bold">{totalPurchases}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['inventory', 'sales', 'purchases'].map((table) => (
              <button
                key={table}
                onClick={() => handleButtonClick(table)}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
              >
                {table.charAt(0).toUpperCase() + table.slice(1)}
              </button>
            ))}
          </div>
          {selectedTable && (
            <div className="bg-gray-800 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Table: {selectedTable}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
                  <thead className="bg-gray-600 border-b border-gray-500">
                    <tr>
                      {data[0] && Object.keys(data[0]).map((key) => (
                        <th key={key} className="px-4 py-2 text-left text-gray-300">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-600">
                        {Object.values(row).map((value, i) => (
                          <td key={i} className="px-4 py-2 border-b border-gray-600 text-gray-200">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <DataVisualizer />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
