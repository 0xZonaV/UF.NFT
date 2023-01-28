// @ts-ignore
import {SpinnerOverlay, SpinnerContainer} from './Spinner.style';
import {FC} from "react";

const Spinner: FC = () =>
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>

export default Spinner;