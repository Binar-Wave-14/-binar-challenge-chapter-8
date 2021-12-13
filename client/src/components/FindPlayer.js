import React, { useState } from 'react'

const ShowData = ({ data }) => {
  
  const classes = {
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-10',
    title: 'text-black text-2xl font-bold py-5 mb-2',
    table: 'mt-5 rounded-xl bg-white table-auto w-full p-2',
    tableHead: 'text-black text-left rounded-xl border-b',
    tableData: 'text-left',
    tableDataRow: 'hover:bg-yellow-100',
    tableContent: 'px-5 py-2 h-16',
  }

  // conditional rendering
  if (data === null) {
    return null
  }

  return (
    <div className={classes.wrapper}>
		<h2 className={classes.title}>Result</h2>
		<table className={classes.table}>
			<thead className={classes.tableHead}>
			  <tr>
				<th className={classes.tableContent}>Usernames</th>
				<th className={classes.tableContent}>Emails</th>
				<th className={classes.tableContent}>Experiences</th>
				<th className={classes.tableContent}>Levels</th>
			  </tr>
			</thead>
			<tbody className={classes.tableData}>
			  
				<tr className={classes.tableDataRow}>
				  <td className={classes.tableContent}>{data.username}</td>
				  <td className={classes.tableContent}>{data.email}</td>
				  <td className={classes.tableContent}>{data.experience}</td>
				  <td className={classes.tableContent}>{data.level}</td>
				</tr>
			  
			</tbody>
		</table>
	</div>
  )
}

const FindPlayer = () => {
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
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-20',
    title: 'text-black text-2xl font-bold py-5 mb-2',
    formClass: 'bg-white rounded-xl rounded-xl py-2 px-5',
    formWrapper: 'w-full md:w-3/12 pr-3 mb-3',
    formFieldWrapper: 'flex flex-wrap',
    formLabel: 'text-black block font-bold py-3',
    formField:
      'bg-yellow-100 border-gray-200 bck border w-full border rounded-xl h-12 px-3 focus:border-gray-600 focus:bg-yellow-100 focus:outline-none',
    buttonClass:
      'text-black bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-3',
  }

  // render
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Find A Player</h2>
      <form className={classes.formClass} onSubmit={handleSubmit}>
        <div className={classes.formFieldWrapper}>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="username">
              Username
            </label>
            <input className={classes.formField} type="text" name="username" value={username} onChange={handleUsernameChange}></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="email">
              Email
            </label>
            <input className={classes.formField} type="text" name="email" value={email} onChange={handleEmailChange}></input>
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
        </div>
        <div className={classes.formWrapper}>
          <button className={classes.buttonClass} type="submit">
            Search Player
          </button>
        </div>
      </form>
      <ShowData data={data} />
    </div>
  )
}

export default FindPlayer