import { useState } from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/PersonalInfo";
import { WorkHistory } from "./components/WorkHistory";
import { Education } from "./components/Education";

function App() {
  const [isPreviewing, setIsPreviewing] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [workHistory, setWorkHistory] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkHistoryChange = (event, index) => {
    const { name, value } = event.target;
    setWorkHistory((prevState) => {
      const newState = [...prevState];
      newState[index][name] = value;
      return newState;
    });
  };

  const handleAddWorkHistory = () => {
    setWorkHistory((prevState) => [
      ...prevState,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleDeleteWorkHistory = (index) => {
    setWorkHistory((prevState) => {
      const newWorkHistory = [...prevState];
      newWorkHistory.splice(index, 1);
      return newWorkHistory;
    });
  };

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    setEducation((prevState) => {
      const newState = [...prevState];
      newState[index][name] = value;
      return newState;
    });
  };

  const handleAddEducation = () => {
    setEducation((prevState) => [
      ...prevState,
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleDeleteEducation = (index) => {
    setEducation((prevState) => {
      const newEducation = [...prevState];
      newEducation.splice(index, 1);
      return newEducation;
    });
  };

  return (
    <>
      <Header />
      <div className=' w-1/2 bg-gray-300 p-5 mt-5 rounded'>
        <PersonalInfo
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
        <WorkHistory
          workHistory={workHistory}
          handleWorkHistoryChange={handleWorkHistoryChange}
          handleAddWorkHistory={handleAddWorkHistory}
          handleDeleteWorkHistory={handleDeleteWorkHistory}
        />
        {/* <Education
          education={education}
          handleEducationChange={handleEducationChange}
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
        /> */}
      </div>
    </>
  );
}

export default App;
