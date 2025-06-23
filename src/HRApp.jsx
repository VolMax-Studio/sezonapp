import React, { useState } from 'react';
import { User, MapPin, Clock, Star, MessageCircle, Bell, Search, Filter, Plus, Users, Calendar, Briefcase } from 'lucide-react';

const HRApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userType, setUserType] = useState('employer'); // 'employer' or 'worker'

  // Mock data
  const jobs = [
    {
      id: 1,
      title: "Berba jagoda",
      location: "Bečej, Vojvodina",
      date: "15-30 Jun 2025",
      workers: "20 radnika",
      pay: "2000 RSD/dan",
      status: "Aktivno",
      applicants: 12
    },
    {
      id: 2,
      title: "Sadnja paradajza",
      location: "Čačak, Šumadija",
      date: "1-15 Jul 2025", 
      workers: "15 radnika",
      pay: "1800 RSD/dan",
      status: "Popunjeno",
      applicants: 8
    }
  ];

  const workers = [
    {
      id: 1,
      name: "Marko Petrović",
      rating: 4.8,
      experience: "3 godine",
      location: "Novi Sad",
      skills: ["Berba", "Sadnja", "Košnja"],
      available: true
    },
    {
      id: 2,
      name: "Ana Jovanović", 
      rating: 4.9,
      experience: "5 godina",
      location: "Kragujevac",
      skills: ["Berba voća", "Rad u plasteniku"],
      available: false
    }
  ];

  const renderDashboard = () => (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {userType === 'employer' ? 'Dashboard Poslodavca' : 'Dashboard Radnika'}
        </h1>
        <p className="text-gray-600">
          {userType === 'employer' ? 'Upravljajte vašim oglasima i radnicima' : 'Pronađite sezonske poslove u vašoj okolini'}
        </p>
      </div>

      {userType === 'employer' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Aktivni oglasi</p>
                <p className="text-2xl font-bold text-blue-800">8</p>
              </div>
              <Briefcase className="text-blue-500" size={24} />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Angažovani radnici</p>
                <p className="text-2xl font-bold text-green-800">45</p>
              </div>
              <Users className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Prosečna ocena</p>
                <p className="text-2xl font-bold text-purple-800">4.7</p>
              </div>
              <Star className="text-purple-500" size={24} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Završeni poslovi</p>
                <p className="text-2xl font-bold text-green-800">12</p>
              </div>
              <Briefcase className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Vaša ocena</p>
                <p className="text-2xl font-bold text-blue-800">4.9</p>
              </div>
              <Star className="text-blue-500" size={24} />
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Zarada ovaj mesec</p>
                <p className="text-2xl font-bold text-yellow-800">28,500</p>
              </div>
              <Calendar className="text-yellow-500" size={24} />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">
          {userType === 'employer' ? 'Najnoviji oglasi' : 'Preporučeni poslovi'}
        </h3>
        {jobs.slice(0, 3).map(job => (
          <div key={job.id} className="border-b border-gray-100 py-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-800">{job.title}</h4>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin size={14} className="mr-1" />
                  {job.location}
                  <Clock size={14} className="ml-4 mr-1" />
                  {job.date}
                </div>
                <div className="flex items-center text-sm mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                    {job.pay}
                  </span>
                  <span className="text-gray-600">{job.workers}</span>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  job.status === 'Aktivno' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {job.status}
                </span>
                {userType === 'employer' && (
                  <p className="text-sm text-gray-600 mt-1">{job.applicants} prijava</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {userType === 'employer' ? 'Moji oglasi' : 'Dostupni poslovi'}
        </h1>
        {userType === 'employer' && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <Plus size={20} className="mr-2" />
            Novi oglas
          </button>
        )}
      </div>

      {userType === 'worker' && (
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Pretraži poslove..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center">
            <Filter size={20} className="mr-2" />
            Filteri
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-800">{job.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                job.status === 'Aktivno' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {job.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={14} className="mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2" />
                {job.date}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users size={14} className="mr-2" />
                {job.workers}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-600">{job.pay}</span>
              <button className={`px-4 py-2 rounded-lg text-sm ${
                userType === 'employer' 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {userType === 'employer' ? 'Upravljaj' : 'Prijavi se'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorkers = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {userType === 'employer' ? 'Pronađi radnike' : 'Top radnici'}
        </h1>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Pretraži radnike..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center">
          <Filter size={20} className="mr-2" />
          Filteri
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map(worker => (
          <div key={worker.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <User size={24} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{worker.name}</h3>
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">{worker.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={14} className="mr-2" />
                {worker.location}
              </div>
              <div className="text-sm text-gray-600">
                Iskustvo: {worker.experience}
              </div>
              <div className="flex flex-wrap gap-1">
                {worker.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className={`text-sm px-2 py-1 rounded-full ${
                worker.available 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {worker.available ? 'Dostupan' : 'Zauzet'}
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center">
                <MessageCircle size={16} className="mr-1" />
                Kontakt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Poruke</h1>
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <User size={20} className="text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium">Marko Petrović</h3>
              <p className="text-sm text-gray-600">Poslednja poruka: pre 2 sata</p>
            </div>
          </div>
        </div>
        <div className="p-4 h-64 flex items-center justify-center text-gray-500">
          Odaberite konverzaciju za čitanje poruka
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600 mr-8">SezonApp</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setUserType('employer')}
                className={`px-3 py-1 rounded-full text-sm ${
                  userType === 'employer' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Poslodavac
              </button>
              <button 
                onClick={() => setUserType('worker')}
                className={`px-3 py-1 rounded-full text-sm ${
                  userType === 'worker' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Radnik
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-600 cursor-pointer" size={20} />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={16} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r min-h-screen">
          <nav className="p-4">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`w-full text-left p-3 rounded-lg mb-2 flex items-center ${
                currentView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User size={20} className="mr-3" />
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentView('jobs')}
              className={`w-full text-left p-3 rounded-lg mb-2 flex items-center ${
                currentView === 'jobs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Briefcase size={20} className="mr-3" />
              {userType === 'employer' ? 'Moji oglasi' : 'Poslovi'}
            </button>
            <button 
              onClick={() => setCurrentView('workers')}
              className={`w-full text-left p-3 rounded-lg mb-2 flex items-center ${
                currentView === 'workers' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users size={20} className="mr-3" />
              {userType === 'employer' ? 'Radnici' : 'Top radnici'}
            </button>
            <button 
              onClick={() => setCurrentView('messages')}
              className={`w-full text-left p-3 rounded-lg mb-2 flex items-center ${
                currentView === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageCircle size={20} className="mr-3" />
              Poruke
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {currentView === 'dashboard' && renderDashboard()}
          {currentView === 'jobs' && renderJobs()}
          {currentView === 'workers' && renderWorkers()}
          {currentView === 'messages' && renderMessages()}
        </div>
      </div>
    </div>
  );
};

export default HRApp;
