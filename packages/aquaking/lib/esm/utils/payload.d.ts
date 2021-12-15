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
export default function assemblePayload(event: string, params?: Record<string, any>): Payload;
export {};
