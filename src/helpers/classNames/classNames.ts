/**
 * Тип для объекта с модами
 */
type Mods = Record<string, boolean | string>

/**
 * Функция для гибкого применения css-классов
 * @param className главный класс
 * @param mods объект с модами (ключ - название класс, значение - boolean флаг), т.е. классы по условию
 * если true - класс попадает в итоговую строку классов, false - нет
 * @param additional массив дополнительных классов
 * @return итоговая строка классов
 */
export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        className,
        ...additional.filter(Boolean),  // могут прилетать undefined, поэтому фильтруем по boolean
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}