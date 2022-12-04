const transform = async () => {
    process.stdin.on('data', data => {
        const reversedString = data.toString().split('').reverse().join('')
        process.stdout.write(reversedString)
    })
};

await transform();
