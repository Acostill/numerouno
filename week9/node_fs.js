fs.watch('message.txt', (eventType, filename) => {
    console.log(`${eventType} in ${filename}`);
})