import { IEvent } from "../../models/Event";

export function useCardController(event: IEvent) {
    const currentDateTime = new Date();
    const eventDateTime = new Date(`${event?.date}T${event?.time}`);
    const hasEventPassed = eventDateTime < currentDateTime;

    const formattedDate = `${eventDateTime?.getDate().toString().padStart(2, '0')}/${(eventDateTime?.getMonth() + 1).toString().padStart(2, '0')}/${eventDateTime?.getFullYear()}`
    const formattedTime = `${eventDateTime?.getHours()}:${eventDateTime?.getMinutes().toString().padStart(2, '0')}`;

    const handleNavigateFromMoreInformation = () => window.open(event?.moreInfoLink as string, '_blank');

    return {
        hasEventPassed,
        formattedDate,
        formattedTime,
        handleNavigateFromMoreInformation
    }
};