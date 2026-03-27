'use client'
import useSubscribersData from '@/shared/hooks/useSubscribersData'
// import React from 'react'
import {format} from "timeago.js"
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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

    const rows: any = [];
  
  data?.forEach((i:subscribersDataTypes) => {
    rows.push({
        id: i?._id,
        email: i?.email,
        createdAt: format(i?.createdAt),
        source: i?.source,
        status: i?.status,
    })
  })
  return (
    <div>SubscribersData</div>
  )
}

export default SubscribersData