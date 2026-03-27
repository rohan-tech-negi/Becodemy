'use client'
import useSubscribersData from '@/shared/hooks/useSubscribersData'
// import React from 'react'

const SubscribersData = () => {
    const {data, loading} = useSubscribersData();

    // console.log(data);

      const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 0.8 },
    { field: "createdAt", headerName: "Subscribed At", flex: 0.5 },
    { field: "source", headerName: "Source", flex: 0.5 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <>
            <h1>{params.row.status}</h1>
          </>
        );
      },
    },
  ];
  return (
    <div>SubscribersData</div>
  )
}

export default SubscribersData