export function Education({
  education,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <div>
      <h2>Education</h2>
      {education.map((school, index) => (
        <div key={index}>
          <form>
            <label>
              Company:
              <input
                type='text'
                name='institution'
                value={school.institution}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </label>
            <label>
              Degree:
              <input
                type='text'
                name='degree'
                value={school.degree}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </label>
            <label>
              Start Date:
              <input
                type='date'
                name='startDate'
                value={school.startDate}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </label>
            <label>
              End Date:
              <input
                type='date'
                name='endDate'
                value={school.endDate}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </label>
            <label>
              Description:
              <textarea
                name='description'
                value={school.description}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </label>
          </form>
          <button onClick={() => handleDeleteEducation(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddEducation}>Add Education</button>
    </div>
  );
}
