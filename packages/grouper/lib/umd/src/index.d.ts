export interface GrouperDocConfig {
    root?: HTMLElement;
    title?: string;
    content?: string;
}
export default class GrouperDoc {
    config: any;
    root: any;
    constructor(config: GrouperDocConfig);
    destory(): void;
    render(config: GrouperDocConfig): void;
}
