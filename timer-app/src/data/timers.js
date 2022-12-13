import {v4 as uuidv4} from 'uuid'

export  let  timers = [
    {
        title: 'Practice react js',
        project: 'Buil bllog app',
        id:  uuidv4(),
        elapsed: 49090999,
        runningSince: Date.now()
    },
    {
        title: 'Practice flutter and dart',
        project: 'Buil resposive app',
        id:  uuidv4(),
        elapsed: 4904635,
        runningSince: null
    },
    {
        title: 'Practice Node js for backend',
        project: 'Customise a backend with javaScript',
        id:  uuidv4(),
        elapsed: 56788544,
        runningSince: null
    }
]