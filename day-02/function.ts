const add = (a: number, b: number): number => {
    a = 1
    b = 2
    return 1
}

const throwErr = (message: string): never => {
    throw new Error(message)
}

const forecast = {
    data: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {
    date: Date,
    weather: string
}): void => {

}