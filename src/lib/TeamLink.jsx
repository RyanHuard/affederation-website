import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = ({ location, name, teamId, children }) => {
  let locationSplit = location?.replaceAll(" ", "-").replaceAll(".", "").toLowerCase();
  let nameSplit = name?.replaceAll(" ", "-").toLowerCase();
  return (
    <Link to={`/teams/${teamId}/${locationSplit}-${nameSplit}`}>
        {children}
    </Link>
  )
}

export default TeamLink