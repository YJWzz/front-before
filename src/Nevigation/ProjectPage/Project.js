import React, { useState, useEffect } from "react";
import "./Project.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Project() {
  const location = useLocation();
  const userid = location.state;
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/project/getproject/?username=${type ? id : userid}`);
        setProjectList(response.data);
      } catch (error) {
        console.error(error);
        console.error("文件讀取失敗");
      }
    };

    fetchData();
  }, []);

  const handleDeleteProject = async (index) => {
    const confirmDelete = window.confirm("確定要刪除專案?");
    if (!confirmDelete) {
      return;
    }

    const updatedProjects = [...projectList];
    const deletedProject = updatedProjects.splice(index, 1)[0];
    setProjectList(updatedProjects);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/project/deleteproject?username=${type ? id : userid}`,
        { projectName: deletedProject.trim() }
      );
      alert(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleLogout = () => {
    //setShowLogoutPrompt(true);
    const confirmlogout = window.confirm("確定要登出嗎？");
    if (!confirmlogout) {
      return;
    }
    navigate("/"); // Redirect to the home page
  };

  const handleConfirmLogout = () => {
    setShowLogoutPrompt(false);
    navigate("/"); // Redirect to the home page
  };

  const handleCancelLogout = () => {
    setShowLogoutPrompt(false);
  };

  const filteredProjects = projectList.filter(project =>
    project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-page">
      <h1>Project Page</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="搜尋專案"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="project-list">
        {filteredProjects.map((projectName, index) => (
          <div className="project" key={index}>
            <h2>{projectName}</h2>
            <NavLink to={`/Step?id=${type ? id : userid}&project=${projectName}`}>
              <p>{projectName}的詳細訊息</p>
            </NavLink>
            <button onClick={() => handleDeleteProject(index)}>刪除專案</button>
          </div>
        ))}
      </div>
      <NavLink to={`/CreatePage?id=${type ? id : userid}`}>
        <button className="add-project-button">新增專案</button>
      </NavLink>
      <button onClick={handleLogout}>登出</button>
      <button>設置</button>

      {/* Logout Prompt */}
      {showLogoutPrompt && (
        <div className="logout-prompt">
          <p>確定要登出嗎？</p>
          <button onClick={handleConfirmLogout}>確定</button>
          <button onClick={handleCancelLogout}>取消</button>
        </div>
      )}
    </div>
  );
}

export default Project;
