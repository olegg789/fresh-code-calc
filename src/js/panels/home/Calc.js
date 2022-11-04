import React from "react";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";
import {
    FixedLayout,
    ButtonGroup, Button
} from "@vkontakte/vkui";
import {
    Icon24ArrowTurnLeftOutline,
    Icon28ArrowLeftOutline,
    Icon28ArrowRightOutline,
    Icon28Backspace,
    Icon28Send
} from "@vkontakte/icons";

function Calc({router}) {
    return (
        <>
            <FixedLayout
                vertical={'bottom'}
                style={{paddingBottom: 0}}
            >
                <ButtonGroup
                    className='calc-container'
                    mode='vertical'
                    gap='s'
                    align='center'
                    stretched
                >
                    <ButtonGroup
                        mode='horizontal'
                        gap='s'
                        stretched
                    >
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            AC
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            %
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            7
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            8
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            9
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            ÷
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        style={{marginTop: 10}}
                        mode='horizontal'
                        gap='s'
                        stretched
                    >
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            x
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            √
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            4
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            5
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            6
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            ×
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        style={{marginTop: 10}}
                        mode='horizontal'
                        gap='s'
                        stretched
                    >
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            x²
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            x/y
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            1
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            2
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            3
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            -
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        style={{marginTop: 10}}
                        mode='horizontal'
                        gap='s'
                        stretched
                    >
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            (
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            )
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            0
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-number'
                        >
                            .
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            =
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-sign'
                        >
                            +
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        style={{marginTop: 10}}
                        mode='horizontal'
                        gap='s'
                        stretched
                    >
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            f∫
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            <Icon28ArrowLeftOutline/>
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            <Icon28ArrowRightOutline/>
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            <Icon24ArrowTurnLeftOutline/>
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-other'
                        >
                            <Icon28Backspace/>
                        </Button>
                        <Button
                            size='l'
                            className='calc-button calc-button-send'
                        >
                            <Icon28Send/>
                        </Button>
                    </ButtonGroup>
                </ButtonGroup>
            </FixedLayout>
        </>
    )
}

export default withRouter(Calc);