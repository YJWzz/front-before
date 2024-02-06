import React, { useState } from "react";
import axios from "axios"; 
import Prompt from "../../Components/Prompt/Prompt2";
import { NavLink } from "react-router-dom";

function Requirement() {
  const [reqData, setReqData] = useState({
    req: "",
  });

  const handleFormDataChange = (fieldName, value) => {
    setReqData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log(`Field ${fieldName} updated to:`, value);
  };

  const handleGenerateClick = async () => {
    const confirmed = window.confirm("确定要提交吗?");
    if (confirmed) {
      const requestData = {
        method: "POST",
        request: reqData, 
        response: {
          message: "傳輸成功",
        },
      };
      try {
        await jsonFunction(requestData);
      } catch (error) {
        console.error("提交失敗:", error);
        // 在這裡你可以根據不同的錯誤情況提供用戶更具體的反饋
        if (error.response) {
          alert(`提交失敗，錯誤狀態碼：${error.response.status}`);
        } else {
          alert("提交失敗，請檢查網絡連接或稍後重試。");
        }
      }
    }
  };

  async function jsonFunction(reqData) {
    const response = await axios.post("彥君記得改這裡", reqData.request);
    console.log("server response:", response.data);
    alert("change sucessefully");
  }

  return (
    <div className="container">
      <h2>問題1</h2>
      
      <div className="button-group">
        <button onClick={handleGenerateClick}>提交</button>
        <br/>
        <NavLink to="/Step"><button>done</button></NavLink> {/**/ }
      </div>
      <div className="prompt">
      <Prompt value={reqData.req} onChange={(value) => handleFormDataChange("req", value)} /> 
      </div>
    </div>
  );
}

export default Requirement;
