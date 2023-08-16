import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        if (navigator.onLine === true) setOnlineStatus(true);
        else setOnlineStatus(false);
    }, []);
    return onlineStatus;
};
export default useOnlineStatus;
