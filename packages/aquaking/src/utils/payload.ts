import { UAParser } from 'ua-parser-js';

interface PayloadHeader {
    appId?: string;
    sdkVersion: string;
    browser: string;
    browserVersion: string;
    device: string;
    width: number;
    height: number;
    resolution: string;
    language: string;
    osName: string;
    osVersion: string;
    platform: string;
    timezone: string;
    referrer: string;
}

interface PayloadUser {
    userUniqueId: string;
    webId: string;
}

interface Payload {
    event: string;
    localTime: number;
    params: string;
    header: PayloadHeader;
    user: PayloadUser;
}

const { browser, engine, os } = new UAParser().getResult();

const payloadHeader: PayloadHeader = {
    sdkVersion: SDK_VERSION,
    browser: browser.name,
    browserVersion: browser.version,
    platform: navigator.platform,
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: `${window.outerWidth}x${window.outerHeight}`,
    language: window.navigator.language,
    referrer: window.document.referrer,
    device: os.name,
    osName: os.name,
    osVersion: os.version,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
}

const payloadUser = {
    webId: localStorage.getItem('aqua_king_unique'),
    userUniqueId: ''
}

export default function assemblePayload(event: string, params?: Record<string, any>): Payload {
    return { event, localTime: Date.now(), params: JSON.stringify(params), header: payloadHeader, user: payloadUser }
}
