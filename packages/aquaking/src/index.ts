import { v4 as uuidv4 } from 'uuid';
import assemblePayload from './utils/payload';

interface AquaKingConfig {
    appId: string;
}

if (!localStorage.getItem('aqua_king_unique')) {
    localStorage.setItem('aqua_king_unique', JSON.stringify({ webid: uuidv4().replace('/-/', '') }))
}

const startTime = Date.now();

export default class AquaKing {

    constructor(config: AquaKingConfig) {
        const { appId } = config;
        this.initAquaKing()
    }

    initAquaKing() {
        window.addEventListener('load', (e) => {
            console.log(Date.now() - startTime)
            const { connectStart, domComplete } = performance.timing;
            const time = domComplete - connectStart;
            console.log(assemblePayload('init', { time }))
        })

        window.addEventListener('error', (err) => {
            console.log("err:", err)
        }, true)
    }

}
