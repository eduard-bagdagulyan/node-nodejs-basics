const parseEnv = () => {
    const envVarKeys = Object.keys(process.env)
    const validVars = envVarKeys.filter(value => value.startsWith('RSS_'))
    validVars.forEach(value => console.log(`${value}=${process.env[value]}`))
};

parseEnv();
