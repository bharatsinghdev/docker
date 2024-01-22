const express = require('express');
const ffmpeg = require('fluent-ffmpeg');

const app = express();

app.get('/stream', (req, res) => {
    // Replace 'your_video_path.mp4' with the actual path to your video file
    const videoPath = './video.mp4';

    // Set the content type for the response
    res.header('Content-Type', 'video/mp4');
    console.log(ffmpeg)
    // Create an F  Fmpeg command to stream the video
    const ffmpegCommand = ffmpeg()
        .input(videoPath)
        .videoCodec('libx264')
        .audioCodec('aac')
        .format('mp4')
        .pipe(res, { end: true })
        .on('end', () => {
            console.log('Streaming finished');
        })
        .on('error', (err) => {
            console.error('Error during streaming:', err);
        });


    // Run the FFmpeg command
    ffmpegCommand.run();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
