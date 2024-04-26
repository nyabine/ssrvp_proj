import { useEffect, useState } from 'react'
import { CircularProgress } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

interface User {
    id: number;
    name: string;
    username: string;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'username', headerName: 'Username', width: 250 }
]

const RestServerAndTable = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(`${BASE_URL}/users`)
                const users = await response.json() as User[]
                setUsers(users)
            } catch (e: any) {
                setError(e)
                setIsError(true)
            } finally {
                setIsSuccess(true)
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (isLoading) {
        console.log("loading")
        return (
            <div>
                {  showImg ? <CircularProgress/> : undefined}
            </div>
        )
    }

    if (isError) {
        console.log("error")
        return (
            <div>Something went wrong</div>
        )
    }

    if (isSuccess) {
        console.log("success")
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            />  
        </div>
    )
}

export default RestServerAndTable