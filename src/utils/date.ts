export function formatDateString(date: string | Date): string {
    const date_obj = new Date(date);
    const current_date_obj = new Date();
    const todayDate = current_date_obj.getDate();

    if (todayDate === date_obj.getDate()) {

        return "today " + date_obj.toLocaleTimeString().slice(undefined, 5);

    } else if (todayDate - 1 === date_obj.getDate()) {

        return "yesterday " + date_obj.toLocaleTimeString().slice(undefined, 5);

    } else {

        return date_obj.toLocaleDateString() + " " + date_obj.toLocaleTimeString().slice(undefined, 5);

    }
}