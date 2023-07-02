/**
 * Тип для описания опций сборки
 */

export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    /** Путь до точки входа */
    entry: string;
    /** Путь до папки сборки входа */
    build: string;
    /** Путь до файла index.html */
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}