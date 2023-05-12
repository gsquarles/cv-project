export function WorkHistory({
  workHistory,
  handleWorkHistoryChange,
  handleAddWorkHistory,
  handleDeleteWorkHistory,
}) {
  return (
    <div className='mt-3'>
      <h2 className=' text-2xl font-bold font-serif '>Work History</h2>
      {workHistory.map((job, index) => (
        <div key={index}>
          <form>
            <input
              type='text'
              name='company'
              value={job.company}
              onChange={(event) => handleWorkHistoryChange(event, index)}
              placeholder='Company Name'
              className='w-full mt-3 rounded h-8 p-2'
            />

            <input
              type='text'
              name='position'
              value={job.position}
              onChange={(event) => handleWorkHistoryChange(event, index)}
              placeholder='Position Name'
              className='w-full mt-3 rounded h-8 p-2'
            />

            <label>
              Start Date:
              <input
                type='date'
                name='startDate'
                value={job.startDate}
                onChange={(event) => handleWorkHistoryChange(event, index)}
                className='w-full rounded h-8 p-2'
              />
            </label>
            <label>
              End Date:
              <input
                type='date'
                name='endDate'
                value={job.endDate}
                onChange={(event) => handleWorkHistoryChange(event, index)}
                className='w-full rounded h-8 p-2'
              />
            </label>

            <textarea
              name='description'
              value={job.description}
              onChange={(event) => handleWorkHistoryChange(event, index)}
              placeholder='Description'
              className='w-full mt-3 rounded h-14 p-2'
            />
          </form>
          <button
            className='w-full bg-gray-500 rounded p-2 text-white'
            onClick={() => handleDeleteWorkHistory(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className='w-full bg-gray-500 rounded p-2 text-white mt-3'
        onClick={handleAddWorkHistory}
      >
        Add Job
      </button>
    </div>
  );
}
