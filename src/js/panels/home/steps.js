import React from "react";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
    PanelHeader,
    PanelHeaderBack,
    Div,
    SimpleCell,
    IconButton,
    Counter
} from "@vkontakte/vkui";
import {useSelector} from "react-redux";
import {Icon28ChevronDownOutline} from "@vkontakte/icons";

function Steps({ router }) {
    const mainStorage = useSelector((state) => state.main);

    return (
        <>
            <PanelHeader
                separator={mainStorage.isDesktop}
                before={<PanelHeaderBack onClick={() => router.toBack()} />}
            >
                Шаги решения
            </PanelHeader>
            <Div>
                {mainStorage.steps.map((step, index) => {
                    return (
                        <SimpleCell
                            before={<Counter>{index + 1}</Counter>}
                            after={<IconButton><Icon28ChevronDownOutline/></IconButton>}
                        >
                            {step.actionName}
                        </SimpleCell>
                    )
                })}
            </Div>
        </>
    )
}

export default withRouter(Steps);