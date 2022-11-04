import React, { } from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
    PanelHeader,
    Tabs,
    TabsItem,
} from '@vkontakte/vkui'
import Calc from "./Calc";
import Photo from "./Photo";

function HomePanelBase({ router, storage, panel, setPanel }) {

    return (
        <>
            <PanelHeader
                separator={storage.isDesktop}
            >
                <Tabs>
                    <TabsItem
                        selected={panel === 'calc'}
                        onClick={() => setPanel('calc')}
                    >
                        Калькулятор
                    </TabsItem>
                    <TabsItem
                        selected={panel === 'photo'}
                        onClick={() => setPanel('photo')}
                    >
                        Сканировать
                    </TabsItem>
                </Tabs>
            </PanelHeader>

            {
                panel === 'calc' ?
                    <Calc/> :
                    <Photo/>
            }
        </>
    );
}

export default withRouter(HomePanelBase);