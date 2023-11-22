import * as React from 'react';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import { Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function QuestionForm({ question, currentQuestion, setCurrent, showNextQuestion, totalScore, setScore, arrQuestion, setShuffle }) {
    const navigate = useNavigate();
    function shuffleArray(array) {
        const shuffledArray = [...array]; // Create a copy of the original array

        // Perform Fisher-Yates shuffle
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }
    const [shuffledAnswers, setShuffleAns] = React.useState(shuffleArray(question.arrAnswer));
    const [isEnd, setEnd] = React.useState(false);

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }
        setEnd(showNextQuestion());
    }

    function handleWinner() {
        navigate('/');
    }

    function handleReplay() {
        setScore(0);
        setCurrent(0);
        setShuffle(shuffleArray(arrQuestion));
        setEnd(false);
    }

    React.useEffect(() => {
        setShuffleAns(shuffleArray(question.arrAnswer));
    }, [currentQuestion])

    const useStyle = makeStyles(() => ({
        styleConfig: {
            '&.css-q03xuw-MuiGrid-root>.MuiGrid-item': {
                padding: '0',
            }
        },
        dialogConfig: {
            '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
                border: '0.2rem solid #00A9FF',
                borderRadius: '1rem',
                backgroundColor: '#CDF5FD',
            },
            '& .css-78trlr-MuiButtonBase-root-MuiIconButton-root': {
                color: '#00A9FF',
            },
            '& .css-knqc4i-MuiDialogActions-root': {
                justifyContent: 'center',
            },
        },
    }))
    const classes = useStyle();

    return (
        <Box sx={{ backgroundColor: '#CDF5FD', height: '100em', width: '100%' }}>
            <Typography level="p" fontSize="20px" sx={{
                mb: 0.5, display: 'flex', justifyContent: 'center', color: '#00A9FF', paddingTop: '0.5rem'
            }}>
                Câu: {currentQuestion + 1}
            </Typography>
            <Box sx={{
                display: 'flex', justifyContent: 'center'
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%'
                }}>
                    <Box sx={{ height: '10rem', border: '1px solid #00A9FF', borderRadius: '10%' }}>
                        <Typography level="p" fontSize="20px" sx={{
                            mb: 0.5, display: 'flex', justifyContent: 'center', color: '#00A9FF',
                        }}>
                            {question.ques}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center'
                    }}>
                        <img alt='kiet-character' style={{ height: '20rem', width: '15rem', position: 'absolute', top: '13rem', left: '5rem' }} src='assets/images/kietChibiRight.png' />
                    </Box>
                </Box>
            </Box>
            <Grid className={classes.styleConfig} container spacing={2} sx={{ position: 'relative', top: '21rem', marginLeft: 0, width: '100%' }}>
                {
                    shuffledAnswers.map((item, index) => (
                        <Grid item xs={6} md={6} sx={{ backgroundColor: '#A0E9FF', border: '1px solid #00A9FF', borderRadius: '20px', marginTop: '0.5rem' }} key={index}>
                            <Button disabled={isEnd} sx={{
                                color: 'white', textTransform: 'none', textShadow: '2px 2px 2px #00A9FF', fontSize: '20px',
                                padding: 0
                            }} onClick={() => { handleAnswer(item.isCorrect) }}>{item.ans}</Button>
                        </Grid>
                    ))
                }
            </Grid>
            <Dialog
                className={classes.dialogConfig}
                open={isEnd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="alert-dialog-title">
                    {totalScore == 10 ?
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography level="p" fontSize="20px" sx={{
                                mb: 0.5, display: 'flex', justifyContent: 'center', color: '#00A9FF',
                            }}>
                                Thật khó tin! &lt;3
                            </Typography>
                            <img alt='winner-prices' style={{ height: '10rem', width: '10rem' }} src='assets/images/presentWinner.png' />
                        </Box> :
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography level="p" fontSize="20px" sx={{
                                mb: 0.5, display: 'flex', justifyContent: 'center', color: '#00A9FF',
                            }}>
                                Gà :v
                            </Typography>
                            <img alt='winner-prices' style={{ height: '5rem', width: '5rem' }} src='assets/images/presentFail.png' />
                        </Box>
                    }

                </DialogTitle>
                <DialogActions>
                    <IconButton onClick={handleWinner}>
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton onClick={handleReplay}>
                        <ReplayIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </Box>
    );
}