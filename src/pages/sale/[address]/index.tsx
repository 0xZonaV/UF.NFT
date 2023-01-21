import {NextPage} from "next";

type Props = {
    address?: string | string[];
}

const SaleSite: NextPage<Props> = ({address}) => {
    return (
        <div>
            SaleSIT
            {address}
        </div>
    )
}

SaleSite.getInitialProps = async ({query}): Promise<Props> => {
    const {address} = query;
    return {address};
}

export default SaleSite;