import {useHistory} from "react-router-dom";

const useCustomNavigate = (historyTo = '/') => {
    const history = useHistory();
    const goBack = () => history.goBack();
    const moveForward = () => history.goForward();
    const navigateToPage = () => history.push(historyTo);

    return {
        goBack,
        moveForward,
        navigateToPage
    };
}

export default useCustomNavigate;