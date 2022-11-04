import React from "react";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";
import {
    Placeholder
} from "@vkontakte/vkui";

function Photo({router}) {
    return (
        <>
            <Placeholder>Здесь фото</Placeholder>
        </>
    )
}

export default withRouter(Photo);