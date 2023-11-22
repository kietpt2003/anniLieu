import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/questionPage')
    }
    return (
        <Box sx={{ backgroundColor: '#CDF5FD', height: '100em', width: '100%' }}>
            <Box sx={{
                display: 'flex', justifyContent: 'center'
            }}>
                <Box sx={{
                    backgroundColor: '#89CFF3', border: '3px solid #00A9FF', borderRadius: '50%', height: '5rem', width: '30%',
                    padding: '5% 20% 5% 20%'
                }}>
                    <Typography level="h1" fontSize="30px" sx={{
                        mb: 0.5, display: 'flex', justifyContent: 'center', color: 'white',
                    }}>
                        LỚP ĐỐ VUI
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center', marginTop: '3rem', marginTop: '2.5rem'
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%'
                }}>
                    <Box sx={{ height: '10rem', border: '1px solid #00A9FF', borderRadius: '10%' }} />
                    <Box sx={{
                        display: 'flex', justifyContent: 'center'
                    }}>
                        <img alt='kiet-character' style={{ height: '20rem', width: '15rem', position: 'absolute', top: '14rem', left: '5rem' }} src='assets/images/kietChibiRight.png' />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', bottom: '2rem' }}>
                <Button sx={{
                    backgroundColor: '#A0E9FF', color: 'white', border: '1px solid #00A9FF', textTransform: 'none', width: '30%', borderRadius: '20px',
                    textShadow: '2px 2px 2px #00A9FF', fontSize: '20px'
                }}
                    onClick={handleStart}
                >
                    Bắt đầu
                </Button>
            </Box>
        </Box>
    )
}
