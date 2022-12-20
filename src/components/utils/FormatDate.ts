const formatDate = (date: string): string => {
    const DateFormatted = new Date(date)
    const day = DateFormatted.getDate() > 9 
    ? DateFormatted.getDate() : `0${DateFormatted.getDate()}`;

    const month = DateFormatted.getMonth() + 1 > 9 
    ? DateFormatted.getMonth() + 1 : `0${DateFormatted.getMonth() + 1}`;

    const year = DateFormatted.getFullYear();
    return `${day}/${month}/${year}`
}
export default formatDate 