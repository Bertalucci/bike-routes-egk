import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

/**
 * Управление сборкой путей к файлам
 */
export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],             // допустимые расширения файлов
        preferAbsolute: true,                           // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],   // перечисление модулей
        mainFiles: ['index'],                           // управляющим файлом каждого модуля явл файл index
        alias: {}
    }
}