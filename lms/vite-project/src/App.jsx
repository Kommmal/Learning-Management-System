import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Video from "./pages/Video/Video";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyCourses from "./pages/MyCourses/MyCourses";
import AllCourses from "./pages/AllCourses/AllCourses";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import './App.css'
import Announcement from "./pages/Announcement/Announcement.jsx";
import UserProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import CourseDetail from "./pages/CourseDetail/CourseDetail.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          {isAuthenticated && <Sidebar />} {/* Only show Sidebar if authenticated */}
          <div className="content-area">
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/mycourses" /> : <Login />}
              />
              <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/mycourses" /> : <SignUp />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mycourses"
                element={
                  <ProtectedRoute>
                    <MyCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/allcourses"
                element={
                  <ProtectedRoute>
                    <AllCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/video"
                element={
                  <ProtectedRoute>
                    <Video />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/announcement"
                element={
                  <ProtectedRoute>
                    <Announcement />
                  </ProtectedRoute>
                }
              />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route
                path="/userprofile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
