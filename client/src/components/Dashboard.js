import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ getPlayers }) => {
  
  const classes = {
    title: 'text-black text-2xl font-bold py-5 mb-2',
    wrapper: 'overflow-x-auto max-w-5xl mx-auto mt-5',
    boxInfo: 'flex flex-wrap mt-2 mb-3',
    boxInfoContent: 'text-center bg-white rounded-xl px-5 py-3 mr-3 mb-3 w-1/6 hover:bg-yellow-100',
    boxTitle: 'text-black font-bold',
    boxData: 'text-5xl text-green-600 font-bold',
    boxDataLow: 'text-5xl text-red-600 font-bold',
    table: 'mt-5 rounded-xl bg-white table-auto w-full p-2',
    tableHead: 'text-black text-left rounded-xl border-b',
    tableData: 'text-left',
    tableDataRow: 'hover:bg-yellow-100',
    editLink: 'text-blue-700 font-bold',
    tableContent: 'px-5 py-2 h-16',
  }

  const highestXp = Math.max(...getPlayers.map((p) => p.experience))
  const highestLvl = Math.max(...getPlayers.map((p) => p.level))
  const lowestXp = Math.min(...getPlayers.map((p) => p.experience))
  const lowestLvl = Math.min(...getPlayers.map((p) => p.level))

  // render
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Statistic</h2>
      <div className={classes.boxInfo}>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Total Players</h3>
          <p className={classes.boxData}>{getPlayers.length}</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Highest Exp</h3>
          <p className={classes.boxData}>{highestXp}</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Highest Lvl</h3>
          <p className={classes.boxData}>{highestLvl}</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Lowest Exp</h3>
          <p className={classes.boxDataLow}>{lowestXp}</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Lowest Lvl</h3>
          <p className={classes.boxDataLow}>{lowestLvl}</p>
        </div>
      </div>
	  
      <h2 className={classes.title}>View Players</h2>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableContent}>Actions</th>
            <th className={classes.tableContent}>Usernames</th>
            <th className={classes.tableContent}>Emails</th>
            <th className={classes.tableContent}>Experiences</th>
            <th className={classes.tableContent}>Levels</th>
          </tr>
        </thead>
        <tbody className={classes.tableData}>
          {getPlayers.map((player) => (
            <tr className={classes.tableDataRow} key={player.username}>
              <td className={classes.tableContent}>
                <Link className={classes.editLink} to="/edit-player">
                  Edit
                </Link>
              </td>
			  <td className={classes.tableContent}>{player.username}</td>
              <td className={classes.tableContent}>{player.email}</td>
              <td className={classes.tableContent}>{player.experience}</td>
              <td className={classes.tableContent}>{player.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard