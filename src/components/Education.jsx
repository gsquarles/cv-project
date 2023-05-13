export function Education({
  education,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <div className='mt-3'>
      <h2 className=' text-2xl font-bold font-serif '>Education</h2>
      {education.map((school, index) => (
        <div key={index}>
          <form>
            <input
              type='text'
              name='institution'
              value={school.institution}
              onChange={(event) => handleEducationChange(event, index)}
              placeholder='Institution'
              className='w-full mt-3 rounded h-8 p-2'
            />
            <input
              type='text'
              name='degree'
              value={school.degree}
              onChange={(event) => handleEducationChange(event, index)}
              placeholder='Degree'
              className='w-full mt-3 rounded h-8 p-2'
            />
            <label>
              Start Date:
              <input
                type='date'
                name='startDate'
                value={school.startDate}
                onChange={(event) => handleEducationChange(event, index)}
                className='w-full mt-3 rounded h-8 p-2'
              />
            </label>
            <label>
              End Date:
              <input
                type='date'
                name='endDate'
                value={school.endDate}
                onChange={(event) => handleEducationChange(event, index)}
                className='w-full mt-3 rounded h-8 p-2'
              />
            </label>
            <textarea
              name='description'
              value={school.description}
              onChange={(event) => handleEducationChange(event, index)}
              placeholder='Description'
              className='w-full mt-3 rounded h-14 p-2'
            />
          </form>
          <button
            className='w-full bg-gray-500 rounded p-2 text-white'
            onClick={() => handleDeleteEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className='w-full bg-gray-500 rounded p-2 text-white mt-3'
        onClick={handleAddEducation}
      >
        Add Education
      </button>
    </div>
  );
}
