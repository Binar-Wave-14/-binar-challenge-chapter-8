import React, { useState } from 'react'

const ShowData = ({ data }) => {
  
  const classes = {
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-10',
    title: 'text-black text-2xl font-bold py-5 mb-2',
    result: 'bg-white md:w-1/2 rounded-xl px-5 py-3 mr-3 mb-3',
    resultInfo: 'text-black font-bold mt-1',
    resultData: 'text-lg text-green-600 w-full mt-2',
  }

  // conditional rendering
  if (data === null) {
    return null
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Result</h2>
      <div className={classes.result}>
        <p className={classes.resultInfo}>Username</p>
        <p className={classes.resultData}>{data.username}</p>
        <p className={classes.resultInfo}>Email</p>
        <p className={classes.resultData}>{data.email}</p>
        <p className={classes.resultInfo}>Experience</p>
        <p className={classes.resultData}>{data.experience}</p>
        <p className={classes.resultInfo}>Level</p>
        <p className={classes.resultData}>{data.level}</p>
      </div>
    </div>
  )
}

const EditPlayerForm = () => {
  const [data, setData] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [level, setLevel] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setData({
      username,
      email,
      experience,
      level,
    })
    setUsername('')
    setEmail('')
    setExperience('')
    setLevel('')
  }

  const handleUsernameChange = (event) => setUsername(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleExperienceChange = (event) => setExperience(event.target.value)
  const handleLevelChange = (event) => setLevel(event.target.value)

  const classes = {
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-10',
    title: 'text-black text-2xl font-bold py-5 mb-2',
    formClass: 'bg-white md:w-1/2 flex flex-wrap rounded-xl rounded-xl py-2 px-5',
    formWrapperFull: 'w-full pr-3 mb-3',
    formWrapper: 'w-full md:w-1/2 pr-3 mb-3',
    formLabel: 'text-black block font-bold py-3',
    formField:
      'bg-yellow-100 border-gray-200 bck border w-full border rounded-xl h-12 px-3 focus:border-gray-600 focus:bg-yellow-100 focus:outline-none',
    buttonClass:
      'text-black bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-3',
  }

  // render
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Edit Player</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formClass}>
          <div className={classes.formWrapperFull}>
            <label className={classes.formLabel} htmlFor="username">
              Username
            </label>
            <input className={classes.formField} type="text" name="username" value={username} onChange={handleUsernameChange}></input>
          </div>
          <div className={classes.formWrapperFull}>
            <label className={classes.formLabel} htmlFor="email">
              Email
            </label>
            <input className={classes.formField} type="email" name="email" value={email} onChange={handleEmailChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="experience">
              Experience
            </label>
            <input className={classes.formField} type="number" name="experience" value={experience} onChange={handleExperienceChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="level">
              Level
            </label>
            <input className={classes.formField} type="number" name="level" value={level} onChange={handleLevelChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <button className={classes.buttonClass} type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
      <ShowData data={data} />
    </div>
  )
}

export default EditPlayerForm