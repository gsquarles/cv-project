export function WorkHistory({
  workHistory,
  handleWorkHistoryChange,
  handleAddWorkHistory,
  handleDeleteWorkHistory,
}) {
  return (
    <div>
      <h2>Work History</h2>
      {workHistory.map((job, index) => (
        <div key={index}>
          <form>
            <label>
              Company:
              <input
                type='text'
                name='company'
                value={job.company}
                onChange={(event) => handleWorkHistoryChange(event, index)}
              />
            </label>
            <label>
              Position:
              <input
                type='text'
                name='position'
                value={job.position}
                onChange={(event) => handleWorkHistoryChange(event, index)}
              />
            </label>
            <label>
              Start Date:
              <input
                type='date'
                name='startDate'
                value={job.startDate}
                onChange={(event) => handleWorkHistoryChange(event, index)}
              />
            </label>
            <label>
              End Date:
              <input
                type='date'
                name='endDate'
                value={job.endDate}
                onChange={(event) => handleWorkHistoryChange(event, index)}
              />
            </label>
            <label>
              Description:
              <textarea
                name='description'
                value={job.description}
                onChange={(event) => handleWorkHistoryChange(event, index)}
              />
            </label>
          </form>
          <button onClick={() => handleDeleteWorkHistory(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddWorkHistory}>Add Job</button>
    </div>
  );
}
