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
        <p className={classes.resultInfo}>Password</p>
        <p className={classes.resultData}>{data.password}</p>
      </div>
    </div>
  )
}

const CreatePlayer = () => {
  const [data, setData] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setData({
      username,
      email,
      password,
    })
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleUsernameChange = (event) => setUsername(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value)

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
      <h2 className={classes.title}>Create New Player</h2>
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
            <label className={classes.formLabel} htmlFor="password">
              Password
            </label>
            <input className={classes.formField} type="password" name="password" value={password} onChange={handlePasswordChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input className={classes.formField} type="password" name="confirmpassword" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <button className={classes.buttonClass} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ShowData data={data} />
    </div>
  )
}

export default CreatePlayer