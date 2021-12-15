declare namespace _default {
    const input: string[];
    const output: ({
        file: string;
        name: string;
        format: string;
        sourcemap: boolean;
    } | {
        file: string;
        format: string;
        sourcemap: boolean;
        name?: undefined;
    })[];
    const plugins: any[];
    const external: string[];
}
export default _default;
