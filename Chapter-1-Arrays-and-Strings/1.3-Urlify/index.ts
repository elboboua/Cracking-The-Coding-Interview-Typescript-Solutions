// ES2021 and up has this function
// export function urlifyES2021(str: string): string {
//     return str.replaceAll(" ", "%20")
// }

// Available in currect string object
export function urlifyReplace(str: string): string {
    while (str.includes(" ")) {
        str = str.replace(" ", "%20");
    }
    return str;
}

// Using Array
export function urlifyArray(str: string): string {
    return str.split(" ").join("%20");
}
