import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Create.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Create() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [formData, setFormData] = useState({
    projectName: "",
    devices: [],
  });

  const handleFormDataChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));

    console.log(`Field ${fieldName} updated to:`, value);
  };

  const addDevice = () => {
    const newDevice = { serialNumber: "", deviceName: "" };
    setFormData((prevData) => ({
      ...prevData,
      devices: [...prevData.devices, newDevice],
    }));
  };

  const handleDeviceChange = (index, fieldName, value) => {
    const updatedDevices = [...formData.devices];
    updatedDevices[index][fieldName] = value;
    setFormData((prevData) => ({
      ...prevData,
      devices: updatedDevices,
    }));
  };

  const addProject = async () => {
    if (formData.projectName.trim() === "") {
      alert("請輸入專案名稱");
    } else {
      console.log("Form submitted:", formData);
      try {
        const response = await axios.post(
          `http://localhost:8080/api/project/addproject?username=${id}`,
          { projectName: formData.projectName.trim() }
        );
        alert(response.data);
        handleFormDataChange("projectName", "");
        console.log(response);
      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
    }
  };

  return (
    <div>
      <div>
        <NavLink to={`/Project?id=${id}&type=1`}>
          <button>返回專案頁面</button>
        </NavLink>
      </div>
      <h1>新增專案</h1>
      <form>
        <div>
          <label>專案名稱：</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={(e) => handleFormDataChange("projectName", e.target.value)}
          />
        </div>
        <div>
          <label>設備：</label>
          {formData.devices.map((device, index) => (
            <div key={index}>
              <p>設備 {index + 1}：</p>
              <input
                type="text"
                placeholder="序列號"
                value={device.serialNumber}
                onChange={(e) => handleDeviceChange(index, "serialNumber", e.target.value)}
              />
              <input
                type="text"
                placeholder="名稱"
                value={device.deviceName}
                onChange={(e) => handleDeviceChange(index, "deviceName", e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="button" onClick={addDevice}>
          新增設備
        </button>
        
        <button type="button" onClick={addProject}>
          新增專案
        </button>
        { /* <NavLink to={`/Step?id=${id}&project=${formData.projectName}`}>
          <button type="button">skip</button>
        </NavLink> */}
      </form>
    </div>
  );
}

export default Create;
