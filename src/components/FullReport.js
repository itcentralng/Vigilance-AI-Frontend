import React from 'react';
import { useParams } from 'react-router-dom';

const FullReport = ({crime: report}) => {
  const { id } = useParams();

  // Replace with actual data fetching logic
  // const report = {
  //   id: id,
  //   description: "Robbery at Main Street Bank",
  //   time: "2023-08-25 10:30 AM",
  //   location: "Downtown",
  //   status: "Active",
  //   details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula urna ac orci posuere, eu laoreet elit rhoncus.",
  // };

  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: report.report}}></p>
    </div>
  );
};

export default FullReport;
