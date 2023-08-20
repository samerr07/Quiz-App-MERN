import React from 'react'

const ResultTable = ({username,attempts,earnPoints,flag}) => {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>{username}</td>
                    <td>{attempts}</td>
                    <td>{earnPoints}</td>
                    <td>{flag ? "Passed" : "Fail"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable
