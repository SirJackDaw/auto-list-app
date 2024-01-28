export function generateQuery(dto: any): string {
    for (const key in dto) {
        if (dto[key] === undefined) delete dto[key]
    }
    const query = Object.keys(dto).map((key) => `${key}=${dto[key]}`).join('&')
    console.log(query)
    return query
}