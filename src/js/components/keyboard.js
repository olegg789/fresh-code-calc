import React from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';
import {Button, ButtonGroup} from "@vkontakte/vkui";
import {
    Icon24ArrowTurnLeftOutline,
    Icon28ArrowLeftOutline,
    Icon28ArrowRightOutline,
    Icon28Backspace, Icon28Send
} from "@vkontakte/icons";

function Keyboard({ router, action, clear, deleteLast }) {
    return (
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
                    activeEffectDelay={100}
                    onClick={() => clear()}
                >
                    AC
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('%', '%')}
                >
                    %
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('7', '7')}
                >
                    7
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('8', '8')}
                >
                    8
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('9', '9')}
                >
                    9
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('÷', '/')}
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
                    activeEffectDelay={100}
                    onClick={() => action('x', 'x')}
                >
                    x
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('√', '√')}
                >
                    √
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('4', '4')}
                >
                    4
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('5', '5')}
                >
                    5
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('6', '6')}
                >
                    6
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('×', '*')}
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
                    activeEffectDelay={100}
                    onClick={() => action('²', '^2')}
                >
                    x²
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('/', '/')}
                >
                    x/y
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('1', '1')}
                >
                    1
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('2', '2')}
                >
                    2
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('3', '3')}
                >
                    3
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('-', '-')}
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
                    activeEffectDelay={100}
                    onClick={() => action('(', '(')}
                >
                    (
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action(')', ')')}
                >
                    )
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('0', '0')}
                >
                    0
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-number'
                    activeEffectDelay={100}
                    onClick={() => action('.', '.')}
                >
                    .
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('=', '=')}
                >
                    =
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-sign'
                    activeEffectDelay={100}
                    onClick={() => action('+', '+')}
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
                    activeEffectDelay={100}
                >
                    f∫
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-other'
                    activeEffectDelay={100}
                >
                    <Icon28ArrowLeftOutline/>
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-other'
                    activeEffectDelay={100}
                >
                    <Icon28ArrowRightOutline/>
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-other'
                    activeEffectDelay={100}
                >
                    <Icon24ArrowTurnLeftOutline/>
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-other'
                    activeEffectDelay={100}
                    onClick={() => deleteLast()}
                >
                    <Icon28Backspace/>
                </Button>
                <Button
                    size='l'
                    className='calc-button calc-button-send'
                    activeEffectDelay={100}
                >
                    <Icon28Send/>
                </Button>
            </ButtonGroup>
        </ButtonGroup>
    );
}

export default withRouter(Keyboard);