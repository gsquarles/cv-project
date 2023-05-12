export function PersonalInfo({ personalInfo, handlePersonalInfoChange }) {
  return (
    <div>
      <h2 className=' text-2xl font-bold font-serif '>Personal Information</h2>
      <form>
        <input
          type='text'
          name='firstName'
          value={personalInfo.firstName}
          onChange={handlePersonalInfoChange}
          placeholder='First Name'
          className='w-full mt-3 rounded h-8 p-2'
        />
        <br />
        <input
          type='text'
          name='lastName'
          value={personalInfo.lastName}
          onChange={handlePersonalInfoChange}
          placeholder='Last Name'
          className='w-full mt-3 rounded h-8 p-2'
        />
        <br />
        <input
          type='email'
          name='email'
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          placeholder='Email Address'
          className='w-full mt-3 rounded h-8 p-2'
        />
        <br />
        <input
          type='tel'
          name='phone'
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
          placeholder='Phone Number'
          className='w-full mt-3 rounded h-8 p-2'
        />
        <br />
        <input
          type='text'
          name='address'
          value={personalInfo.address}
          onChange={handlePersonalInfoChange}
          placeholder='Address'
          className='w-full mt-3 rounded h-8 p-2'
        />
      </form>
    </div>
  );
}
