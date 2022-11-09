import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 50 },
//     { field: 'title', headerName: 'Title', width: 240 },
//     { field: 'img', headerName: 'Image', width: 130 },
//     { field: 'video', headerName: 'Video', width: 130 },
//     { field: 'date', headerName: 'Date', width: 150 },
//     { field: 'content', headerName: 'Content', width: 320 },
// ];






export default function Dashboard() {
    const [APIData, setAPIData] = useState([])
    const baseURL = `https://63609d88af66cc87dc172e0f.mockapi.io/movies`;
    useEffect(() => {
        getMovies()
    }, [])
    const getMovies = () => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
            })
            .catch(error => console.log(error.message));
    }
    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
            })
            .catch(error => console.log(error.message));

    }, []);
    const deleteMovies = (id) => {
        fetch(`https://63609d88af66cc87dc172e0f.mockapi.io/movies/${id}`, {
            method: 'DELETE'
        })
            .then((result) => {
                result.json().then((response) => {
                    console.warn(response)
                    getMovies()
                })
            })
    }
    return (
        <div>
           
            <div className="dashboard">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{backgroundColor:'#ff5500'}}>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Trailer</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>Nation</TableCell>
                                <TableCell>Genres</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Info</TableCell>
                                <TableCell>Action</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {APIData.map((data) => (
                                <TableRow
                                    key={data.id}
                                >
                                    <TableCell component="th" scope="row">
                                        {data.id}
                                    </TableCell>
                                    <TableCell>{data.title}</TableCell>
                                    <TableCell>{data.img}</TableCell>
                                    <TableCell>{data.trailer}</TableCell>
                                    <TableCell>{data.year}</TableCell>
                                    <TableCell>{data.nation}</TableCell>
                                    <TableCell>{data.genres}</TableCell>
                                    <TableCell>{data.time}</TableCell>
                                    <TableCell>{data.info}</TableCell>
                                    
                                   
                                    <TableCell><Link to={`/update/${data.id}`}><Button><EditIcon style={{color:'green'}} /></Button></Link></TableCell>
                                    <TableCell><Button><DeleteIcon style={{color:'red'}} onClick={() => deleteMovies(data.id)} /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </Container> */}

            </div>
        </div>
    )
}