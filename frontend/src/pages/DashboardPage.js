// src/pages/DashboardPage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// --- ADD ALL THESE MISSING IMPORTS ---
import HealthForm from '../components/HealthForm';
import ReportDisplay from '../components/ReportDisplay';
import ReportHistoryList from '../components/ReportHistoryList';
import ChatInterface from '../components/Chat/ChatInterface';
import ReportDownload from '../components/Enhanced/ReportDownload';
// ------------------------------------

const DashboardPage = ({ view, setView }) => {
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); 
  const [currentReport, setCurrentReport] = useState(null);
  const [reportHistory, setReportHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReportForDownload, setSelectedReportForDownload] = useState(null);

  const handleOpenDownloadModal = (report) => {
    setSelectedReportForDownload(report);
    setIsModalOpen(true);
  };

  const fetchHistory = useCallback(async () => {
    try {
      setIsLoading(true);
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('http://localhost:5000/api/reports/history', config);
      setReportHistory(response.data.data);
    } catch (err) {
      setError('Failed to fetch report history.');
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    // We only want to fetch history when the main view is active
    if (location.state?.resetView) {
      setView('main');
      setCurrentReport(null);
      // *** THE FIX: Immediately replace the history entry to remove the signal ***
      // This breaks the infinite loop.
      navigate(location.pathname, { replace: true, state: {} }); 
    }  
    if (view === 'main') {
        fetchHistory();
    }
  }, [view, location.state, fetchHistory]);

  const handleReportGenerated = (reportData) => {
    setCurrentReport(reportData);
    setView('new_report');
  };
  
  const handleSelectReport = (report) => {
    setCurrentReport(report);
    setView('history_report');
  };

  const handleResetView = () => {
    setView('main');
    setCurrentReport(null);
  };

  const renderContent = () => {
    if (view === 'chat') {
      return <ChatInterface />;
    }
    if (view === 'new_report' || view === 'history_report') {
      return <ReportDisplay report={currentReport} onReset={handleResetView} />;
    }
    // Default 'main' view
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <HealthForm onReportGenerated={handleReportGenerated} />
        {isLoading ? <p className="text-center">Loading History...</p> : 
          <ReportHistoryList 
            reports={reportHistory} 
            onSelectReport={handleSelectReport} 
            onDownload={handleOpenDownloadModal}
          />}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* The title is now part of the Navbar, so we don't need it here */}
      {error && <p className="form-error text-center">{error}</p>}
      {renderContent()}
      {isModalOpen && <ReportDownload report={selectedReportForDownload} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DashboardPage;