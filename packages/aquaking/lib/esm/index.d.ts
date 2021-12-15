interface AquaKingConfig {
    appId: string;
}
export default class AquaKing {
    constructor(config: AquaKingConfig);
    initAquaKing(): void;
}
export {};
