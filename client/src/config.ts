import dotenv from "dotenv";

export class Config {
    private static instance: Config;
    private constructor() { }

    public static getInstance(): Config {
        if (!Config.instance) { 
            const envFound = dotenv.config();

            if (envFound.error) {
                throw new Error('no .env file found');
            }

            Config.instance = new Config();
        }

        return Config.instance;
    }


    public get(key: string): string {
        if (!process.env[key]) throw new Error(`${key} not found in process.env`);
        return process.env[key] as string;
    }
}