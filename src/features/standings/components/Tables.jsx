import React from 'react'

import { useStandings } from '../api/getStandings'
import { Spinner } from 'react-bootstrap';

const Tables = () => {
  const standingsQuery = useStandings();

  if (standingsQuery.isLoading) {
    return (
      <div className="m-auto">
        <Spinner />
      </div>
    );
  }

  return (
    <div></div>
  )
}

export default Tables