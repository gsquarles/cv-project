export function PersonalInfo({ personalInfo, handlePersonalInfoChange }) {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type='email'
            name='email'
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type='tel'
            name='phone'
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
          />
        </label>
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={personalInfo.address}
            onChange={handlePersonalInfoChange}
          />
        </label>
      </form>
    </div>
  );
}
