const parseArgs = () => {
    const args = process.argv.slice(2)

    args.forEach((value, index, array) => {
        if (value.startsWith('--')) {
            console.log(`${value} is ${array[index + 1]}`)
        }
    })
};

parseArgs();
