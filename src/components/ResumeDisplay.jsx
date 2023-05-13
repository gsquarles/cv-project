export function ResumeDisplay({
  personalInfo,
  workHistory,
  education,
  isPreviewing,
  setIsPreviewing,
}) {
  return (
    <>
      <div className='w-[8.27in] mx-auto my-4 p-4 bg-white shadow-md'>
        <div>
          <h1 className=' text-4xl'>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className='mt-2'>
            <strong>Email:</strong> {personalInfo.email}
          </h2>
          <h2 className='mt-2'>
            <strong>Phone:</strong> {personalInfo.phone}
          </h2>
          <h2 className='mt-2'>
            <strong>Address:</strong> {personalInfo.address}
          </h2>
        </div>
        <h1 className='mt-4 text-2xl text-blue-800 border-b-2 border-gray-300'>
          Experience
        </h1>
        {workHistory.map((job, index) => (
          <div key={index} className=' grid grid-cols-2'>
            <p className=' font-semibold text-xl'>
              {job.startDate} to {job.endDate}
            </p>
            <h2 className=' col-start-2 font-semibold text-2xl'>
              {job.position}
            </h2>
            <h3 className='col-start-2 font-medium text-xl'>{job.company}</h3>
            <p className='col-start-2'>{job.description}</p>
          </div>
        ))}
        <h1 className='mt-4 text-2xl text-blue-800 border-b-2 border-gray-300'>
          Education
        </h1>
        {education.map((school, index) => (
          <div key={index} className=' grid grid-cols-2'>
            <p className=' font-semibold text-xl'>
              {school.startDate} to {school.endDate}
            </p>
            <h2 className=' col-start-2 font-semibold text-2xl'>
              {school.degree}
            </h2>
            <h3 className='col-start-2 font-medium text-xl'>
              {school.institution}
            </h3>
            <p className='col-start-2'>{school.description}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setIsPreviewing(!isPreviewing)}>Edit</button>
    </>
  );
}
