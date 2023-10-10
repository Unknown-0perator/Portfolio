export const convertObjToArray = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({
        key: key,
        value: value
    }))
}