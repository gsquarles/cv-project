import { useState } from "react";
import { Header } from "./components/Header";
import { PersonalInfo } from "./components/PersonalInfo";
import { WorkHistory } from "./components/WorkHistory";
import { Education } from "./components/Education";
import { ResumeDisplay } from "./components/ResumeDisplay";

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
      {isPreviewing ? (
        <ResumeDisplay
          personalInfo={personalInfo}
          workHistory={workHistory}
          education={education}
          isPreviewing={isPreviewing}
          setIsPreviewing={setIsPreviewing}
        />
      ) : (
        <div className=' w-1/2 bg-gray-300 p-5 mt-5 rounded shadow-md'>
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
          <Education
            education={education}
            handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
          />
          <button
            className='w-full bg-green-500 rounded p-2 text-white mt-3'
            onClick={() => setIsPreviewing(!isPreviewing)}
          >
            Preview
          </button>
        </div>
      )}
    </>
  );
}

export default App;
